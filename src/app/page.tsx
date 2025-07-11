import AboutPage from '@/components/sections/about/AboutPage'
import ContactPage from '@/components/sections/contact/ContactPage'
import { HeroSection } from '@/components/sections/home/HeroSec'
import MissionPage from '@/components/sections/home/MissionSec'
import { ServiceSec } from '@/components/sections/home/ServiceSec'
import { TeamSec } from '@/components/sections/home/TeamSec'
import ValuesSec from '@/components/sections/home/ValuesSec'
import { getContact } from '@/lib/contact'
import React from 'react'


export default async  function HomePage() {

  const contact = await getContact();

  return (
    <div >
      <div>
      <HeroSection />
      </div>
      <div id="aboutpage" className='max-w-8xl mx-auto px-4 md:px-14 py-8 md:py-16 '>
      <AboutPage />
      </div>
      <div className='max-w-8xl mx-auto px-4 md:px-14'>
      <MissionPage />
      </div>
      <div className='max-w-8xl mx-auto px-4 md:px-14'>
      <ValuesSec />
      </div>
      <div className='max-w-8xl mx-auto px-4 md:px-14' id='teampage'>
      <TeamSec />
      </div>
      <div  id="service" className='max-w-8xl mx-auto px-4 md:px-14'>
      <ServiceSec />
      </div>
     
      <div id='contactpage' className='max-w-8xl mx-auto px-4 md:px-14'>
      <ContactPage contact={contact}/>
      </div>
    
    </div>
  )
}