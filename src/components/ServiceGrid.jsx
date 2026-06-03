import React from 'react';
import { Monitor, Server, Database, Cloud, Layout, Zap } from 'lucide-react';

const ServiceGrid = () => {
  const services = [
    { title: 'WEB DEV', icon: <Monitor size={64} className="text-[var(--color-primary-teal)]" />, desc: 'Full-stack web applications using the MERN stack (MongoDB, Express, React, Node).' },
    { title: 'MOBILE APPS', icon: <Server size={64} className="text-[var(--color-primary-orange)]" />, desc: 'Cross-platform mobile apps with React Native, Expo, and TypeScript.' },
    { title: 'AI & ML', icon: <Database size={64} className="text-[var(--color-primary-pink)]" />, desc: 'Machine Learning integrations, TensorFlow, Keras, and AI-powered workflow automation.' },
    { title: 'DEVOPS & CLOUD', icon: <Cloud size={64} className="text-[var(--color-primary-orange)]" />, desc: 'Docker, Kubernetes, AWS, NGINX, and robust CI/CD pipelines via GitHub Actions.' },
    { title: 'LANGUAGES', icon: <Layout size={64} className="text-[var(--color-primary-pink)]" />, desc: 'Proficient in Java, JavaScript, TypeScript, Python, HTML, and CSS.' },
    { title: 'DATABASES', icon: <Zap size={64} className="text-[var(--color-primary-teal)]" />, desc: 'Data modeling and messaging with Redis, Apache Kafka, and Supabase.' },
  ];

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4">
      <div className="mb-16 reveal">
        <h2 className="font-heading font-black text-6xl md:text-8xl uppercase tracking-tighter text-[var(--color-dark-navy)]">
          MY <span className="text-[var(--color-primary-orange)]">SKILLS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="neo-brutalist bg-[var(--color-bg-light)] p-8 flex flex-col gap-6 reveal"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="bg-white inline-flex w-fit p-4 border-4 border-[var(--color-brutal-border)] shadow-[4px_4px_0px_0px_#0F172A]">
              {service.icon}
            </div>
            
            <div>
              <h3 className="font-heading font-black text-3xl mb-3 text-[var(--color-dark-navy)]">{service.title}</h3>
              <p className="font-subheading font-bold text-lg text-gray-700">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
