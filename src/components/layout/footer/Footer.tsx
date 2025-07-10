"use client"; 

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';

const socialLinks = [
  { name: 'Facebook', icon: <Facebook size={20} />, url: '#' },
  { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
  { name: 'Instagram', icon: <Instagram size={20} />, url: '#' },
];

const navLinkData = [
  { href: '/', label: 'Home' },
  { href: '/#aboutpage', label: 'About us' },
  { href: '/service', label: 'Service' },
  { href: '/#teampage', label: 'Team' },
  { href: '/#contactpage', label: 'Contact us' },
];

export function Footer() {
  const pathname = usePathname(); 
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.url} 
                aria-label={link.name}
                className="text-gray-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
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
                        ${isActive ? 'text-blue-600' : 'text-gray-600'}
                        hover:text-blue-600 transition-colors
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
            <p>&copy; {currentYear} Bütün hüquqlar qorunur.</p>
            <span>Tərtibatçı <Link href="https://markup.az/" target='_blank' className='text-blue-600 hover:underline'>MarkUp Agency</Link></span>
          </div>

        </div>
      </div>
    </footer>
  );
}