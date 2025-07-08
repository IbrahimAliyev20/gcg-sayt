import React from 'react';
import Link from 'next/link';
import { TeamCard } from '../shared/Team-card';
import { ArrowUpRight } from 'lucide-react';

export function TeamSec() {
  const TeamItems = [
    {
      imageSrc: "/images/team1.jpg",
      name: 'Jane Black',
      description: 'Embark on a journey to discover the allure and beauty of high altitude...',
    },
    {
      imageSrc: "/images/team2.jpg",
      name: 'Ebulfaz Sadigov ',
      description: 'Embark on a journey to discover the allure and beauty of high altitude...',
    },
    {
      imageSrc: "/images/team1.jpg",
      name: 'Jane Black',
      description: 'Embark on a journey to discover the allure and beauty of high altitude...',
    },
    {
      imageSrc: "/images/team2.jpg",
      name: 'Jane Black',
      description: 'Embark on a journey to discover the allure and beauty of high altitude...',
    },
  ];

  return (
    <section className="container mx-auto py-8 md:py-18 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
        <span className='text-[#1C746F] text-sm font-medium'>Our Team</span>
        <h2 className="text-[22px] sm:text-[32px] font-medium mb-4 sm:mb-0">Together, we build better.</h2>
        </div>
        <Link href="#" className="hidden sm:flex text-[#3674B5] items-center gap-1">
          See More <ArrowUpRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TeamItems.map((item, index) => (
          <TeamCard key={index} {...item} />
        ))}
      </div>
      
      <div className="flex justify-end mt-8 sm:hidden">
        <Link href="#" className="text-[#3674B5] flex items-center gap-1">
          Daha çoxuna bax
        </Link>
      </div>
    </section>
  );
}