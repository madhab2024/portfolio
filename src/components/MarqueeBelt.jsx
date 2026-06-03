import React from 'react';
import { Database, Server, Terminal, Code2, Layers } from 'lucide-react';

const MarqueeBelt = () => {
  const items = [
    { text: 'MERN STACK', icon: <Code2 className="text-[var(--color-primary-orange)]" size={32} /> },
    { text: 'REACT NATIVE', icon: <Layers className="text-[var(--color-primary-teal)]" size={32} /> },
    { text: 'MACHINE LEARNING', icon: <Terminal className="text-[var(--color-primary-pink)] fill-current" size={32} /> },
    { text: 'AWS & CI/CD', icon: <Database className="text-[var(--color-primary-orange)]" size={32} /> },
    { text: 'TYPESCRIPT', icon: <Server className="text-[var(--color-primary-teal)]" size={32} /> },
  ];

  return (
    <div className="w-full bg-[var(--color-dark-navy)] border-y-4 border-[var(--color-primary-orange)] py-6 overflow-hidden reveal">
      <div className="animate-marquee-content gap-12">
        {/* Render items twice for infinite loop effect */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-heading font-black text-white text-4xl whitespace-nowrap">
              {item.text}
            </span>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBelt;
