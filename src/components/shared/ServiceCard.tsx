import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="group w-full h-full flex flex-col space-y-4 bg-white hover:bg-[#F7FEFE] rounded-lg p-6 cursor-pointer">
      <div className="relative bg-[#EEFFFE] w-[56px] h-[56px] flex items-center justify-center rounded-lg transition-colors group-hover:bg-[#53B8B8]">
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
        />
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