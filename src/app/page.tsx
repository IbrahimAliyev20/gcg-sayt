import AboutPage from '@/components/About/AboutPage'
import { AboutMe } from '@/components/Home/AboutMe'
import AdventagesSec from '@/components/Home/AdventagesSec'
import { HeroSection } from '@/components/Home/HeroSec'
import MissionPage from '@/components/Home/MissionSec'
import { TeamSec } from '@/components/Home/TeamSec'
import { ServiceSec } from '@/components/Home/ServiceSec'
import { ValuesSec } from '@/components/Home/ValuesSec'
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