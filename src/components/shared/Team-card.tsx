import React from 'react';
import Image from 'next/image';

interface NewsCardProps {
  imageSrc: string;
  name: string;
  description: string;
}

export function TeamCard({ imageSrc,   name, description }: NewsCardProps) {
  return (
    <div className="bg-card rounded-xl  overflow-hidden ">
      <Image
        src={imageSrc}
        alt={name}
        width={314}
        height={320}
        className="w-full h-[320px] object-cover rounded-[20px] "
      />
      <div className="py-4">
        
        <h3 className="text-base font-medium mb-2 line-clamp-1">{name}</h3>
        <p className="text-muted-foreground text-[12px] font-normal mb-4 line-clamp-2">{description}</p>
        
      </div>
    </div>
  );
}