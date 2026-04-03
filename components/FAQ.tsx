"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "mi az az advant és mivel foglalkoztok pontosan?",
    answer: "az advant egy digitális ökoszisztéma-építő ügynökség. nem csupán szolgáltatásokat nyújtunk, hanem integrált rendszereket építünk (web, media, scale, dronera), amelyek segítik a vállalkozások skálázható és fenntartható növekedését a digitális térben."
  },
  {
    question: "hogyan segít a web rendszer az ügyfélszerzésben?",
    answer: "webes megoldásaink nem csak esztétikusak, hanem konverzióra optimalizáltak. next.js alapú architektúrát használunk, ami villámgyors betöltést és kiemelkedő seo teljesítményt biztosít, így a látogatókból valódi ügyfelek válnak."
  },
  {
    question: "milyen technológiákat használtok a fejlesztés során?",
    answer: "a legmodernebb stack-et használjuk: react, next.js, tailwind css és framer motion a frontend oldalon, míg a backendnél skálázható felhőalapú megoldásokkal dolgozunk, hogy biztosítsuk a sebességet és a biztonságot."
  },
  {
    question: "miért fontos az ingatlan média és a drón tartalom?",
    answer: "a mai vizuális világban az első benyomás döntő. a professzionális ingatlanvideók és a 4k drónfelvételek nem csak kiemelik az ingatlant a tömegből, hanem érzelmi kötődést váltanak ki, ami statisztikailag 30%-kal gyorsabb eladást eredményez."
  },
  {
    question: "mit jelent a scale rendszer a vendéglátóhelyek számára?",
    answer: "a scale egy komplex digitalizációs csomag éttermeknek és szállodáknak. tartalmazza a saját, jutalékmentes foglalási rendszert, digitális étlapot és crm megoldásokat, amivel optimalizálható a profit és növelhető a vendégélmény."
  },
  {
    question: "milyen pontossággal dolgozik a dronera ipari felmérése?",
    answer: "ipari drónjaink és rtk (real-time kinematic) technológiánk segítségével akár ±2 cm-es pontosságú 3D modelleket és ortofotókat tudunk készíteni, ami elengedhetetlen a precíziós mezőgazdaságban és az építőpari dokumentációban."
  },
  {
    question: "mennyi idő alatt készül el egy átlagos projekt?",
    answer: "a projekt típusától függ: egy komplex webes rendszer 4-6 hét, míg egy média- vagy drónos felmérés 48-72 órán belül eljut a végső fázisig. minden esetben tartjuk a szigorú határidőket."
  },
  {
    question: "van-e utókövetés és support a rendszerekhez?",
    answer: "természetesen. minden átadott rendszerhez folyamatos supportot és karbantartást biztosítunk. hiszünk a hosszú távú partnerségben, ezért segítünk az adatok elemzésében és a további optimalizálásban is."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  return (
    <div className={`border-b border-white/10 overflow-hidden transition-all duration-500 ${isOpen ? "bg-zinc-950/20" : ""}`}>
      <button
        onClick={onClick}
        className="w-full py-8 px-4 flex items-center justify-between text-left group hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold text-zinc-800 transition-colors group-hover:text-zinc-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm md:text-base font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors lowercase">
            {question}
          </span>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-zinc-700 group-hover:text-white transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-14 pb-10 text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-4xl lowercase">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-black py-32 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            05 / FAQ
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase">
            gyakori kérdések
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-6xl mx-auto border-t border-white/10">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
