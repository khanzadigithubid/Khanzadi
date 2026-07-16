'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Translations = Record<string, any>;

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState('en');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    loadTranslations(savedLang);
  }, []);

  const loadTranslations = async (lang: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/translations/${lang}.json`);
      console.log('🌐 Fetch response:', response.status, response.ok);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Translations loaded:', Object.keys(data).length, 'root keys');
        console.log('📝 Sample translation:', data.nav?.home, data.home?.greeting);

        setTranslations(data);
        setLocaleState(lang);

        // Set document direction
        if (lang === 'ur' || lang === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
          document.documentElement.setAttribute('lang', lang);
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
          document.documentElement.setAttribute('lang', lang);
        }
      } else {
        console.error('❌ Failed to fetch translations:', response.status);
      }
    } catch (error) {
      console.error('❌ Translation loading error:', error);
    } finally {
      setIsLoading(false);
      console.log('✅ Translation loading complete');
    }
  };

  const setLocale = (newLocale: string) => {
    localStorage.setItem('language', newLocale);
    loadTranslations(newLocale);
    window.location.reload();
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

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
    <LanguageContext.Provider value={{ locale, setLocale, t, isLoading }}>
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
