'use client';

import { useEffect } from 'react';
import { FaQuoteLeft, FaUsers } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';
import { useLanguage } from '../../context/LanguageContext';
import 'aos/dist/aos.css';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Dynamic import AOS only when needed (code-splitting benefit)
      import('aos').then((AOS) => {
        AOS.init({
          duration: 500,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic'
        });
      });
    }
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center justify-center space-x-2 text-white/70">
              <FaUsers className="text-white/50 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
                {t('testimonials.subtitle')}
              </span>
            </div>
            <div className="w-20 sm:w-24 h-1 bg-white/20 mx-auto mt-2"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length > 0 ? (
          testimonials.length === 1 ? (
            // Single testimonial - centered
            <div className="max-w-2xl mx-auto">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <TestimonialCard
                  name={testimonials[0].name}
                  role={testimonials[0].role}
                  content={testimonials[0].content}
                  linkedinUrl={testimonials[0].linkedinUrl}
                  date={testimonials[0].date}
                  avatarUrl={testimonials[0].avatarUrl}
                />
              </div>
            </div>
          ) : (
            // Multiple testimonials - grid layout
            <div className={`grid grid-cols-1 ${testimonials.length >= 2 ? 'md:grid-cols-2' : ''} ${testimonials.length >= 3 ? 'lg:grid-cols-3' : ''} gap-4 sm:gap-6 md:gap-8`}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={index * 50}
                >
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    linkedinUrl={testimonial.linkedinUrl}
                    date={testimonial.date}
                    avatarUrl={testimonial.avatarUrl}
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 mb-4">
              <FaQuoteLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white/30" />
            </div>
            <p className="text-white/60 text-base sm:text-lg">
              No testimonials available yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
