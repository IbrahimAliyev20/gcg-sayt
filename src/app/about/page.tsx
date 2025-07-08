import AboutPage from '@/components/About/AboutPage';
import { AboutMe } from '@/components/Home/AboutMe';
import AdventagesSec from '@/components/Home/AdventagesSec';
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