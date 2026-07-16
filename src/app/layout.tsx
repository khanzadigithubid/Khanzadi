import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from './context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import StructuredData from './components/StructuredData';
import ErrorBoundary from './components/ErrorBoundary';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: {
    default: 'Khanzadi Wazir Ali - Full Stack Developer & AI Engineer',
    template: '%s | Khanzadi Wazir Ali'
  },
  description: 'Professional portfolio of Khanzadi Wazir Ali - Full Stack Developer specializing in Next.js, React, TypeScript, and Cloud Applied AI Engineering. GIAIC Certified developer with expertise in modern web development.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Web Development', 'AI Engineering', 'Portfolio', 'Khanzadi Wazir Ali', 'GIAIC'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  creator: 'Khanzadi Wazir Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Khanzadi Wazir Ali - Full Stack Developer & AI Engineer',
    description: 'Professional portfolio showcasing web development projects, technical skills, and professional services.',
    siteName: 'Khanzadi Wazir Ali Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khanzadi Wazir Ali - Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khanzadi Wazir Ali - Full Stack Developer',
    description: 'Professional portfolio showcasing web development expertise',
    creator: '@Khanzadi0099',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <ErrorBoundary>
              <NextTopLoader
                color="#475569"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #475569,0 0 5px #475569"
              />
              <Header />
              <main id="main-content">{children}</main>
              <WhatsAppButton />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
