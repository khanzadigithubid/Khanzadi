'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '../i18n/translations';

type Translations = {
  [key: string]: any;
};

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(translations.en);

  useEffect(() => {
    const savedLang = (localStorage.getItem('language') || 'en') as Locale;
    setLocaleState(savedLang);
    setCurrentTranslations(translations[savedLang]);

    // Debug logging
    console.log('🌐 Translation Debug:', {
      locale: savedLang,
      hasTranslations: !!translations[savedLang],
      sampleKey: translations[savedLang]?.nav?.home,
      greeting: translations[savedLang]?.home?.greeting
    });

    // Set document direction
    if (savedLang === 'ur' || savedLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', savedLang);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', savedLang);
    }
  }, []);

  const setLocale = (newLocale: string) => {
    const validLocale = newLocale as Locale;
    setLocaleState(validLocale);
    localStorage.setItem('language', validLocale);
    setCurrentTranslations(translations[validLocale]);

    // Set document direction
    if (validLocale === 'ur' || validLocale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', validLocale);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', validLocale);
    }

    // Reload to apply changes
    window.location.reload();
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = currentTranslations;

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
