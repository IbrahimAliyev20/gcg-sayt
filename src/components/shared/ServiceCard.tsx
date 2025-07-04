import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="w-full h-full flex flex-col space-y-4">
      
      <div className="bg-sky-100 text-sky-700 p-3 rounded-lg inline-block w-fit">
        {icon}
      </div>

      <h3 className="text-[20px] font-medium text-slate-800 ">{title}</h3>
      
      <p className="text-slate-500 text-[14px] leading-relaxed flex-grow line-clamp-2">
        {description}
      </p>

      <Link href="#" className="flex  justify-between text-sky-600 font-semibold group w-full">
        <span>Ətraflı</span>
        <ArrowRight className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
      
    </div>
  );
};

export default ServiceCard;