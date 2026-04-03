"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, CheckCircle2, ChevronRight, Zap, Target, BarChart3, Clock, 
  ShieldCheck, Mail, ArrowUpRight, Cpu, Layers, MousePointer2, Settings, 
  Search, Shield, Monitor, Smartphone, Database, Globe
} from "lucide-react";
import Grainient from "@/components/Grainient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ProcessStep = {
  title: string;
  desc: string;
};

type FAQItem = {
  q: string;
  a: string;
};

type ServiceContent = {
  id: string;
  title: string;
  subtitle: string;
  longDescription: string[];
  colors: string[];
  process: ProcessStep[];
  details: { label: string; text: string }[];
  faqs: FAQItem[];
  pricingNote: string;
  techStack: string[];
  targetAudience: string[];
};

const SERVICE_DATA: Record<string, ServiceContent> = {
  web: {
    id: "web",
    title: "Web",
    subtitle: "Nagy teljesítményű digitális értékesítési rendszerek és egyedi szoftverek.",
    longDescription: [
      "Az Advant Web divíziója nem sablonokat árul. Mi olyan digitális ökoszisztémákat építünk, amelyek az Ön üzleti folyamatait támogatják és automatizálják.",
      "A modern webfejlesztés ma már nem csak a megjelenésről szól. A sebesség, a keresőoptimalizálás (SEO) és a biztonság olyan hármas egységet alkot, amely nélkülözhetetlen a piaci versenyben.",
      "Next.js alapú architektúránk garantálja, hogy oldala villámgyors legyen bármilyen eszközön, miközben a headless CMS megoldások teljes szabadságot adnak a tartalomkezelésben."
    ],
    colors: ["#22c55e", "#000000", "#ffffff"],
    process: [
      { title: "Kezdeti Audit & Koncepció", desc: "Mélyinterjúk és piaci elemzés az alapok lefektetéséhez." },
      { title: "UX Kutatás & Wireframing", desc: "Felhasználói útvonalak tervezése a maximális konverzióért." },
      { title: "UI Design & Branding", desc: "Egyedi, prémium vizuális nyelv kialakítása." },
      { title: "Frontend Fejlesztés", desc: "Next.js és React alapú, reszponzív felületek építése." },
      { title: "Backend & API Integráció", desc: "Stabil adatkapcsolatok és egyedi funkciók lefejlesztése." },
      { title: "QA & Tesztelés", desc: "Szigorú tesztelési folyamatok minden böngészőben és eszközön." },
      { title: "Élesítés & Monitoring", desc: "Zökkenőmentes launch és folyamatos teljesítményfigyelés." },
      { title: "Optimalizáció", desc: "Adatvezérelt finomhangolás az éles indulást követően." }
    ],
    details: [
      { label: "Sebesség", text: "Core Web Vitals optimalizált kód az azonnali betöltésért." },
      { label: "SEO", text: "Technikai alapok, amikkel a keresők élmezőnyébe kerülhet." },
      { label: "Biztonság", text: "SSL, DDoS védelem és zárt forráskódú architektúra." },
      { label: "Skálázhatóság", text: "Felhőalapú infrastruktúra, ami bírja a növekedést." },
      { label: "UX Logika", text: "Olyan felületek, amik segítik az eladást, nem hátráltatják." }
    ],
    faqs: [
      { q: "Mennyi ideig tart egy egyedi fejlesztés?", a: "A projekt összetettségétől függően 4-12 hét között mozog az átfutási idő." },
      { q: "Milyen technológiákat használtok?", a: "Elsősorban React, Next.js, TypeScript és Node.js stack-kel dolgozunk." },
      { q: "Segítetek a meglévő oldalunk migrációjában?", a: "Igen, adatvesztés és SEO visszaesés nélkül költöztetjük át régi rendszereit." },
      { q: "Van lehetőség későbbi fejlesztésekre?", a: "Rendszereink modulárisak, így bármikor bővíthetőek új funkciókkal." },
      { q: "Biztosítotok tárhelyet és domaint?", a: "Igen, teljes körű üzemeltetést és menedzselt tárhelyet is kínálunk." },
      { q: "Milyen méréseket építetek be?", a: "Google Analytics 4, Hotjar és egyedi konverziókövető megoldásokat integrálunk." }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    targetAudience: ["Innovatív kkv-k", "Nagyvállalati partnerek", "E-commerce platformok", "B2B szolgáltatók"],
    pricingNote: "Oldalaink minden esetben egyedi igényekre szabottak, így fix árazás helyett projektalapú ajánlatot adunk az audit után."
  },
  media: {
    id: "media",
    title: "Media",
    subtitle: "Ingatlan videók és drón tartalomgyártás, élményközpontú megközelítéssel.",
    longDescription: [
      "Az Advant Media divízió a vizuális kommunikáció mestere. Tudjuk, hogy egy ingatlan vagy projekt sikere sokszor azon múlik, hogyan látják a potenciális érdeklődők.",
      "4K mozifilmes minőségben rögzítjük projektjeit, legyen szó luxusingatlanról, ipari parkról vagy turisztikai látványosságról.",
      "Nem csak felvesszük a nyersanyagot: a vágás, a sound design és a color grading folyamataiban válik a tartalom valódi történetté, ami eladja a víziót."
    ],
    colors: ["#ffffff", "#3b82f6", "#1d4ed8"],
    process: [
      { title: "Konzultáció", desc: "Célok és a célközönség meghatározása." },
      { title: "Helyszínbejárás", desc: "A legjobb szögek és fényviszonyok azonosítása." },
      { title: "Forgatási Terv", desc: "Percpontos beosztás és technikai setup." },
      { title: "Gépforgatás", desc: "Földi cinema kamerák és speciális drónok bevetése." },
      { title: "Légi Felvételek", desc: "FPV és stabil drónfelvételek készítése." },
      { title: "Nyersanyag Válogatás", desc: "A legjobb pillanatok szelektálása." },
      { title: "Vágás & Grading", desc: "Arculathoz illeszkedő látványvilág kialakítása." },
      { title: "Átadás & Finomítás", desc: "Végső simítások és különböző formátumok exportálása." }
    ],
    details: [
      { label: "Minőség", text: "Native 4K 10-bit LOG felvételek a professzionális utómunkához." },
      { label: "Drón Technika", desc: "Beltéri FPV drónok és kültéri 5.1K platformok." } as any,
      { label: "Vágás", text: "Dinamikus, zenei ütemre vágott anyagok." },
      { label: "Sound Design", text: "Helyszíni hangok és prémium licencelt zenék." },
      { label: "Marketing Ready", text: "TikTok, Reels és YouTube optimalizált verziók." }
    ],
    faqs: [
      { q: "Milyen messzire szálltok ki?", a: "Országos lefedettséggel dolgozunk, de nemzetközi megbízásokat is vállalunk." },
      { q: "Milyen drónjaitok vannak?", a: "A legújabb DJI ipari és cinema drónokkal, valamint épített FPV verseny drónokkal rendelkezünk." },
      { q: "Rossz idő esetén mi a teendő?", a: "Eső vagy erős szél esetén díjmentesen egyeztetünk új időpontot." },
      { q: "Kérhetők nyers felvételek is?", a: "Alapesetben kész, vágott anyagot adunk át, de egyedi megállapodás alapján a nyersanyag is kérhető." },
      { q: "Van szükség engedélyekre?", a: "Minden engedélyt (lakott terület feletti repülés, légtérhasználat) mi intézünk." },
      { q: "Vállaltok teljes kampányt is?", a: "Igen, a tartalomgyártástól a közösségi média hirdetéskezelésig komplett csomagunk van." }
    ],
    techStack: ["DaVinci Resolve", "Adobe Premiere Pro", "DJI Mavic 3 Pro", "Sony FX Series", "Custom FPV Builds"],
    targetAudience: ["Ingatlanirodák", "Beruházók", "Turisztikai desztinációk", "Ipari létesítmények"],
    pricingNote: "A csomagárak a helyszín, a tartalom hossza és a technikai eszközök függvényében változnak. Kérjen ajánlatot!"
  },
  scale: {
    id: "scale",
    title: "Scale",
    subtitle: "A vendéglátás jövője: automatizáció, digitalizáció és profit-optimalizáció.",
    longDescription: [
      "Az Advant Scale megoldásaival a vendéglátóhelyeket a 21. századi digitális szintre emeljük. Célunk, hogy csökkentsük a munkaerő-függőséget és maximalizáljuk a bevételt.",
      "Saját fejlesztésű foglalási motorunkkal megszüntetjük a külső platformok jutalékterhét, miközben modern digitális étlapjaink növelik a kosárértéket.",
      "Az adat az új valuta: rendszerünk statisztikáival pontosan láthatja, mikor, mit és ki rendel, így optimalizálhatja készleteit és személyzetét."
    ],
    colors: ["#fef08a", "#eab308", "#a855f7"],
    process: [
      { title: "Audit", desc: "Az aktuális operatív és digitális folyamatok feltérképezése." },
      { title: "Rendszertervezés", desc: "A helyi igényekhez szabott funkciólista összeállítása." },
      { title: "Hardver Setup", desc: "A szükséges eszközök (QR kódok, tabletek) telepítése." },
      { title: "Szoftver Setup", desc: "A foglalási és étlap motorok élesítése." },
      { title: "Adatmigráció", desc: "Meglévő étlapok és vendégadatok betöltése." },
      { title: "Tréning", desc: "A személyzet oktatása a rendszer használatára." },
      { title: "Marketing Integráció", desc: "Hűségprogramok és remarketing szekvenciák beállítása." },
      { title: "Monitorozás", desc: "Folyamatos elemzés a hatékonyság mérésére." }
    ],
    details: [
      { label: "Jutalékmentes", text: "Nincs 10-20%-os jutalék a foglalások után." },
      { label: "QR Menü", text: "Gyors, mobilbarát rendelési felület helyszíni fogyasztáshoz." },
      { label: "CRM", text: "Saját vendégadatbázis építése közvetlen eléréshez." },
      { label: "Analytics", text: "Részletes riportok a népszerű ételekről és csúcsidőszakokról." },
      { label: "Integráció", text: "Kapcsolódás a legtöbb meglévő POS rendszerhez." }
    ],
    faqs: [
      { q: "Mekkora havidíjjal kell számolnom?", a: "A rendszer moduláris, így csak azért fizet, amit valóban használ. Kérjen ajánlatot!" },
      { q: "Szükséges új hardver?", a: "Rendszerünk legtöbbször a már meglévő táblagépeken és telefonokon is fut." },
      { q: "Milyen gyors a bevezetés?", a: "Az auditot követően akár 1-2 héten belül élesíthető a teljes rendszer." },
      { q: "Adtok marketing segítséget is?", a: "Igen, segítünk a rendszeren keresztül érkező vendégek visszacsábításában." },
      { q: "Milyen nyelveken érhető el?", a: "Alapesetben magyar és angol, de bármilyen nyelvű étlapot kezelni tudunk." },
      { q: "Segítetek a fotózásban is?", a: "Az Advant Media divíziónkkal együttműködve professzionális ételfotózást is vállalunk." }
    ],
    techStack: ["Cloud Reservation", "Digital Menu Webapp", "CRM Dashboard", "QR Tech", "API Connectors"],
    targetAudience: ["Éttermek", "Kávézók", "Szállodák", "Bárok", "Catering cégek"],
    pricingNote: "Havidíjas és projektalapú konstrukciókat is kínálunk. Vegye fel velünk a kapcsolatot!"
  },
  dronera: {
    id: "dronera",
    title: "Dronera",
    subtitle: "Ipari dróntechnológia, mérnöki pontosságú adatfeldolgozás.",
    longDescription: [
      "A Dronera divízió az építőipar, a mezőgazdaság és az állagmegóvás számára nyújt mérnöki pontosságú adatokat a levegőből.",
      "Nem csak repülünk: professzionális fotogrammetriai és hőtérképes elemzéseket készítünk, amikkel milliókat takaríthat meg a tervezési és kivitelezési hibák elkerülésével.",
      "Az RTK precíziós helymeghatározás révén ±2 cm-es abszolút pontosságot garantálunk, legyen szó területszámításról vagy 3D modellalkotásról."
    ],
    colors: ["#000000", "#f97316", "#6b7280"],
    process: [
      { title: "Igényfelmérés", desc: "Milyen adatokra és pontosságra van szükség?" },
      { title: "Engedélyeztetés", desc: "Légtérhasználat és repülési tervek jóváhagyása." },
      { title: "Helyszíni mérés", desc: "RTK bázisállomás felállítása és repülés." },
      { title: "Adatátvitel", desc: "Több gigabájtnyi nyersadat biztonságos feltöltése." },
      { title: "Feldolgozás", desc: "Felhőalapú fotogrammetria és AI elemzés." },
      { title: "Validáció", desc: "A mérési eredmények kontrollja földi pontok alapján." },
      { title: "Kiértékelés", desc: "Szakértői véleményezés és jelentéskészítés." },
      { title: "Exponálás", desc: "3D modellek és riportok átadása a kívánt formátumban." }
    ],
    details: [
      { label: "Precízió", text: "Milliméteres felbontású ortofotók és 3D pontfelhők." },
      { label: "Hőtérkép", text: "Hőszigetelési hibák és napelemparkok gyors diagnosztikája." },
      { label: "Volume", text: "Pontos köbméterszámítás földmunkákhoz és készletkezeléshez." },
      { label: "Progress", text: "Hetente frissülő drónos dokumentáció nagyberuházásokhoz." },
      { label: "Mezőgazdaság", text: "Multispektrális felvétel vadkár és növényállapot méréshez." }
    ],
    faqs: [
      { q: "Milyen formátumba kapom meg az adatokat?", a: "DWG, PDF, OBJ, TIFF és felhőalapú interaktív nézegetőt is biztosítunk." },
      { q: "Mennyire pontos a mérés?", a: "RTK korrekcióval ±2 cm abszolút pontosságot érünk el a koordináta rendszerben." },
      { q: "Mekkora területet tudtok egy nap mérni?", a: "Ipari gépeinkkel akár 100-200 hektárt is le tudunk fedni egy munkanap alatt." },
      { q: "Milyen drónokkal dolgoztok?", a: "DJI Enterprise szériájú Mavic 3T, Matrice 300 és Phantom 4 RTK flottánk van." },
      { q: "Van biztosításotok?", a: "Minden gépeink rendelkezik felelősségbiztosítással és hatósági regisztrációval." },
      { q: "Milyen szoftverrel dolgozzátok fel?", a: "Pix4D, Agisoft Metashape és egyedi feldolgozó motorokat használunk." }
    ],
    techStack: ["DJI Enterprise", "RTK GPS", "Thermal Mapping", "3D Photogrammetry", "Lidar Ready"],
    targetAudience: ["Építőipari kivitelezők", "Tervezőirodák", "Mezőgazdasági nagybirtokok", "Útépítők"],
    pricingNote: "Az ár a terület nagyságától, a kért adatok típusától és a sűrűségtől függ. Kérjen mérnöki ajánlatot!"
  }
};

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const serviceId = typeof params?.id === "string" ? params.id.toLowerCase() : "web";
  const data = SERVICE_DATA[serviceId] || SERVICE_DATA.web;

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!mounted) return null;

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <Navbar />

      {/* 1. HERO - MASSIVE & MINIMAL */}
      <section className="relative h-[90dvh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Grainient
            color1={data.colors[0]}
            color2={data.colors[1]}
            color3={data.colors[2]}
            timeSpeed={0.15}
            zoom={0.65}
            noiseScale={3.5}
            grainAmount={0.12}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[10px] font-black tracking-[0.6em] text-zinc-500 uppercase mb-8 block">
              advant system / {data.id}
            </span>
            <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter leading-[0.8] mb-12 lowercase text-white">
              {data.title}
            </h1>
            <p className="text-xl md:text-3xl font-light text-zinc-200 max-w-4xl mx-auto lowercase leading-tight">
              {data.subtitle}
            </p>
          </motion.div>
          
          <div className="mt-20 flex justify-center">
             <div className="w-px h-32 bg-linear-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. LONG INFO Section */}
      <section className="py-32 md:py-64 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] lowercase">
                 digitális kiválóság, <br />
                 <span className="text-zinc-700 italic">kompromisszumok nélkül.</span>
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col gap-10">
              {data.longDescription.map((p, i) => (
                <p key={i} className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed first:text-white first:font-medium">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOLYAMAT (Extended Process 8 steps) */}
      <section className="py-32 md:py-64 border-y border-white/5 bg-zinc-950/20 relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black tracking-widest text-zinc-600 block mb-6 uppercase">01 / az út</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter lowercase">hogyan dolgozunk?</h2>
                <p className="text-zinc-500 mt-6 text-lg">A precízió az alapunk. Minden projektet egy szigorú, jól dokumentált folyamaton viszünk keresztül.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {data.process.map((step, i) => (
                <div key={i} className="group relative p-12 bg-black hover:bg-zinc-950 transition-all flex flex-col min-h-[350px]">
                  <span className="text-6xl font-black text-zinc-900 mb-12 transition-colors group-hover:text-white/5">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-bold mb-6 uppercase tracking-tighter text-white">{step.title}</h3>
                  <p className="text-zinc-500 text-sm font-light lowercase leading-relaxed mt-auto group-hover:text-zinc-300 transition-colors">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. TECH & TARGET Sections */}
      <section className="py-32 md:py-64">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              {/* Tech Stack List */}
              <div className="flex flex-col gap-12">
                 <div className="flex items-center gap-4">
                    <Cpu size={24} className="text-zinc-600" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">alkalmazott technológia</h4>
                 </div>
                 <div className="flex flex-wrap gap-x-12 gap-y-16">
                    {data.techStack.map((tech, i) => (
                      <div key={i} className="group">
                         <span className="text-2xl md:text-4xl font-black text-zinc-800 group-hover:text-white transition-all cursor-default">{tech}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Target Audience */}
              <div className="flex flex-col gap-12">
                 <div className="flex items-center gap-4">
                    <Target size={24} className="text-zinc-600" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">kinek ajánljuk?</h4>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {data.targetAudience.map((target, i) => (
                       <div key={i} className="p-8 border border-white/5 flex flex-col gap-4 group hover:border-white/20 transition-all">
                          <CheckCircle2 size={16} className="text-zinc-800 group-hover:text-white" />
                          <span className="text-lg font-bold lowercase text-zinc-400 group-hover:text-white">{target}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. DENSE DETAILS (5x content) */}
      <section className="py-32 md:py-64 bg-zinc-950/40 relative overflow-hidden">
        <div className="container mx-auto px-6 overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {data.details.map((detail, i) => (
                <div key={i} className="p-16 bg-black flex flex-col gap-8 group hover:bg-zinc-950 transition-all">
                   <div className="w-10 h-[2px] bg-zinc-800 group-hover:bg-white transition-all duration-700" />
                   <div>
                     <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-6 group-hover:text-zinc-500 transition-colors">{detail.label}</h4>
                     <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-tight lowercase">{detail.text}</p>
                   </div>
                </div>
              ))}
              
              {/* Extra block for balance */}
              <div className="p-16 bg-zinc-950 flex flex-col justify-center items-center text-center opacity-50 group">
                 <MousePointer2 size={32} className="mb-6 opacity-20" />
                 <p className="text-[10px] font-bold uppercase tracking-widest">további részletek</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. FAQ (Extended to 6) */}
      <section className="py-32 md:py-64 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
               <div className="max-w-xl">
                 <span className="text-[10px] font-black tracking-widest text-zinc-600 block mb-6 uppercase">02 / q&a</span>
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter lowercase">gyakori kérdések</h2>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {data.faqs.map((faq, i) => (
                <div key={i} className="p-12 bg-black hover:bg-zinc-950 transition-colors flex flex-col gap-8 min-h-[300px]">
                  <h4 className="text-xl font-bold text-white lowercase leading-tight">{faq.q}</h4>
                  <p className="text-zinc-500 font-light leading-relaxed lowercase mt-auto">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING & OFFER (Bold) */}
      <section className="py-32 md:py-64 bg-black relative">
        <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto border-[10px] border-white/5 p-16 md:p-32 flex flex-col lg:flex-row items-center gap-20 group relative overflow-hidden">
              <div className="absolute inset-0 z-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-1000" />
              
              <div className="flex-1 relative z-10">
                 <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter lowercase leading-[0.9]">
                   kezdjük el a <br />
                   <span className="text-zinc-600 italic">közös munkát.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed">
                   {data.pricingNote}
                 </p>
                 <div className="flex flex-wrap gap-6">
                    <button className="px-14 py-7 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-4">
                       ajánlatot kérek <ArrowUpRight size={18} />
                    </button>
                    <button className="px-14 py-7 border border-white/10 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                       konzultáció
                    </button>
                 </div>
              </div>

              <div className="hidden lg:flex flex-col gap-8 text-white/5 group-hover:text-white/10 transition-colors">
                 <ShieldCheck size={120} strokeWidth={0.5} />
                 <Clock size={120} strokeWidth={0.5} />
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
