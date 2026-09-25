import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Khanzadi Wazir Ali',
  description: 'Khanzadi Wazir Ali — AI Engineer & Full Stack Developer. GIAIC certified, Shopify expert, and AI automation specialist with 2+ years building intelligent web apps, e-commerce stores, and automation workflows for international clients.',
  keywords: ['About Khanzadi Wazir Ali', 'AI Engineer', 'Full Stack Developer', 'GIAIC Certified', 'Shopify Expert', 'Next.js Developer', 'TypeScript', 'Python', 'AI Automation'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  openGraph: {
    title: 'About - Khanzadi Wazir Ali | AI Engineer & Full Stack Developer',
    description: 'AI Engineer & Full Stack Developer specializing in Next.js, React, Python, Shopify, and AI automation. GIAIC certified with 2+ years of international client experience.',
    url: 'https://khanzadi.vercel.app/About',
    siteName: 'Khanzadi Wazir Ali Portfolio',
    locale: 'en_US',
    type: 'profile',
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
    title: 'About - Khanzadi Wazir Ali | AI Engineer & Full Stack Developer',
    description: 'AI Engineer & Full Stack Developer | GIAIC Certified | Shopify & AI Automation Expert',
    creator: '@Khanzadi0099',
    images: ['https://khanzadi.vercel.app/About.jpg'],
  },
  alternates: {
    canonical: 'https://khanzadi.vercel.app/About',
  },
};

export default function AboutMetadata() {
  return null;
}
