"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex flex-col space-y-3 sm:space-y-4">

      <div className="bg-sky-100 text-sky-700 p-2 sm:p-3 rounded-lg inline-block w-fit">
        {icon}
      </div>

      <h3 className="text-lg sm:text-[20px] font-medium text-slate-800 ">{title}</h3>

      <p className={`text-slate-500 text-sm sm:text-[14px] leading-relaxed flex-grow transition-all duration-300 ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-2'
        }`}
      >
        {description}
      </p>

      <button 
        onClick={toggleExpand} 
        className="flex justify-between items-center text-sky-600 font-semibold group w-full text-left cursor-pointer"
      >
        <span>{isExpanded ? 'Gizlət' : 'Ətraflı'}</span>
        
        <ArrowRight className={`h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 ${
            isExpanded ? 'rotate-90' : ''
          }`} 
        />
      </button>

    </div>
  );
};

export default ServiceCard;