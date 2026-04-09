"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "mennyibe kerül?",
    answer: "havi előfizetéses modellben dolgozunk. a pontos ár az audit után derül ki, mert nem csomagot adunk, hanem azt, amire tényleg szükséged van. az árak 600k-tól indulnak."
  },
  {
    question: "meddig tart, amíg eredményt látok?",
    answer: "az első hónapban felépítjük a rendszert. a 2-3. hónaptól látod az első számokat. a 6. hónaptól mérhető, stabil növekedés a cél."
  },
  {
    question: "mi van, ha nem működik?",
    answer: "negyedévente átnézzük az eredményeket. ha nem hozzuk a számokat, változtatunk. nem érdekünk, hogy fizess valamiért, ami nem működik — mert akkor elmész."
  },
  {
    question: "meddig köt a szerződés?",
    answer: "3 hónapos minimum, utána havi szinten mondható fel. azért 3 hónap, mert ennyi idő kell, hogy a rendszer felépüljön és elinduljon."
  },
  {
    question: "mi a különbség köztetek és egy sima ügynökség között?",
    answer: "az ügynökség azt csinálja, amit mondasz. mi megmondjuk, mit kellene csinálnod — és meg is csináljuk. felelősséget vállalunk az eredményért, nem csak a végrehajtásért."
  },
  {
    question: "milyen iparágakkal dolgoztok?",
    answer: "vendéglátó, szolgáltató szektor, e-commerce, ingatlan — de az iparág másodlagos. az a lényeg, hogy a vállalkozásod működik, van bevétel, és készen állsz a növekedésre."
  }
];

const extraFaqData = [
  {
    question: "miért érdemes growth partnert választani egy hagyományos online marketing ügynökség helyett?",
    answer: "egy átlagos online marketing ügynökség általában csak a hirdetések technikai beállítását kezeli, míg egy growth partner a teljes üzleti folyamatot átlátja. a konverzió optimalizálás (cro), a b2b marketing stratégia, az adatvezérelt döntéshozatal és az egyedi webfejlesztés mind egyetlen összehangolt rendszer része nálunk, ami maximalizálja a bevételedet és a skálázható növekedést."
  },
  {
    question: "hogyan segít az egyedi webfejlesztés a konverzió növelésében?",
    answer: "a sablon alapú rendszerek (mint a wordpress) gyakran lassúak és korlátozottak. az egyedi webfejlesztés során villámgyors, tűpontos reszponzivitású és technikai seo szempontból is hibátlan oldalakat építünk. a magas betöltési sebesség és az átgondolt (ux/ui) felhasználói élmény közvetlenül felelős a konverziós arány (cro) drasztikus növekedéséért e-commerce és lead generálás esetén."
  },
  {
    question: "milyen online marketing eszközöket és hirdetési platformokat használtok?",
    answer: "teljes körű, adatvezérelt performance marketing kampányokat építünk. a portfóliónkban szerepel a professzionális google ads hálózat, célzott meta (facebook & instagram) hirdetések, és a legújabb organikus tiktok vagy ugc b2c/b2b marketing integrációk. az eredményeket modern szerveroldali ga4 (google analytics) mérésekkel optimalizáljuk."
  },
  {
    question: "mi az a konverzió optimalizálás (cro) és miért elengedhetetlen?",
    answer: "a konverzió optimalizálás (conversion rate optimization) az az aszimmetrikus növekedési folyamat, aminek során a meglévő weboldal-látogatóidból a lehető legnagyobb százalékban csinálunk fizető vásárlókat vagy minőségi leadeket. hiába hajt a marketinged rengeteg drága forgalmat az oldaladra, ha a webdesign vagy a copywriting (értékesítési szöveg) nem téríti meg azt."
  },
  {
    question: "tudtok segíteni kifejezetten b2b lead generálásban és cégek megszólításában?",
    answer: "igen, kiemelkedő tapasztalatunk van prefcíziós b2b marketing és prémium lead generálás területén. célzott linkedin hideg és meleg kampányokkal, edukatív tartalommarketing főkuszú stratégiával és optimalizált high-ticket landing page-ekkel felépítünk egy olyan automata rendszert, ami transzparensen szállítja az üzleti megkereséseket."
  },
  {
    question: "garantáljátok a weblap és a bevételem azonnali ugrásszerű növekedését?",
    answer: "kőkemény felelősséget vállalunk az auditon kiszámolt számokért, de irreális 'varázsszó' csodákat nem ígérünk. a growth partner modell lényege, hogy tesztelt, adatvezérelt online marketing és ux stratégiát hajtunk végre. a konverzió optimalizálás, a tartalomgyártás és a prémium hirdetéskezelés logikus ötvözete garantálja a stabil, hosszútávú roi (megtérülés) növekedést."
  },
  {
    question: "mennyire fontos a keresőoptimalizálás (seo) a növekedési stratégiátokban?",
    answer: "a seo a leghatékonyabb 'ingyenes' és örökzöld organikus forgalmi csatorna hosszú távon. minden általunk átadott webfejlesztés legmélyebb alapja a hibátlan technikai struktúra (core web vitals kitételeknek megfelelve). a strukturált seo és edukatív tartalommarketing idővel drasztikusan leszorítja az általános ügyfélszerzési költségedet (cac)."
  },
  {
    question: "át tudjátok alakítani a meglévő, kicsit elavult weboldalamat is?",
    answer: "a prémium growth partner megközelítés része a teljes digitális transzformáció. üzletileg szinte soha nem éri meg foltozgatni egy instabil, rosszul kódolt rendszert. profi webfejlesztés divíziónk ilyenkor a legmodernebb frameworkokon (pl. next.js) egy teljesen új, ultragyors platformot ír neked, ami az összes jövőbeli kampányod hibátlan konverziós bázisa lesz."
  },
  {
    question: "hogyan működik nálatok a tartalom és videó produkció (social media)?",
    answer: "felejtsd el a semmitmondó, unalmas cégéres képeket. mi kőkemény pszichológiai fegyverténnyel, értékesítési (copywriting) és figyelemmegtartási elveken felépített vertikális rövid-videókat gyárunk (ugc, tiktok, reels). a professzionális tartalommarketing azonnali bizalmat épít, edukál, és elképesztő mértékben növeli a marketing megtérülést."
  },
  {
    question: "tényszerűen: mikor érdemes veletek, mint growth partnerrel szerződnöm?",
    answer: "akkor, ha a céged túllépett a kezdeti szárnypróbálgatáson, van egy stabil piacod, és megvan a költségvetésed is egy komoly digitális szintlépésre. ha végleg eleged van az elszigetelt, csak kattintásokról és fiktív elérésekről beszélő online marketing ügynökség típusú cégekből, és végre profitközpontú, fekete-fehér skálázódást akarsz a piacon."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  return (
    <div className={`border-b border-white/10 overflow-hidden transition-all duration-500 relative ${isOpen ? "bg-zinc-950/20" : ""}`}>
      {/* Subtle Artistic Glow on Active */}
      {isOpen && (
        <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-transparent pointer-events-none opacity-50" />
      )}
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
  const [showAll, setShowAll] = useState(false);

  const visibleFaqData = showAll ? [...faqData, ...extraFaqData] : faqData;

  return (
    <section id="faq" className="bg-black py-32 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

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
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-20 relative z-10 transition-all duration-1000">
          <AnimatePresence>
            {visibleFaqData.map((item, index) => (
              <motion.div
                key={`${item.question}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: (index > 5 && showAll) ? ((index - 5) * 0.1) : 0 }}
              >
                <FAQItem
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Toggle Button */}
        <div className="flex justify-center mt-16 relative z-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex flex-col items-center gap-4 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
              {showAll ? "kevesebb kérdés elrejtése" : "további szakmai kérdések"}
            </span>
            <div className="w-px h-16 bg-white/10 group-hover:bg-white/40 transition-colors" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
