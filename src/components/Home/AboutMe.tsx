import React from 'react';
import { Button } from '@/components/ui/button'; 
export function AboutMe() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">

          <div className="flex flex-col h-full justify-between ">
            <div>
            <p className="font-medium text-sm text-blue-600">Biz kimik ?</p>
            <h2 className="text-[32px] font-medium  text-slate-800 ">
              Dəyərlərimiz və məqsədimiz
            </h2>
            </div>
            <div className="pt-4">
              <Button variant="default" className="bg-[#3674B5] text-white font-semibold py-3 px-7 rounded-lg hover:bg-[#3673b5] transition-colors duration-300">
                Daha çox məlumat al
              </Button>
            </div>
          </div>

          <div className="flex flex-col text-base space-y-5 text-[#999B9E] leading-relaxed ">
            <p>
              In the context of business, value refers to the benefits or advantages a product, service, or
              proposition offers to customers or stakeholders. It&apos;s about meeting the needs, solving the
              problems, or fulfilling the desires of customers in a way that exceeds their expectations and
              delivers meaningful outcomes.
            </p>
            <p>
              Courage is another essential element in transforming dreams into reality. It&apos;s about having the
              courage to pursue your dreams despite fear, doubt.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}