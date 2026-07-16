"use client";

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaCheckCircle, FaArrowRight, FaShoppingCart, FaBullhorn, FaPalette, FaStar, FaAward, FaRegLightbulb, FaRocket } from 'react-icons/fa';
import Link from "next/link";
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
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
    <>
      <Breadcrumbs />
      <section className="text-gray-300 body-font py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <FaRocket className="text-gray-500 text-sm" />
              <span className="text-sm font-medium tracking-wide">{t('services.professional')}</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Professional Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center space-x-2 sm:space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex-shrink-0">
              <FaStar className="text-blue-400 text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">{t('services.quality')}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{t('services.qualitySub')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg flex-shrink-0">
              <FaAward className="text-purple-400 text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">{t('services.certified')}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{t('services.certifiedSub')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-green-900 to-green-800 rounded-lg flex-shrink-0">
              <FaRegLightbulb className="text-green-400 text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">{t('services.innovative')}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{t('services.innovativeSub')}</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Web Development Card */}
          <div className="group bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500" data-aos="fade-up" data-aos-duration="500">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-4 sm:mb-4 sm:mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaCode size={28} className="sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-3 sm:space-y-5">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {t('services.webDev')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-sm sm:text-base text-center">
                {t('services.webDevDesc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.webDevFeature1')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.webDevFeature2')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.webDevFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Web Design Card */}
          <div className="group bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-pink-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white mb-4 sm:mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaPaintBrush size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-5">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {t('services.webDesign')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-base text-center">
                {t('services.webDesignDesc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.webDesignFeature1')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.webDesignFeature2')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-pink-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.webDesignFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Web Design Card */}
          <div className="group bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-teal-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white mb-4 sm:mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaMobileAlt size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-5">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {t('services.responsive')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-base text-center">
                {t('services.responsiveDesc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.responsiveFeature1')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.responsiveFeature2')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-teal-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.responsiveFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shopify Development Card */}
          <div className="group bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-4 sm:mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaShoppingCart size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-5">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {t('services.shopify')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-base text-center">
                {t('services.shopifyDesc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.shopifyFeature1')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.shopifyFeature2')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.shopifyFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="group bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white mb-4 sm:mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaBullhorn size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-5">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {t('services.marketing')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-base text-center">
                {t('services.marketingDesc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.marketingFeature1')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.marketingFeature2')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-purple-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.marketingFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Canva Design Card */}
          <div className="group bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-4 sm:mb-6 shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <FaPalette size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-3 sm:space-y-5">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
                {t('services.canva')}
              </h2>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-base text-center">
                {t('services.canvaDesc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.canvaFeature1')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.canvaFeature2')}</span>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0 mt-0.5 text-xs sm:text-sm" />
                  <span>{t('services.canvaFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <Link href="../Contact">
            <button className="group inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-gradient-to-r from-white to-gray-200 text-black text-xs sm:text-sm md:text-base rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {t('services.getStarted')}
              <FaArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}


