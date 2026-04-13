import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 border-t border-white/5 mt-10 md:mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/40 font-sans tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} Wency Casiño. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/40 font-sans">Connect on</span>
          <a 
            href="https://www.linkedin.com/in/wency-casi%C3%B1o-799655337/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 hover:text-[#38bdf8] text-white/80 transition-all duration-300 group backdrop-blur-sm"
          >
            <iconify-icon icon="mdi:linkedin" width="18" height="18" class="group-hover:scale-110 transition-transform"></iconify-icon>
            <span className="text-sm font-sans tracking-wide">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
