"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import Grainient from './Grainient';

type Service = {
  title: string;
  description: string;
  details: string[];
  ctaText: string;
  colors: string[];
};

const services: Service[] = [
  {
    title: "stratégia & üzleti intelligencia",
    description: "üzleti audit, növekedési terv, KPI-k, negyedéves review. nem marketinget csinálunk — üzletet építünk.",
    details: [
      "teljes üzleti folyamat átvilágítás és audit",
      "egyedi növekedési stratégia kidolgozása",
      "KPI alapú mérési keretrendszer felállítása",
      "negyedéves stratégiai felülvizsgálat és finomhangolás",
      "piaci pozícionálás és versenytárs elemzés"
    ],
    ctaText: "Részletek →",
    colors: ["#22c55e", "#000000", "#111111"]
  },
  {
    title: "webfejlesztés & konverzió",
    description: "nem szép oldalakat építünk, hanem olyanokat, amik hoznak. landing page-ek, A/B tesztek, sebesség, UX — minden az adatok alapján.",
    details: [
      "egyedi Next.js alapú, ultra-gyors webalkalmazások",
      "CRO (konverzió optimalizált) design és UX",
      "folyamatos A/B tesztelés és adat alapú fejlesztés",
      "haladó analitikai bekötések (GTM, GA4, CAPI)",
      "enterprise szintű biztonság és skálázhatóság"
    ],
    ctaText: "Részletek →",
    colors: ["#3b82f6", "#000000", "#1d4ed8"]
  },
  {
    title: "tartalom & videó produkció",
    description: "social videók, brand content, testimonialok, fotó. nem posztolunk, mert kell — azért posztolunk, ami működik.",
    details: [
      "magas konverziójú rövid videós tartalmak (Reels/TikTok)",
      "professzionális márkafilmek és reklámanyagok",
      "UGC (User Generated Content) kampányok",
      "stratégiai tartalomtervezés és script írás",
      "stúdiós és helyszíni forgatások teljes utómunkával"
    ],
    ctaText: "Részletek →",
    colors: ["#fef08a", "#000000", "#a855f7"]
  },
  {
    title: "kampánykezelés & analitika",
    description: "google ads, meta, tiktok — ahol a te ügyfeled van. minden forintot mérünk, és a riportot úgy kapod, hogy ÉRTSD: ennyi ment be, ennyi jött ki.",
    details: [
      "multi-platform kampánykezelés (Meta, Google, TikTok, LinkedIn)",
      "valós idejű ROI/ROAS dashboard fejlesztés",
      "precíz célközönség szegmentáció és retargeting",
      "skálázható hirdetési struktúrák felépítése",
      "folyamatos kreatív és technikai kampány optimalizálás"
    ],
    ctaText: "Részletek →",
    colors: ["#f97316", "#000000", "#6b7280"]
  }
];

export const ServiceGridClient = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setActiveIndex(idx);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setActiveIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="services" className="bg-black text-white relative z-10 border-b border-white/10">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div>
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            03 / TOOLS
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase mb-6">
            amivel dolgozunk
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 font-light lowercase max-w-2xl">
            nem szolgáltatást választasz — mi döntjük el az audit alapján, mire van szükséged.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 border-t border-white/10 overflow-hidden">
        {services.map((service, idx) => (
          <motion.div 
            layoutId={`service-${idx}`}
            key={idx} 
            className="relative h-[50vh] min-h-[400px] border-r border-b border-white/10 group cursor-pointer overflow-hidden"
            onClick={() => handleOpen(idx)}
          >
            {/* Hover Background */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
               <Grainient
                color1={service.colors[0]}
                color2={service.colors[1]}
                color3={service.colors[2]}
                timeSpeed={0.3}
                zoom={0.8}
                noiseScale={3.0}
                grainAmount={0.15}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
              <div className="max-w-lg">
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 block mb-2 group-hover:text-white transition-colors">advant / {idx + 1}</span>
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-white lowercase leading-none">{service.title}</h3>
                <p className="text-zinc-500 text-lg md:text-xl font-light lowercase group-hover:text-zinc-300 transition-colors">{service.description}</p>
                <div className="mt-10 px-6 py-3 border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase inline-block group-hover:bg-white group-hover:text-black transition-all">
                  {service.ctaText}
                </div>
              </div>
            </div>
            
            <div className="absolute top-12 right-12 text-7xl font-black text-white/5 select-none group-hover:scale-125 transition-transform">+</div>
          </motion.div>
        ))}

        {/* Detailed Expansion View */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              layoutId={`service-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black p-6 md:p-20 flex flex-col md:flex-row gap-12 overflow-y-auto"
            >
              {/* Background of the detailed view */}
              <div className="fixed inset-0 z-0">
                <Grainient
                  color1={services[activeIndex].colors[0]}
                  color2={services[activeIndex].colors[1]}
                  color3={services[activeIndex].colors[2]}
                  timeSpeed={0.15}
                  zoom={1.2}
                  noiseScale={2.5}
                  grainAmount={0.15}
                  className="h-full w-full opacity-40"
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleClose(); }}
                  className="absolute top-0 right-0 p-4 border border-white/20 hover:border-white transition-colors group"
                >
                  <X className="text-white group-hover:rotate-90 transition-transform" />
                </button>

                <div className="flex-1">
                  <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-500 uppercase block mb-6">Mélyfúrás / 0{activeIndex + 1}</span>
                  <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] lowercase tracking-tighter mb-12">
                    {services[activeIndex].title}
                  </h2>
                  <p className="text-xl md:text-2xl text-zinc-400 font-light lowercase leading-relaxed">
                    {services[activeIndex].description}
                  </p>
                </div>

                <div className="flex-1 space-y-8">
                  <h4 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-10 pb-4 border-b border-white/10">Szolgáltatási részletek:</h4>
                  <ul className="space-y-6">
                    {services[activeIndex].details.map((detail, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        key={i} 
                        className="flex items-start gap-4 text-white font-light lowercase text-lg"
                      >
                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="pt-12">
                     <button 
                      onClick={() => { handleClose(); window.location.href='/arak'; }}
                      className="px-10 py-6 bg-white text-black text-xs font-black tracking-[0.3em] uppercase hover:bg-zinc-200 transition-all flex items-center gap-4"
                    >
                      Audit kérése <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="fixed bottom-12 left-12 text-[10px] font-bold text-white/20 tracking-[1em] uppercase select-none pointer-events-none">
                advant / performance
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
