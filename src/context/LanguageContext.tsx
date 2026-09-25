'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Translations = {
  [key: string]: string | Translations;
};

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState('en');
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLocaleState(savedLang);
    loadTranslations(savedLang);

    // Set document direction
    if (savedLang === 'ur' || savedLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', savedLang);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', savedLang);
    }
  }, []);

  const loadTranslations = async (lang: string) => {
    try {
      const response = await fetch(`/translations/${lang}.json`);
      if (response.ok) {
        const data = await response.json();
        setTranslations(data);
      }
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    localStorage.setItem('language', newLocale);
    loadTranslations(newLocale);

    // Set document direction
    if (newLocale === 'ur' || newLocale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', newLocale);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', newLocale);
    }

    // Reload to apply changes
    window.location.reload();
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: string | Translations = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
