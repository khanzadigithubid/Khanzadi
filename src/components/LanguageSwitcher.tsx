'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useClickOutside } from '../hooks/useClickOutside';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ur', name: 'اردو' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
];

const FlagIcon = ({ code }: { code: string }) => {
  const svgProps = {
    viewBox: '0 0 60 30',
    className: 'w-[22px] h-[15px] sm:w-6 sm:h-4 rounded-[3px] shrink-0',
    'aria-hidden': true as const,
  };

  switch (code) {
    case 'pk':
      return (
        <svg {...svgProps}>
          <rect width="60" height="30" fill="#01411C" />
          <rect width="18" height="30" fill="#ffffff" />
          <circle cx="41" cy="15" r="6" fill="#ffffff" />
          <circle cx="43.5" cy="15" r="5.8" fill="#01411C" />
          <path d="M47,11.5 L48.2,13.8 L50.8,13.9 L48.8,15.5 L49.6,18 L47,16.7 L44.4,18 L45.2,15.5 L43.2,13.9 L45.8,13.8 Z" fill="#ffffff" />
        </svg>
      );
    case 'sa':
      return (
        <svg {...svgProps}>
          <rect width="60" height="30" fill="#165d31" />
          <path d="M20,19 h22" stroke="#ffffff" strokeWidth="1.8" />
          <path d="M20,19 l-2.5,-3 l2.5,-3" stroke="#ffffff" strokeWidth="1.8" fill="none" />
          <path d="M22,17.5 l1,-2.5 l2.6,0.4" stroke="#ffffff" strokeWidth="1.4" fill="none" />
        </svg>
      );
    case 'es':
      return (
        <svg {...svgProps}>
          <rect width="60" height="30" fill="#AA151B" />
          <rect width="60" height="15" y="7.5" fill="#F1BF00" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
          <path d="M30,0 V30 M0,15 H60" stroke="#ffffff" strokeWidth="10" />
          <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
          <path d="M0,15 H60 M30,0 V30" stroke="#ffffff" strokeWidth="4" />
        </svg>
      );
  }
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use custom hook to close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const changeLanguage = (langCode: string) => {
    setLocale(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 shadow-md hover:shadow-lg"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <FlagIcon code={currentLanguage.code} />
        <span className="text-white text-sm font-semibold hidden sm:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-purple-500/20 rounded-xl shadow-2xl overflow-hidden z-50" role="listbox" aria-label="Languages">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              role="option"
              aria-selected={locale === lang.code}
              className={`w-full flex items-center space-x-4 px-5 py-3.5 hover:bg-gray-700 transition-colors duration-200 ${
                locale === lang.code ? 'bg-purple-500/20' : ''
              }`}
            >
              <FlagIcon code={lang.code} />
              <span className="flex-1 text-left text-white text-base font-medium">{lang.name}</span>
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