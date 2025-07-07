"use client";

import React from "react";
import Image from "next/image";
import { servicesData } from "@/lib/data/servicesData";
import ServiceCard from "../shared/ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function ServiceSec() {
  const chunkedServices = [];
  for (let i = 0; i < servicesData.length; i += 4) {
    chunkedServices.push(servicesData.slice(i, i + 4));
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div>
              <p className="text-[#3674B5] text-sm font-semibold mb-2 tracking-wider">
                XİDMƏTLƏRİMİZ
              </p>
              <h2 className=" text-[22px] md:text-[32px] font-medium text-gray-900 leading-tight">
                Dəniz davamlılığını <br className="hidden md:block" />
                simulyasiya ilə dəstəkləyirik.
              </h2>
              <div className="w-24 h-1.5 bg-[#3674B5] mt-4 rounded-full" />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[360px] relative">
              <Image
                src="/images/herosec.jpg"
                alt="Yacht in the sea"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              loop={true}
              className="w-full"
            >
              {chunkedServices.map((chunk, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                    {chunk.map((service, cardIndex) => (
                      <ServiceCard
                        key={cardIndex}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination-custom text-center pt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
