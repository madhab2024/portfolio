import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-[var(--color-primary-pink)] border-b-4 border-[var(--color-brutal-border)] flex items-center justify-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 reveal flex flex-col items-center">
        
        <h2 
          className="font-heading font-black text-[12vw] md:text-9xl uppercase tracking-tighter text-[var(--color-dark-navy)] leading-[0.9] mb-12 relative"
          style={{ textShadow: '8px 8px 0px #0F172A' }}
        >
          READY TO <br/>
          <span className="text-white">BUILD BIG?</span>
        </h2>
        
        <p className="font-subheading font-bold text-2xl text-[var(--color-dark-navy)] max-w-2xl mb-12">
          Let's architect a solution that scales. Stop dealing with bugs and start shipping features.
        </p>
        
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mondalmadhab4231@gmail.com&su=Project%20Inquiry%20from%20Portfolio&body=Hi%20Madhab,%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0A[Please%20write%20your%20message%20here]" 
          target="_blank"
          rel="noopener noreferrer"
          className="neo-brutalist bg-white text-[var(--color-dark-navy)] font-heading font-black text-2xl md:text-4xl px-12 py-6 flex items-center justify-center gap-4 hover:bg-[var(--color-primary-orange)] hover:text-white group"
        >
          HIRE ME
          <ArrowUpRight size={48} className="group-hover:scale-125 transition-transform duration-300" />
        </a>

      </div>
    </section>
  );
};

export default CTASection;
