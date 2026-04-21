"use client";

import React from 'react';
import ColorBends from './ColorBends/ColorBends';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Magnetic from './Magnetic';

export function HeroClient({ 
  title, 
  subtitle, 
  ctaText, 
  ctaHref 
}: { 
  title: string; 
  subtitle: React.ReactNode; 
  ctaText: string; 
  ctaHref: string; 
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 50, stiffness: 400 });
  const springY = useSpring(y, { damping: 50, stiffness: 400 });

  const moveX = useTransform(springX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [3, -3]);
  const moveY = useTransform(springY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [3, -3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white" onMouseMove={handleMouseMove}>
      {/* Background */}
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
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="relative z-10 w-full h-full container mx-auto px-6 flex flex-col justify-start pt-[350px] md:pt-[450px] items-start text-left pointer-events-none"
      >
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.8] mb-8 mix-blend-screen drop-shadow-2xl lowercase"
          >
            {title}
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-2xl font-light text-zinc-400 max-w-xl mb-12 lowercase leading-tight"
          >
            {subtitle}
          </motion.h2>
        </div>

        <div className="pointer-events-auto">
          <Magnetic strength={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                href={ctaHref}
                className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-black hover:text-white shadow-2xl inline-block no-underline overflow-hidden"
              >
                <span className="relative z-10">{ctaText}</span>
                <motion.div 
                  className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" 
                />
              </Link>
            </motion.div>
          </Magnetic>
        </div>
      </motion.div>
    </div>
  );
}
