"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'aos/dist/aos.css';

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    import('aos').then((AOS) => {
      AOS.init({
        duration: 600,
        once: true,
        offset: 90,
        easing: 'ease-out-cubic',
      });
      AOS.refreshHard();
    });
  }, [pathname]);

  return null;
}