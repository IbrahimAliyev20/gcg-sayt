import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { getOurServices } from "@/lib/our-service";
import { getHero } from "@/lib/hero";

export async function ServiceSec() {
  const [, heroDataArr] = await Promise.all([
    getOurServices(),
    getHero(),
  ]);

  const serviceHero = heroDataArr.find((h) => h.name === "Service");

  return (
    <section className="py-8 md:py-20 bg-white">
      <div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Sol Tərəf (70%) */}
          <div className="flex flex-col justify-between md:w-[55%]">
            <div>
              <p className="text-teal-600 text-sm font-semibold mb-2 tracking-wider">
                Our Services
              </p>
              <h2 className="text-[22px] md:text-[32px] font-medium text-gray-900 mb-4">
                {serviceHero?.title || "Efficient, Green, Reliable Services"}
              </h2>
          
            </div>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[313px] relative mt-8 md:mt-0">
              <Image
                src="/images/service.jpg"
                alt="Ship with modern wind sails"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Sağ Tərəf (30%) */}
          <div className="w-full md:w-[45%] flex flex-col justify-between">
            <div className="w-full h-full justify-center items-center flex flex-wrap gap-6 md:gap-8 text-[18px]">
              Caspian Green Galleon offers a wide range of research, advisory,
              and capacity-building services tailored to support the green
              transition in the Caspian region. Our services are designed to
              meet the needs of international organizations, governments, and
              private stakeholders seeking to implement sustainable energy and
              environmental policies.
            </div>
            <div className="text-center mt-8 md:mt-auto pt-6">
              <Link
                href="/service"
                className="inline-flex items-center font-semibold text-teal-600 hover:text-teal-700 transition-colors group"
              >
                See All Services
                <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}