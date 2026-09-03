import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Khanzadi Wazir Ali',
  description: 'Professional web development services including web design, responsive development, Shopify development, digital marketing, and custom web applications.',
  keywords: ['Web Development Services', 'Web Design', 'Shopify Development', 'Digital Marketing', 'Responsive Design', 'Custom Web Applications'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  openGraph: {
    title: 'Services - Khanzadi Wazir Ali',
    description: 'Comprehensive web solutions and digital services for your business',
    url: 'https://khanzadi.vercel.app/Services',
    siteName: 'Khanzadi Wazir Ali Portfolio',
    images: [
      {
        url: '/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Services'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Khanzadi Wazir Ali',
    description: 'Professional web development, design, and digital marketing services',
    creator: '@Khanzadi0099',
    images: ['/services-og.jpg'],
  },
  alternates: {
    canonical: 'https://khanzadi.vercel.app/Services',
  },
};

export default function ServicesMetadata() {
  return null;
}
