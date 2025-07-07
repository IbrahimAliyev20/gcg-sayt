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

export function Navbar() {
  const navLinks = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/service", label: "Xidmətlər" },
    { href: "/team", label: "Komanda" },
    { href: "/contact", label: "Əlaqə" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-200/60 h-[61px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menyunu aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 mt-[60px] z-10">
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
          <Link href="/" className="text-2xl font-bold">
            GCG
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#3674B5] text-[#73767A] transition-colors font-normal text-[16px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/contact">
            <Button
              variant="default"
              className="bg-[#3674B5] text-white flex items-center space-x-1 hover:bg-[#3674B5]/90"
            >
              <span>Əlaqəyə Keç</span>
              <GoArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}