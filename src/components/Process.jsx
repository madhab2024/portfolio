import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'DISCOVERY', desc: 'Understanding your technical requirements, scaling needs, and overall system goals.' },
    { num: '02', title: 'ARCHITECTURE', desc: 'Designing the database schema, API contracts, and scalable infrastructure.' },
    { num: '03', title: 'DEVELOPMENT', desc: 'Writing clean, testable code for both frontend interfaces and backend services.' },
    { num: '04', title: 'DEPLOYMENT', desc: 'Setting up CI/CD pipelines and deploying to robust cloud environments.' },
  ];

  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Process Steps */}
        <div className="flex flex-col gap-12 reveal">
          <h2 className="font-heading font-black text-6xl md:text-8xl uppercase tracking-tighter text-[var(--color-dark-navy)] mb-4">
            MY <br/><span className="text-[var(--color-primary-pink)]">PROCESS</span>
          </h2>
          
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group flex gap-6 md:gap-10 items-start">
                <div className="font-heading font-black text-6xl md:text-7xl text-stroke text-transparent group-hover:-translate-y-2 group-hover:text-[var(--color-primary-orange)] transition-all duration-300">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading font-black text-3xl md:text-4xl mb-2 text-[var(--color-dark-navy)]">{step.title}</h3>
                  <p className="font-subheading font-bold text-lg text-gray-700 max-w-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Rotated Image */}
        <div className="relative reveal h-full min-h-[500px] flex items-center justify-center p-8 lg:p-0">
          <div className="w-full max-w-md aspect-[3/4] neo-brutalist bg-[var(--color-primary-orange)] rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="My Process" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 mix-blend-multiply"
            />
            
            <div className="absolute top-4 left-4 neo-brutalist bg-white px-4 py-2 font-heading font-black text-xl">
              SYSTEM DESIGN
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
