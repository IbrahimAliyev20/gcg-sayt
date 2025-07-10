import React from 'react'
import { FooterMain } from './Footermain'
import { getSocialMedia } from '@/lib/social-media';

export default async function Footer() {

  const socialLinks = await getSocialMedia();

  return (
    <div>
      <FooterMain socialLinks={socialLinks} />
    </div>
  )
}
