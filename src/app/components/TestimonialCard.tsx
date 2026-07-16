'use client';

import { useState } from 'react';
import { FaQuoteLeft, FaLinkedin, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  linkedinUrl?: string;
  date: string;
  avatarUrl?: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  linkedinUrl,
  date,
  avatarUrl
}: TestimonialCardProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = content.length > 300;
  const displayContent = shouldTruncate && !isExpanded
    ? content.slice(0, 300) + '...'
    : content;

  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="group relative bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-600 hover:-translate-y-1">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/10 group-hover:text-white/20 transition-colors duration-300">
        <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Testimonial Content */}
      <div className="relative z-10 mb-6">
        <p className="text-base sm:text-lg text-white leading-relaxed italic">
          &ldquo;{displayContent}&rdquo;
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                <span>{t('testimonials.readLess')}</span>
                <FaChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                <span>{t('testimonials.readMore')}</span>
                <FaChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="w-16 h-0.5 bg-white/20 mb-6 group-hover:w-24 transition-all duration-300" />

      {/* Author Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            {avatarUrl ? (
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-600 overflow-hidden">
                <Image
                  src={avatarUrl}
                  alt={`${name}'s avatar`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-600 bg-gray-700 flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {getInitials(name)}
                </span>
              </div>
            )}
          </div>

          {/* Name and Role */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 break-words">
              {name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/70 line-clamp-2 break-words">
              {role}
            </p>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            </p>
          </div>
        </div>

        {/* LinkedIn Button */}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gray-700 hover:bg-white flex items-center justify-center transition-all duration-300 group/linkedin"
            aria-label={`View ${name}'s LinkedIn profile`}
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover/linkedin:text-black transition-colors duration-300" />
          </a>
        )}
      </div>
    </div>
  );
}
