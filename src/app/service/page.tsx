"use client";

import React, { useState } from "react";
import ServiceCard from "@/components/shared/ServiceCard";
import { servicesData } from "@/lib/data/servicesData";

export default function SectionPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 w-full md:w-[600px]">
        <h2 className="text-[#3328BF] text-[14px] font-medium mb-2">
          Xidmətlərimiz
        </h2>
        <h1 className="text-[20px] md:text-[32px] font-medium text-foreground leading-tight">
          Dəniz davamlılığını simulyasiya ilə dəstəkləyirik.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {servicesData.slice(0, visibleCount).map((service, index) => (
          <div key={index} className="bg-card p-6 rounded-lg h-full">
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>

      {visibleCount < servicesData.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="text-sky-600 font-semibold hover:underline px-4 py-2"
          >
            Daha çoxuna bax
          </button>
        </div>
      )}
    </div>
  );
}
