import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/data/servicesData";
import { HiArrowRight } from "react-icons/hi";
import ServiceCard from "@/components/shared/ServiceCard";

export function ServiceSec() {
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4">
 
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 md:h-[616px]">
          <div className="flex flex-col justify-between md:w-[474px]">
            <div>
              <p className="text-teal-600 text-sm font-semibold mb-2 tracking-wider">
                Our Services
              </p>
              <h2 className="text-[22px] md:text-[32px] font-medium text-gray-900">
                Efficient, Green, Reliable Services
              </h2>
           <Image
            src="/icons/iconservicesec.png"
            alt="Service Icon"
            width={120}
            height={12}
            className="mt-4"
          />
            </div>

            <div className="w-full h-[250px] sm:h-[300px] md:h-[313px] relative mt-8 md:mt-0">
              <Image
                src="/images/service.jpg"
                alt="Ship with modern wind sails"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full md:flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {featuredServices.map((service, index) => (
                <Link
                  href="#"
                  target="_blank"
                  key={index} 
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    services={service.services}
                  />
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-0">
              <Link
                href="/service"
                className="inline-flex items-center font-semibold text-teal-600 hover:text-teal-700 transition-colors group"
              >
                See All Services
                <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
