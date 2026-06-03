import React from 'react';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle as WhatsApp alternative from Lucide

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/9907347792" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-20 h-20 bg-[#25D366] border-4 border-black flex items-center justify-center text-white hover:scale-110 active:scale-90 transition-transform duration-300 shadow-[6px_6px_0px_0px_#000] lg:rounded-2xl rounded-[1.5rem]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={48} className="fill-current" />
    </a>
  );
};

export default FloatingWhatsApp;
