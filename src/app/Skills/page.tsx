"use client";
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaShopify, FaSearch, FaShareAlt, FaCode, FaChevronDown, FaPalette, FaRobot } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFigma } from 'react-icons/si';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../../context/LanguageContext';

interface SkillCardProps {
  title: string;
  skillKey: string;
  colorClass: string;
  svgIcon: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: string;
  level?: string;
}

function SkillCard({
  title,
  skillKey,
  colorClass,
  svgIcon,
  dataAos,
  dataAosDelay,
  level,
}: SkillCardProps) {
  const { t } = useLanguage();

  const getLevelColor = (level: string) => {
    switch (level?.toLowerCase()) {
      case 'expert': return 'bg-green-500';
      case 'advanced': return 'bg-blue-500';
      case 'intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div
      className="group relative bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-4 sm:p-6">
        <div className="flex flex-col items-center">
          <div className={`p-3 sm:p-4 rounded-lg ${colorClass} mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {svgIcon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed mb-2 sm:mb-3">
            {t(`skills.items.${skillKey}.description`)}
          </p>
          {level && (
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <div className={`px-2 py-1 rounded-full ${getLevelColor(level)} text-white text-[10px] sm:text-xs font-medium`}>
                {level}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const skillsData = {
  Frontend: [
    {
      key: "html",
      title: "HTML",
      colorClass: "bg-orange-500",
      svgIcon: <FaHtml5 size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    },
    {
      key: "css",
      title: "CSS",
      colorClass: "bg-blue-500",
      svgIcon: <FaCss3Alt size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    },
    {
      key: "tailwind",
      title: "Tailwind CSS",
      colorClass: "bg-cyan-500",
      svgIcon: <SiTailwindcss size={32} className="sm:text-4xl text-white" />,
      level: "Expert"
    },
    {
      key: "javascript",
      title: "JavaScript",
      colorClass: "bg-yellow-500",
      svgIcon: <FaJsSquare size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    },
    {
      key: "react",
      title: "React.js",
      colorClass: "bg-cyan-600",
      svgIcon: <FaReact size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    }
  ],
  Backend: [
    {
      key: "typescript",
      title: "TypeScript",
      colorClass: "bg-blue-600",
      svgIcon: <SiTypescript size={32} className="sm:text-4xl text-white" />,
      level: "Intermediate"
    },
    {
      key: "nextjs",
      title: "Next.js",
      colorClass: "bg-slate-800",
      svgIcon: <SiNextdotjs size={32} className="sm:text-4xl text-white" />,
      level: "Intermediate"
    },
    {
      key: "nodejs",
      title: "Node.js",
      colorClass: "bg-green-600",
      svgIcon: <FaNodeJs size={32} className="sm:text-4xl text-white" />,
      level: "Intermediate"
    }
  ],
  Design: [
    {
      key: "canva",
      title: "Canva",
      colorClass: "bg-blue-400",
      svgIcon: <FaPalette size={32} className="sm:text-4xl text-white" />,
      level: "Expert"
    },
    {
      key: "figma",
      title: "Figma",
      colorClass: "bg-purple-500",
      svgIcon: <SiFigma size={32} className="sm:text-4xl text-white" />,
      level: "Intermediate"
    }
  ],
  Tools: [
    {
      key: "aiTools",
      title: "AI Tools",
      colorClass: "bg-indigo-600",
      svgIcon: <FaRobot size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    },
    {
      key: "shopify",
      title: "Shopify",
      colorClass: "bg-green-500",
      svgIcon: <FaShopify size={32} className="sm:text-4xl text-white" />,
      level: "Intermediate"
    }
  ],
  "Version Control": [
    {
      key: "git",
      title: "Git",
      colorClass: "bg-orange-600",
      svgIcon: <FaGitAlt size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    },
    {
      key: "github",
      title: "GitHub",
      colorClass: "bg-slate-700",
      svgIcon: <FaGithub size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    }
  ],
  Marketing: [
    {
      key: "seo",
      title: "SEO",
      colorClass: "bg-teal-600",
      svgIcon: <FaSearch size={32} className="sm:text-4xl text-white" />,
      level: "Intermediate"
    },
    {
      key: "socialMedia",
      title: "Social Media Marketing",
      colorClass: "bg-pink-500",
      svgIcon: <FaShareAlt size={32} className="sm:text-4xl text-white" />,
      level: "Advanced"
    }
  ]
};

export default function Skills() {
  const { t } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Frontend: true,
    Backend: true,
    Design: false,
    Tools: false,
    "Version Control": false,
    Marketing: false
  });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Dynamic import AOS only when needed (code-splitting benefit)
      import('aos').then((AOS) => {
        AOS.init({
          duration: 500,
          once: true,
          offset: 100,
          easing: 'ease-out-cubic'
        });
      });
    }
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleAllCategories = () => {
    const allExpanded = Object.values(expandedCategories).every(v => v);
    const newState = Object.keys(expandedCategories).reduce((acc, key) => {
      acc[key] = !allExpanded;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedCategories(newState);
  };

  const allExpanded = Object.values(expandedCategories).every(v => v);

  const getCategoryTranslation = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      "Frontend": t('skills.categories.frontend'),
      "Backend": t('skills.categories.backend'),
      "Design": t('skills.categories.design'),
      "Tools": t('skills.categories.tools'),
      "Version Control": t('skills.categories.versionControl'),
      "Marketing": t('skills.categories.marketing')
    };
    return categoryMap[category] || category;
  };

  return (
    <>
      <Breadcrumbs />
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-20 md:py-24">
      <div className="container px-6 sm:px-8 lg:px-12 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <FaCode className="text-gray-500 text-sm" />
              <span className="text-sm font-medium tracking-wide">{t('skills.technical')}</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            {t('skills.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Toggle All Button */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <button
            onClick={toggleAllCategories}
            className="inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base font-semibold"
          >
            {allExpanded ? t('skills.collapseAll') : t('skills.expandAll')}
            <FaChevronDown className={`ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${allExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Categorized Skills */}
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl transition-all duration-300">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between hover:bg-gray-750 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white truncate">{getCategoryTranslation(category)}</h2>
                  <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-700 text-gray-300 rounded-full text-xs sm:text-sm font-semibold flex-shrink-0">
                    {skills.length} {t('skills.skillsCount')}
                  </span>
                </div>
                <FaChevronDown
                  className={`text-gray-300 text-base sm:text-lg flex-shrink-0 transition-transform duration-300 ${expandedCategories[category] ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Skills Grid */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  expandedCategories[category]
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill.title}
                      title={skill.title}
                      skillKey={skill.key}
                      colorClass={skill.colorClass}
                      svgIcon={skill.svgIcon}
                      level={skill.level}
                      dataAos="fade-up"
                      dataAosDelay={`${(index % 4) * 50}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}


