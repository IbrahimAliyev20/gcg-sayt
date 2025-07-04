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
    <section className=" py-16 lg:py-24">
      <div>
        <div className=" grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-around  ">
          {/* Sol tərəf - Mətn məzmunu */}
          <div className="space-y-8">
            {/* Başlıq */}
            <div className="space-y-4">
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                Üstünlüklərimiz
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Bizim dənizdəki yolumuz
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Courage is another essential element in transforming dreams into 
                reality. It&apos;s about having the courage to pursue your dreams despite 
                fear, doubt.
              </p>
            </div>

            {/* Xüsusiyyətlər siyahısı */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ tərəf - Şəkil */}
          <div  className='w-[527px] h-[272px] relative mt-4 rounded-3xl overflow-hidden bg-[#D9D9D9]'>
           <Image
            src="/images/herosec.jpg"
            alt="hero"
            width={527}
            height={272}
            className='object-cover'
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventagesSec;