'use client';

import { useState, useEffect } from 'react';

type TranslationKeys = {
  [key: string]: string | TranslationKeys;
};

export function useTranslation() {
  const [translations, setTranslations] = useState<TranslationKeys>({});
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Get language from localStorage or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en';
    setLocale(savedLang);

    // Load translation file
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/translations/${savedLang}.json`);
        if (response.ok) {
          const data = await response.json();
          setTranslations(data);
        } else {
          // Fallback to English
          const fallback = await fetch('/translations/en.json');
          const data = await fallback.json();
          setTranslations(data);
        }
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: string | TranslationKeys = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, locale };
}
