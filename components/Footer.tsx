"use client";

import React from 'react';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "stratégia & audit", href: "/szolgaltatasok?tab=strategia" },
    { name: "webfejlesztés", href: "/szolgaltatasok?tab=web" },
    { name: "tartalom & videó", href: "/szolgaltatasok?tab=tartalom" },
    { name: "kampánykezelés", href: "/szolgaltatasok?tab=kampany" }
  ];

  const info = [
    { name: "mit csinálunk másképp?", href: "/miert-mi" },
    { name: "hogyan működik a folyamat?", href: "/hogyan-mukodik" },
    { name: "árazás és befektetés", href: "/arak" },
    { name: "eredmények és referenciák", href: "/eredmenyek" }
  ];

  const legal = [
    { name: "adatkezelési tájékoztató", href: "/legal/privacy" },
    { name: "általános szerződési feltételek", href: "/legal/terms" },
    { name: "impresszum", href: "/legal/impressum" }
  ];

  const social = [
    { name: "linkedin", href: "#" },
    { name: "instagram", href: "#" },
    { name: "tiktok", href: "#" }
  ];

  return (
    <footer className="bg-black text-white pt-24 md:pt-32 pb-8 border-t border-b border-white/10 relative z-10 overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden md:block" />

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">

        {/* TOP LAYER: HUGE LOGO AESTHETIC */}
        <div className="mb-24 pb-12 border-b border-white/10 overflow-hidden flex items-baseline justify-between select-none group">
          <h2 className="text-[12vw] font-black leading-none tracking-tighter text-white/5 transition-colors duration-1000 group-hover:text-white/10">
            ADVANT
          </h2>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-700 hidden md:block font-bold">
            NO COMPROMISE
          </span>
        </div>

        {/* MIDDLE LAYER: 4 COLUMNS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mb-24 items-start">

          {/* Column 1: Headquarters & Contact */}
          <div className="flex flex-col gap-8">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-white" /> bázis
              </h5>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-light text-zinc-400 lowercase">hungary, budapest</span>
                <span className="text-[10px] tracking-widest font-bold text-zinc-600 uppercase">-</span>
              </div>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-white" /> privát vonal
              </h5>
              <div className="flex flex-col gap-2">
                <a href="tel:+36708856534" className="text-sm font-light text-zinc-400 hover:text-white transition-colors lowercase">
                  +36 70 885 6534
                </a>
                <a href="mailto:hello@advant.hu" className="text-[10px] font-bold tracking-widest text-zinc-600 hover:text-white transition-colors uppercase">
                  hello@advant.hu
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Tools (Szolgáltatások) */}
          <div className="flex flex-col">
            <h5 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-zinc-700" /> eszköztár
            </h5>
            <ul className="flex flex-col gap-4">
              {services.map((s) => (
                <li key={s.name} className="group flex items-center">
                  <span className="text-white/0 group-hover:text-white/50 transition-colors mr-2 font-mono text-[10px]">→</span>
                  <Link href={s.href} className="text-sm font-light text-zinc-400 hover:text-white transition-all lowercase">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col">
            <h5 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-zinc-700" /> cég & projekt
            </h5>
            <ul className="flex flex-col gap-4">
              {info.map((i) => (
                <li key={i.name} className="group flex items-center">
                  <span className="text-white/0 group-hover:text-white/50 transition-colors mr-2 font-mono text-[10px]">→</span>
                  <Link href={i.href} className="text-sm font-light text-zinc-400 hover:text-white transition-all lowercase">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="flex flex-col gap-12">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-zinc-700" /> jogi tisztaság
              </h5>
              <ul className="flex flex-col gap-4">
                {legal.map((l) => (
                  <li key={l.name} className="group flex items-center">
                    <span className="text-white/0 group-hover:text-white/50 transition-colors mr-2 font-mono text-[10px]">→</span>
                    <Link href={l.href} className="text-sm font-light text-zinc-500 hover:text-zinc-300 transition-all lowercase tracking-tight">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              {social.map((soc) => (
                <a key={soc.name} href={soc.href} className="text-[10px] font-bold tracking-widest text-zinc-600 hover:text-white transition-colors uppercase border border-white/5 hover:border-white/20 py-2 px-3">
                  {soc.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM LAYER: LEGAL BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-[10px] font-black tracking-[0.3em] text-zinc-700 uppercase flex items-center gap-4">
            <span>© ADVANT GROUP {currentYear}</span>
            <span className="w-px h-3 bg-zinc-800" />
            <span>MINDEN JOG FENNTARTVA.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
