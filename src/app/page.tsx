import AboutPage from '@/components/sections/about/AboutPage'
import { AboutMe } from '@/components/sections/home/AboutMe'
import AdventagesSec from '@/components/sections/home/AdventagesSec'
import { HeroSection } from '@/components/sections/home/HeroSec'
import MissionPage from '@/components/sections/home/MissionSec'
import { ServiceSec } from '@/components/sections/home/ServiceSec'
import { TeamSec } from '@/components/sections/home/TeamSec'
import { ValuesSec } from '@/components/sections/home/ValuesSec'
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