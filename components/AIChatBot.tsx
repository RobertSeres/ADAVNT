"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

// Simulated Knowledge Base matching
const botKnowledge = [
  {
    keywords: ["growth foundation", "alap csomag", "alap csomagban", "hatszázezres", "600"],
    answer: "a growth foundation egy komplett 600.000 forint körüli belépő szint. tartalmaz egy átfogó konverziós stratégiát, prémium next.js webfejlesztést, cro (konverzió optimalizálás) folyamatokat, ga4/capi analitikát, és egy komplett teljesítméy-alapú meta/google hirdetéskezelést, alapvideókkal együtt."
  },
  {
    keywords: ["full scale", "skálázó csomag", "drágább csomag", "1.2", "millió"],
    answer: "a full scale partner az 1.2 milliós csúcsváltozat a piacvezetővé váláshoz. ebben már benne van a headless e-commerce fejlesztés, az egyedi ai asszisztens építés (mint amivel most is beszélsz), a profilozott b2b linkedin outreach, valamint a tömeges high-end filmes és fpv drón kampánygyártás is."
  },
  {
    keywords: ["politika", "háború", "hírek", "személyes", "fidesz", "ellenzék", "orbán", "kormány", "véleményed", "ki vagy", "vicc", "isten", "vallás", "meleg", "szex", "irán", "izrael", "ukrajna", "választás", "trump", "biden", "putyin", "lövöldözés", "botrány"],
    answer: "erre a kérdésre sajnos nem tudok válaszolni. az advant ai kizárólag a growth partner üzleti folyamatokkal, online marketinggel és webfejlesztéssel kapcsolatban nyújt információt."
  },
  {
    keywords: ["hogy működik", "hogyan működik", "folyamat", "lépések", "mi a menet", "menete"],
    answer: "először tartunk egy gyors eligazító hívást. ha megvan a kémia, egy mélyreható iparági audittal kezdünk, amelyből stratégiai térképet rajzolunk. ezután felépítjük a konverziós gépezetet (prémium webfejlesztés, cro, ux), majd rákapcsoljuk az optimalizált forgalmat (hirdetések, seo). végül negyedévente együtt kiértékeljük a számokat."
  },
  {
    keywords: ["miért ti", "miért pont ti", "miért válasszalak", "előnyötök", "előny"],
    answer: "mert nálunk nem 'kiszervezett' marketinged lesz, aki heti 2 posztért küldi a számlát. beülünk melléd a virtuális asztalhoz növekedési partnerként. nem esztétikát árulunk, hanem kőkemény matekot és fekete-fehér, adatvezérelt skálázódást."
  },
  {
    keywords: ["kik vagytok", "rólotok", "mi a cég", "advant kik", "kik vagytok ti", "magatokról"],
    answer: "az advant egy fiatal, kompromisszumot nem ismerő tech és üzleti divíziókból álló csapat. azért jöttünk létre, mert elegünk lett a klasszikus elszigetelt ügynökségi modellből, ahol a marketinges mutogat a webfejlesztőre, ha nincs eredmény. mi egy tető alatt viszünk mindent a sikerért."
  },
  {
    keywords: ["mit csináltok", "mivel foglalkoztok", "szolgáltatások", "pontosan mit"],
    answer: "négy fő oszlopon alapul a rendszerünk: 1. tűpontos üzleti stratégia és audit. 2. prémium egyedi webfejlesztés és ux/cro alapok. 3. minőségi tartalom- és videógyártás a bizalomra. 4. adatvezérelt fizetett kampányok (meta, google, linkedin)."
  },
  {
    keywords: ["eszköz", "tech stack", "technológia", "programozás", "mivel írjátok", "milyen eszköz", "next"],
    answer: "webfejlesztésben legmodernebb stackkel dolgozunk: react, next.js, tailwind css és framer motion az elképesztő sebességért és teljesítményért. marketing fronton mély ga4 integrációt, meta capi-t (szerveroldali mérés) és speciális cro szoftvereket (hotjar, clarity) használunk."
  },
  {
    keywords: ["kapcsolattartás", "meeting", "hívás", "kommunikáció", "slack", "hogy beszélünk"],
    answer: "a sebességben hiszünk. slacken vagy dedikált whatsapp csoportban élünk a csapattal, ahol azonnal reagálunk. ezen felül kéthetente stratégiai 'sync' hívást tartunk és folyamatosan látod a valós idejű dashboardokon, hogy hol tartanak az eremények."
  },
  {
    keywords: ["dizájn", "design", "arculat", "ui", "ux", "grafika"],
    answer: "a design nálunk nem művészet, hanem pszichológia. letisztult, modern indusztriális vonalakkal operálunk, de az arculatot 100%-ban úgy építjük fel a konverzió (cro) köré, hogy az a bizalmat és a prémium minőséget sugározza a célközönségednek."
  },
  {
    keywords: ["analitika", "analytics", "követés", "mérés", "pixel", "gtm"],
    answer: "adatok nélkül csak találgatunk. haladó szerveroldali mérésekkel (google tag manager, meta conversions api, ga4) dolgozunk. az adatbiztonsági szigorítások ellenére is kristálytisztán látjuk a tranzakciók, leadek és események pontos forrását és roi (megtérülés) rátáját."
  },
  {
    keywords: ["induló", "startup", "kisvállalat", "nincs bevétel", "alapítás"],
    answer: "ha teljesen nulláról, számottevő tőke (cash-flow) nélkül indítasz egy projektet, valószínűleg nem a mi prémium modellünk kell most neked. mi a meglévő, már bizonyított termékkel és tőkével rendelkező cégeket rakjuk rakétára és skálázzuk tovább exponenciálisan."
  },
  {
    keywords: ["külföld", "nemzetközi", "angol", "export", "külpiac"],
    answer: "igen, külföldi terjeszkedésben is van tapasztalatunk. mind stratégiailag, mind nyelvi seo és lokalizáció terén végig tudjuk vinni a skálázást az európai (dach, uk) piacon és a tengerentúlon egyaránt."
  },
  {
    keywords: ["webshop", "e-commerce", "shopify", "woocommerce", "áruház"],
    answer: "komoly e-commerce fókusszal dolgozunk. nem dobozos wordpress sablonokat nyomunk rád, hanem egyedi react (next.js) frontendű modern webshopokat (headless commerce, shopify/custom backend logic) építünk, amik golyóálló stabilitással hoznak 99 pont feletti pagespeedet és kiugró eladásokat."
  },
  {
    keywords: ["tulajdon", "kód", "kié a kód", "weboldal enyém", "tulajdonjog"],
    answer: "a teljes transzparenciában hiszünk (nincs vendor lock-in). amikor a rendszert átadtuk és elszámoltunk, a forráskód, az összes hirdetési- és analitikai fiók 100%-ban a te kizárólagos tulajdonodba kerül és korlátozások nélkül hozzáférsz bárhonnan."
  },
  {
    keywords: ["referencia", "portfólió", "előző munkák", "esettanulmány", "látni szeretném", "mit csináltatok"],
    answer: "mivel nagyon szigorú nda (titoktartási) szerződésekkel védjük a growth partnereink üzleti adatait, publikus bóvli portfóliót nem mutogatunk. ha felveszed velünk a kapcsolatot, egy privát meeting keretében készséggel mutatunk a te iparágadhoz kapcsolódó valós és friss esettanulmányokat és roas eredményeket."
  },
  {
    keywords: ["titok", "nda", "adatbiztonság", "üzleti titok"],
    answer: "amikor beülünk a virtuális asztalodhoz growth partnerként, szigoru titoktartási (nda) szerződést kötünk. senki (sem a versenytársaid, sem az utca embere) nem fogja tőlünk megtudni a belső céges sarokszámaidat, profitrátádat, vagy hogy hogyan hoztuk neked a növekedést."
  },
  {
    keywords: ["mit nem", "nem vállaljátok", "mit nem csináltok", "nem vállaltok"],
    answer: "mit nem csinálunk? nem építünk 'szép de lassú' 50k-os sablon weboldalakat. nem kezelünk 'csak hogy legyen kinn valami' social posztokat. és nem vállalunk be dropshipping, mlm vagy scamben mozgó projekteket. mi komoly, legitim vállalkozásokat építünk."
  },
  {
    keywords: ["sikerdíj", "jutalék", "százalék", "profitmegosztás"],
    answer: "alapvetően egy kiszámítható alap havidíjas growth partner (retainer) modellben építkezünk az elköteleződés miatt. azonban komolyabb volumennél beépítjük a modellbe a teljesítményalapú, sikerdíjas kiegészítést is, így még inkább a sikerben vagyunk érdekeltek közösen."
  },
  {
    keywords: ["saját csapat", "van fejlesztőm", "in-house", "csak marketing", "csak hirdetés"],
    answer: "szívesen kooperálunk meglévő in-house programozókkal is, de a legjobb és legskálázhatóbb konverziós eredményeket mindig akkor értük el, ha a teljes funnelt (webfejlesztést, cro-t és kampánykezelést) end-to-end az advant vihette."
  },
  {
    keywords: ["hogyan kezdjük", "indulás", "kezdés", "következő lépés", "szeretném"],
    answer: "a legjobb, ha dobsz egy mailt a hello@advant.hu-ra. röviden vázold le, mivel foglalkozol. utána mi 24 órán belül felhívunk tartunk egy gyors 'discovery call'-t, ahol eldöntjük, tudunk-e nektek legalább kétszeres vagy háromszoros hozamot csinálni. ha igen, mehet az audit."
  },
  {
    keywords: ["ár", "mennyi", "költség", "fizetés", "pénz", "csomag"],
    answer: "havi előfizetéses modellben dolgozunk. a pontos ár egy alapos audit után derül ki, mert nincsenek sablon csomagjaink. az együttműködések jellemzően 600.000 ft/hó környékéről indulnak, a feladat méretétől függően."
  },
  {
    keywords: ["web", "honlap", "fejlesztés", "wordpress", "oldal", "konverzió", "cro"],
    answer: "kizárólag egyedi, next.js alapú, villámgyors weboldalakat építünk. sablonokat nem használunk, mert az egyedi kód garantálja, hogy a látogatóid számára a lehető leggyorsabb és legbiztonságosabb felületet biztosítsuk, ami drasztikusan növeli a vásárlási (konverziós) esélyt."
  },
  {
    keywords: ["felújítás", "újratervezés", "meglévő weboldal", "átalakítás"],
    answer: "üzletileg általában nem éri meg instabil, széteső sablon-rendszereket foltozni. webfejlesztés divíziónk a legtöbb esetben egy teljesen új, ultragyors modern platformot készít neked, ami az összes jövőbeli kampányod motorja lesz."
  },
  {
    keywords: ["ügynökség", "miben más", "growth", "különbség", "partner"],
    answer: "egy átlagos ügynökség csak végrehajt és hirdetéseket állít be. mi, mint growth partnerek, a teljes üzleti struktúrádat átvilágítjuk, majd felépítünk egy mindenre (fejlesztés, szövegírás, hirdetés) kiterjedő rendszert. osztozunk a felelősségen a te bevételedért."
  },
  {
    keywords: ["tartalom", "vide", "tiktok", "reels", "poszt", "seo"],
    answer: "nem posztolunk öncélúan 'szép' képeket. profi, pszichológiai fegyverekre fókuszáló rövid-videókat (tiktok/reels), vásárlói beszámolókat (ugc) és minőségi imázsfotókat gyártunk. nálunk minden tartalom a végső konverziót, a vásárlás előidézését szolgálja."
  },
  {
    keywords: ["hirdetés", "kampány", "facebook", "google", "meta", "ads", "ga4", "roi", "megtérülés"],
    answer: "teljes performance marketinget viszünk: google ads, meta (facebook/instagram), és pofesszionális retargeting. úgy költünk, mintha a saját pénzünk lenne, majd minden egyes befektetett fillér megtérülését (roi) élő dashboardokon mutatjuk meg neked, beépített ga4 analitikával."
  },
  {
    keywords: ["linkedin", "b2b", "lead generálás", "leadek"],
    answer: "igen, kiemelkedő tapasztalatunk van precíziós b2b marketing területén. linkedin kampányokkal és optimalizált érkező oldalakkal transzparensen és automatán fogjuk a minőségi üzleti megkereséseket szállítani neked."
  },
  {
    keywords: ["audit", "kpi", "üzleti terv", "stratégia"],
    answer: "minden közös munkát komoly üzleti átvilágítással (audittal) kezdünk. közösen kidolgozunk egy konkrét növekedési üzleti tervet meghatározott mérőszámokkal (kpi-ok), majd a haladást minden negyedévben újratervezzük."
  },
  {
    keywords: ["ipará", "szektor", "vendéglát", "kivel dolgoztok", "kiknek"],
    answer: "elsődlegesen vendéglátásban, e-commerce szektorban, szolgáltatói ágakban és b2b piacon mozgunk rutinosan. de a szektor másodlagos; ha a cégedben megvan a potenciál és te készen állsz a drasztikus növekedésre, tudunk segíteni."
  },
  {
    keywords: ["garancia", "ha nem működik", "biztosíték", "eredmény", "nincs", "nincs eredmény"],
    answer: "kőkemény felelősséget vállalunk a számokért. folyamatosan mérjük és optimalizáljuk az eredményeket. nem fogunk olyan dologért pénzt kérni, ami láthatóan nem az elért eredményt hozza – hanem azonnal változtatunk rajta."
  },
  {
    keywords: ["szerződés", "felmondás", "kötöttség", "minimum hónap", "hónap", "elköteleződés"],
    answer: "az első szakaszban 3 hónapos minimum elköteleződéssel dolgozunk, hiszen ennyi idő kell az auditra és a stabil digitális rendszer teljes felépítésére. a 4. hónaptól viszont kötetlen, havi szintű felmondással mehetünk tovább."
  },
  {
    keywords: ["idő", "meddig", "eredmény", "mikor"],
    answer: "az első hónap az intenzív audit és a rendszerek építésének ideje. általában a 2-3. hónaptól látod az első komoly számokat, de a cél egy stabil, tartós növekedés megalapozása, ami a 6. hónapra érik be teljesen."
  },
  {
    keywords: ["jogi", "ászf", "adatkezelés", "impresszum"],
    answer: "a hivatalos tájékoztatónkat a láblécben is megtalálod a 'jogi tisztaság' szekcióban, ahol a titoktartási iratainkat, az ászf-et és az adatvédelmi tájékoztatónkat (gdpr) is elolvashatod."
  },
  {
    keywords: ["cím", "lokáció", "hol vagytok", "hol talál", "bázis", "iroda"],
    answer: "az advant bázisa (hivatalos székhelye) budapesten, a 1062 andrássy út területén található."
  },
  {
    keywords: ["kapcsolat", "beszélni", "érdekel", "ajánlat", "találkozó", "hello", "szeretnék"],
    answer: "szuper! a legjobb lépés, ha írsz nekünk a hello@advant.hu-ra, vagy hívsz minket a +36 70 885 6534-es privát vonalon. időpontot egyeztetünk és átnézzük a lehetőségeidet."
  }
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", text: "üdv! én az advant digitális asszisztense vagyok. miben segíthetek a szolgáltatásainkkal kapcsolatban?" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getBotResponse = (userText: string) => {
    const textInfo = userText.toLowerCase();
    
    // Simple matching engine
    for (const item of botKnowledge) {
      if (item.keywords.some(kw => textInfo.includes(kw))) {
        return item.answer;
      }
    }
    
    // Default fallback
    return "erre a kérdésre jelenleg nem tudok pontos választ adni. a legjobb, ha felveszed velünk a közvetlen kapcsolatot a hello@advant.hu címen!";
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), role: "user", text: inputVal };
    setMessages(prev => [...prev, newUserMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = getBotResponse(newUserMsg.text);
      const newBotMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", text: responseText };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // 1.5 - 2.5 sec thinking
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        
        {/* Pop-up bubble */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="bg-white text-black text-[10px] font-black tracking-[0.2em] uppercase px-5 py-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hidden md:block cursor-pointer hover:bg-zinc-200 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              kérdésed van?
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 bg-white text-black transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] shrink-0
            ${isOpen ? "rotate-90 opacity-0 pointer-events-none absolute right-0" : "rotate-0 opacity-100 relative"}
          `}
        >
          <MessageSquare size={24} />
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 md:right-10 w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] z-50 bg-black/95 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div>
                  <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase">advant ai</h3>
                  <p className="text-zinc-500 text-[10px] tracking-widest lowercase">online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 scrollbar-hide flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
              
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`w-6 h-6 shrink-0 flex items-center justify-center border ${msg.role === "bot" ? "bg-white text-black border-white" : "border-white/20 text-white"}`}>
                    {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className={`text-sm lowercase font-light leading-relaxed p-4
                    ${msg.role === "bot" ? "bg-white/5 text-zinc-300 border border-white/5" : "bg-zinc-900 border border-white/10 text-white"}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 max-w-[85%] mr-auto items-end">
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-white text-black border border-white">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/5 text-zinc-500 border border-white/5 p-4 flex gap-1 items-center h-full">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1 h-1 bg-white" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-white" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-white" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black relative">
              <div className="flex items-center border border-white/20 focus-within:border-white transition-colors bg-black">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="kérdezz bátran..."
                  className="bg-transparent flex-1 p-3 text-sm text-white placeholder-zinc-600 focus:outline-none lowercase"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputVal.trim() || isTyping}
                  className="p-3 text-zinc-500 hover:text-white disabled:opacity-50 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
