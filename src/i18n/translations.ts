import en from '../../public/translations/en.json';
import ur from '../../public/translations/ur.json';
import ar from '../../public/translations/ar.json';
import es from '../../public/translations/es.json';

export const translations = {
  en,
  ur,
  ar,
  es,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;
