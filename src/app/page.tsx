"use client"

import dynamic from 'next/dynamic';
import Home from './Home/page';
import About from './About/page';
import Projects from './Projects/page';
import Services from './Services/page';
import Skills from './Skills/page';
import Skeleton from './components/Skeleton';

const Contact = dynamic(() => import('./Contact/page'), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="pt-4 pb-2">
      <div className="container mx-auto max-w-7xl px-6">
        <Skeleton className="w-full h-16 rounded-2xl" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="w-full h-64 rounded-2xl" />
          <Skeleton className="w-full h-64 rounded-2xl" />
        </div>
      </div>
    </div>
  ),
});

const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'), {
  ssr: false,
  loading: () => (
    <div aria-hidden className="py-10">
      <div className="container mx-auto max-w-7xl px-6">
        <Skeleton className="w-40 h-6" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="w-full h-40 rounded-2xl" />
          <Skeleton className="w-full h-40 rounded-2xl" />
        </div>
      </div>
    </div>
  ),
});

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <TestimonialsSection />
      <Contact />
    </>
  );
}