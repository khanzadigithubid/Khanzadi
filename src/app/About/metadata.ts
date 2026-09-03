import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Khanzadi Wazir Ali',
  description: 'Learn about Khanzadi Wazir Ali - Frontend Developer and AI Enthusiast. GIAIC certified professional specializing in Next.js, TypeScript, and Cloud Applied Generative AI Engineering.',
  keywords: ['About Khanzadi Wazir Ali', 'Frontend Developer', 'GIAIC Certified', 'AI Enthusiast', 'Full Stack Developer', 'TypeScript Expert'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  openGraph: {
    title: 'About - Khanzadi Wazir Ali',
    description: 'Professional profile and background of a Full Stack Developer specializing in Next.js and AI Engineering',
    url: 'https://khanzadi.vercel.app/About',
    siteName: 'Khanzadi Wazir Ali Portfolio',
    images: [
      {
        url: '/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Khanzadi Wazir Ali'
      }
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Khanzadi Wazir Ali',
    description: 'Frontend Developer & AI Enthusiast | GIAIC Certified',
    creator: '@Khanzadi0099',
    images: ['/about-og.jpg'],
  },
  alternates: {
    canonical: 'https://khanzadi.vercel.app/About',
  },
};

export default function AboutMetadata() {
  return null;
}
