"use client"; // Hook istifadəsi üçün

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation'; // Navbar-dakı kimi

// Sosial media linkləri olduğu kimi qalır
const socialLinks = [
  { name: 'Facebook', icon: <Facebook size={20} />, url: '#' },
  { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
  { name: 'Instagram', icon: <Instagram size={20} />, url: '#' },
];

// Naviqasiya linklərini tərcümə açarları ilə əvəz edirik
const navLinkData = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/news', key: 'news' },
  { href: '/contact', key: 'contact' },
];

export function Footer() {
  const t = useTranslations('Footer');
  const pathname = usePathname(); 
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                aria-label={link.name}
                className="text-gray-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
              {navLinkData.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.key}>
                    <Link 
                      href={link.href} 
                      className={`
                        ${isActive ? 'text-blue-600' : 'text-gray-600'}
                        hover:text-blue-600 transition-colors
                      `}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="text-center text-xs text-gray-500">
            <p>{t('copyright', { year: currentYear })}</p>
          </div>

        </div>
      </div>
    </footer>
  );
}