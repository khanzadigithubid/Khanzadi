"use client";

import { useState } from 'react';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaRegClock, FaChevronDown } from 'react-icons/fa';
import Link from "next/link";
import Breadcrumbs from '../components/Breadcrumbs';
import ImageLightbox from '../components/ImageLightbox';
import { useLanguage } from '../../context/LanguageContext';

// Metadata is handled in layout.tsx for client components

const projects = [
  {
    key: "cryptoWebsite",
    src: "/project7.jpg",
    alt: "Crypto Website",
    link: "https://simple-website-crypto.netlify.app/",
    category: "Web Apps"
  },
  {
    key: "oopProject",
    src: "/project2.jpg",
    alt: "OOP Project",
    link: "https://github.com/khanzadigithubid/OOP-Project",
    category: "Web Apps"
  },
  {
    key: "tradingWebsite",
    src: "/project3.jpg",
    alt: "Trading Website",
    link: "https://reacts-tradingwebsite.netlify.app/",
    category: "Web Apps"
  },
  {
    key: "chatAI",
    src: "/project11.jpg",
    alt: "Chat AI",
    link: "https://chat-ai-one-gamma.vercel.app/",
    category: "AI Projects"
  },
  {
    key: "googleSearchApp",
    src: "/project5.jpg",
    alt: "Google Search App",
    link: "https://github.com/khanzadigithubid/API-Google-Search-App",
    category: "API Integration"
  },
  {
    key: "recipeSearchApp",
    src: "/project6.jpg",
    alt: "Recipe Search App",
    link: "https://github.com/khanzadigithubid/API-Recipe-App",
    category: "API Integration"
  },
  {
    key: "weatherApp",
    src: "/project8.jpg",
    alt: "Weather App",
    link: "https://github.com/khanzadigithubid/API-Weather-Project",
    category: "API Integration"
  },
  {
    key: "jsWeatherApp",
    src: "/project12.jpg",
    alt: "JavaScript Weather App",
    link: "https://javascript-api-weather-app.netlify.app/",
    category: "API Integration"
  },
  {
    key: "todoList",
    src: "/project10.jpg",
    alt: "ToDo List",
    link: "https://java-script-to-do-list-alpha.vercel.app/",
    category: "Web Apps"
  },
  {
    key: "resumeBuilder",
    src: "/project13.jpg",
    alt: "Resume Builder",
    link: "https://hackathon-omega-six.vercel.app/",
    category: "Web Apps"
  },
  {
    key: "nextjsBlog",
    src: "/project14.jpg",
    alt: "Next.js 15 Blog",
    link: "https://nextjs-15-and-chat-bot.vercel.app/",
    category: "Next.js Projects"
  },
  {
    key: "shadcnBlog",
    src: "/project15.jpg",
    alt: "Shadcn UI Blog",
    link: "https://bm-shadcn-ui-and-radix-ui.vercel.app/",
    category: "Next.js Projects"
  },
  {
    key: "figmaConversion",
    src: "/project16.jpg",
    alt: "Figma Conversion",
    link: "https://bm-shadcn-ui-and-radix-ui.vercel.app/",
    category: "UI/UX Projects"
  },
  {
    key: "foodTuckWebsite",
    src: "/project18.jpg",
    alt: "FoodTuck Website",
    link: "https://ui-ux-hackathon-foodtuck-website.vercel.app/",
    category: "UI/UX Projects"
  },
  {
    key: "programmingBlog",
    src: "/project19.jpg",
    alt: "Programming Blog",
    link: "https://nextjs-blog-website-dusky.vercel.app/",
    category: "Next.js Projects"
  },
  {
    key: "serverSideRecipeApp",
    src: "/project20.jpg",
    alt: "Server-Side Recipe App",
    link: "https://server-side-api-fetch.vercel.app/",
    category: "API Integration"
  },
];

const Project = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Web Apps", "AI Projects", "API Integration", "Next.js Projects", "UI/UX Projects"];

  // Get translated project data
  const getProjectTranslation = (projectKey: string, field: 'title' | 'description') => {
    return t(`projects.items.${projectKey}.${field}`);
  };

  const getCategoryTranslation = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      "All": t('projects.categories.all'),
      "Web Apps": t('projects.categories.webApps'),
      "AI Projects": t('projects.categories.aiProjects'),
      "API Integration": t('projects.categories.apiIntegration'),
      "Next.js Projects": t('projects.categories.nextjsProjects'),
      "UI/UX Projects": t('projects.categories.uiuxProjects')
    };
    return categoryMap[category] || category;
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);
  const hasMore = filteredProjects.length > 8;

  const openLightbox = (index: number) => {
    const projectIndex = projects.findIndex(p => p === filteredProjects[index]);
    setCurrentImageIndex(projectIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  // Transform projects array with translations for ImageLightbox
  const projectsWithTranslations = projects.map(project => ({
    src: project.src,
    alt: project.alt,
    title: getProjectTranslation(project.key, 'title'),
    description: getProjectTranslation(project.key, 'description'),
    link: project.link
  }));

  return (
    <>
      <Breadcrumbs />
      <section className="text-gray-100 body-font bg-gradient-to-b from-black to-gray-900">
      <div className="container px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col text-center w-full mb-16 sm:mb-20">
          <div className="inline-block mb-4 mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <FaCode className="text-gray-500 text-sm" />
              <span className="text-sm font-medium tracking-wide">{t('projects.featured')}</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-2"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            {t('projects.title')}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg sm:text-xl text-gray-300">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="p-2 sm:p-3 bg-gray-700 rounded-lg flex-shrink-0">
              <FaCode className="text-gray-200 text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">{projects.length} {t('projects.projectsCount')}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{t('projects.completed')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="p-2 sm:p-3 bg-gray-700 rounded-lg flex-shrink-0">
              <FaStar className="text-gray-200 text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">{t('projects.quality')}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{t('projects.qualitySub')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="p-2 sm:p-3 bg-gray-700 rounded-lg flex-shrink-0">
              <FaRegClock className="text-gray-200 text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white truncate">{t('projects.latest')}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{t('projects.latestSub')}</p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-750 shadow-md border border-gray-700'
              }`}
            >
              {getCategoryTranslation(category)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="w-full"
              data-aos="fade-up"
              data-aos-duration={400 + (index % 4) * 50}
            >
              <div className="flex flex-col h-full bg-gray-800 rounded-lg sm:rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-gray-600">
                <div
                  className="relative h-[220px] sm:h-[240px] w-full overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold bg-black/60 px-5 py-2.5 rounded-lg backdrop-blur-sm">
                        {t('projects.clickToView')}
                      </span>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-slate-800 text-sm sm:text-base" />
                      </Link>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 sm:p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <FaGithub className="text-slate-800 text-sm sm:text-base" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-3 sm:p-4 md:p-6 bg-gray-800">
                  <div className="mb-1.5 sm:mb-2">
                    <span className="inline-block px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-300 bg-gray-700 rounded-full">
                      {getCategoryTranslation(project.category)}
                    </span>
                  </div>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3 hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                      {getProjectTranslation(project.key, 'title')}
                    </h2>
                  </Link>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {getProjectTranslation(project.key, 'description')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMore && (
          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base font-medium"
            >
              {showAll ? t('projects.showLess') : `${t('projects.showMore')} (${filteredProjects.length - 8} ${t('projects.more')})`}
              <FaChevronDown className={`ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
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


