"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ChevronDown } from "lucide-react";

const partners = [
  {
    name: "ROLLIN' SHOT",
    tag: "tartalom & márkaépítés",
    accent: "#22c55e",
    description: "hamarosan érkeznek a részletes eredmények és számok. addig is: stratégia, végrehajtás, eredmény — egy helyen.",
  },
  {
    name: "DRONERA",
    tag: "webfejlesztés & performance",
    accent: "#3b82f6",
    description: "hamarosan érkeznek a részletes eredmények és számok. addig is: stratégia, végrehajtás, eredmény — egy helyen.",
  },
  {
    name: "AUTOSZIGET",
    tag: "lead generálás & kampánykezelés",
    accent: "#a855f7",
    description: "hamarosan érkeznek a részletes eredmények és számok. addig is: stratégia, végrehajtás, eredmény — egy helyen.",
  },
  {
    name: "HAJNI DECOR",
    tag: "webfejlesztés & tartalom",
    accent: "#f97316",
    description: "hamarosan érkeznek a részletes eredmények és számok. addig is: stratégia, végrehajtás, eredmény — egy helyen.",
  },
  {
    name: "SDP",
    tag: "stratégia & konverzió",
    accent: "#ef4444",
    description: "hamarosan érkeznek a részletes eredmények és számok. addig is: stratégia, végrehajtás, eredmény — egy helyen.",
  },
];

const PartnerTile = ({ partner, isOpen, onToggle }: { partner: typeof partners[0]; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div 
      className="border border-white/10 transition-all duration-500 group" 
      style={{ backgroundColor: isOpen ? `${partner.accent}08` : 'transparent' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-10 md:p-16 text-left cursor-pointer transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
          <h3 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter lowercase transition-colors duration-300"
            style={{ color: isOpen ? partner.accent : undefined }}
          >
            {partner.name}
          </h3>
          <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase pb-2">
            {partner.tag}
          </span>
        </div>
        <div 
          className="w-14 h-14 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            borderColor: isOpen ? `${partner.accent}40` : undefined
          }}
        >
          <ChevronDown size={20} className="text-zinc-500" />
        </div>
      </button>

      <div 
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ 
          maxHeight: isOpen ? '600px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-10 md:px-16 pb-16">
          <div className="border-t border-white/10 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase block mb-6">
                  ESETTANULMÁNY
                </span>
                <p className="text-xl md:text-2xl text-zinc-400 font-light lowercase leading-relaxed italic">
                  {partner.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="border border-white/10 p-6">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase block mb-3">
                    STÁTUSZ
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: partner.accent }} />
                    <span className="text-white text-sm font-bold uppercase tracking-widest">aktív partner</span>
                  </div>
                </div>
                <div className="border border-white/10 p-6">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 uppercase block mb-3">
                    METRIKÁK
                  </span>
                  <p className="text-zinc-500 text-sm font-light lowercase italic">hamarosan...</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ResultsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-32 pb-40 container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-20">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-6 uppercase">
                03 / SUCCESS
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white lowercase tracking-tighter mb-8">
                partnereink.
              </h1>
              <p className="text-xl text-zinc-500 font-light lowercase max-w-xl">
                akikkel együtt építjük a növekedést. kattints a részletekért.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {partners.map((partner, idx) => (
                <PartnerTile 
                  key={idx} 
                  partner={partner} 
                  isOpen={openIndex === idx}
                  onToggle={() => handleToggle(idx)}
                />
              ))}
            </div>

          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
