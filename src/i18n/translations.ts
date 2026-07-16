import en from '../messages/en.json';
import ur from '../messages/ur.json';
import ar from '../messages/ar.json';
import es from '../messages/es.json';

export const translations = {
  en,
  ur,
  ar,
  es,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;
