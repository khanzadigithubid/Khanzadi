"use client"

import Home from './Home/page';
import About from './About/page';
import Projects from './Projects/page';
import Services from './Services/page';
import Skills from './Skills/page';
import Contact from './Contact/page';

export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}