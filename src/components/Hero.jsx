import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 z-10 reveal">
            <h1 className="font-heading font-black text-[12vw] lg:text-[8vw] leading-[0.9] tracking-tighter uppercase mb-6">
              <span className="block text-[var(--color-dark-navy)]">MADHABB</span>
              <span className="block text-stroke-white" style={{ WebkitTextStroke: '3px var(--color-dark-navy)' }}>MONDAL</span>
              <span className="block text-[var(--color-primary-orange)] text-5xl mt-4">SOFTWARE DEVELOPER</span>
            </h1>
            
            <p className="font-subheading text-xl md:text-2xl max-w-2xl text-[var(--color-dark-navy)] mb-10 font-bold border-l-4 border-[var(--color-brutal-border)] pl-6">
              I have hands-on experience in MERN stack, AWS, and CI/CD, focused on building scalable web and mobile applications.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#work" className="neo-brutalist-btn bg-[var(--color-primary-pink)] text-white">
                VIEW MY CODE <ArrowRight size={24} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 relative flex justify-center lg:justify-end reveal" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Main Circular Container */}
              <div className="absolute inset-0 neo-brutalist rounded-full bg-[var(--color-primary-teal)] border-[6px] overflow-hidden flex items-center justify-center animate-float">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -left-8 md:-left-12 neo-brutalist bg-[#FFD166] p-4 rotate-12 z-20 w-40 text-center">
                <div className="font-heading font-black text-4xl">10K+</div>
                <div className="font-subheading font-bold text-sm">COMMITS</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
