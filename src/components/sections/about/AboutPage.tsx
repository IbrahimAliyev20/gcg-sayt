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

        <div className="relative w-full ">
          <Image
            src="/images/aboutus.jpg"
            alt="Ship with green shipping sails"
            width={527}
            height={272}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
  )
}

export default AboutPage