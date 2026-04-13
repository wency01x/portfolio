import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="md:px-8 w-full max-w-7xl z-10 pt-32 pr-4 pb-10 pl-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#38bdf8]"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
          </span>
          <span className="text-[#38bdf8] text-xs font-sans tracking-wide">Available for work</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-google-sans-flex font-semibold tracking-tight text-white mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-white/60 font-sans text-lg mb-12">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message!
        </p>

        <a
          href="mailto:casino.wency2ustp@gmail.com"
          className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-normal hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 hover:text-[#38bdf8] transition-all duration-300 backdrop-blur-sm"
        >
          <span className="font-sans text-lg">Send me an email</span>
          <iconify-icon icon="solar:letter-linear" width="24" height="24" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
