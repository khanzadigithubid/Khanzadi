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
    jobTitle: 'Full Stack Developer & AI Engineer',
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
    email: 'khanzadiwazirali9@gmail.com',
    knowsAbout: [
      'Web Development',
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Tailwind CSS',
      'Frontend Development',
      'Backend Development',
      'Cloud Applied AI Engineering',
      'UI/UX Design',
      'Responsive Web Design',
      'SEO',
      'Digital Marketing'
    ],
    description: 'Full Stack Developer and AI Engineer specializing in Next.js, React, TypeScript, and Cloud Applied Generative AI Engineering. GIAIC certified professional with expertise in modern web development.',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'GIAIC TypeScript Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Governor Sindh IT Initiative'
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
