import AboutPage from '@/components/about/AboutPage';
import { AboutMe } from '@/components/home/AboutMe';
import AdventagesSec from '@/components/home/AdventagesSec';
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