import Image from 'next/image'
import React from 'react'

function AboutPage() {
  return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#3328BF] text-sm font-medium mb-2">About us</p>
          <h1 className="text-[22px] sm:text-[32px] font-medium text-foreground mb-8">Who We Are</h1>
          <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
            In the context of business, value refers to the benefits or advantages a product,
            service, or proposition offers to customers or stakeholders. It s about meeting the
            needs, solving the problems, or fulfilling the desires of customers in a way that
            exceeds their expectations and delivers meaningful outcomes. Courage is another
            essential element in transforming dreams into reality. It s about having the courage
            to pursue your dreams despite fear, doubt.
          </p>
          <p className="text-muted-foreground text-base font-normal mb-6 leading-relaxed">
            In the context of business, value refers to the benefits or advantages a product,
            service, or proposition offers to customers or stakeholders. It s about meeting the
            needs, solving the problems, or fulfilling the desires of customers in a way that
            exceeds their expectations and delivers meaningful outcomes.
          </p>
        </div>

        <div className="relative w-full min-h-[250px] lg:min-h-[500px]">
          <Image
            src="/images/abouthero1.jpeg"
            alt="Boat on water"
            width={400}
            height={280}
            className="absolute top-0 right-0 object-cover rounded-4xl w-[236px] h-[166px] md:w-[400px] md:h-[280px] "
          />
          <Image
            src="/images/abouthero2.jpeg"
            alt="Boats in a cove"
            width={380}
            height={280}
            className="w-[200px] h-[142px]  md:w-[380px] md:h-[280px] absolute bottom-5 left-0 object-cover rounded-4xl z-10 border-12 border-white"
          />
        </div>
      </div>
  )
}

export default AboutPage