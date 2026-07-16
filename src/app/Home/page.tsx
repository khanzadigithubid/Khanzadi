"use client";

import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaLaptopCode, FaRobot, FaAward, FaRegClock } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from '../components/TestimonialsSection';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-b from-black to-gray-900 text-gray-100 body-font min-h-screen flex items-center">
        <div className="container mx-auto flex px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 md:flex-row flex-col items-center max-w-7xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="space-y-8">
              {/* Professional Header */}
              <div className="space-y-4">
                <div className="inline-block">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <FaRegClock className="text-gray-500 text-sm" />
                    <span className="text-sm font-medium tracking-wide">{t('home.available')}</span>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mt-2"></div>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                  <span className="block mb-3 text-gray-200">{t('home.greeting')}</span>
                </h1>
                <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
                  <span className="h-1 w-12 bg-gray-600"></span>
                  <span className="text-lg sm:text-xl font-medium">{t('home.title')}</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium">ADC PAT 2</span>
                </div>
              </div>

              {/* Professional Description */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl"
                   data-aos="fade-up"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="500">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="group flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:bg-gray-750 transition-all duration-300 border border-gray-700">
                  <div className="p-1.5 sm:p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                    <FaCode className="text-gray-200 text-base sm:text-lg" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 block">{t('home.webDev')}</span>
                    <p className="text-[10px] sm:text-xs text-gray-400">{t('home.webDevSub')}</p>
                  </div>
                </div>
                <div className="group flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:bg-gray-750 transition-all duration-300 border border-gray-700">
                  <div className="p-1.5 sm:p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                    <FaLaptopCode className="text-gray-200 text-base sm:text-lg" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 block">{t('home.nextjs')}</span>
                    <p className="text-[10px] sm:text-xs text-gray-400">{t('home.nextjsSub')}</p>
                  </div>
                </div>
                <div className="group flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:bg-gray-750 transition-all duration-300 border border-gray-700">
                  <div className="p-1.5 sm:p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                    <FaRobot className="text-gray-200 text-base sm:text-lg" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 block">{t('home.aiEng')}</span>
                    <p className="text-[10px] sm:text-xs text-gray-400">{t('home.aiEngSub')}</p>
                  </div>
                </div>
              </div>

              {/* Professional CTA Section */}
              <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                  <Link
                    href="/Contact"
                    className="group inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base font-semibold"
                  >
                    <span className="mr-2">{t('home.cta')}</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 md:space-x-5 pt-1 sm:pt-2">
                  <Link
                    href="https://github.com/khanzadigithubid/"
                    className="group"
                    aria-label="GitHub Profile"
                  >
                    <button className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg">
                      <FaGithub size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
                    className="group"
                    aria-label="LinkedIn Profile"
                  >
                    <button className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                      <FaLinkedin size={20} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-left" data-aos-duration="500">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/About.jpg"
                  alt="Professional portrait"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl transition-all duration-500 ease-in-out hover:shadow-3xl w-full h-auto border-2 border-gray-700"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}

export default Home;
