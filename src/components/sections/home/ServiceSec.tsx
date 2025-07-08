// ServiceSec.jsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/data/servicesData";
import ServiceCard from "../shared/ServiceCard";
import { HiArrowRight } from "react-icons/hi"; // react-icons-dan ox ikonu

export function ServiceSec() {
  // Yalnız ilk 4 xidməti göstərmək üçün
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          {/* Sol Tərəf: Başlıq və Şəkil */}
          <div className="flex flex-col space-y-8">
            <div>
              <p className="text-teal-600 text-sm font-semibold mb-2 tracking-wider">
                Our Services
              </p>
              <h2 className="text-[22px] md:text-[32px] font-medium text-gray-900 ">
                Efficient, Green, Reliable Services
              </h2>
              <svg
                className="mt-4"
                width="120"
                height="12"
                viewBox="0 0 120 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.0002C13.3333 4.66687 29.2 -2.4998 44 4.00019C58.8 10.5002 72.2 12.3335 86.5 6.50019C99.5 1.00019 110.833 4.16685 118 7.00019"
                  stroke="#A7F3D0" 
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
              <Image
                src="/images/servicesec.png" 
                alt="Ship with modern wind sails"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Sağ Tərəf: Xidmət Kartları */}
          <div className="w-full h-full flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            <div className=" text-center">
              <Link href="/service" className="inline-flex items-center font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                See All Services
                <HiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}