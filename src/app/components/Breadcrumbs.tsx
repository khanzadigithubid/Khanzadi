'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { t } = useLanguage();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);

    const breadcrumbs: Array<{ name: string; path: string; icon: JSX.Element | null }> = [
      { name: t('breadcrumbs.home'), path: '/', icon: <FaHome className="w-4 h-4" /> }
    ];

    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;

      // Capitalize and format the path name
      const formattedName = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        name: formattedName,
        path: currentPath,
        icon: null
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-black border-b border-white/10 py-3 sm:py-4 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <ol className="flex items-center space-x-2 text-sm overflow-x-auto scrollbar-hide">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = index === 0;

            return (
              <li key={breadcrumb.path} className="flex items-center flex-shrink-0">
                {index > 0 && (
                  <FaChevronRight className="w-3 h-3 mx-2 text-gray-500 flex-shrink-0" />
                )}

                {isLast ? (
                  <span className="font-semibold text-white flex items-center space-x-1.5">
                    {breadcrumb.icon && <span>{breadcrumb.icon}</span>}
                    <span className="truncate max-w-[150px] sm:max-w-none">{breadcrumb.name}</span>
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1.5"
                  >
                    {breadcrumb.icon && <span>{breadcrumb.icon}</span>}
                    <span className={isHome ? '' : 'truncate max-w-[100px] sm:max-w-none'}>
                      {breadcrumb.name}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}
