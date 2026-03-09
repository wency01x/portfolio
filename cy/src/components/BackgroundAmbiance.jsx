import React from 'react';

const BackgroundAmbiance = () => {
  return (
    <>
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07] animate-fade-in pointer-events-none z-0 bg-sky-900"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.1] animate-fade-in pointer-events-none z-0"></div>
    </>
  );
};

export default BackgroundAmbiance;
