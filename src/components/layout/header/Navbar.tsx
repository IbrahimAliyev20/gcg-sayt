"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { GoArrowUpRight } from "react-icons/go";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
  ];

  const currentLangLabel = languages.find((lang) => lang.code === locale)?.label;

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    // DƏYİŞİKLİK 1: Əsas <nav> elementi tam eni əhatə edən və sabit olan konteynerə çevrilir.
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-200/60">
      
      {/* DƏYİŞİKLİK 2: Məzmunu mərkəzdə saxlamaq üçün yeni bir daxili div əlavə edilir. */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">GCG</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="#" className="hover:text-primary">{t('home')}</Link>
          <Link href="#" className="hover:text-primary">{t('about')}</Link>
          <Link href="#" className="hover:text-primary">{t('services')}</Link>
          <Link href="#" className="hover:text-primary">{t('news')}</Link>
          <Link href="#" className="hover:text-primary">{t('contact')}</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-12 font-semibold">
                {currentLangLabel}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="cursor-pointer"
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="default" className="bg-[#3674B5] text-white flex items-center space-x-1">
            <span>{t('contactButton')}</span>
            <GoArrowUpRight />
          </Button>
        </div>
      </div>
    </nav>
  );
}