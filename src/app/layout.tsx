import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL('https://khanzadi.vercel.app'),
  title: {
    default: 'Khanzadi Wazir Ali - AI Engineer & Full Stack Developer',
    template: '%s | Khanzadi Wazir Ali'
  },
  description: 'Professional portfolio of Khanzadi Wazir Ali - AI Engineer and Full Stack Developer specializing in Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, Shopify, and AI automation. GIAIC certified with expertise in building intelligent web applications, e-commerce stores, and automation workflows.',
  keywords: ['AI Engineer', 'Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'Shopify', 'E-Commerce', 'AI Automation', 'LLM APIs', 'AI Agents', 'Web Development', 'Portfolio', 'Khanzadi Wazir Ali', 'GIAIC'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  creator: 'Khanzadi Wazir Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khanzadi.vercel.app',
    title: 'Khanzadi Wazir Ali - AI Engineer & Full Stack Developer',
    description: 'Professional portfolio showcasing AI automation, web development, Shopify e-commerce solutions, technical skills, and professional services.',
    siteName: 'Khanzadi Wazir Ali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khanzadi Wazir Ali - AI Engineer & Full Stack Developer',
    description: 'Professional portfolio showcasing AI automation, web development, and Shopify e-commerce expertise',
    creator: '@Khanzadi0099',
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
  };

export const viewport: Viewport = {
  themeColor: '#000000',
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <ErrorBoundary>
              <NextTopLoader
                color="#a855f7"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #a855f7,0 0 5px #a855f7"
              />
              <Header />
              <main id="main-content" className="scroll-mt-24">{children}</main>
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
                theme="dark"
              />
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
