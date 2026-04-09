"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "growth audit",
    text: "leülünk, átnézzük az üzleted. bevétel, csatornák, szűk keresztmetszetek. nem mi mondjuk meg mit szeretnél — mi mondjuk meg, hol van a növekedés.",
  },
  {
    id: "02",
    title: "rendszer felépítés",
    text: "az audit alapján felépítjük a stratégiát és a végrehajtási tervet. weboldal, tartalom, hirdetések, videó — de csak az, ami neked tényleg kell. nem csomagból dolgozunk, hanem a te számaidból.",
  },
  {
    id: "03",
    title: "havi működés & optimalizálás",
    text: "havonta futtatjuk, mérjük, finomhangoljuk. te egy dashboardon látod az eredményt: hány lead jött, mennyibe került, mennyi lett belőle ügyfél. negyedévente leülünk és stratégiát korrigálunk.",
  },
];

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

  const xBackground = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="bg-black pt-32 pb-24 md:pb-40 border-b border-white/10 relative overflow-hidden"
    >
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Subtle background text with Parallax */}
      <motion.div 
        style={{ x: xBackground }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/2 select-none pointer-events-none tracking-tighter mix-blend-screen"
      >
        ADVANT
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
              02 / PROCESS
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase">
              hogyan működik
            </h2>
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step, i) => {
              const start = i / steps.length;
              const end = start + 1 / steps.length;
              return (
                <Step key={step.id} step={step} progress={smoothProgress} range={[start, end]} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ step, progress, range }: { step: typeof steps[number]; progress: any; range: [number, number] }) => {
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
};

export default Philosophy;
