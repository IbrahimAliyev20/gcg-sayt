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
      <div id="aboutpage" className='container mx-auto px-4 py-8 md:py-16 '>
      <AboutPage />
      </div>
      <div className='container mx-auto px-4 '>
      <MissionPage />
      </div>
      <div className='container mx-auto px-4  '>
      <ValuesSec />
      </div>
      <div className='container mx-auto px-4' id='teampage'>
      <TeamSec />
      </div>
      <div className='container mx-auto px-4 '>
      <ServiceSec />
      </div>
     
      <div id='contactpage' className='container mx-auto px-4 '>
      <ContactPage contact={contact}/>
      </div>
    
    </div>
  )
}