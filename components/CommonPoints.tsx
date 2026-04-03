"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const commonPoints = [
  {
    id: "01",
    title: "Üzleti fókuszú fejlesztés",
    tagline: "STRATÉGIAI SZEMLÉLET",
    columns: [
      {
        label: "PROBLÉMA",
        content: "A legtöbb ügynökség csak a látványra koncentrál, miközben elhanyagolja az üzleti célokat és a konverziós logikát."
      },
      {
        label: "MEGOLDÁS",
        content: "Minden fejlesztést egy mély üzleti audittal kezdünk, hogy a végeredmény ne csak szép, de jövedelmező is legyen."
      },
      {
        label: "ÉRTÉK",
        content: "Mérhető bevételnövekedés, alacsonyabb ügyfélszerzési költség és fenntartható digitális ökoszisztéma."
      },
      {
        label: "AKCIÓ",
        content: "Üzleti modell elemzése, UX flow tervezés, technikai architectúra felállítása és ROI alapú ütemterv.",
        tags: ["STRATÉGIA", "ROI AUDIT", "UX LOGIKA"]
      }
    ]
  },
  {
    id: "02",
    title: "Saját fejlesztésű rendszerek",
    tagline: "TECHNOLÓGIAI FÖLÉNY",
    columns: [
      {
        label: "PROBLÉMA",
        content: "A sablonmegoldások és lassú CMS-ek korlátozzák a skálázhatóságot és rontják a felhasználói élményt."
      },
      {
        label: "MEGOLDÁS",
        content: "Zárt, optimalizált stack-kel dolgozunk (Next.js, React), ami villámgyors és bármikor továbbfejleszthető."
      },
      {
        label: "ÉRTÉK",
        content: "99+ PageSpeed pontszám, maximális biztonság és nulla felesleges kód, ami hátráltatná a növekedést."
      },
      {
        label: "AKCIÓ",
        content: "Egyedi keretrendszer építése, API integrációk, skálázható felhő-infrastruktúra telepítése.",
        tags: ["NEXT.JS", "REACT", "SPEED OPT"]
      }
    ]
  },
  {
    id: "03",
    title: "Adatvezérelt döntéshozatal",
    tagline: "PONTOSSÁG ÉS MÉRÉS",
    columns: [
      {
        label: "PROBLÉMA",
        content: "Sok cég vakon költ marketingre és fejlesztésre, anélkül hogy látná az egyes csatornák valódi teljesítményét."
      },
      {
        label: "MEGOLDÁS",
        content: "Minden rendszerünkbe beépítjük a mélyanalitikai méréseket, így minden forint útja pontosan követhető."
      },
      {
        label: "ÉRTÉK",
        content: "Valós idejű rálátás az üzleti folyamatokra, prediktív elemzések és optimalizált hirdetési büdzsé."
      },
      {
        label: "AKCIÓ",
        content: "Analitikai setup, heatmapping, konverziós tölcsér mérés és heti szintű adat-alapú finomhangolás.",
        tags: ["ANALYTICS", "BIG DATA", "MARKETING BI"]
      }
    ]
  },
  {
    id: "04",
    title: "Hosszú távú partnerség",
    tagline: "KÖZÖS NÖVEKEDÉS",
    columns: [
      {
        label: "PROBLÉMA",
        content: "Az ügynökségek sokszor magára hagyják az ügyfelet az átadás után, support és továbbfejlesztés nélkül."
      },
      {
        label: "MEGOLDÁS",
        content: "Dedikált support csapatunk és stratégiai tanácsadóink folyamatosan figyelik és finomítják a rendszereit."
      },
      {
        label: "ÉRTÉK",
        content: "Biztonság, kiszámíthatalan piaci változásokra való gyors reagálás és folyamatos technológiai frissítés."
      },
      {
        label: "AKCIÓ",
        content: "Havi auditok, biztonsági frissítések, folyamatos A/B tesztelés és stratégiai skálázás.",
        tags: ["SUPPORT", "SCALING", "EVOLUTION"]
      }
    ]
  }
];

const PointItem = ({ item, isOpen, onToggle }: any) => {
  return (
    <div className={`border-b border-white/10 transition-all duration-700 ${isOpen ? "bg-zinc-950/40" : ""}`}>
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
          >
            <div className="px-8 md:px-16 pb-16 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-l border-white/5 pl-8 md:pl-12">
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
    <section id="why-us" className="bg-black py-32 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Breadcrumb */}
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            03 / WHY AD-V
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase">
            miért mi?
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
