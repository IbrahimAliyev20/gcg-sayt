import { getOurValue } from '@/lib/our-value';
import React from 'react';

export default async function ValuesSec() {

  const values = await getOurValue();

  return (
    <section className="flex flex-col md:flex-row py-16  bg-background text-foreground">
      <div className="w-full md:w-1/3 pr-0 md:pr-16 mb-8 md:mb-0">
        <p className="text-sm font-medium text-[#1C746F] mb-2">About us</p>
        <h2 className="text-[22px] md:text-4xl font-medium text-foreground">Our Values</h2>
      </div>
      <div className="w-full md:w-2/3 border-l-2  border-[#53B8B8] pl-4 md:pl-16">
        {values.map((value, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h3 className="text-xl font-semibold text-foreground mb-1">{value.title}</h3>
            <p className="text-muted-foreground text-base">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}