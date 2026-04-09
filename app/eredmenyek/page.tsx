"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { TrendingUp, BarChart, Zap, Check } from "lucide-react";

export default function ResultsPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-32 pb-40 container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-6 uppercase">
              03 / SUCCESS
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white lowercase tracking-tighter mb-16">
              valós eredmények, <br/> nem elérések.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <CaseStudy 
                title="B2B Lead Generálás" 
                metric="+240% lead mennyiség"
                desc="6 hónap alatt elértük a cég történetének legtöbb minőségi megkeresését havi büdzsé emelés nélkül."
              />
              <CaseStudy 
                title="E-commerce skálázás" 
                metric="4.2x ROAS"
                desc="A hirdetési megtérülés stabilizálása és a kosárérték növelése egyedi UX megoldásokkal."
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}

const CaseStudy = ({ title, metric, desc }: any) => (
  <div className="bg-black p-10 md:p-14 hover:bg-white/2 transition-colors group">
    <div className="flex items-center gap-3 mb-8">
      <div className="w-1 h-1 bg-white" />
      <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{title}</span>
    </div>
    <div className="text-3xl md:text-5xl font-black text-white mb-6 lowercase">{metric}</div>
    <p className="text-zinc-400 font-light lowercase leading-relaxed max-w-sm">{desc}</p>
  </div>
);
