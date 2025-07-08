import AboutPage from '@/components/sections/about/AboutPage';
import { AboutMe } from '@/components/sections/home/AboutMe';
import AdventagesSec from '@/components/sections/home/AdventagesSec';
import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 pt-10">
     <AboutPage />
      <AboutMe />
      <AdventagesSec />
    </div>
  );
}