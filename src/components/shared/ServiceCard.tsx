import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  services: string[];
}

const ServiceCard = ({ icon, title, services }: ServiceCardProps) => {
  return (
    <div className="w-full flex flex-col space-y-3 sm:space-y-4 p-4">
      <div className="bg-sky-100 text-sky-700 p-2 sm:p-3 rounded-lg inline-block w-fit">
        {icon}
      </div>

      <h3 className="text-lg sm:text-[20px] font-medium text-slate-800">
        {title}
      </h3>

      <ul className="space-y-2 list-disc list-inside">
        {services.map((service, index) => (
          <li
            key={index} 
            className="text-slate-500 text-sm sm:text-[14px]  line-clamp-1"
          >
            
            • {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;