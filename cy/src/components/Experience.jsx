import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.5 1"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  const projects = [
    {
      title: "VIP Booking System",
      tech: "Three-Tier Architecture, Distributed Systems, PostgreSQL, Asyncio",
      desc: "A full-stack, high-concurrency event ticketing platform designed to handle real-time movie theater seat reservations. Built to withstand race conditions using production-ready system design principles like Pessimistic Locking for concurrency control and background asyncio workers for automated cart expiration.",
      icon: "solar:ticket-linear",
      image: "/src/assets/on-hold.png"
    },
    {
      title: "AI-Powered LinkedIn Content System",
      tech: "AI Integration, Automation, Lead Generation",
      desc: "An AI-powered content system that researches, writes, and schedules LinkedIn posts designed to build authority and generate inbound leads on autopilot.",
      icon: "lucide:bot",
      image: "/src/assets/linked-in.png"
    },
    {
      title: "DBMind Agent",
      tech: "Python, FastAPI, PostgreSQL, pgvector, Gemini API",
      desc: "An AI agent that allows users to query their database in plain English. The system stores database schemas using embeddings, translates natural language into SQL, executes the query, and explains the answer.",
      icon: "solar:database-line-duotone",
      image: "/src/assets/dbmind.png"
    },
    {
      title: "iREQUEST: Online Credential Request System",
      tech: "Full-stack Web Development, Payment Integration",
      desc: "A full-stack web application with admin verification and payment monitoring. It handles requests for student credentials and allows administrators to track, verify, and approve them.",
      icon: "solar:document-text-linear",
      image: "/src/assets/login.png"
    },
    {
      title: "Formal Language Theory Simulator",
      tech: "C++, Automata Theory (NFA/DFA/PDA), Bioinformatics",
      desc: "A C++ simulator exploring Formal Language Theory in information retrieval and bioinformatics. It compiles user queries into NFAs/DFAs for pattern matching and implements Pushdown Automata.",
      icon: "lucide:code",
      image: "/src/assets/automata.png"
    },
    {
      title: "Redis-PubSub-Chat",
      tech: "Python, Redis, Pub/Sub, Distributed Systems",
      desc: "A real-time, terminal-based chat application demonstrating distributed system design. It utilizes Cloud Redis as a centralized message broker and Python's threading module.",
      icon: "solar:chat-round-line-linear",
      image: "/src/assets/redis.png"
    },
    {
      title: "LocatR - Student Record Locator System",
      tech: "Python, CustomTkinter (GUI), SQLite, QR Code",
      desc: "A desktop application commissioned by a University Registrar to manage student data and geographical locations. Features include dynamic search, duplicate validation, and automated QR code generation.",
      icon: "solar:map-point-linear",
      image: "/src/assets/main.png"
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
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="ios-glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-500 group relative flex flex-col justify-between hover:z-50"
          >
            <div>
              {/* Image Placeholder */}
              <div 
                className="relative z-20 w-full h-48 mb-6 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#38bdf8]/50 transition-all duration-500 group-hover:scale-[1.05] group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] origin-bottom cursor-pointer"
                onClick={() => setSelectedImage(project.image || "/src/assets/on-hold.png")}
              >
                <img 
                  src={project.image || "/src/assets/on-hold.png"} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#38bdf8] group-hover:scale-110 transition-all duration-300 mb-6 border border-white/5">
                <iconify-icon icon={project.icon} width="24" height="24"></iconify-icon>
              </div>

              <h3 className="relative z-10 text-xl text-white tracking-tight mb-2 font-google-sans-flex font-normal">
                {project.title}
              </h3>

              <p className="relative z-10 text-white/50 text-sm leading-relaxed font-extralight font-sans mb-4">
                {project.desc}
              </p>
            </div>

            <p className="relative z-10 text-[#38bdf8] text-xs font-normal tracking-wide uppercase mt-4 pt-4 border-t border-white/10 font-sans">
              {project.tech}
            </p>
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
