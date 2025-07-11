import { getAdvantages } from '@/lib/advantages'; 
import { AdvantagesType } from '@/types/alltype';
import Image from 'next/image';
import React from 'react';

export default async function MissionPage() {
  const allData: AdvantagesType[] = await getAdvantages();

  const missionData = allData.find(item => item.title === "Our Mission");
  const visionData = allData.find(item => item.title === "Our Vision");

  return (
    <div className="flex flex-col items-center py-8 md:py-16  bg-background text-foreground">
      
      {missionData && (
        <section className="flex flex-col md:flex-row items-center justify-center w-full  mb-16 gap-12 md:gap-0 ">
          <div className="flex flex-col md:w-1/2 border-l-2 border-[#53B8B8] pl-4 md:pl-12">
            <div className="flex items-center mb-4">
              <span className="text-[#1C746F] text-sm font-medium">About us</span>
            </div>
            <h2 className="text-[22px] md:text-4xl font-medium mb-4">{missionData.title}</h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              {missionData.description}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end ">
            <Image
              src={missionData.image}
              alt={missionData.title}
              width={527}
              height={272}
              className="rounded-lg shadow-lg object-cover w-[373px] h-[182px] md:w-[527px] md:h-[272px]"
            />
          </div>
        </section>
      )}

      {visionData && (
        <section className="flex flex-col md:flex-row-reverse items-center justify-center  w-full gap-12 ">
          <div className="flex flex-col md:w-1/2  md:border-l-2 border-[#53B8B8] pl-4 md:pl-12">
            <div className="flex items-center mb-4">
              <span className="text-[#1C746F] text-sm font-medium">About us</span>
            </div>
            <h2 className="text-[22px] md:text-4xl font-medium mb-4">{visionData.title}</h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              {visionData.description}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-start ">
            <Image
              src={visionData.image}
              alt={visionData.title}
              width={500}
              height={272}
              className="rounded-lg shadow-lg object-cover w-[373px] h-[182px] md:w-[527px] md:h-[272px] "
            />
          </div>
        </section>
      )}
    </div>
  );
}