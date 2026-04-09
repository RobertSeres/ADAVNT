import React from 'react';
import { PhilosophyClient } from './PhilosophyClient';

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
  return (
    <section
      id="how-it-works"
      className="bg-black pt-32 pb-24 md:pb-40 border-b border-white/10 relative overflow-hidden"
    >
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 font-[var(--font-familjen-grotesk)]">
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

          <PhilosophyClient steps={steps} />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
