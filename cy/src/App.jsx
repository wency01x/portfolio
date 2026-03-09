import React from 'react';
import './App.css';
import BackgroundAmbiance from './components/BackgroundAmbiance';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col items-center selection:bg-[#81D8D0] selection:text-black text-white bg-black w-full relative">
      <BackgroundAmbiance />
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
