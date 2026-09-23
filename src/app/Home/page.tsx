"use client";

import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaLaptopCode, FaRobot, FaAward } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-100 body-font min-h-svh flex items-center">
        {/* Ambient aurora */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="animate-aurora-a absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-indigo-600/25 blur-[120px]" />
          <div className="animate-aurora-b absolute -top-24 right-[8%] h-[460px] w-[460px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
          <div className="animate-aurora-c absolute top-1/3 left-1/2 h-[420px] w-[420px] rounded-full bg-indigo-400/15 blur-[130px]" />
        </div>
        {/* Blueprint grid */}
        <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0 z-0" />
        {/* Film grain */}
        <div aria-hidden className="noise-overlay pointer-events-none absolute inset-0 z-0 opacity-40" />

        <div className="relative z-10 container mx-auto flex px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 md:flex-row flex-col items-center max-w-7xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="space-y-8">
              {/* Status pill */}
              <div data-aos="fade-up" data-aos-duration="500">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-300">
                    {t('home.available')}
                  </span>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="80">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-semibold text-white leading-[1.08] tracking-tight">
                  <span className="block">{t('home.greeting')}</span>
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                  <span className="hidden sm:block h-px w-10 bg-gradient-to-r from-indigo-400/70 to-transparent"></span>
                  <span className="text-lg sm:text-2xl font-semibold text-gradient">{t('home.title')}</span>
                  <span className="px-3 py-1 bg-purple-500/15 border border-purple-400/30 text-purple-200 keep-white rounded-full text-xs font-semibold tracking-wide">
                    ADC PART 2
                  </span>
                </div>
              </div>

              {/* Professional Description */}
              <div className="space-y-4 sm:space-y-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="160">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300/90 max-w-2xl">
                  {t('home.description')}
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center">
                    <FaAward className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
                    <span>{t('home.certified')}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCode className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
                    <span>{t('home.expert')}</span>
                  </div>
                </div>
              </div>

              {/* Expertise Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="240">
                {[
                  { icon: FaCode, label: t('home.webDev'), sub: t('home.webDevSub'), tint: 'from-indigo-500/30 to-purple-500/20 text-indigo-200' },
                  { icon: FaLaptopCode, label: t('home.nextjs'), sub: t('home.nextjsSub'), tint: 'from-purple-500/30 to-fuchsia-500/20 text-purple-200' },
                  { icon: FaRobot, label: t('home.aiEng'), sub: t('home.aiEngSub'), tint: 'from-fuchsia-500/30 to-pink-500/20 text-fuchsia-200' },
                ].map((c, i) => (
                  <div key={i} className="group flex items-center gap-3.5 p-4 rounded-2xl card-glass card-lift border-white/10 hover:border-purple-500/45">
                    <div className={`flex items-center justify-center shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${c.tint} transition-transform duration-300 group-hover:scale-110`}>
                      <c.icon className="text-lg" />
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-semibold text-gray-100 block">{c.label}</span>
                      <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA + Social Links */}
              <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="320">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                  <MagneticButton>
                    <Link
                      href="/Contact"
                      className="group inline-flex items-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white keep-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/45 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      <span className="mr-2.5">{t('home.cta')}</span>
                      <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </MagneticButton>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 md:space-x-5 pt-1 sm:pt-2">
                  <a
                    href="https://github.com/khanzadigithubid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="group inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <FaGithub size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="group inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 text-white keep-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <FaLinkedin size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="md:w-1/2 w-full flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="700">
            <div className="relative group w-full max-w-[300px] sm:max-w-[380px]">
              {/* Conic ring */}
              <div aria-hidden className="profile-ring absolute -inset-3 rounded-[2rem] opacity-60 blur-lg" />
              {/* Gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative animate-float">
                <Image
                  src="/About.jpg"
                  alt="Professional portrait"
                  width={600}
                  height={600}
                  className="rounded-[1.75rem] shadow-2xl w-full h-auto border border-gray-700/70"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -left-3 sm:-left-6 bottom-10 bg-gray-900/85 border border-gray-700 shadow-xl rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                <span className="pulse-dot h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-gray-200 whitespace-nowrap">{t('home.certified')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black border-y border-white/10" data-aos="fade-up" data-aos-duration="500">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 md:divide-x md:divide-white/10 text-center">
            <div className="space-y-1.5">
              <div className="text-3xl sm:text-5xl font-bold text-gradient">2+</div>
              <div className="text-xs sm:text-sm text-gray-400">{t('home.stats.experience')}</div>
            </div>
            <div className="space-y-1.5">
              <div className="text-3xl sm:text-5xl font-bold text-gradient">3-4</div>
              <div className="text-xs sm:text-sm text-gray-400">{t('home.stats.shopify')}</div>
            </div>
            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-bold text-gradient">80%+</div>
              <div className="text-xs sm:text-sm text-gray-400">{t('home.stats.automation')}</div>
            </div>
            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-bold text-gradient">40%</div>
              <div className="text-xs sm:text-sm text-gray-400">{t('home.stats.growth')}</div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.18,
      y: (e.clientY - (r.top + r.height / 2)) * 0.18,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className="transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
}

export default Home;