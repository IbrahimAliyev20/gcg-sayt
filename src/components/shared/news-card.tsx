import React from 'react';
import { Clock } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

interface NewsCardProps {
  imageSrc: string;
  readingTime: string;
  date: string;
  title: string;
  description: string;
}

export function NewsCard({ imageSrc, readingTime, date, title, description }: NewsCardProps) {
  return (
    <div className="bg-card rounded-xl  overflow-hidden ">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="py-4">
        <div className="flex items-center text-muted-foreground text-[12px] mb-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>{readingTime}</span>
          <span className="mx-2">|</span>
          <span>{date}</span>
        </div>
        <h3 className="text-base font-medium mb-2 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-[12px] font-normal mb-4 line-clamp-2">{description}</p>
        <Link href="#" className="text-[#3674B5] flex items-center gap-1 text-sm font-medium">
          Xəbəri oxu <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}