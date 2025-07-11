"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheetui"; 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SettingType } from "@/types/alltype";

export function NavbarMain({ logo }: { logo: SettingType }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#aboutpage", label: "About us" },
    { href: "/service", label: "Service" },
    { href: "/#teampage", label: "Team" },
    { href: "/#contactpage", label: "Contact us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-200/60 h-[81px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <div className="flex items-center">
    
          <Link href="/" className="text-2xl font-bold ">
            <Image
              src={logo.header_logo}
              alt="GCG"
              width={84}
              height={81}
              className="cursor-pointer w-16 h-15 md:w-21 md:h-20"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-[#53B8B8]"
                        : "text-gray-600 hover:text-[#53B8B8]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="#contactpage">
            <Button
              variant="default"
              className="bg-[#53B8B8] text-white flex items-center space-x-1 hover:bg-[#3674B5]/90 cursor-pointer"
            >
              <span>Contact us</span>
              <GoArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
            <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 ">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Menyunu aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[200px] p-0 mt-[60px] z-10">
                <div className="flex flex-col h-full">
                  <div className="flex-1 p-6">
                    <div className="flex flex-col space-y-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg text-gray-700 hover:text-[#3674B5] transition-colors font-medium"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
    </nav>
  );
}