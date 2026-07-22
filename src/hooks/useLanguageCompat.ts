'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

// Compatibility wrapper to maintain existing API
export function useLanguage() {
  const translations = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const t = (key: string) => {
    try {
      return translations(key);
    } catch {
      return key;
    }
  };

  const setLocale = (newLocale: string) => {
    // Store in localStorage for persistence
    localStorage.setItem('language', newLocale);

    // Update document direction
    if (newLocale === 'ur' || newLocale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', newLocale);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', newLocale);
    }

    // Navigate to new locale
    const currentPath = pathname.replace(/^\/(en|ur|ar|es)/, '');
    router.push(`/${newLocale}${currentPath}`);
    router.refresh();
  };

  return { t, locale, setLocale };
}
