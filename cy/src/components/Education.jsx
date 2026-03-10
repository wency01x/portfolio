import React from 'react';
import cs50Cert from '../assets/cs50-idb.png';
import ustplogo from '../assets/ustp-logo.jpg';
import apiCert from '../assets/apicert.png';
import googleIO from '../assets/google-io.png';
import apiSec  from '../assets/apiSec.jpg';

const Education = () => {
  return (
    <section className="md:px-8 w-full max-w-7xl z-10 border-white/5 border-t pt-24 pr-4 pb-24 pl-4" id="education">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl tracking-tight text-white mb-2 font-google-sans-flex font-normal">
            Education &amp; Certifications
          </h2>
          <p className="text-white/50 text-base md:text-lg font-extralight tracking-wide max-w-lg font-sans">
            Academic background and professional technical achievements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">
        {/* Education Card 1 */}
        <div className="group ios-glass p-1.5 rounded-[32px] hover:border-white/10 transition-all duration-500">
          <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#111]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black card-image-hover flex items-center justify-center">
              <img 
                src={ustplogo} 
                alt="BS Computer Science" 
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>
          <div className="p-5 flex items-start justify-between">
            <div>
              <h3 className="text-xl text-white tracking-tight group-hover:text-[#38bdf8] transition-colors font-google-sans-flex font-normal">
                BS Computer Science
              </h3>
              <p className="text-sm text-white/40 mt-1 font-extralight font-sans">
                AI-Driven Systems (2023 - 2027)
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-normal text-white/60 tracking-wider uppercase font-sans">
                Undergrad
              </span>
            </div>
          </div>
        </div>

        {/* Certification Card 2 */}
        <div className="group ios-glass p-1.5 rounded-[32px] hover:border-white/10 transition-all duration-500">
          <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#111]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#38bdf8]/10 to-emerald-900/20 card-image-hover flex flex-col items-center justify-center">
              <img 
                src={cs50Cert} 
                alt="CS50 Certificate" 
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>
          <div className="p-5 flex items-start justify-between">
            <div>
              <h3 className="text-xl text-white tracking-tight group-hover:text-[#38bdf8] transition-colors font-google-sans-flex font-normal">
                CS50 Intro to Databases
              </h3>
              <p className="text-sm text-white/40 mt-1 font-extralight font-sans">
                Harvard University (SQL &amp; Design)
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-normal text-white/60 tracking-wider uppercase font-sans">
                SQL
              </span>
            </div>
          </div>
        </div>

        {/* Certification Card 3 */}
        <div className="group ios-glass p-1.5 rounded-[32px] hover:border-white/10 transition-all duration-500">
          <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#111]">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/30 to-black card-image-hover flex items-center justify-center">
              <img 
                src={apiCert} 
                alt="API Security Certificate" 
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>
          <div className="p-5 flex items-start justify-between">
            <div>
              <h3 className="text-xl text-white tracking-tight group-hover:text-[#38bdf8] transition-colors font-google-sans-flex font-normal">
                API Security
              </h3>
              <p className="text-sm text-white/40 mt-1 font-extralight font-sans">
                Postman Academy
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-normal text-white/60 tracking-wider uppercase font-sans">
                Security
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-normal text-white/60 tracking-wider uppercase font-sans">
                Testing
              </span>
            </div>
          </div>
        </div>

        {/* Certification Card 4 */}
        <div className="group ios-glass p-1.5 rounded-[32px] hover:border-white/10 transition-all duration-500">
          <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#111]">
            <div className="card-image-hover flex flex-row gap-6 bg-gradient-to-t from-gray-900 to-black absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
              <img 
                src={googleIO}
                alt="CCNA and Google Certificate" 
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>
          <div className="flex pt-5 pr-5 pb-5 pl-5 items-start justify-between">
            <div>
              <h3 className="text-xl text-white tracking-tight group-hover:text-[#38bdf8] transition-colors font-google-sans-flex font-normal">
                Google I/O
              </h3>
              <p className="text-sm text-white/40 mt-1 font-extralight font-sans">
                 Google Development Group CDO
              </p>
            </div>
          </div>
        </div>
        {/* Certification Card 5 */}
        <div className="group ios-glass p-1.5 rounded-[32px] hover:border-white/10 transition-all duration-500">
          <div className="overflow-hidden rounded-[28px] relative aspect-[4/3] bg-[#111]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/20 to-black card-image-hover flex items-center justify-center">
              <img 
                src={apiSec} 
                alt="APIsec University Certificate" 
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>
          <div className="p-5 flex items-start justify-between">
            <div>
              <h3 className="text-xl text-white tracking-tight group-hover:text-[#38bdf8] transition-colors font-google-sans-flex font-normal">
                APIsec Certified
              </h3>
              <p className="text-sm text-white/40 mt-1 font-extralight font-sans">
                 APIsec University
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-normal text-white/60 tracking-wider uppercase font-sans">
                Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
