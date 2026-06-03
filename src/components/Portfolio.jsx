import React from 'react';
import { Eye } from 'lucide-react';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

const Portfolio = () => {
  const projects = [
    { title: 'STAYHERE (HOTEL BOOKING)', category: 'MERN / AWS / CI/CD', bg: 'bg-[#FFD166]', image: project1Image },
    { title: 'AI-POWERED CRM', category: 'REACT / SUPABASE', bg: 'bg-[#EF476F]', image: project2Image },
    { title: 'SPLITBILL', category: 'REACT NATIVE / FIREBASE', bg: 'bg-[#118AB2]', image: project3Image },
  ];

  return (
    <section id="work" className="py-24 bg-[var(--color-primary-teal)] border-y-4 border-[var(--color-brutal-border)]">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <h2 className="font-heading font-black text-6xl md:text-8xl uppercase tracking-tighter text-white text-stroke" style={{ WebkitTextStroke: '3px var(--color-dark-navy)' }}>
            FEATURED <br /> WORK
          </h2>
          <a href="https://github.com/madhab2024" target="_blank" rel="noopener noreferrer" className="neo-brutalist-btn bg-white w-fit text-[var(--color-dark-navy)] hover:bg-[var(--color-primary-orange)] hover:text-white">
            VIEW GITHUB
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer reveal" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className={`aspect-video w-full neo-brutalist ${project.bg} relative overflow-hidden mb-6`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                )}
                
                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-4 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <Eye size={48} className="text-[var(--color-dark-navy)]" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <h3 className="font-heading font-black text-3xl text-[var(--color-dark-navy)] bg-white px-4 py-2 border-2 border-[var(--color-brutal-border)] inline-block">
                  {project.title}
                </h3>
                <span className="font-subheading font-bold text-sm md:text-lg bg-[var(--color-primary-orange)] px-3 py-1 border-2 border-[var(--color-brutal-border)]">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
