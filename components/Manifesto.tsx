"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <section className="bg-zinc-950 py-32 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Background aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-white/5 via-transparent to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden md:block" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-l border-white/20 pl-8 md:pl-16 py-4"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-8 uppercase flex items-center gap-2">
            <span className="w-1 h-1 bg-white" /> Alapítói Szemléletmód
          </span>
          <h3 className="text-3xl md:text-5xl font-light text-zinc-300 leading-tight lowercase mb-12">
            elegünk lett az <span className="font-black text-white">50 ezres weblapokból</span> és a felelősséget sosem vállaló, kattintásokat lobogtató <span className="font-black text-white italic">"marketingesekből."</span>
          </h3>
          <div className="space-y-6 text-zinc-500 font-light lowercase text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              a magyar piac tele van olcsó, veszélyes ígéretekkel. cégek tucatjai égetik a tőkéjüket inkompetens szakikra, akik letesznek az asztalra egy "szép" dizájnt, elindítják a céltalan social posztolgatást, majd szétteszik a kezüket, amikor a kasszába hónapok múlva sem folyik be a bevétel.
            </p>
            <p>
              pontosan ezért jött létre a growth partner formáció és az advant. láttuk az óriási űrt egy olyan integrált tech- és üzleti szövetségre, ami <span className="text-white font-bold">nem számlázható munkaórákat akar rád sózni, hanem mérhető profitot garantál.</span>
            </p>
            <p>
              egy tető alá hoztuk a modern applikáció-szintű webfejlesztést, a pszichológiára és matekra épülő dizájnt, valamint a sebészi pontosságú performance makretinget. 
            </p>
            <div className="pt-8 mt-8 border-t border-white/10">
              <p className="text-white font-bold tracking-wide">
                nincsenek kifogások. beülünk melléd az asztalhoz, és felpörgetjük a konverziós motorodat.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
