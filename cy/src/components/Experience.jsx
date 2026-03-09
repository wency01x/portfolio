import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="md:px-8 z-10 w-full max-w-7xl border-white/5 border-t pt-24 pr-4 pb-24 pl-4" id="experience">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl tracking-tight text-white mb-2 font-google-sans-flex font-normal">
            Experience
          </h2>
          <p className="text-white/50 text-base md:text-lg font-extralight tracking-wide max-w-lg font-sans">
            Professional roles and major academic system implementations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Experience 1 */}
        <motion.div
          whileHover={{ y: -5 }}
          className="ios-glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-500 group tiffany-glow relative overflow-hidden cursor-pointer"
        >
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#81D8D0] group-hover:scale-110 transition-all duration-300 mb-6">
            <iconify-icon icon="solar:buildings-linear" width="24" height="24"></iconify-icon>
          </div>
          <h3 className="relative z-10 text-xl text-white tracking-tight mb-1 font-google-sans-flex font-normal">
            Full-Stack Developer
          </h3>
          <p className="relative z-10 text-[#81D8D0] text-xs font-normal tracking-wide uppercase mb-3 font-sans">Office of the University Registrar</p>
          <p className="relative z-10 text-white/50 text-sm leading-relaxed font-extralight font-sans">
            Directed end-to-end development of iREQUEST and LocatR. Managed UI/UX, backend logic, API integration, and system optimization. (Mar - Dec 2025)
          </p>

          {/* Abstract Shape matching Hero Widgets */}
          <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-gradient-to-br from-[#81D8D0] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          whileHover={{ y: -5 }}
          className="ios-glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-500 group tiffany-glow relative overflow-hidden cursor-pointer"
        >
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#81D8D0] group-hover:scale-110 transition-all duration-300 mb-6">
            <iconify-icon icon="solar:document-add-linear" width="24" height="24"></iconify-icon>
          </div>
          <h3 className="relative z-10 text-xl text-white tracking-tight mb-1 font-google-sans-flex font-normal">
            iREQUEST System
          </h3>
          <p className="relative z-10 text-[#81D8D0] text-xs font-normal tracking-wide uppercase mb-3 font-sans">Web Application</p>
          <p className="relative z-10 text-white/50 text-sm leading-relaxed font-extralight font-sans">
            Engineered a Django-based platform to support automated credential requests and record tracking with responsive high-fidelity interfaces.
          </p>

          {/* Abstract Shape matching Hero Widgets */}
          <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-gradient-to-br from-[#81D8D0] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>

        {/* Experience 3 */}
        <motion.div
          whileHover={{ y: -5 }}
          className="ios-glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-500 group tiffany-glow relative overflow-hidden cursor-pointer"
        >
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#81D8D0] group-hover:scale-110 transition-all duration-300 mb-6">
            <iconify-icon icon="solar:map-point-linear" width="24" height="24"></iconify-icon>
          </div>
          <h3 className="relative z-10 text-xl text-white tracking-tight mb-1 font-google-sans-flex font-normal">
            LocatR System
          </h3>
          <p className="relative z-10 text-[#81D8D0] text-xs font-normal tracking-wide uppercase mb-3 font-sans">Desktop Application</p>
          <p className="relative z-10 text-white/50 text-sm leading-relaxed font-extralight font-sans">
            Architected UX frameworks in Figma and developed full-stack data retrieval logic to automate student record tracking efficiency.
          </p>

          {/* Abstract Shape matching Hero Widgets */}
          <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-gradient-to-br from-[#81D8D0] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

