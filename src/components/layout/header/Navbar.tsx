"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: "#", translationKey: "home" },
    { href: "#", translationKey: "about" },
    { href: "#", translationKey: "services" },
    { href: "#", translationKey: "news" },
    { href: "#", translationKey: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-200/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Hamburger Menu and Logo */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menyunu aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <div className="text-2xl font-bold text-left mb-6">GCG</div>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2 mb-4">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={locale === lang.code ? "default" : "outline"}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={locale === lang.code ? "bg-[#3674B5] text-white" : ""}
                    >
                      {lang.label}
                    </Button>
                  ))}
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.translationKey}
                    href={link.href}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {t(link.translationKey)}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="text-2xl font-bold">GCG</div>
        </div>

        {/* Desktop Navigation (Middle) */}
        <div className="hidden md:flex space-x-8 flex-grow justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.translationKey}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {t(link.translationKey)}
            </Link>
          ))}
        </div>

        {/* Right-side elements */}
        <div className="flex items-center space-x-2">
          {/* Language selection (Desktop only) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden md:block">
              <Button variant="ghost" className="w-12 font-semibold">
                {languages.find((lang) => lang.code === locale)?.label}
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

          <Button
            variant="default"
            className="bg-[#3674B5] text-white flex items-center space-x-1"
          >
            <span>{t("contactButton")}</span>
            <GoArrowUpRight />
          </Button>
        </div>
      </div>
    </nav>
  );
}