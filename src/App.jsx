import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MarqueeBelt from './components/MarqueeBelt';
import ServiceGrid from './components/ServiceGrid';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  // Intersection Observer for scroll animations (Theme Rotation Reveal)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-grid min-h-screen">
      <Navigation />
      <Hero />
      <MarqueeBelt />
      <ServiceGrid />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
