"use client"; 

import React from 'react';
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import { SocialMediaType } from '@/types/alltype';
import Image from 'next/image';



const navLinkData = [
  { href: '/', label: 'Home' },
  { href: '/#aboutpage', label: 'About us' },
  { href: '/#service', label: 'Service' },
  { href: '/#teampage', label: 'Team' },
  { href: '/#contactpage', label: 'Contact us' },
];

export function FooterMain({ socialLinks }: { socialLinks: SocialMediaType[] }) {
  const pathname = usePathname(); 

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.link} 
                aria-label={link.name}
                className="text-gray-500 hover:text-[#53B8B8] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={link.image} alt={link.name} width={24} height={24} />
              </Link>
            ))}
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
              {navLinkData.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className={`
                        ${isActive ? 'text-gray-600' : 'text-gray-600'}
                        hover:text-[#53B8B8] transition-colors
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="text-center text-xs text-gray-500">
            <p>Copyright © Caspian Green Galleon. Made by <span> <Link href="https://markup.az/" target='_blank' className='text-blue-600 hover:underline'>MarkUp</Link></span>. All rights reserved.</p>

          </div>

        </div>
      </div>
    </footer>
  );
}