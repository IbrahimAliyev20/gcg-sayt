import AboutPage from '@/components/about/AboutPage'
import { AboutMe } from '@/components/home/AboutMe'
import AdventagesSec from '@/components/home/AdventagesSec'
import { HeroSection } from '@/components/home/HeroSec'
import MissionPage from '@/components/home/MissionSec'
import { TeamSec } from '@/components/home/TeamSec'
import { ServiceSec } from '@/components/home/ServiceSec'
import { ValuesSec } from '@/components/home/ValuesSec'
import React from 'react'


export default  function HomePage() {
  return (
    <div >
      <div>
      <HeroSection />
      </div>
      <div className='container mx-auto px-4 py-16 '>
      <AboutPage />
      </div>
      <div className='container mx-auto px-4 '>
      <MissionPage />
      </div>
      <div className='container mx-auto px-4  '>
      <ValuesSec />
      </div>
      <div className='container mx-auto px-4  '>
      <TeamSec />
      </div>
      <div className='container mx-auto px-4 '>
      <ServiceSec />
      </div>
      <div className='container mx-auto px-4 '>
      <AboutMe />
      </div>
      <div className='container mx-auto px-4 '>
      <AdventagesSec />
      </div>
    </div>
  )
}