"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });
  
  const displayValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="text-white font-black tabular-nums">
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
};

const TrustStrip = () => {
  const items = [
    { label: "aktív ügyfél", value: 16, suffix: "+" },
    { label: "projekt", value: 100, suffix: "+" },
    { label: "iparágban bizonyított", value: 4, suffix: "+" }
  ];

  return (
    <div id="trust" className="w-full bg-black border-y border-white/10 py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center justify-center">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-2 group transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="text-5xl md:text-7xl mb-2 flex items-baseline gap-1 group-hover:text-neon transition-colors">
                <CountUp value={item.value} suffix={item.suffix} />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-neon transition-all lowercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
