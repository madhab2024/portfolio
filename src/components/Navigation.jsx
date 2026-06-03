import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="neo-brutalist flex items-center justify-between p-4">
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="font-heading font-black text-3xl tracking-tighter">MADHAB</span>
            <span className="text-[var(--color-primary-pink)] text-4xl leading-none group-hover:rotate-180 transition-transform duration-300">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-heading font-black text-lg">
            <a href="#services" className="hover:text-[var(--color-primary-orange)] transition-colors">SKILLS</a>
            <a href="#work" className="hover:text-[var(--color-primary-teal)] transition-colors">PROJECTS</a>
            <a href="#process" className="hover:text-[var(--color-primary-pink)] transition-colors">PROCESS</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="neo-brutalist bg-[var(--color-primary-teal)] text-white font-heading font-black px-6 py-3 text-lg hover:-translate-y-1 transition-transform inline-block">
              LET'S TALK
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 neo-brutalist bg-[var(--color-primary-orange)] text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 neo-brutalist bg-white p-6 flex flex-col gap-4 font-heading font-black text-2xl">
          <a href="#services" className="hover:text-[var(--color-primary-orange)]" onClick={() => setMobileMenuOpen(false)}>SKILLS</a>
          <a href="#work" className="hover:text-[var(--color-primary-teal)]" onClick={() => setMobileMenuOpen(false)}>PROJECTS</a>
          <a href="#process" className="hover:text-[var(--color-primary-pink)]" onClick={() => setMobileMenuOpen(false)}>PROCESS</a>
          <a href="#contact" className="text-center mt-4 neo-brutalist bg-[var(--color-primary-teal)] text-white py-3" onClick={() => setMobileMenuOpen(false)}>
            LET'S TALK
          </a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
