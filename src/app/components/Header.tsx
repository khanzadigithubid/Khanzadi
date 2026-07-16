'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Theme Toggle Button Component
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-md hover:shadow-lg group"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <FaSun
          className={`absolute inset-0 text-yellow-400 transition-all duration-500 ${
            theme === 'dark'
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        {/* Moon Icon */}
        <FaMoon
          className={`absolute inset-0 text-blue-300 transition-all duration-500 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}

// Theme Toggle Button Mobile Component
function ThemeToggleMobile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg group"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-7 h-7">
        {/* Sun Icon */}
        <FaSun
          className={`absolute inset-0 text-yellow-400 transition-all duration-500 ${
            theme === 'dark'
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        {/* Moon Icon */}
        <FaMoon
          className={`absolute inset-0 text-blue-300 transition-all duration-500 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}

// Dynamic imports with no SSR
const DynamicThemeToggle = dynamic(() => Promise.resolve(ThemeToggle), { ssr: false });
const DynamicThemeToggleMobile = dynamic(() => Promise.resolve(ThemeToggleMobile), { ssr: false });

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.about'), path: "/About" },
    { label: t('nav.skills'), path: "/Skills" },
    { label: t('nav.projects'), path: "/Projects" },
    { label: t('nav.services'), path: "/Services" },
    { label: t('nav.contact'), path: "/Contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b-2 border-white/20'
          : 'bg-black border-b-2 border-white/20'
      }`}
    >
      {/* Skip to Main Content Link - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-xl focus:font-semibold focus:outline-none focus:ring-4 focus:ring-sky-500"
      >
        {t('accessibility.skipToMain')}
      </a>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-2 lg:space-x-4 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="group relative px-5 py-2.5 text-base lg:text-lg font-semibold text-white hover:text-gray-300 transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Language Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <DynamicThemeToggle />

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-6 p-3 text-white hover:bg-white/5 transition-all duration-300 focus:outline-none rounded-xl"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-7 h-7">
              <span
                className={`absolute block h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-2'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-7 bg-white top-3.5 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-20 bg-black/98 backdrop-blur-md z-[45] transition-all duration-400 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
          onClick={closeMobileMenu}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.path}
                className="group relative text-2xl sm:text-3xl font-bold text-white hover:text-gray-300 transition-all duration-300"
                onClick={closeMobileMenu}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)'
                }}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}

            {/* Theme Toggle & Language Switcher - Mobile */}
            <div className="pt-8 flex flex-col items-center space-y-4">
              {/* Theme Toggle Button - Mobile */}
              <DynamicThemeToggleMobile />

              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 