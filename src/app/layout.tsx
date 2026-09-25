import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Nastaliq_Urdu, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from './context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import StructuredData from './components/StructuredData';
import ErrorBoundary from './components/ErrorBoundary';
import AOSInit from './components/AOSInit';
import SmoothScroll from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import ToastWrapper from './components/ToastWrapper';
import Footer from './components/Footer';
import NextTopLoader from 'nextjs-toploader';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const nastaliq = Noto_Nastaliq_Urdu({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-nastaliq',
  display: 'swap',
});

const naskh = Noto_Naskh_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-naskh',
  display: 'swap',
});

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
    images: [
      {
        url: 'https://khanzadi.vercel.app/About.jpg',
        width: 1200,
        height: 630,
        alt: 'Khanzadi Wazir Ali - AI Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khanzadi Wazir Ali - AI Engineer & Full Stack Developer',
    description: 'Professional portfolio showcasing AI automation, web development, and Shopify e-commerce expertise',
    creator: '@Khanzadi0099',
    images: ['https://khanzadi.vercel.app/About.jpg'],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${nastaliq.variable} ${naskh.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="antialiased font-sans">
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
              <SmoothScroll />
              <Header />
              <main id="main-content" className="scroll-mt-24">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <WhatsAppButton />
              <BackToTop />
              <AOSInit />
              <ToastWrapper />
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}