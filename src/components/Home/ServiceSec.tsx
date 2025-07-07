import React from 'react';
import Image from 'next/image';
import { servicesData } from '@/lib/data/servicesData';
import ServiceCard from '../shared/ServiceCard';

export function ServiceSec() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-20">

          <div className="flex flex-col space-y-8 md:space-y-14">
            <div>
              <p className="text-blue-600 text-sm font-medium mb-2">XİDMƏTLƏRİMİZ</p>
              <h2 className="text-2xl md:text-[32px] font-medium text-gray-900 leading-tight">
                Dəniz davamlılığını <br className="hidden md:block" />
                simulyasiya ilə dəstəkləyirik.
              </h2>
              <div className="w-24 h-1.5 bg-blue-500 mt-4 rounded-full" />
            </div>
            <div className="w-full h-[200px] sm:h-[300px] md:h-[313px] relative mt-4">
              <Image
                src="/images/herosec.jpg"
                alt="Yacht in the sea"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-8 lg:mt-0">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
            <div className="flex justify-end items-center mt-4 sm:mt-8 space-x-2 lg:mr-4 col-span-full sm:col-span-2">
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}