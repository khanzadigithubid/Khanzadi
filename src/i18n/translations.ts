import en from '../messages/en.json' assert { type: 'json' };
import ur from '../messages/ur.json' assert { type: 'json' };
import ar from '../messages/ar.json' assert { type: 'json' };
import es from '../messages/es.json' assert { type: 'json' };

export const translations = {
  en,
  ur,
  ar,
  es,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;
