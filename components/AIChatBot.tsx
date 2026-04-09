"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

// Simulated Knowledge Base matching from advant-ai-tudastar.docx
const botKnowledge = [
  {
    keywords: ["growth foundation", "alap csomag", "alap csomagban", "hatszázezres", "600"],
    answer: "a growth foundation egy komplett 600.000 forint / hó körüli belépő szint. tartalmaz egy átfogó konverziós stratégiát, prémium next.js webfejlesztést, cro (konverzió optimalizálás) folyamatokat, ga4/capi analitikát, és egy komplett performance marketinget meta/google hirdetéskezeléssel."
  },
  {
    keywords: ["full scale", "skálázó csomag", "drágább csomag", "1.2", "millió"],
    answer: "a full scale partner az 1.2 milliós csomag a piacvezetővé váláshoz. ebben már benne van a headless e-commerce fejlesztés, az egyedi ai asszisztens építés (mint amivel most is beszélsz), a profilozott b2b linkedin outreach, valamint a tömeges high-end filmes és fpv drón kampánygyártás is."
  },
  {
    keywords: ["politika", "háború", "hírek", "személyes", "fidesz", "ellenzék", "orbán", "kormány", "véleményed", "ki vagy", "vicc", "isten", "vallás", "meleg", "szex", "irán", "izrael", "ukrajna", "választás", "trump", "biden", "putyin", "lövöldözés", "botrány"],
    answer: "ezzel a témával sajnos nem tudok segíteni — én az advant szolgáltatásaihoz értek. ha digitális növekedéssel kapcsolatban van kérdésed, abban szívesen segítek!"
  },
  {
    keywords: ["hogy működik", "hogyan működik", "folyamat", "lépések", "mi a menet", "menete", "process"],
    answer: "három fő szakaszunk van: 1. growth audit (átnézzük az üzletet). 2. rendszer felépítés (weboldal, hirdetések, tartalom). 3. havi működés & optimalizálás. nem csomagokat árulunk, hanem az audit alapján mi mondjuk meg, hol van a növekedés."
  },
  {
    keywords: ["miért ti", "miért pont ti", "miért válasszalak", "előnyötök", "előny", "miért jó"],
    answer: "mert nálunk nem szolgáltatót veszel, hanem egy partnert, aki felelősséget vállal az eredményért. nem marketingezünk a marketing kedvéért — kőkemény matekkal és adatokkal skálázzuk a profitodat."
  },
  {
    keywords: ["wordpress", "wp", "sablon"],
    answer: "a wordpress jó eszköz bizonyos dolgokra, de a legtöbb ilyen oldal lassú, sérülékeny, és ugyanúgy néz ki, mint bármelyik másik. mi egyedi next.js rendszert építünk, ami villámgyors (99+ pagespeed), biztonságos, és pontosan azt tudja, amire az üzletednek szüksége van."
  },
  {
    keywords: ["kik vagytok", "rólotok", "mi a cég", "advant kik", "kik vagytok ti", "magatokról"],
    answer: "az advant egy fiatal, technológia-fókuszú growth partner csapat. elegünk lett a klasszikus ügynökségi modellből, ahol mindenki csak a hirdetéseket állítgatja eredmény nélkül. mi egy kézbe vesszük a fejlesztést, a marketinget és a stratégiát."
  },
  {
    keywords: ["mit csináltok", "mivel foglalkoztok", "szolgáltatások", "pontosan mit", "mit kínáltok"],
    answer: "négy oszlopon alapul a rendszerünk: 1. üzleti stratégia és audit. 2. prémium egyedi webfejlesztés (next.js). 3. tartalom- és videógyártás. 4. adatvezérelt performance marketing (meta, google, linkedin)."
  },
  {
    keywords: ["eszköz", "tech stack", "technológia", "programozás", "mivel írjátok", "milyen eszköz", "next"],
    answer: "webfejlesztésben next.js, react és tailwind css stacket használunk. analitikában google analytics 4, gtm, hotjar és custom looker studio dashboardok segítik a döntéshozatalt."
  },
  {
    keywords: ["hirdetési fiók", "fiók kié", "tulajdon", "hirdetés hozzáférés"],
    answer: "a hirdetési fiók mindig a tied marad, mi csak kezeljük. teljes átláthatóságot kapsz, bármikor megnézheted, mit csinálunk a háttérben. nálunk nincs trükközés a hozzáférésekkel."
  },
  {
    keywords: ["kapcsolattartás", "meeting", "hívás", "kommunikáció", "slack", "hogy beszélünk"],
    answer: "slacken vagy dedikált whatsapp csoportban tartjuk a kapcsolatot — nálunk nincs emailezgetős lassúság. kéthetente sync hívást tartunk és minden negyedévben stratégiai review-t végzünk."
  },
  {
    keywords: ["analitika", "analytics", "követés", "mérés", "pixel", "gtm"],
    answer: "ga4 rendesen beállítva konverzióeseményekkel, google tag manager, hotjar heatmapek, és custom dashboardok. mindent mérünk, ami bevételt hoz, és te is valós időben látod a számokat."
  },
  {
    keywords: ["referencia", "portfólió", "esettanulmány", "látni szeretném"],
    answer: "szigorú titoktartási (nda) szerződésekkel dolgozunk, így publikus portfóliót nem mutogatunk. privát hívásban viszont szívesen mutatok esettanulmányokat az iparágadhoz kapcsolódóan."
  },
  {
    keywords: ["hogyan kezdjük", "indulás", "kezdés", "következő lépés", "szeretném", "jelentkezés", "érdekel"],
    answer: "szuper! a legegyszerűbb, ha kitöltöd a jelentkezési űrlapot az oldalon — 24 órán belül felhívunk egy gyors 15 perces egyeztetésre, utána pedig belevágunk az ingyenes auditba."
  },
  {
    keywords: ["ár", "mennyi", "költség", "pénz"],
    answer: "havi előfizetéses modellben dolgozunk. az árak jellemzően 600.000 ft/hó környékéről indulnak, a pontos összeg az audit után derül ki, mert minden ügyfélhez egyedi rendszert építünk."
  },
  {
    keywords: ["szerződés", "felmondás", "kötöttség", "minimum hónap"],
    answer: "általában 3 hónap a minimum elköteleződés, mert ennyi idő kell a rendszer felépítéséhez és az első adatokhoz. utána a szerződés havi szinten bármikor felmondható."
  },
  {
    keywords: ["kapcsolat", "email", "telefon", "szám", "felhívlak"],
    answer: "írj a hello@advant.hu-ra, vagy hívj minket a +36 70 885 6534-es számon. de a leggyorsabb, ha kitöltöd a 'jelentkezés' űrlapot az oldalon!"
  },
  {
    keywords: ["cím", "lokáció", "hol vagytok", "iroda"],
    answer: "az advant bázisa budapesten, a 1062 andrássy út területén található."
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
    return "erre a kérdésre jelenleg nem tudok pontos választ adni. a legjobb, ha felveszed velünk a közvetlen kapcsolatot a hello@advant.hu címen, vagy töltsd ki az űrlapot!";
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
    }, 1200 + Math.random() * 800); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 md:right-10 w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] z-50 bg-black/95 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div>
                  <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase">advant ai</h3>
                  <p className="text-zinc-500 text-[10px] tracking-widest lowercase">online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-2">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 scrollbar-hide flex flex-col gap-6 relative">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
                  <div className={`w-6 h-6 shrink-0 flex items-center justify-center border ${msg.role === "bot" ? "bg-white text-black border-white" : "border-white/20 text-white"}`}>
                    {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className={`text-sm lowercase font-light leading-relaxed p-4 ${msg.role === "bot" ? "bg-white/5 text-zinc-300 border border-white/5" : "bg-zinc-900 border border-white/10 text-white"}`}>
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
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-white" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-white" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-white" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

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
