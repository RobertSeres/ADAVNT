"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative inline-block mr-3">
      <span className="absolute opacity-10 text-white">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};

const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.75"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  const text = "nem szolgáltatást építünk, hanem rendszereket. az advant minden területen külön fókuszt és szakértelmet teremt. a közös pont: minden megoldásunk célja a mérhető üzleti eredmény.";
  const words = text.split(" ");

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="bg-black pt-16 md:pt-24 pb-24 md:pb-40 border-b border-white/10 relative overflow-hidden group flex items-center"
    >
      {/* Subtle background text - highly transparent for a clean look */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/2 select-none pointer-events-none tracking-tighter">
        ADVANT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Aligned Header */}
          <div className="flex justify-between items-center mb-16 md:mb-24 text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
            <span>02 / PLSPY</span>
            <div className="hidden md:flex gap-20">
              <span className="text-white">filozófia</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center text-center text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] lowercase">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length) * 0.7; // Even tighter word highlight
              return (
                <Word key={i} progress={smoothProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
