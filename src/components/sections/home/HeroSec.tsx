import Image from "next/image";
import React from "react";
import { getHero } from "@/lib/hero";
// import { getStatisc } from "@/lib/statistic";

// const StatCard = ({ value, label }: { value: string; label: string }) => (
//   <div className="bg-gray/10 md:bg-white/10 backdrop-blur-[6px] rounded-xl p-4 sm:p-6 border border-white/10">
//     <p className="text-2xl sm:text-[32px] font-medium text-white">{value}</p>
//     <p className="text-[#E2E8F0] text-sm sm:text-base font-normal mt-1 sm:mt-2">
//       {label}
//     </p>
//   </div>
// );

export async function HeroSection() {
  const allHeroData = await getHero();
  // const statics = await getStatisc()

  const homeHeroData = allHeroData.find(hero => hero.name === "Home");

  if (!homeHeroData) {
    return null;
  }

  return (
    <section className="relative w-full text-white flex items-center">
      <div className="absolute inset-0 bg-cover bg-center -z-10">
        <Image
          src={homeHeroData.image}
          alt={homeHeroData.name} 
          fill
          priority 
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#0C4F4F]/35 -z-10" />
      <div className="max-w-8xl px-4 md:px-14 h-full flex flex-col justify-center py-12 md:py-20">
        <div className="flex flex-col h-full justify-between gap-10 md:gap-20">
          <div className="pt-0 md:pt-10">
            <h1 className="text-[22px] md:text-[32px] sm:text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
              {homeHeroData.title}
            </h1>
          </div>
          <div className="w-full flex justify-center">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center w-full md:w-[80%]">
              {
                statics.map((stat, index) => (
                  <StatCard key={index} value={stat.number} label={stat.title} />
                ))
              }
          
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}