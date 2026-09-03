import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Khanzadi Wazir Ali',
  description: 'Explore my portfolio of web development projects including Next.js applications, React apps, API integrations, and UI/UX designs. View live demos and source code.',
  keywords: ['Web Development Projects', 'Next.js Portfolio', 'React Applications', 'API Integration', 'UI/UX Design', 'Frontend Projects'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  openGraph: {
    title: 'Projects - Khanzadi Wazir Ali',
    description: 'Portfolio of web development projects showcasing expertise in modern technologies',
    url: 'https://khanzadi.vercel.app/Projects',
    siteName: 'Khanzadi Wazir Ali Portfolio',
    images: [
      {
        url: '/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Khanzadi Wazir Ali Projects'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Khanzadi Wazir Ali',
    description: 'Explore web development projects with Next.js, React, and modern tech stack',
    creator: '@Khanzadi0099',
    images: ['/projects-og.jpg'],
  },
  alternates: {
    canonical: 'https://khanzadi.vercel.app/Projects',
  },
};

export default function ProjectsMetadata() {
  return null;
}
