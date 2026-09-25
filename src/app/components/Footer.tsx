'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t('nav.about'),    href: '/About' },
    { label: t('nav.skills'),   href: '/Skills' },
    { label: t('nav.projects'), href: '/Projects' },
    { label: t('nav.services'), href: '/Services' },
    { label: t('nav.contact'),  href: '/Contact' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 mt-0">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-105">
              KW
            </span>
            <span className="text-sm font-bold text-white tracking-tight">
              Khanzadi Wazir Ali
            </span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/khanzadigithubid/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://x.com/Khanzadi0099"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5 flex-wrap">
            <span>© {year} Khanzadi Wazir Ali.</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-pink-500 w-3 h-3" aria-hidden="true" /> using Next.js & Tailwind CSS.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
