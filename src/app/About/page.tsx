"use client";

import Image from "next/image";
import { FaGraduationCap, FaCode, FaLightbulb, FaAward, FaCheckCircle, FaStar, FaRegClock, FaDownload } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <Breadcrumbs />
      <section className="text-gray-300 body-font bg-gradient-to-b from-black to-gray-900 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <FaRegClock className="text-gray-500 text-sm" />
                <span className="text-sm font-medium tracking-wide">{t('about.profile')}</span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-2"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-20 sm:mb-24">
            {/* Profile Image */}
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/About.jpg"
                  alt="Professional portrait"
                  height={320}
                  width={320}
                  className="rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:shadow-3xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] object-cover border-4 border-gray-700"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                    {t('about.role')}
                  </h2>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                    {t('about.intro')}
                  </p>
                </div>

                {/* Professional Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
                  <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:bg-gray-750 transition-colors duration-300">
                    <FaAward className="text-gray-400 text-xs sm:text-sm" />
                    <span>{t('about.certified')}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:bg-gray-750 transition-colors duration-300">
                    <FaStar className="text-gray-400 text-xs sm:text-sm" />
                    <span>{t('about.expert')}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:bg-gray-750 transition-colors duration-300">
                    <FaCheckCircle className="text-gray-400 text-xs sm:text-sm" />
                    <span>ADC PAT 2</span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                  <span className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:bg-gray-750 transition-colors duration-300">{t('about.frontendDev')}</span>
                  <span className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:bg-gray-750 transition-colors duration-300">Next.js</span>
                  <span className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 bg-gray-800 text-gray-200 rounded-full text-xs sm:text-sm font-semibold border border-gray-700 hover:bg-gray-750 transition-colors duration-300">{t('about.aiEng')}</span>
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
                  <a
                    href="/Khanzadi_Resume_MASTER (3).pdf"
                    download="Khanzadi_Resume_MASTER.pdf"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-black rounded-lg text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaDownload className="text-base sm:text-lg" />
                    <span>{t('about.downloadResume')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Key Areas Section */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700" data-aos="fade-up" data-aos-duration="500">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-700 rounded-lg mr-3 sm:mr-4">
                  <FaCode className="text-gray-200 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{t('about.techExpertise')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {t('about.techDesc')}
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700" data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-700 rounded-lg mr-3 sm:mr-4">
                  <FaGraduationCap className="text-gray-200 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{t('about.education')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {t('about.educationDesc')}
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700" data-aos="fade-up" data-aos-duration="500">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-gray-700 rounded-lg mr-3 sm:mr-4">
                <FaLightbulb className="text-gray-200 text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{t('about.goals')}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-white">{t('about.shortTerm')}</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>{t('about.goal1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>{t('about.goal2')}</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-white">{t('about.longTerm')}</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>{t('about.goal3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>{t('about.goal4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
