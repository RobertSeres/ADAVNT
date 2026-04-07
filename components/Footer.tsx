"use client";

import React from 'react';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const systems = [
    { name: "advant web", href: "/services/web" },
    { name: "advant media", href: "/services/media" },
    { name: "advant scale", href: "/services/scale" },
    { name: "advant dronera", href: "/services/dronera" }
  ];

  const info = [
    { name: "filozófia", href: "/#philosophy" },
    { name: "miért mi?", href: "/#why-us" },
    { name: "kapcsolat", href: "/#contact" },
    { name: "adatkezelés", href: "/legal/privacy" },
    { name: "impresszum", href: "/legal/impressum" }
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-20 border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* 2. LAYER: SYSTEM & LINKS GRID */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start mb-24">
        
        {/* Left - Catchphrase */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-light text-zinc-400 leading-tight lowercase">
            egy márka. <br />
            több rendszer. <br />
            egy cél: <span className="text-white italic">növekedés.</span>
          </p>
          <div className="flex flex-col gap-2 pt-4">
             <a href="tel:+36708856534" className="text-sm font-bold tracking-widest text-zinc-600 hover:text-white transition-colors">+36 70 885 6534</a>
             <a href="mailto:hello@advant.hu" className="text-sm font-bold tracking-widest text-zinc-600 hover:text-white transition-colors lowercase">hello@advant.hu</a>
          </div>
        </div>

        {/* Middle - Systems */}
        <div className="md:col-span-3 md:col-start-6">
          <h5 className="text-[10px] font-bold tracking-[0.4em] text-zinc-700 uppercase mb-8">rendszerek</h5>
          <ul className="flex flex-col gap-4">
            {systems.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="text-sm font-light text-zinc-500 hover:text-white transition-all hover:translate-x-2 inline-block lowercase tracking-tight">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Information */}
        <div className="md:col-span-3">
          <h5 className="text-[10px] font-bold tracking-[0.4em] text-zinc-700 uppercase mb-8">információ</h5>
          <ul className="flex flex-col gap-4">
            {info.map((i) => (
              <li key={i.name}>
                <Link href={i.href} className="text-sm font-light text-zinc-500 hover:text-white transition-all hover:translate-x-2 inline-block lowercase tracking-tight">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 3. LAYER: LEGAL BAR */}
      <div className="container mx-auto px-6 border-t border-white/5 pt-12">
        <a 
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.location.href = "/";
            }
          }}
          className="text-[10px] font-bold tracking-[0.4em] text-zinc-900 uppercase select-none cursor-pointer hover:text-white transition-colors duration-1000 inline-block no-underline"
        >
          @ADVANT GROUP 2026
        </a>
      </div>

    </footer>
  );
};

export default Footer;
