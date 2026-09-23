"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const lastKey = useRef(pathname);

  useEffect(() => {
    if (lastKey.current !== pathname) {
      setIsAnimating(true);
      const t1 = setTimeout(() => setIsAnimating(false), 30);
      const t2 = setTimeout(() => { lastKey.current = pathname; }, 450);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
    lastKey.current = pathname;
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`transition-opacity duration-300 ease-out ${isAnimating ? 'opacity-60' : 'opacity-100'} page-in`}
    >
      {children}
    </div>
  );
}