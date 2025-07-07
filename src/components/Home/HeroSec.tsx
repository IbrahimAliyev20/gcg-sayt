import Image from 'next/image';
import React from 'react';

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
    <p className="text-2xl sm:text-[32px] font-medium text-white">{value}</p>
    <p className="text-[#BABABA] text-sm sm:text-base font-normal mt-1 sm:mt-2">{label}</p>
  </div>
);

export function HeroSection() {
  return (
    <section className="relative w-full text-white  flex items-center ">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
      >
        <Image
          src="/images/herosec.jpg"
          alt="hero"
          fill
          className='object-cover'
        />
      </div>

      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center py-8 md:py-20">
        <div className="flex flex-col h-full justify-between gap-10 md:gap-20">

          <div className="pt-0 md:pt-10">
            <h1 className="text-[22px] md:text-[32px] sm:text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              Biz müştərilərlə birgə dəniz sənayesini inkişaf etdirməyə davam edəcəyik.
            </h1>
          </div>
          <div className='w-full flex justify-center'>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center w-full md:w-[80%] ">
            <StatCard value="22+" label="Tətbiq olunmuş layihələr" />
            <StatCard value="12+" label="İllərlə aparılan tədqiqat və inkişaf işi" />
            <StatCard value="1000+" label="Məmnun müştəri sayı" />
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}