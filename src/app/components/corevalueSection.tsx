"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { corevalues } from "../export";
import Image from "next/image";

const CoreValueSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-4xl md:text-6xl font-demibold mt-4 text-black ">
            The principles that <span className="font-semibold italic bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">Drive Us.</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Interactive Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            {corevalues.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className="group relative text-left py-4 border-b border-white/10 outline-none"
              >
                <span className={`text-xl transition-all duration-300 ${
                  activeIndex === index ? "text-orange-400 pl-4" : "text-gray-500 hover:text-red-300"
                }`}>
                  {item.title}
                </span>
                {activeIndex === index && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: Dynamic Content Display */}
          <div className="w-full lg:w-2/3 min-h-[400px] relative bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="flex-1">
                  <h4 className="text-3xl font-bold mb-6 text-red-400">
                    {corevalues[activeIndex].title}
                  </h4>
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {corevalues[activeIndex].about}
                  </p>
                </div>
                
                {/* Visual Placeholder for the CoreValue image */}
                <div className="w-full md:w-1/2 aspect-square relative overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 relative overflow-hidden">
                    <Image
                      src={corevalues[activeIndex].image} 
                      alt={corevalues[activeIndex].title}
                      fill
                      className="object-contain w-3/4 h-3/4 transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;