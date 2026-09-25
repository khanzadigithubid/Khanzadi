"use client";

import { useState } from 'react';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaRegClock, FaChevronDown, FaBolt, FaShopify, FaRobot } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiTypescript, SiStreamlit, SiGithubactions, SiLangchain, SiPlotly } from 'react-icons/si';
import Link from "next/link";
import Breadcrumbs from '../components/Breadcrumbs';
import ImageLightbox from '../components/ImageLightbox';
import { useLanguage } from '../../context/LanguageContext';

// Tech badge icon map
const techIconMap: Record<string, React.ReactNode> = {
  "Next.js":        <SiNextdotjs className="w-3 h-3" />,
  "Python":         <SiPython className="w-3 h-3" />,
  "TypeScript":     <SiTypescript className="w-3 h-3" />,
  "OpenAI":         <FaRobot className="w-3 h-3" />,
  "Streamlit":      <SiStreamlit className="w-3 h-3" />,
  "GitHub Actions": <SiGithubactions className="w-3 h-3" />,
  "LangChain":      <SiLangchain className="w-3 h-3" />,
  "Plotly":         <SiPlotly className="w-3 h-3" />,
  "Shopify API":    <FaShopify className="w-3 h-3" />,
};

const projects = [
  {
    key: "tradingCopilot",
    src: "/project3.jpg",
    alt: "Trading Copilot",
    demoLink: "https://kw-trading-copilot.vercel.app/",
    githubLink: "https://github.com/khanzadigithubid/Trading-Copilot",
    category: "AI Projects"
  },
  {
    key: "aiEmployeeWorkspace",
    src: "/ai-employee.jpg",
    alt: "AI Employee Workspace Automation",
    demoLink: "",
    githubLink: "https://github.com/khanzadigithubid/ai-employee-workspace-public",
    category: "AI Projects"
  },
  {
    key: "shopifyAutomation",
    src: "/ai-shopify.jpg",
    alt: "Shopify Business Intelligence",
    demoLink: "",
    githubLink: "https://github.com/khanzadigithubid/shopify-business-intelligence-automation",
    category: "Shopify"
  },
  {
    key: "agenticAIOS",
    src: "/agentic-ai.jpg",
    alt: "Agentic AI OS",
    demoLink: "https://agentic-ai-os.vercel.app/",
    githubLink: "https://github.com/khanzadigithubid/Agentic-AI-OS",
    category: "AI Projects"
  },
  {
    key: "photoToSketch",
    src: "/ai-sketch.avif",
    alt: "AI Photo to Sketch Converter",
    demoLink: "https://kw-photo-to-sketch-converter.streamlit.app/",
    githubLink: "https://github.com/khanzadigithubid/AI-Photo-to-Sketch-Converter-",
    category: "AI Projects"
  },
  {
    key: "loopEngineering",
    src: "/loop-engineering.jpg",
    alt: "Loop Engineering Hub",
    demoLink: "",
    githubLink: "https://github.com/khanzadigithubid/Loop_Engineering_Hub",
    category: "AI Projects"
  },
  {
    key: "worldMap",
    src: "/world-map.jpg",
    alt: "Interactive World Map",
    demoLink: "https://kw-world-map.streamlit.app/",
    githubLink: "https://github.com/khanzadigithubid/World-Map",
    category: "Web Apps"
  },
];

const Project = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "AI Projects", "Shopify", "Web Apps"];

  const getProjectTranslation = (projectKey: string, field: 'title' | 'description' | 'impact') => {
    return t(`projects.items.${projectKey}.${field}`);
  };

  const getProjectTech = (projectKey: string): string[] => {
    const raw = t(`projects.items.${projectKey}.tech`);
    if (Array.isArray(raw)) return raw as string[];
    // fallback: try JSON parse if returned as string
    try { return JSON.parse(raw as unknown as string); } catch { return []; }
  };

  const getCategoryTranslation = (category: string) => {
    const categoryMap: Record<string, string> = {
      "All":        t('projects.categories.all'),
      "AI Projects":t('projects.categories.aiProjects'),
      "Web Apps":   t('projects.categories.webApps'),
      "Shopify":    t('projects.categories.shopify'),
    };
    return categoryMap[category] || category;
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMore = filteredProjects.length > 4;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev === 0 ? displayedProjects.length - 1 : prev - 1);
    } else {
      setCurrentImageIndex(prev => prev === displayedProjects.length - 1 ? 0 : prev + 1);
    }
  };

  const projectsWithTranslations = displayedProjects.map(project => ({
    src: project.src,
    alt: project.alt,
    title: getProjectTranslation(project.key, 'title'),
    description: getProjectTranslation(project.key, 'description'),
    link: project.demoLink || project.githubLink
  }));

  // Category accent colors
  const categoryColor: Record<string, string> = {
    "AI Projects": "text-purple-300 bg-purple-900/40 border-purple-500/30",
    "Shopify":     "text-green-300 bg-green-900/40 border-green-500/30",
    "Web Apps":    "text-blue-300 bg-blue-900/40 border-blue-500/30",
  };

  return (
    <>
      <Breadcrumbs />
      <section className="text-gray-100 body-font bg-gradient-to-b from-black to-gray-900">
        <div className="container px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex flex-col text-center w-full mb-16 sm:mb-20">
            <div className="inline-block mb-4 mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <FaCode className="text-gray-500 text-sm" />
                <span className="text-sm font-medium tracking-wide">{t('projects.featured')}</span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 mx-auto mt-2" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              {t('projects.title')}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-300">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 card-lift">
              <div className="p-2 sm:p-3 bg-gray-700 rounded-lg flex-shrink-0">
                <FaCode className="text-gray-200 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm sm:text-base font-semibold text-white truncate">{projects.length} {t('projects.projectsCount')}</h2>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{t('projects.completed')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 card-lift">
              <div className="p-2 sm:p-3 bg-gray-700 rounded-lg flex-shrink-0">
                <FaStar className="text-gray-200 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm sm:text-base font-semibold text-white truncate">{t('projects.quality')}</h2>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{t('projects.qualitySub')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 card-lift">
              <div className="p-2 sm:p-3 bg-gray-700 rounded-lg flex-shrink-0">
                <FaRegClock className="text-gray-200 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm sm:text-base font-semibold text-white truncate">{t('projects.latest')}</h2>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{t('projects.latestSub')}</p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setSelectedCategory(category); setShowAll(false); }}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white keep-white shadow-lg hover:bg-purple-500'
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md border border-gray-700'
                }`}
              >
                {getCategoryTranslation(category)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {displayedProjects.map((project, index) => {
              const techStack = getProjectTech(project.key);
              const impact = getProjectTranslation(project.key, 'impact');
              const catColor = categoryColor[project.category] ?? "text-purple-300 bg-purple-900/40 border-purple-500/30";

              return (
                <div
                  key={index}
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-duration={400 + (index % 4) * 50}
                >
                  <div className="group flex flex-col h-full bg-gray-800 rounded-xl shadow-xl card-lift overflow-hidden border border-gray-700 hover:border-purple-500/60 transition-all duration-300">

                    {/* Image */}
                    <div
                      className="relative h-[200px] sm:h-[220px] w-full overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${getProjectTranslation(project.key, 'title')} — ${t('projects.clickToView')}`}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(index); }}
                    >
                      <Image
                        src={project.src}
                        alt={project.alt}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white keep-white text-sm font-semibold bg-black/60 px-5 py-2.5 rounded-lg backdrop-blur-sm">
                            {t('projects.clickToView')}
                          </span>
                        </div>
                        {/* Demo + GitHub buttons */}
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                          {project.demoLink ? (
                            <Link
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              aria-label={`${project.alt} - ${t('projects.liveDemo')}`}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300 text-xs font-semibold text-slate-800"
                            >
                              <FaExternalLinkAlt className="w-3 h-3" />
                              <span>{t('projects.liveDemo')}</span>
                            </Link>
                          ) : <span />}
                          {project.githubLink && (
                            <Link
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              aria-label={`${project.alt} - ${t('projects.sourceCode')}`}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300 text-xs font-semibold text-slate-800"
                            >
                              <FaGithub className="w-3 h-3" />
                              <span>GitHub</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col flex-1 p-4 sm:p-5">

                      {/* Category badge */}
                      <div className="mb-2">
                        <span className={`inline-block px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold border rounded-full ${catColor}`}>
                          {getCategoryTranslation(project.category)}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={project.demoLink || project.githubLink} target="_blank" rel="noopener noreferrer">
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 hover:text-purple-300 transition-colors duration-300 line-clamp-2 leading-snug">
                          {getProjectTranslation(project.key, 'title')}
                        </h2>
                      </Link>

                      {/* Description */}
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 flex-1">
                        {getProjectTranslation(project.key, 'description')}
                      </p>

                      {/* Impact badge */}
                      {impact && (
                        <div className="flex items-center gap-1.5 mb-3 text-xs text-green-400 font-medium">
                          <FaBolt className="w-3 h-3 flex-shrink-0" />
                          <span className="line-clamp-1">{impact}</span>
                        </div>
                      )}

                      {/* Tech stack badges */}
                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-700 border border-gray-600 text-gray-300 text-[10px] sm:text-xs font-medium"
                            >
                              {techIconMap[tech] ?? null}
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More/Less */}
          {hasMore && (
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-3.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base font-medium"
              >
                {showAll
                  ? t('projects.showLess')
                  : `${t('projects.showMore')} (${filteredProjects.length - 4} ${t('projects.more')})`
                }
                <FaChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>

        {/* Lightbox */}
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={projectsWithTranslations}
          currentIndex={currentImageIndex}
          onNavigate={navigateLightbox}
        />
      </section>
    </>
  );
};

export default Project;
