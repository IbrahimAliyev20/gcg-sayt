import React from 'react'
import { NavbarMain } from './NavbarMain'
import { getSetting } from '@/lib/setting'

export default async function Navbar() {

    const logo = await getSetting()

  return (
    <div>
      <NavbarMain  logo={logo}/>
    </div>
  )
}