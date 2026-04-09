import React from 'react';
import { ServiceCardClient } from './ServiceCardClient';

const services = [
  {
    title: "stratégia & üzleti intelligencia",
    description: "üzleti audit, növekedési terv, KPI-k, negyedéves review. nem marketinget csinálunk — üzletet építünk.",
    ctaText: "Részletek →",
    href: "/szolgaltatasok?from=services",
    colors: ["#22c55e", "#000000", "#ffffff"]
  },
  {
    title: "webfejlesztés & konverzió",
    description: "nem szép oldalakat építünk, hanem olyanokat, amik hoznak. landing page-ek, A/B tesztek, sebesség, UX — minden az adatok alapján.",
    ctaText: "Részletek →",
    href: "/szolgaltatasok?from=services",
    colors: ["#ffffff", "#3b82f6", "#1d4ed8"]
  },
  {
    title: "tartalom & videó produkció",
    description: "social videók, brand content, testimonialok, fotó. nem posztolunk, mert kell — azért posztolunk, ami működik.",
    ctaText: "Részletek →",
    href: "/szolgaltatasok?from=services",
    colors: ["#fef08a", "#eab308", "#a855f7"]
  },
  {
    title: "kampánykezelés & analitika",
    description: "google ads, meta, tiktok — ahol a te ügyfeled van. minden forintot mérünk, és a riportot úgy kapod, hogy ÉRTSD: ennyi ment be, ennyi jött ki.",
    ctaText: "Részletek →",
    href: "/szolgaltatasok?from=services",
    colors: ["#000000", "#f97316", "#6b7280"]
  }
];

const ServiceGrid = () => {
  return (
    <section id="services" className="bg-black text-white relative z-10 border-b border-white/10 overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 font-(--font-familjen-grotesk)">
        <div className="mb-0">
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
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl relative z-10 border-t border-white/10">
      {services.map((service, idx) => (
        <ServiceCardClient key={idx} {...service} />
      ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
