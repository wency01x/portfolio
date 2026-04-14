import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import onHoldImg from '../assets/on-hold.png';
import linkedInImg from '../assets/linked-in.png';
import dbmindImg from '../assets/dbmind.png';
import loginImg from '../assets/login.png';
import automataImg from '../assets/automata.png';
import redisImg from '../assets/redis.png';
import mainImg from '../assets/main.png';

const Experience = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const firstChild = current.children[0];
      const cardWidth = firstChild ? firstChild.offsetWidth + 24 : 350;
      current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.5 1"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const projects = [
    {
      title: "VIP Booking System",
      tech: "Three-Tier Architecture, Distributed Systems, PostgreSQL, Asyncio",
      desc: "A full-stack, high-concurrency event ticketing platform designed to handle real-time movie theater seat reservations. Built to withstand race conditions using production-ready system design principles like Pessimistic Locking for concurrency control and background asyncio workers for automated cart expiration.",
      icon: "solar:ticket-linear",
      image: onHoldImg
    },
    {
      title: "AI-Powered LinkedIn Content System",
      tech: "AI Integration, Automation, Lead Generation",
      desc: "An AI-powered content system that researches, writes, and schedules LinkedIn posts designed to build authority and generate inbound leads on autopilot.",
      icon: "lucide:bot",
      image: linkedInImg
    },
    {
      title: "DBMind Agent",
      tech: "Python, FastAPI, PostgreSQL, pgvector, Gemini API",
      desc: "An AI agent that allows users to query their database in plain English. The system stores database schemas using embeddings, translates natural language into SQL, executes the query, and explains the answer.",
      icon: "solar:database-line-duotone",
      image: dbmindImg
    },
    {
      title: "iREQUEST: Online Credential Request System",
      tech: "Full-stack Web Development, Payment Integration",
      desc: "A full-stack web application with admin verification and payment monitoring. It handles requests for student credentials and allows administrators to track, verify, and approve them.",
      icon: "solar:document-text-linear",
      image: loginImg
    },
    {
      title: "Formal Language Theory Simulator",
      tech: "C++, Automata Theory (NFA/DFA/PDA), Bioinformatics",
      desc: "A C++ simulator exploring Formal Language Theory in information retrieval and bioinformatics. It compiles user queries into NFAs/DFAs for pattern matching and implements Pushdown Automata.",
      icon: "lucide:code",
      image: automataImg
    },
    {
      title: "Redis-PubSub-Chat",
      tech: "Python, Redis, Pub/Sub, Distributed Systems",
      desc: "A real-time, terminal-based chat application demonstrating distributed system design. It utilizes Cloud Redis as a centralized message broker and Python's threading module.",
      icon: "solar:chat-round-line-linear",
      image: redisImg
    },
    {
      title: "LocatR - Student Record Locator System",
      tech: "Python, CustomTkinter (GUI), SQLite, QR Code",
      desc: "A desktop application commissioned by a University Registrar to manage student data and geographical locations. Features include dynamic search, duplicate validation, and automated QR code generation.",
      icon: "solar:map-point-linear",
      image: mainImg
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="md:px-8 z-10 w-full max-w-7xl border-white/5 border-t pt-24 pr-4 pb-24 pl-4" 
      id="experience"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl tracking-tight text-white mb-2 font-google-sans-flex font-normal">
            Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/50 text-base md:text-lg font-extralight tracking-wide max-w-lg font-sans">
            Professional roles and major academic system implementations.
          </motion.p>
        </motion.div>

        {/* Carousel Navigation Arrows */}
        <div className="flex gap-3 relative z-20">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all bg-transparent"
          >
            <iconify-icon icon="solar:alt-arrow-left-linear" width="24" height="24"></iconify-icon>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all bg-[#1a1a1a]"
          >
            <iconify-icon icon="solar:alt-arrow-right-linear" width="24" height="24"></iconify-icon>
          </button>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="snap-start shrink-0 self-stretch w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#131315] hover:bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-all duration-500 rounded-[24px] overflow-hidden group flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
          >
            {/* Image Wrapper (no padding, edge-to-edge) */}
            <div 
              className="relative w-full h-52 sm:h-60 shrink-0 overflow-hidden bg-white/5 cursor-pointer border-b border-white/5"
              onClick={() => setSelectedImage(project.image || "/src/assets/on-hold.png")}
            >
              <img 
                src={project.image || "/src/assets/on-hold.png"} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-[22px] font-bold text-white tracking-tight mb-3">
                {project.title}
              </h3>

              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Bottom Tags/Tech Pills replacing tech string */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.split(',').map((techItem, i) => (
                  <span 
                    key={i} 
                    className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/50 text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap"
                  >
                    {techItem.trim()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <div className="relative">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Project Full View"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10 relative z-10"
                onClick={(e) => e.stopPropagation()}
              />
              <button 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-white/50 hover:text-[#38bdf8] bg-black hover:bg-white/10 border border-white/10 rounded-full p-2 backdrop-blur-md transition-all outline-none z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <iconify-icon icon="solar:close-circle-linear" width="24" height="24"></iconify-icon>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
