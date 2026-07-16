'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const phoneNumber = '923708625821'; // +92 370 862 5821
  const message = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t('whatsapp.aria')}
    >
      <div className="relative">
        {/* Animated pulse ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

        {/* Button */}
        <button className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
          <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            {t('whatsapp.tooltip')}
          </div>
        </div>
      </div>
    </a>
  );
}
