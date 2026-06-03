import React from 'react';

const Testimonials = () => {
  const achievements = [
    { title: 'BPUT HACKATHON WINNER', role: '2024 & 2025', quote: 'Secured first place in the BPUT Hackathon for two consecutive years by building scalable and innovative software solutions under pressure.' },
    { title: 'VSSUT HACKATHON WINNER', role: 'TOP TIER DEVELOPER', quote: 'Demonstrated exceptional problem-solving and full-stack development skills to win the highly competitive VSSUT Hackathon.' },
    { title: 'CHAKRAVYUH 1.0 ORGANIZER', role: 'LEADERSHIP & TECH', quote: 'Successfully organized and managed Chakravyuh 1.0 Hackathon, fostering a community of developers and guiding technical execution.' },
  ];

  return (
    <section className="py-32 bg-[var(--color-dark-navy)] border-y-4 border-[var(--color-primary-teal)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative reveal">
            <h2 className="font-heading font-black text-6xl md:text-7xl uppercase tracking-tighter text-white mb-6">
              PROVEN <br/><span className="text-[var(--color-primary-teal)]">TRACK</span> <br/>RECORD
            </h2>
            
            {/* Rating Card */}
            <div className="absolute top-0 right-0 lg:static neo-brutalist bg-[var(--color-primary-orange)] p-6 rotate-[-5deg] w-fit mt-8">
              <div className="font-heading font-black text-6xl">3X</div>
              <div className="font-subheading font-bold uppercase">HACKATHON WINNER</div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className="neo-brutalist bg-white p-8 md:p-10 reveal relative"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="font-subheading font-bold text-xl md:text-2xl text-[var(--color-dark-navy)] mb-8 leading-relaxed">
                  {item.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[var(--color-primary-pink)] border-4 border-[var(--color-brutal-border)] rounded-full flex items-center justify-center font-heading font-black text-xl text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-[var(--color-dark-navy)] leading-none mb-1">{item.title}</h4>
                    <span className="font-subheading font-bold text-sm text-gray-600 uppercase">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
