import React from "react";
import { Ship, Users, TrendingUp, Database } from "lucide-react";

const iconClassName = "transition-colors text-black group-hover:text-white";

const iconMap: { [key: string]: React.ReactNode } = {
  "Green Transition Consulting": <Ship size={28} className={iconClassName} />,
  "Research & Analytics": <Database size={28} className={iconClassName} />,
  "Capacity Building & Training": <Users size={28} className={iconClassName} />,
  "Stakeholder Engagement & Dialogue Facilitation": <TrendingUp size={28} className={iconClassName} />,
};

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  const currentIcon = iconMap[title] || <Ship size={28} className={iconClassName} />;

  return (
    <div className="group w-full h-full flex flex-col space-y-4  bg-white hover:bg-[#F7FEFE] rounded-lg p-6 cursor-pointer">
      
      <div
        className="bg-[#EEFFFE] w-[56px] h-[56px] flex items-center justify-center rounded-lg transition-colors  group-hover:bg-[#53B8B8]"
      >
        {currentIcon}
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <div
        className="prose prose-sm max-w-none text-slate-500"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ServiceCard;