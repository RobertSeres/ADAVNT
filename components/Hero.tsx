"use client";

import React from 'react';
import ColorBends from './ColorBends/ColorBends';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 50, stiffness: 400 });
  const springY = useSpring(y, { damping: 50, stiffness: 400 });

  const moveX = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [3, -3]);
  const moveY = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [3, -3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background with reduced opacity for text readability */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          colors={["#FFD700", "#FF00FF", "#FFFFFF"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.45}
          parallax={0}
          noise={0.1}
          transparent
          autoRotate={0}
        />
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="relative z-10 w-full h-full container mx-auto px-6 flex flex-col justify-start pt-[350px] md:pt-[450px] items-start text-left pointer-events-none"
      >
        <h1 className="text-[8vw] md:text-[6.5vw] font-black tracking-tighter leading-[0.85] mb-8 mix-blend-screen animate-fade-in-up drop-shadow-2xl lowercase">
          advant
        </h1>
        <h2 
          className="text-lg md:text-2xl font-light text-zinc-400 max-w-xl mb-12 animate-fade-in-up lowercase leading-tight" 
          style={{ animationDelay: '300ms' }}
        >
          egy márka. több rendszer. <br className="hidden md:block" />
          <span className="text-white font-medium italic">egy cél: növekedés.</span>
        </h2>
        
        <div className="animate-fade-in-up pointer-events-auto" style={{ animationDelay: '600ms' }}>
          <a
            href="#systems"
            className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-zinc-200 active:scale-95 shadow-2xl inline-block no-underline"
          >
            válaszd ki a területed
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
