import Image from "next/image"; 
import ServiceCard from "@/components/shared/ServiceCard";
import { servicesData } from "@/lib/data/servicesData";
import Link from "next/link";

export default function SectionPage() {

  return (
    <div>
      <div className="relative w-full h-[350px] md:h-[400px]  overflow-hidden mb-12">
        <Image
          src="/images/heroservice.jpg" 
          alt="Cargo ship for green services"
          fill
          priority 
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#092C3ABD]/90" />

        <div className="container mx-auto relative z-10 h-full flex items-center px-4">
          <h1 className="text-[48px] font-semibold text-white">
            Efficient, Green, Reliable Services
          </h1>
        </div>
      </div>
    <div className="container mx-auto px-4 py-12">
    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <Link href='#' target="_blank" rel="noopener noreferrer"  key={index}>
          <div className="bg-white   h-full hover:bg-[#F7FEFE] cursor-pointer">
            
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              services={service.services}
            />
          </div>
            </Link>

        ))}
      </div>


    </div>

    </div>
  );
}