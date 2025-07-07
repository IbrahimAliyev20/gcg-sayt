import { AboutMe } from '@/components/Home/AboutMe'
import AdventagesSec from '@/components/Home/Adventages'
// import LogoCarusel from '@/components/Home/EmblaCarousel'
import { HeroSection } from '@/components/Home/HeroSec'
// import { NewsSection } from '@/components/Home/NewsSection'
import { ServiceSec } from '@/components/Home/ServiceSec'
import React from 'react'


export default  function HomePage() {
  return (
    <div >
      <div>
      <HeroSection />
      </div>
      <div className='container mx-auto px-4 '>
      <ServiceSec />
      </div>
      <div className='container mx-auto px-4 '>
      <AboutMe />
      </div>
      {/* <div className='container mx-auto px-4 '>
      <LogoCarusel />
      </div> */}
      <div className='container mx-auto px-4 '>
      <AdventagesSec />
      </div>
      {/* <div className='container mx-auto px-4 '>
      <NewsSection />
      </div> */}

    </div>
  )
}