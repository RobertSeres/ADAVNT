import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Zap } from 'lucide-react';
import PricingCard from './PricingCard';

const Pricing = () => {
  const foundationFeatures = [
    "Átfogó Üzleti Audit & Konverziós Stratégia",
    "Dedikált Next.js Prémium Weboldalfejlesztés",
    "Teljes Performance Marketing (Meta & Google)",
    "Stratégia-alapú Reklámképek, Posztok & Videók",
    "Szerveroldali Adatanalitika (GA4, Meta CAPI)",
    "Folyamatos Konverzió Optimalizálás (CRO)",
    "Kétheti Stratégiai Mérföldkő Meetingek",
    "Élő Transzparens Teljesítmény Dashboardok"
  ];

  const scaleFeatures = [
    "Minden a Growth Foundation csomagból",
    "Tömeges High-End Videógyártás & FPV Drón",
    "Kizárólagos AI Generált Prémium Reklámfilmek",
    "Custom App & Headless E-commerce Vonal",
    "Egyedi AI Projekt-Asszisztens & Lead Generálás",
    "B2B LinkedIn Outreach Rendszer Integráció",
    "Heti Deep-Dive Sync & VIP Slack Csatorna",
    "Transzparens Sikerdíjas Profitmegosztás"
  ];

  return (
    <section id="pricing" className="bg-black py-32 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0 hidden md:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none z-0 hidden md:block" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent pointer-events-none z-0 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header & Anchoring Block */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">

          {/* Left Side: Title and Scarcity Banner */}
          <div className="flex flex-col gap-10 md:gap-16">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 mb-4 uppercase flex items-center gap-2">
                <span className="w-1 h-1 bg-white" /> 06 / Befektetés
              </span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase">
                árak
              </h2>
            </div>

            {/* Scarcity Banner */}
            <div className="border border-emerald-500/30 bg-emerald-500/5 px-6 py-4 inline-flex items-center gap-4 w-fit">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                A magas minőségbiztosítás miatt havonta maximum 8 új projektet auditálunk. (Szabad helyek száma: 5/8)
              </span>
            </div>
          </div>

          {/* Right Side: Value Anchoring Box */}
          <div className="max-w-md w-full md:w-auto bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-md">
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-white uppercase mb-4">A valóság számokban</h4>
            <ul className="text-sm font-light text-zinc-400 lowercase space-y-3 leading-relaxed">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>1 szenior fejlesztő (hó)</span>
                <span className="text-white">~1.5m ft</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>1 senior ppc menedzser (hó)</span>
                <span className="text-white">~1.0m ft</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-zinc-500">advant growth partner:</span>
                <span className="text-emerald-400 font-bold">töredékéért, fókuszáltan.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Tiers (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-px md:bg-white/10 border border-white/10 relative">

          {/* Tier 1: Foundation */}
          <PricingCard tier="foundation" colors={["#ffffff", "#3b82f6", "#000000"]}>
            <div className="p-10 md:p-14 h-full flex flex-col">
              <div className="mb-10">
                <h3 className="text-3xl font-black text-white lowercase tracking-tight mb-2">
                  growth foundation
                </h3>
                <p className="text-zinc-500 text-sm font-light lowercase">működő cégek alapvető digitális fegyverarzenálja.</p>
              </div>

              <div className="mb-12">
                <span className="text-[10px] tracking-widest text-zinc-600 uppercase font-bold block mb-2">irányár</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black text-white">600k Ft</span>
                  <span className="text-zinc-500 font-light text-sm">/ hó -tól</span>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-[10px] tracking-[0.2em] text-white uppercase font-bold border-b border-white/10 pb-4 flex mb-6">
                  mit építünk fel?
                </span>
                <ul className="space-y-4">
                  {foundationFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <Check size={16} className="text-white/30 mt-1 shrink-0 group-hover/item:text-white transition-colors" />
                      <span className="text-sm text-zinc-400 font-light lowercase group-hover/item:text-white transition-colors">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <Link href="/szolgaltatasok?from=pricing" className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest underline underline-offset-4 font-bold transition-all">
                  eszköztár kibontása →
                </Link>
              </div>

              <Link href="/apply?tier=foundation" className="block w-full py-6 border border-white/20 text-center text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 hover:text-black hover:bg-white transition-all duration-300 mt-auto">
                kiválasztom
              </Link>
            </div>
          </PricingCard>

          {/* Tier 2: Scale */}
          <PricingCard tier="scale" colors={["#ffffff", "#a855f7", "#000000"]}>
            <div className="p-10 md:p-14 h-full flex flex-col">
              <div className="mb-10">
                <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 mb-4">
                  <span className="text-[9px] text-white font-bold tracking-[0.3em] uppercase flex items-center gap-2">
                    <Zap size={10} className="text-white" /> maximális potenciál
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white lowercase tracking-tight mb-2">
                  full scale partner
                </h3>
                <p className="text-zinc-500 text-sm font-light lowercase">agresszív felskálázásra és dominanciára tervezve.</p>
              </div>

              <div className="mb-12">
                <span className="text-[10px] tracking-widest text-zinc-600 uppercase font-bold block mb-2">irányár</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black text-white">1.2m Ft</span>
                  <span className="text-zinc-500 font-light text-sm">/ hó -tól + sikerdíj</span>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-[10px] tracking-[0.2em] text-white uppercase font-bold border-b border-white/10 pb-4 flex mb-6">
                  mivel ad többet?
                </span>
                <ul className="space-y-4">
                  {scaleFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <Check size={16} className="text-white/30 mt-1 shrink-0 group-hover/item:text-white transition-colors" />
                      <span className="text-sm text-zinc-400 font-light lowercase group-hover/item:text-white transition-colors">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <Link href="/szolgaltatasok?from=pricing" className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest underline underline-offset-4 font-bold transition-all">
                  eszköztár kibontása →
                </Link>
              </div>

              <Link href="/apply?tier=scale" className="w-full py-6 bg-white text-black text-center text-xs font-black tracking-[0.3em] uppercase hover:bg-zinc-300 transition-all duration-300 flex items-center justify-center gap-3 mt-auto">
                skálázódni akarok <ArrowRight size={14} />
              </Link>
            </div>
          </PricingCard>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
