
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import ServiceCard from "@/components/shared/ServiceCard";
import { getOurServices } from "@/lib/our-service";
import { getHero } from "@/lib/hero";

export async function ServiceSec() {
  const [servicesResponse, heroDataArr] = await Promise.all([
    getOurServices(),
    getHero()
  ]);
  
  const featuredServices = servicesResponse.data.slice(0, 4);
  const serviceHero = heroDataArr.find(h => h.name === 'Service');

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sol Tərəf */}
          <div className="flex flex-col justify-between md:w-[474px]">
            <div>
              <p className="text-teal-600 text-sm font-semibold mb-2 tracking-wider">
                Our Services
              </p>
              <h2 className="text-[22px] md:text-[32px] font-medium text-gray-900">
                {serviceHero?.title || "Efficient, Green, Reliable Services"}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredServices.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      description={service.description}
                    />
              ))}
            </div>
            <div className="text-center mt-8 md:mt-auto pt-6">
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