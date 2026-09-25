'use client';

import { ToastContainer } from 'react-toastify';
import { useLanguage } from '../../context/LanguageContext';

export default function ToastWrapper() {
  const { locale } = useLanguage();
  const isRTL = locale === 'ar' || locale === 'ur';

  return (
    <ToastContainer
      position={isRTL ? 'top-left' : 'top-right'}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={isRTL}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}
