
import Image from "next/image"; 
import ServiceCard from "@/components/shared/ServiceCard";
import { getOurServices } from "@/lib/our-service";
import { getHero } from "@/lib/hero";

export default async function ServicesPage() {
  const [servicesResponse, heroDataArr] = await Promise.all([
    getOurServices(),
    getHero()
  ]);

  const allServices = servicesResponse.data;
  const serviceHero = heroDataArr.find(h => h.name === 'Service');

  return (
    <div>
      <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden mb-12">
        <Image
          src={serviceHero?.image || "/images/heroservice.jpg"} 
          alt={serviceHero?.title || "Cargo ship for green services"}
          fill
          priority 
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#092C3ABD]/90" />
        <div className="container mx-auto relative z-10 h-full flex items-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white max-w-3xl">
            {serviceHero?.title || "Efficient, Green, Reliable Services"}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((service, index) => (
           
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
          ))}
        </div>
      </div>
    </div>
  );
}