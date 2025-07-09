import React from 'react';

export function ValuesSec() {
  const values = [
    {
      title: 'Objectivity',
      description: 'We base our work on facts, evidence, and impartial analysis.',
    },
    {
      title: 'Reliability',
      description: 'We deliver high-quality services with consistency and professionalism.',
    },
    {
      title: 'Transparency',
      description: 'We promote openness in our methods, partnerships, and decision-making processes.',
    },
    {
      title: 'Sustainability',
      description: 'We prioritize long-term impact and resilient solutions in every initiative we lead.',
    },
    {
      title: 'Inclusiveness',
      description: 'We believe in collaborative approaches that value diversity and shared ownership.',
    },
  ];

  return (
    <section className="flex flex-col md:flex-row py-16 px-4 md:px-8 lg:px-16 bg-background text-foreground">
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