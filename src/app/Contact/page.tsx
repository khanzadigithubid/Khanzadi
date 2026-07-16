"use client"

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from '../components/Breadcrumbs';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const emailAddress = "khanzadiwazirali9@gmail.com";

  const notify = () =>
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const showErrorWithFallback = () => {
    toast.error(
      <div>
        <p>Failed to send message through the form.</p>
        <a
          href={`mailto:${emailAddress}`}
          className="text-sky-500 hover:text-sky-600 underline font-medium mt-2 inline-block"
        >
          Click here to email directly
        </a>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Client-side validation
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      toast.error(t('contact.validationNameMin'));
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t('contact.validationEmail'));
      return;
    }

    if (!phone || phone.length < 10) {
      setPhoneError(t('contact.validationPhone'));
      toast.error(t('contact.validationPhone'));
      return;
    }

    if (!message || message.trim().length < 10) {
      toast.error(t('contact.validationMessageMin'));
      return;
    }

    setIsSubmitting(true);

    // Get API key from environment variable
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!apiKey) {
      toast.error(t('contact.configError'));
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", apiKey);
    formData.append("phone", phone);

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.success) {
        notify();
        setFormStatus('success');
        setFormMessage('Message sent successfully! I\'ll get back to you soon.');
        event.currentTarget.reset();
        setPhone('');
        setPhoneError('');

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        showErrorWithFallback();
        setFormStatus('error');
        setFormMessage('Failed to send message. Please try the email link below or try again later.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showErrorWithFallback();
      setFormStatus('error');
      setFormMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Breadcrumbs />
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <FaEnvelope className="text-gray-500 text-sm" />
              <span className="text-sm font-medium tracking-wide">{t('contact.getInTouch')}</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6">{t('contact.sendMessage')}</h2>

            {/* Inline Success Message */}
            {formStatus === 'success' && (
              <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-green-900/30 border-l-4 border-green-500 rounded-lg animate-slide-down">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-green-300 mb-1">{t('contact.success')}</h3>
                    <p className="text-xs sm:text-sm text-green-200">{formMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Inline Error Message */}
            {formStatus === 'error' && (
              <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-red-900/30 border-l-4 border-red-500 rounded-lg animate-slide-down">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <FaExclamationCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-red-300 mb-1">{t('contact.error')}</h3>
                    <p className="text-xs sm:text-sm text-red-200">{formMessage}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-300">{t('contact.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-600 bg-gray-700 text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-900 transition-colors duration-200"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-300">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-600 bg-gray-700 text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-900 transition-colors duration-200"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-300">{t('contact.phone')}</label>
                <div className="phone-input-container">
                  <PhoneInput
                    country={'pk'}
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      setPhoneError('');
                    }}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      id: 'phone'
                    }}
                    containerClass="phone-input-wrapper"
                    inputClass={`phone-input ${phoneError ? 'phone-input-error' : ''}`}
                    buttonClass="phone-button"
                    dropdownClass="phone-dropdown"
                    searchClass="phone-search"
                    enableSearch={true}
                    searchPlaceholder="Search country"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                  {phoneError && (
                    <p className="mt-1 text-xs text-red-400">{phoneError}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-300">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 border-gray-600 bg-gray-700 text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-900 transition-colors duration-200"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:from-sky-400 hover:to-sky-500'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-1.5 sm:mr-2 w-4 h-4" />
                    {t('contact.sending')}
                  </>
                ) : (
                  t('contact.sendButton')
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8" data-aos="fade-left">
            {/* Map */}
            <div className="bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.790343352196!2d67.0282!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0a0a0a0a0a%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDEnNDEuNSJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-t-lg sm:rounded-t-xl"
                title="Karachi Location"
              />
            </div>

            {/* Contact Details */}
            <div className="bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6">{t('contact.contactInfo')}</h2>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-gray-700 rounded-lg flex-shrink-0">
                    <FaEnvelope className="text-sky-400 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-400">{t('contact.email')}</p>
                    <a
                      href="mailto:khanzadiwazirali9@gmail.com"
                      className="text-xs sm:text-sm md:text-base text-white hover:text-sky-400 transition-colors duration-200 break-all"
                    >
                      khanzadiwazirali9@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-gray-700 rounded-lg flex-shrink-0">
                    <FaMapMarkerAlt className="text-sky-400 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-400">{t('contact.location')}</p>
                    <p className="text-xs sm:text-sm md:text-base text-white">{t('contact.city')}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5 sm:mt-6 md:mt-8 pt-5 sm:pt-6 md:pt-8 border-t border-gray-700">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4">{t('contact.connect')}</h3>
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
                    className="p-2 sm:p-2.5 md:p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-gray-200 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </a>
                  <a
                    href="https://github.com/khanzadigithubid/"
                    className="p-2 sm:p-2.5 md:p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FaGithub className="text-gray-200 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </a>
                  <a
                    href="https://x.com/Khanzadi0099"
                    className="p-2 sm:p-2.5 md:p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-gray-200 w-4 h-4 sm:w-5 sm:h-5 md:text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
    </>
  );
}


