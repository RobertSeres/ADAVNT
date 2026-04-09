import React from "react";
import { CommonPointsListClient } from "./CommonPointsClient";

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

const CommonPoints = () => {
  return (
    <section id="why-us" className="bg-black py-32 border-b border-white/10 relative z-10 overflow-hidden">
      {/* Aesthetic lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            04 / RESULTS
          </span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white lowercase">
            mit csinálunk másképp
          </h2>
        </div>

        <CommonPointsListClient items={commonPoints} />
      </div>
    </section>
  );
};

export default CommonPoints;
