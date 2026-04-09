"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Grainient from './Grainient';

const PricingCTAClient = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mt-24 max-w-4xl mx-auto border border-white/10 bg-white/2 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 group transition-all relative overflow-hidden"
    >
      <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isHovered ? 'opacity-40' : 'opacity-0'}`}>
        <Grainient 
          color1="#000000"
          color2="#3b82f6"
          color3="#000000"
          timeSpeed={0.2}
          zoom={1.2}
          noiseScale={3}
          grainAmount={0.2}
          className="h-full w-full"
        />
      </div>

      <div className="flex-1 relative z-10">
        <h4 className="text-3xl md:text-[2.5rem] font-black text-white leading-tight mb-4 lowercase tracking-tight">
          nem vagy biztos benne? <br className="hidden md:block" /> beszéljünk.
        </h4>
        <p className="text-zinc-500 font-light lowercase text-lg max-w-md italic">
          "20 perc alatt többet tanultam a saját marketingemről, mint az elmúlt fél évben egyedül." — Kovács Péter, XY Étterem
        </p>
      </div>
      <div className="shrink-0 relative z-10">
        <Link 
          href="/villamhivas"
          className="px-10 py-6 bg-white text-black text-[10px] font-black tracking-[0.3em] uppercase hover:bg-zinc-200 transition-all flex items-center gap-3 no-underline forced-colors:bg-white"
        >
          villámhívás kérése — 15 perc, ingyen <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default PricingCTAClient;
