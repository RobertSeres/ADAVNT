"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";
import { BarChart, Cpu, PenTool, Eye, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Grainient from "@/components/Grainient";

const servicesData = [
  {
    id: "strategia",
    tabLabel: "STRATÉGIA",
    colors: ["#22c55e", "#000000", "#ffffff"],
    icon: <BarChart size={18} />,
    title: "vakrepülés helyett matematikai pontosság.",
    description: "nem kezdünk el találomra hirdetni vagy weboldalt építeni. először megvizsgáljuk az üzleted, majd készítünk egy térképet a növekedéshez.",
    points: [
      {
        title: "Növekedési Átvilágítás (Growth Audit)",
        plainText: "Átnézzük a céged pénzügyeit, eladásait és marketingjét, mintha egy orvos vizsgálná meg a röntgenképet.",
        importance: "Kiderítjük, hol folyik el a pénz feleslegesen, és melyek azok az azonnali kiaknázatlan lehetőségek, amikre eddig nem is gondoltál – itt található az azonnali bevétel."
      },
      {
        title: "Üzleti Tervezés (Business Plan)",
        plainText: "Nem csak abban reménykedünk, hogy valami majd működik. Építünk egy lépésről-lépésre követhető, kőkemény tervet.",
        importance: "Pontosan látni fogod előre, hogy a kitűzött bevételi célhoz hány új látogató, hány érdeklődő, majd végül hány vásárló kell. Matematika, nem jósda."
      },
      {
        title: "Célmutató Rendszer (KPI-ok)",
        plainText: "Közösen meghatározzuk azt a 3-4 legfontosabb mérőszámot, amik minden hónapban eldöntik az eredményeidet.",
        importance: "Néhány sarokszámmal fogsz dolgozni. Cégvezetőként sosem kell elveszned bonyolult Excel táblákban; elég ránézned a hét fókuszszámaira és azonnal tudni fogod, jól megy-e a bolt."
      },
      {
        title: "Negyedéves Stratégiai Újratervezés",
        plainText: "Minden negyedév végén összeülünk a csapattal, visszanézzük az elért eredményeket, és ha a piac változott, korrigálunk.",
        importance: "Nem várunk az év végéig azzal, hogy rájöjjünk, hogy valami nem működik megfelelően. Folyamatosan és azonnal reagálunk a számokra."
      }
    ]
  },
  {
    id: "web",
    tabLabel: "WEBFEJLESZTÉS",
    colors: ["#ffffff", "#3b82f6", "#1d4ed8"],
    icon: <Cpu size={18} />,
    title: "nem online prospektusokat építünk.",
    description: "a weboldalad nem egy elegáns digitális névjegykártya. a legkiválóbb, napi 24 órában dolgozó, fáradhatatlan értékesítődnek kell lennie.",
    points: [
      {
        title: "Egyedi Rendszerek (Sablonok Nélkül)",
        plainText: "Modern technológiával (Next.js) írunk mindent teljesen nulláról. Nincsenek lomha sablonok vagy törékeny bővítmények.",
        importance: "Olyan lesz, mint egy egyedi tervezésű sportautó: szupergyors (ami miatt a Google is sokkal előrébb sorolja), feltörhetetlenül biztonságos, és sosem omlik össze, ha tömegek látogatják egyszerre."
      },
      {
        title: "Konverzió Optimalizálás (CRO)",
        plainText: "Folyamatosan figyeljük, mit csinálnak a látogatóid, és apró, de hatásos pszichológiai finomhangolásokkal tereljük őket a vásárlás felé.",
        importance: "Ha eddig 100-ból csak 1 ember fizetett neked, addig finomhangoljuk a gombokat és a struktúrát, amíg 100-ból 5 nem fog. Ez a létező legolcsóbb módja a bevétel többszörözésének, hisz új hirdetési pénz nélkül növeljük a forgalmad."
      },
      {
        title: "Custom App & Headless E-commerce Vonal",
        plainText: "Leválasztjuk a weblapod vizuális front-end jét az elavult e-commerce motorokról. Ha komoly a volumened, egyedi webes applikációvá formáljuk a vásárlási élményt.",
        importance: "Nulla töltési idő és egyedi, applikáció-szerű folyamat. Amikor a konkurencia Shopify/WooCommerce oldala tölt, te már rég lezártad az eladást."
      },
      {
        title: "Érkező Oldalak (Landing Page)",
        plainText: "Egy adott termékednek, szolgáltatásodnak vagy hirdetésednek készítünk egyetlen önálló, zárt céloldalt, minden egyéb menü és felesleges link nélkül.",
        importance: "A látogatónak már csak két választása marad: vagy vásárol, vagy kilép. Mivel nincsenek elterelő tényezők, a vásárlási arány drasztikusan, sokszorosára ugrik fel."
      },
      {
        title: "Villámgyors Betöltési Sebesség",
        plainText: "Lefaragunk minden tizedmásodpercet. Extra optimalizációval garantáljuk, hogy minden fotó, szoftver és animáció villámcsapás-szerűen betöltsön.",
        importance: "A kutatások szerint, ha egy honlap 3 másodpercnél lassabban töltődik be mobiltelefonon, a potenciális vevők többsége azonnal feladja és elmegy a konkurenciához. Nálunk az oldalad várakozás nélkül berobban a képernyőn."
      }
    ]
  },
  {
    id: "tartalom",
    tabLabel: "TARTALOM & VIDEÓ",
    colors: ["#fef08a", "#eab308", "#a855f7"],
    icon: <PenTool size={18} />,
    title: "szövegek és vizuális elemek, amik eladnak.",
    description: "cél nélküli 'esztétikus' posztolás helyett olyan profi tartalmakat készítünk, amik mély bizalmat építenek ki és generálják a vásárlókat.",
    points: [
      {
        title: "Rövid, Vertikális Videók (Reels/TikTok)",
        plainText: "Abszolút tudatos klipeket forgatunk, amik azonnal elkapják és meg is tartják a social médiában görgető felhasználó tekintetét.",
        importance: "Ma ez a leghatékonyabb, legdinamikusabb módja, hogy százezreket érjünk el és azonnali hiteles emberi arcot adjunk a vállalkozásodnak."
      },
      {
        title: "Tömeges High-End Videó & FPV Drón",
        plainText: "Filmes stábbal, professzionális eszközökkel (RED, FPV drón) mozi minőségű tömeges kampányanyagokat állítunk elő a termékedről/szolgáltatásodról.",
        importance: "Az FPV drón és a high-end mozi megjelenés az, ami kiemeli a brandedet az 'átlagos hazai kkv-k' mezőnyéből, és igazolja az extrém magas áraidat."
      },
      {
        title: "Kizárólagos AI Generált Reklámfilmek",
        plainText: "Legfejlettebb AI vizuális modellekkel (Midjourney, Runway) készítünk elképesztő promó videókat, amik hagyományos forgatással milliókba kerülnének.",
        importance: "Korlátlan vizuális lehetőségeket ad: a terméked lehet a marson, vagy egy poszt-apokaliptikus világban. Garantált a 'scroll stopper' hatás, ami drasztikusan olcsóbbá teszi a hirdetéseket."
      },
      {
        title: "Értékesítési Szövegírás (Copywriting)",
        plainText: "Mi nem unalmas formaszövegeket, vagy önfényező körmondatokat írunk. Éles, profi értékesítési rendszereket rakunk össze szavakból, amik azonnal eladnak.",
        importance: "Egy profi hirdetési szöveg magával ragadja a vevők tudatalatti fájdalmait, és felkínálja a te megoldásodat, aminek egyszerűen képtelenek ellenállni."
      },
      {
        title: "Vásárlói és UGC Videók (Tesztimonialok)",
        plainText: "Olyan natív anyagokat készíttetünk, amiben valós (vagy úgy tűnő, hiteles) emberek magyarázzák el, hogy imádják a termékedet és miért életmentő számukra.",
        importance: "Ez a mai internet atombombája! Az emberek ötször hamarabb hisznek a szomszédjuknak, egy levideózott értékelőnek, mint magának a tökéletesre gyártott céges reklámnak."
      },
      {
        title: "Professzionális Image Fotózás",
        plainText: "Borotvaéles, csúcsminőségű prémium fotókat hozunk össze a csapatodról, a fizikai termékedről, vagy a napi munkafolyamatokról.",
        importance: "Már az első egy másodpercben egyértelmű benyomást és szilárd pozíciót ad a cégnek: 'ez itt egy brutál profi márka, senki nem ér a nyomukba!'."
      }
    ]
  },
  {
    id: "kampany",
    tabLabel: "KAMPÁNY & ADAT",
    colors: ["#000000", "#f97316", "#6b7280"],
    icon: <Eye size={18} />,
    title: "minden fillér forrása, útja és hozama ismert.",
    description: "nálunk a hirdetés nem pénzköltést jelent. sebészeti precizitással, a megfigyelt napi adatok alapján irányítjuk a befektetésed.",
    points: [
      {
        title: "Dinamikus Hirdetéskezelés (Meta, Google)",
        plainText: "Ott és akkor csapunk le a hirdetéseddel platformokon túl, amikor a célközönségnél pont felmerül az igény és el fogják költeni a pénzüket.",
        importance: "Szigorúan levágjuk a felesleges megjelenítéseket. Nem próbáljuk eladni annak, aki se nem fogékony trükkjeinkre, se nem költ sokat nálad. Kizárólag a fizetőképes érdeklődőkre vadászunk a Te profitod érdekében."
      },
      {
        title: "Dinamikus Retargeting (Célzott Újramegszólítás)",
        plainText: "Ha az első randin az ügyfél csupán megnézte az oldalt és kilépett, okos, kiszámított hirdetéssorozattal akár hetekig újra és újra felbukkanunk neki ellenállhatatlan ajánlatokkal a weben.",
        importance: "Tízből legalább nyolc látogató sosem vásárol azonnal, az első találkozáskor. Ha nem tudod, hogyan 'üldözd' őt és hozd vissza az ingerküszöbére, azzal folyamatosan az utcára dobod a megtermelt nyereséget."
      },
      {
        title: "Pengeéles Mérési Rendszerek (GA4 & Pixels)",
        plainText: "Minden apró kattintást, minden termékoldal megtekintést rejtett, speciális követőkódokkal rögzítünk neked a háttérben.",
        importance: "Soha többé nem fogsz a sötétben tapogatózni! Még a befektetett fillérek sorsát is végigkövetheted; például tisztán látod, hogy egy hírlevél, Google kattintás vagy FB hirdetés hozta be aznap a profitod legjavát."
      },
      {
        title: "Élő Vezérlőpult (Saját Dashboard Rendszer)",
        plainText: "Felépítünk valós időben egy gyönyörű, folyamatosan magától frissülő online eredményjelző grafikai panelt.",
        importance: "Többé nem kell könyörögni a hó végi, unalmas Excel jelentésért. Mobilról, tabletről pillanatok alatt megnézheted, hol tartotok – így tisztán, mint az üveg, úgy látsz bele, miről is szól napi szinten az üzleted bevételezése."
      },
      {
        title: "Egyedi AI Asszisztens & B2B Lead Generálás",
        plainText: "Saját AI automatizációt építünk a cégednek és egy automata LinkedIn outreach rendszert, ami egész nap a döntéshozókat (CEO, Founder) gyűjti neked.",
        importance: "Ne te keresd az ügyfelet kézzel. A szoftver felkutatja, megszólítja és az értékesítési csatornádba vezeti a legkomolyabb B2B partnereket, amíg te alszol."
      }
    ]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showReturnBanner, setShowReturnBanner] = useState<{show: boolean, type: 'pricing' | 'services' | null}>({show: false, type: null});

  // Initialize from URL params safely (scroll handled by SmoothScroll + hash)
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fromParam = searchParams.get("from");

    if (fromParam === 'pricing') {
      setShowReturnBanner({show: true, type: 'pricing'});
    } else if (fromParam === 'services') {
      setShowReturnBanner({show: true, type: 'services'});
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Sync state back to URL if tab changes organically
  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  const currentSegment = servicesData.find(s => s.id === activeTab);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />

        <div className="relative w-full pt-32 pb-40 overflow-clip">
          {/* Aesthetic Background Grid lines */}
          <div className="fixed top-0 left-1/4 w-px h-screen bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none z-0" />
          <div className="fixed top-0 right-1/4 w-px h-screen bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none z-0" />

          {/* Removed Hero Header */}

          {/* Detailed Services Content Section */}
          <section id="eszkoztar" className="relative container mx-auto px-6 pt-16 z-10">
            <div className="max-w-7xl mx-auto">
              
              {/* Tab Selector Rectangle (Industrial Box) */}
              <div className="border border-white/10 flex flex-wrap md:flex-nowrap mb-16 bg-black/60 backdrop-blur-xl relative overflow-hidden">
                {servicesData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex-1 min-w-[50%] md:min-w-0 flex items-center justify-center gap-3 p-6 md:p-8 transition-colors duration-500 border-b md:border-b-0 border-r border-white/10 group last:border-r-0 relative overflow-hidden
                      ${activeTab === tab.id ? 'text-white' : 'bg-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/2'}
                    `}
                  >
                    {activeTab === tab.id && (
                      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 transition-opacity duration-1000">
                        <Grainient
                          color1={tab.colors[0]}
                          color2={tab.colors[1]}
                          color3={tab.colors[2]}
                          timeSpeed={0.3}
                          zoom={0.8}
                          noiseScale={3.0}
                          grainAmount={0.15}
                          className="h-full w-full"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                      </div>
                    )}
                    
                    <span className={`relative z-10 transition-colors ${activeTab === tab.id ? 'text-white' : 'text-zinc-600'}`}>
                      {tab.icon}
                    </span>
                    <span className="relative z-10 text-[10px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em]">
                      {tab.tabLabel}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Content Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start min-h-[500px]">
                
                {!currentSegment ? (
                  <div className="lg:col-span-12 flex flex-col items-center justify-center text-center py-32 border border-white/5 bg-white/2 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50">
                      <ArrowRight className="text-zinc-500 rotate-90" size={24} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-light text-zinc-500 lowercase tracking-tight">
                      kattints a fenti eszközök valamelyikére <br/> a részletek megtekintéséhez.
                    </h3>
                  </div>
                ) : (
                  <>
                    {/* Left side: Intro for segment */}
                    <div className="lg:col-span-5 flex flex-col pt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSegment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl md:text-5xl font-black text-white lowercase tracking-tight mb-8 leading-none">
                        {currentSegment.title}
                      </h3>
                      <p className="text-lg text-zinc-400 font-light lowercase leading-relaxed">
                        {currentSegment.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right side: Bullet details */}
                <div className="lg:col-span-7 border-l border-t border-white/10 pt-16 lg:pt-0 lg:border-t-0 pl-0 lg:pl-16">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSegment.id + "-content"}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col gap-16"
                    >
                      {currentSegment.points.map((point, idx) => (
                        <div key={idx} className="relative group">
                          {/* Aesthetic numbered bullet */}
                          <div className="mb-6 flex items-center gap-4">
                            <span className="text-[10px] font-bold text-zinc-600 tracking-widest border border-white/10 px-3 py-1 bg-white/2">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <div className="h-px bg-zinc-800 flex-1 group-hover:bg-zinc-600 transition-colors" />
                          </div>
                          
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-widest text-[12px] md:text-[14px]">
                            {point.title}
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {/* What it means */}
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-2">
                                <ArrowRight size={14} className="text-zinc-600" />
                                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">
                                  Mit jelent pontosan?
                                </span>
                              </div>
                              <p className="text-sm text-zinc-300 font-light leading-relaxed lowercase">
                                {point.plainText}
                              </p>
                            </div>

                            {/* Why it is important */}
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-2">
                                <Check size={14} className="text-emerald-500" />
                                <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-500/80 uppercase">
                                  Miért fontos neked?
                                </span>
                              </div>
                              <p className="text-sm text-zinc-400 font-light leading-relaxed lowercase">
                                {point.importance}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            )}

              </div>

            </div>
          </section>

        </div>
        
        {/* Return Banner using from parameter */}
        <AnimatePresence>
          {showReturnBanner.show && (
            <motion.div 
              initial={{ y: 100, opacity: 0, x: "-50%" }}
              animate={{ y: 0, opacity: 1, x: "-50%" }}
              exit={{ y: 100, opacity: 0, x: "-50%" }}
              className="fixed bottom-8 left-1/2 w-[90%] max-w-3xl bg-black/80 backdrop-blur-xl border border-white/20 z-9999 p-3 pl-6 flex flex-col md:flex-row items-center justify-between shadow-2xl"
            >
              <div className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-0">
                {showReturnBanner.type === 'pricing' 
                  ? "Láttad a részleteket? Válassz egyet a befektetéshez."
                  : "Vissza a főoldalra a Szolgáltatásokhoz."}
              </div>
              <Link 
                href={showReturnBanner.type === 'pricing' ? "/#pricing" : "/#services"} 
                className="bg-white text-black px-6 py-3 font-black text-[10px] tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                {showReturnBanner.type === 'pricing' ? "Vissza a csomagokhoz" : "Vissza az eszközökhöz"} <ArrowRight size={14} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        
      </main>
    </SmoothScroll>
  );
}
