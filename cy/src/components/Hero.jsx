import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heroprofile from '../assets/heroprofile.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [commits, setCommits] = useState('200+');

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        // Clear old stale cache keys from previous versions
        localStorage.removeItem('github_commits');
        localStorage.removeItem('github_commits_time');

        const cached = localStorage.getItem('github_contributions_v2');
        const cachedTime = localStorage.getItem('github_contributions_time_v2');

        // Use cache if less than 1 hour old
        if (cached && cachedTime && (Date.now() - parseInt(cachedTime)) < 3600000) {
          setCommits(`${cached}+`);
          return;
        }

        const response = await fetch('https://github-contributions-api.deno.dev/wency01x.json');
        const data = await response.json();

        if (data.totalContributions) {
          const rounded = Math.floor(data.totalContributions / 100) * 100;
          setCommits(`${rounded}+`);
          localStorage.setItem('github_contributions_v2', rounded.toString());
          localStorage.setItem('github_contributions_time_v2', Date.now().toString());
        } else {
          console.log("GitHub Contributions API Error:", data);
          if (cached) {
            setCommits(`${cached}+`);
          }
        }
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
    };

    fetchCommits();
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main className="lg:px-8 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 min-h-screen w-full max-w-7xl z-10 pt-20 pr-4 pb-10 pl-4 gap-x-6 gap-y-10 items-center">
        {/* Left Column: Title & Intro */}
        <motion.div
          className="lg:col-span-7 flex flex-col lg:gap-8 gap-x-6 gap-y-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="lg:text-8xl md:text-7xl leading-none bg-clip-text text-5xl sm:text-6xl font-semibold text-transparent tracking-tight font-google-sans-flex bg-gradient-to-b from-white via-white to-white/50">
              Wency
              <br />
              Casiño
            </h1>
            <p className="lg:text-xl md:text-lg leading-relaxed text-base sm:text-lg font-normal text-white/50 tracking-wide font-google-sans-flex max-w-md mt-6">
              Computer Science undergraduate specializing in Backend Engineering. Backend Developer focused on building scalable databases and robust server-side applications.
            </p>
          </motion.div>

          {/* Action Area */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={() => setShowResume(true)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              className="ios-glass group w-fit rounded-[28px] p-5 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-start">
                <span className="text-white group-hover:text-[#38bdf8] text-lg font-normal tracking-tight font-google-sans-flex transition-colors duration-300">
                  View Resume
                </span>
              </div>
              <div className="relative z-10 p-2.5 rounded-2xl bg-white/5 text-white/50 group-hover:text-[#38bdf8] group-hover:bg-[#38bdf8]/10 transition-all duration-300">
                <iconify-icon icon="solar:document-text-linear" width="22" height="22"></iconify-icon>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: iOS Widgets Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4 opacity-0 animate-fade-in animate-delay-300">
          {/* Widget Container */}
          <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Profile Card */}
            <motion.a
              href="experience"
              onClick={(e) => handleScroll(e, 'experience')}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              className="ios-glass rounded-[32px] pl-4 pr-6 py-6 sm:p-6 col-span-1 sm:col-span-2 flex items-center hover:bg-white/5 transition-colors duration-500 group tiffany-glow cursor-pointer relative min-h-[112px] sm:min-h-[124px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
                {/* Abstract Shape */}
                <div className="absolute right-[-20px] bottom-[-40px] w-32 h-32 bg-gradient-to-br from-[#38bdf8] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              <div className="relative z-10 w-[60%] sm:w-full flex items-center">
                <p className="text-white font-normal text-base sm:text-lg font-sans leading-snug">
                  Full-Stack Developer
                </p>
              </div>

              {/* Overlapping Profile Image */}
              <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 flex justify-end pr-4 sm:pr-8 md:pr-12">
                <img
                  src={Heroprofile}
                  alt="Wency G. Casino"
                  className="w-auto h-48 md:h-56 object-cover object-bottom"
                />
              </div>
            </motion.a>

            {/* Stats Widget */}
            <motion.a
              href="education"
              onClick={(e) => handleScroll(e, 'education')}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-white/5 transition-colors cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10 flex justify-between items-start">
                <div className="p-2 rounded-xl bg-white/5 text-white/60 group-hover:text-[#38bdf8] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" data-icon-set="solar" data-solar="diploma-linear">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="16" r="3"></circle>
                      <path d="m12 19.26l-2.263 2.17c-.324.31-.486.465-.623.52c-.313.122-.66.017-.824-.25c-.072-.117-.095-.328-.14-.75c-.025-.239-.038-.358-.077-.458a.83.83 0 0 0-.5-.48c-.104-.037-.229-.049-.477-.073c-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.52c.313.122.66.017.824-.25c.072-.117.095-.328.14-.75c.025-.239.038-.358.077-.458a.83.83 0 0 1 .5-.48c.105-.037.229-.049.477-.073c.44-.043.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17L15 16.073"></path>
                      <path d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v4c0 2.828 0 4.243.879 5.121c.768.769 1.946.865 4.121.877"></path>
                      <path strokeLinecap="round" d="M9 6h6M7 9.5h10"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-2xl text-white tracking-tight font-google-sans-flex font-normal">
                  5+
                </div>
                <div className="text-xs text-white/40 mt-1 font-sans">Certifications</div>
              </div>
              {/* Abstract Shape */}
              <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-gradient-to-br from-[#38bdf8] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.a>

            {/* GitHub Commits Widget */}
            <motion.a
              href="https://github.com/wency01x"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              className="ios-glass flex flex-col group hover:bg-white/5 transition-colors rounded-[32px] pt-5 pr-5 pb-5 pl-5 justify-between relative overflow-hidden cursor-pointer tiffany-glow"
            >
              <div className="relative z-10 flex justify-between items-start w-full">
                <div className="p-2 rounded-xl bg-white/5 text-white/60 group-hover:text-[#38bdf8] transition-colors">
                  <iconify-icon icon="mdi:github" width="22" height="22"></iconify-icon>
                </div>
                <div className="p-1.5 rounded-full bg-white/5 text-white/40 group-hover:bg-[#38bdf8]/20 group-hover:text-[#38bdf8] transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16"></iconify-icon>
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-2xl text-white tracking-tight font-google-sans-flex font-normal">
                  {commits}
                </div>
                <div className="text-xs text-white/40 mt-1 font-sans">GitHub Commits</div>
              </div>
              {/* Abstract Shape */}
              <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-gradient-to-br from-[#38bdf8] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.a>

            {/* Skill Stack / Visual */}
            <motion.a
              href="experience"
              onClick={(e) => handleScroll(e, 'experience')}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              className="ios-glass rounded-[32px] col-span-1 sm:col-span-2 row-span-1 p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h4 className="text-white font-normal text-lg tracking-tight font-sans">
                  Core Stack
                </h4>
                <div className="flex gap-3 mt-3">
                  <iconify-icon icon="solar:code-linear" width="20" height="20" class="text-white/60 group-hover:text-[#38bdf8] transition-colors"></iconify-icon>
                  <iconify-icon icon="solar:database-linear" width="20" height="20" class="text-white/60 group-hover:text-[#38bdf8] transition-colors"></iconify-icon>
                  <iconify-icon icon="solar:server-square-linear" width="20" height="20" class="text-white/60 group-hover:text-[#38bdf8] transition-colors"></iconify-icon>
                </div>
              </div>

              {/* Abstract Shape */}
              <div className="absolute right-[-20px] bottom-[-40px] w-32 h-32 bg-gradient-to-br from-[#38bdf8] to-transparent rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.a>
          </div>
        </div>
      </main>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-4xl h-[85vh] flex flex-col ios-glass border-[#38bdf8]/30 rounded-[32px] overflow-hidden shadow-[0_0_60px_-15px_rgba(129,216,208,0.3)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
                <h3 className="text-white font-google-sans-flex text-lg tracking-tight ml-4">Resume</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download="Wency_Casino_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] text-sm hover:bg-[#38bdf8] hover:text-black transition-colors"
                  >
                    <iconify-icon icon="solar:download-square-linear" width="18" height="18"></iconify-icon>
                    Download PDF
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <iconify-icon icon="solar:close-circle-linear" width="24" height="24"></iconify-icon>
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 w-full bg-black/50 p-2 relative">
                <iframe
                  src={`${import.meta.env.BASE_URL}resume.pdf#toolbar=0`}
                  className="w-full h-full rounded-[24px] bg-white"
                  title="Wency Casino Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
