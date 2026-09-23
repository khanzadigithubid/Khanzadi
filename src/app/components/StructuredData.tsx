export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khanzadi Wazir Ali',
    url: 'https://khanzadi.vercel.app',
    image: 'https://khanzadi.vercel.app/About.jpg',
    sameAs: [
      'https://github.com/khanzadigithubid',
      'https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/',
      'https://x.com/Khanzadi0099'
    ],
    jobTitle: 'AI Engineer & Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Governor Sindh IT Initiative (GIAIC)'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK'
    },
    email: 'memonbisma22@gmail.com',
    knowsAbout: [
      'Web Development',
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Prisma',
      'Node.js',
      'Tailwind CSS',
      'Frontend Development',
      'Backend Development',
      'AI Engineering',
      'AI Automation',
      'LLM APIs',
      'OpenRouter',
      'AI Agents',
      'Chatbots',
      'n8n',
      'Cloud Applied AI Engineering',
      'Shopify',
      'E-Commerce Development',
      'SEO',
      'Digital Marketing'
    ],
    description: 'AI Engineer and Full Stack Developer specializing in Next.js, React, TypeScript, Python, FastAPI, PostgreSQL, Shopify, and AI automation with LLM APIs, OpenRouter, and n8n for international clients.',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'GIAIC TypeScript Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Governor Sindh IT Initiative'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Flowmingo Certified Partner',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Flowmingo'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
