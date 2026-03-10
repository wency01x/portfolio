import React from 'react';

const Footer = () => {
  return (
    <div className="w-full text-center py-12 border-t border-white/5 mt-10">
      <p className="text-xs text-white/20 uppercase tracking-widest mb-4 font-sans">
        CONNECT WITH ME
      </p>
      <div className="flex justify-center gap-6">
        <a href="#" className="text-xs text-white/40 hover:text-white transition-colors font-sans">
          GitHub
        </a>
        <a href="#" className="text-xs text-white/40 hover:text-white transition-colors font-sans">
          LinkedIn
        </a>
        <a href="mailto:casino.wency2ustp@gmail.com" className="text-xs text-white/40 hover:text-white transition-colors font-sans">
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
