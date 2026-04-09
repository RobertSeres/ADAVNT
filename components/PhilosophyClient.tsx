"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function PhilosophyClient({ 
  steps 
}: { 
  steps: any[] 
}) {
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

  const xBackground = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-full">
      {/* Subtle background text with Parallax */}
      <motion.div 
        style={{ x: xBackground }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/2 select-none pointer-events-none tracking-tighter mix-blend-screen"
      >
        ADVANT
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative z-10">
        {steps.map((step, i) => {
          const start = i / steps.length;
          const end = start + 1 / steps.length;
          return (
            <StepItem key={step.id} step={step} progress={smoothProgress} range={[start, end]} />
          );
        })}
      </div>
    </div>
  );
}

const StepItem = ({ step, progress, range }: { step: any; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [30, 0]);

  return (
    <motion.div style={{ opacity, y }} className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-zinc-700">{step.id}</span>
        <div className="w-8 h-px bg-white/20" />
      </div>
      <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white lowercase leading-tight">
        {step.title}
      </h3>
      <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed lowercase">
        {step.text}
      </p>
    </motion.div>
  );
}
