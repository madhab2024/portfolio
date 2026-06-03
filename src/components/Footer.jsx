import React from 'react';
import { Linkedin, Github, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark-navy)] border-t-8 border-black pt-20 pb-10 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 reveal">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 group cursor-pointer mb-6">
              <span className="font-heading font-black text-5xl tracking-tighter text-white">MADHAB</span>
              <span className="text-[var(--color-primary-pink)] text-5xl leading-none group-hover:rotate-180 transition-transform duration-300">.</span>
            </div>
            <p className="font-subheading font-bold text-gray-400 max-w-sm mb-8">
              A full-stack developer building robust, scalable digital platforms and web applications.
            </p>

            {/* Status Badge */}
            <div className="neo-brutalist bg-[var(--color-primary-teal)] text-[var(--color-dark-navy)] p-3 rotate-2 w-fit inline-flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-heading font-black uppercase">OPEN FOR OFFERS</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-black text-2xl text-[var(--color-primary-orange)] mb-6">NAVIGATION</h4>
            <ul className="flex flex-col gap-4 font-subheading font-bold text-lg">
              <li><a href="#services" className="hover:text-white text-gray-400 transition-colors">Skills</a></li>
              <li><a href="#work" className="hover:text-white text-gray-400 transition-colors">Projects</a></li>
              <li><a href="#process" className="hover:text-white text-gray-400 transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-white text-gray-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-black text-2xl text-[var(--color-primary-pink)] mb-6">SUPPORT</h4>
            <a href="https://rzp.io/rzp/IQSVr52w" target="_blank" rel="noopener noreferrer" className="neo-brutalist bg-[var(--color-primary-orange)] text-[var(--color-dark-navy)] p-3 inline-flex items-center gap-3 hover:bg-[var(--color-primary-pink)] hover:text-white transition-colors group">
              <Coffee size={24} className="group-hover:animate-bounce" />
              <span className="font-heading font-black uppercase tracking-tight text-lg">BUY ME A COFFEE</span>
            </a>
          </div>

          <div>
            <h4 className="font-heading font-black text-2xl text-[var(--color-primary-teal)] mb-6">SOCIALS</h4>
            <div className="flex gap-4">
              <a href="https://github.com/madhab2024" target="_blank" rel="noopener noreferrer" className="neo-brutalist bg-white text-[var(--color-dark-navy)] p-3 hover:bg-[var(--color-primary-pink)] hover:text-white"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/madhab-mondal/" target="_blank" rel="noopener noreferrer" className="neo-brutalist bg-white text-[var(--color-dark-navy)] p-3 hover:bg-[var(--color-primary-teal)] hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>

        </div>

        <div className="border-t-4 border-[var(--color-brutal-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-subheading font-bold text-gray-400">
            &copy; {new Date().getFullYear()} MADHAB. ALL RIGHTS RESERVED.
          </p>
          <div className="font-heading font-black text-[var(--color-primary-orange)] text-xl">
            BUILD SOLID
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
