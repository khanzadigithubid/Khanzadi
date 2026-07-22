import { en } from './en';
import { ur } from './ur';
import { ar } from './ar';
import { es } from './es';

export const translations = {
  en,
  ur,
  ar,
  es,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;
