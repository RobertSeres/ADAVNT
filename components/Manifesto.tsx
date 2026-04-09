"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Manifesto = () => {
  const [isTeamOpen, setIsTeamOpen] = useState(false);

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
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 mb-8 uppercase flex items-center gap-2">
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
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-white font-bold tracking-wide max-w-md">
                nincsenek kifogások. beülünk melléd az asztalhoz, és felpörgetjük a konverziós motorodat.
              </p>
              <button 
                onClick={() => setIsTeamOpen(true)}
                className="px-8 py-4 border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                lássam a csapatot <span className="opacity-0 group-hover:opacity-100 transition-all ml-2">→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Team Overlay Modal */}
      <AnimatePresence>
        {isTeamOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <div className="container max-w-5xl relative">
              <button 
                onClick={() => setIsTeamOpen(false)}
                className="absolute -top-16 right-0 text-white hover:text-zinc-400 transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest p-4"
              >
                bezárás <X size={16} />
              </button>

              <div className="mb-20">
                <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">TEAM / ADVANT</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white lowercase">ők teszik mögéd a technológiát.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {[
                  {
                    name: "Seres Róbert",
                    role: "founder - stratégia, web developement",
                  },
                  {
                    name: "Sipos Mátyás",
                    role: "co-founder - kampánykezelés & adat, media production",
                  },
                  {
                    name: "Nagy-Révész Vid",
                    role: "video production, utómunka, marketing",
                  }
                ].map((member, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex flex-col gap-6"
                   >
                    <div className="aspect-[4/5] bg-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 italic">hamarosan...</span>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                      <p className="text-xs font-light text-zinc-500 lowercase leading-relaxed">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Manifesto;
