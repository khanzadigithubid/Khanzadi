import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills - Khanzadi Wazir Ali',
  description: 'Technical skills and expertise in Frontend Development (HTML, CSS, JavaScript, React), Backend (Node.js, Next.js, TypeScript), Design (Figma, Canva), and more.',
  keywords: ['Technical Skills', 'HTML CSS JavaScript', 'React Developer', 'Next.js Expert', 'TypeScript', 'Node.js', 'Frontend Backend', 'UI/UX Design'],
  authors: [{ name: 'Khanzadi Wazir Ali' }],
  openGraph: {
    title: 'Technical Skills - Khanzadi Wazir Ali',
    description: 'Comprehensive showcase of technical expertise across web development domains',
    url: 'https://khanzadi.vercel.app/Skills',
    siteName: 'Khanzadi Wazir Ali Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills - Khanzadi Wazir Ali',
    description: 'Frontend, Backend, Design, and Marketing expertise',
    creator: '@Khanzadi0099',
  },
  alternates: {
    canonical: 'https://khanzadi.vercel.app/Skills',
  },
};

export default function SkillsMetadata() {
  return null;
}
