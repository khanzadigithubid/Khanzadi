'use client';

import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useClickOutside } from '../hooks/useClickOutside';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use custom hook to close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const changeLanguage = (langCode: string) => {
    setLocale(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-md hover:shadow-lg"
        aria-label="Change language"
      >
        <span className="text-2xl">{currentLanguage.flag}</span>
        <span className="text-white text-sm font-semibold hidden sm:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center space-x-4 px-5 py-3.5 hover:bg-gray-700 transition-colors duration-200 ${
                locale === lang.code ? 'bg-gray-750' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex-1 text-left">
                <p className="text-white text-base font-medium">{lang.name}</p>
              </div>
              {locale === lang.code && (
                <span className="text-green-400 text-sm font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
