"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const commonPoints = [
  {
    id: "01",
    title: "nem ügynökség, hanem partner",
    tagline: "FELELŐSSÉG",
    bgClass: "from-blue-900/20 via-zinc-900/5 to-black",
    columns: [
      {
        label: "PROBLÉMA",
        content: "a legtöbb ügynökség azt csinálja, amit mondasz. ha te rosszul döntesz, ők rosszul hajtják végre."
      },
      {
        label: "MEGOLDÁS",
        content: "mi megmondjuk, mit kellene csinálnod — aztán meg is csináljuk. az audit alapján mi írjuk elő a stratégiát, nem te."
      },
      {
        label: "ÉRTÉK",
        content: "nem szolgáltatót veszel, hanem egy csapatot, aki felelősséget vállal a növekedésedért."
      },
      {
        label: "AKCIÓ",
        content: "growth audit, havi stratégiai hívás, negyedéves review",
        tags: ["GROWTH AUDIT", "STRATÉGIA", "REVIEW"]
      }
    ]
  },
  {
    id: "02",
    title: "minden mérhető",
    tagline: "ADATVEZÉRELT",
    bgClass: "from-purple-900/20 via-zinc-900/5 to-black",
    columns: [
      {
        label: "PROBLÉMA",
        content: "a marketingesed küld egy riportot tele impresszióval és eléréssel. fogalmad sincs, hogy abból mennyi lett fizető ügyfél."
      },
      {
        label: "MEGOLDÁS",
        content: "nálunk minden konverzió követve van. tudod, honnan jött a lead, mennyibe került, és mennyi bevételt hozott."
      },
      {
        label: "ÉRTÉK",
        content: "valós idejű dashboard, ahol te is látod a számokat — nem havi egyszer, hanem mindig."
      },
      {
        label: "AKCIÓ",
        content: "GA4 setup, konverziókövetés, looker studio dashboard, havi üzleti riport",
        tags: ["GA4", "KONVERZIÓ", "DASHBOARD"]
      }
    ]
  },
  {
    id: "03",
    title: "saját tech, nincs sablon",
    tagline: "TECHNOLÓGIA",
    bgClass: "from-emerald-900/20 via-zinc-900/5 to-black",
    columns: [
      {
        label: "PROBLÉMA",
        content: "a legtöbb weboldal wordpress sablon, ami lassú, sérülékeny, és úgy néz ki, mint más 10.000 oldal."
      },
      {
        label: "MEGOLDÁS",
        content: "next.js, react, egyedi fejlesztés. gyors, biztonságos, skálázható — és bármikor továbbfejleszthető."
      },
      {
        label: "ÉRTÉK",
        content: "99+ PageSpeed, nulla felesleges kód, és egy rendszer, ami nő veled együtt."
      },
      {
        label: "AKCIÓ",
        content: "egyedi keretrendszer, API integrációk, folyamatos fejlesztés",
        tags: ["NEXT.JS", "REACT", "PERFORMANCE"]
      }
    ]
  },
  {
    id: "04",
    title: "nem projekt, hanem folyamat",
    tagline: "HAVI MODELL",
    bgClass: "from-rose-900/20 via-zinc-900/5 to-black",
    columns: [
      {
        label: "PROBLÉMA",
        content: "megcsinálják a weboldaladat, adnak egy számlát, aztán nem hallasz róluk soha többet."
      },
      {
        label: "MEGOLDÁS",
        content: "nálunk havi előfizetéssel dolgozunk. dedikált csapat, slack csatorna, folyamatos fejlesztés és support."
      },
      {
        label: "ÉRTÉK",
        content: "nem kell aggódnod, hogy mi történik a weboldallal, a tartalommal, a hirdetésekkel — mi figyeljük, te dolgozol."
      },
      {
        label: "AKCIÓ",
        content: "dedikált slack, havi riport, negyedéves stratégiai review, folyamatos support",
        tags: ["SUPPORT", "SLACK", "FOLYAMATOS"]
      }
    ]
  }
];

const PointItem = ({ item, isOpen, onToggle }: any) => {
  return (
    <div className={`border-b border-white/10 transition-all duration-700 relative overflow-hidden ${isOpen ? "bg-zinc-950/40" : ""}`}>
      {/* Subtle Artistic Glow on Active */}
      {isOpen && (
        <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-transparent pointer-events-none opacity-50" />
      )}
      <button
        onClick={onToggle}
        className="w-full py-10 px-4 md:px-8 flex items-center justify-between group transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-8 md:gap-16">
          <span className="text-[10px] font-bold text-zinc-800 transition-colors group-hover:text-zinc-500">
            {item.id}
          </span>
          <span className="text-xl md:text-3xl font-black tracking-tighter text-zinc-300 group-hover:text-white transition-colors lowercase">
            {item.title}
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-[10px] font-bold tracking-[0.3em] text-zinc-700 group-hover:text-zinc-500 uppercase transition-colors">
            {item.tagline}
          </span>
          <div className="flex-shrink-0">
            {isOpen ? (
              <X size={20} className="text-white rotate-0 transition-transform duration-500" />
            ) : (
              <Plus size={20} className="text-zinc-700 group-hover:text-white transition-transform duration-500" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Smooth CSS Gradient Fade-In instead of WebGL glitch */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`absolute inset-0 z-0 bg-linear-to-br ${item.bgClass}`}
            />

            <div className="px-8 md:px-16 pb-16 pt-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-l border-white/10 pl-8 md:pl-12">
                {item.columns.map((col: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-6 group/col">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-px bg-zinc-800 group-hover/col:w-4 transition-all" />
                      <span className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">
                        {col.label}
                      </span>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed tracking-tight transition-colors ${idx === 2 ? "text-white font-bold" : "text-zinc-400 font-light"}`}>
                      {col.content}
                    </p>
                    {col.tags && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {col.tags.map((tag: string) => (
                          <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] font-bold tracking-widest text-zinc-500 uppercase hover:text-white hover:border-white/30 transition-all cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CommonPoints = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="why-us" className="bg-black py-32 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Breadcrumb */}
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            04 / RESULTS
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase">
            mit csinálunk másképp
          </h2>
        </div>

        {/* Structured List */}
        <div className="max-w-7xl mx-auto border-t border-white/10">
          {commonPoints.map((item) => (
            <PointItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommonPoints;
