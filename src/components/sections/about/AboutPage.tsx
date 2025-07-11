import { getAbout } from '@/lib/about';
import { AboutType } from '@/types/alltype';
import Image from 'next/image';
import React from 'react';

export default async function AboutPage() {
  const data: AboutType = await getAbout();

  const descriptionHtml = data?.description || '';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-35 items-center">
      <div>
        <p className="text-[#1C746F] text-sm font-medium mb-2">About us</p>
        <h1 className="text-[22px] sm:text-[32px] font-medium text-foreground mb-8">
          {data.title}
        </h1>
        
        <div
          className="text-muted-foreground text-sm md:text-lg leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </div>

      <div className="relative w-full aspect-[527/272]">
        <Image
          src={data.image}
          alt={data.title || "About us image"}
          fill
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}