import React from 'react';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 z-50 animate-fade-in">
      <div className="ios-glass rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-2xl">
        <a href="experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-normal text-white/70 font-sans rounded-full pt-2.5 pr-5 pb-2.5 pl-5">
          Experience
        </a>
        <a href="education" onClick={(e) => handleScroll(e, 'education')} className="hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-normal text-white/70 font-sans rounded-full pt-2.5 pr-5 pb-2.5 pl-5">
          Education
        </a>
        <a href="mailto:casino.wency2ustp@gmail.com" className="hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-normal text-white/70 font-sans rounded-full pt-2.5 pr-5 pb-2.5 pl-5">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
