'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
    link: string;
  }>;
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoaded(true);
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
      setIsLoaded(false);
      previouslyFocusedRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onNavigate('prev');
          break;
        case 'ArrowRight':
          onNavigate('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300 overscroll-contain ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.title}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
        aria-label="Close lightbox"
      >
        <FaTimes className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="absolute left-4 z-[110] p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-4 z-[110] p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
            aria-label="Next image"
          >
            <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </>
      )}

      {/* Main Content */}
      <div
        className="relative max-w-7xl w-full mx-4 sm:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        {/* Info Section */}
        <div className="mt-4 sm:mt-6 bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {currentImage.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {currentImage.description}
              </p>

              {/* Counter */}
              {images.length > 1 && (
                <p className="mt-3 text-xs sm:text-sm text-gray-400">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 flex-shrink-0">
              <a
                href={currentImage.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open project in new tab"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={currentImage.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View project on GitHub"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
