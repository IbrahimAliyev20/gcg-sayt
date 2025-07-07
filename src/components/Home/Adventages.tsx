'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

const AdventagesSec = () => {
  const features = [
    {
      id: 1,
      text: "Qlobal təcrübə və yerli biliklər birləşdirik."
    },
    {
      id: 2,
      text: "Müştəri məmnuniyyəti bizim prioritetimizdir."
    },
    {
      id: 3,
      text: "Texnologiya və yaradıcılıq bir arada gətirərək irəliləyirik."
    }
  ];

  return (
    <section className="py-8  md:py-18">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-around">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-blue-600 font-normal text-sm ">
                Üstünlüklərimiz
              </p>
              <h2 className="text-[32px] font-medium text-gray-900 leading-tight">
                Bizim dənizdəki yolumuz
              </h2>
              <p className="text-gray-600 text-base  leading-relaxed">
                Courage is another essential element in transforming dreams into
                reality. It&apos;s about having the courage to pursue your dreams despite
                fear, doubt.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='w-full h-[200px] sm:h-[272px] relative mt-4 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#D9D9D9]'>
            <Image
              src="/images/herosec.jpg"
              alt="hero"
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventagesSec;