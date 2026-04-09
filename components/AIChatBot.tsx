"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

// FULL Knowledge Base from advant-ai-tudastar.docx
const botKnowledge = [
  // 1. BEVEZETÉS & DEFINÍCIÓ
  {
    keywords: ["mi az advant", "ki az advant", "kik vagytok", "ügynökség", "ügynökség-e"],
    answer: "az advant egy growth partner. nem klasszikus ügynökség és nem freelancer csapat — hanem egy hosszú távú növekedési partner, aki havi előfizetéssel felelősséget vállal az üzleti eredményeidért."
  },
  {
    keywords: ["miben más", "különbség", "miért jobb", "miért válasszalak"],
    answer: "mert nálunk nem szolgáltatót veszel, hanem egy partnert, aki beül melléd a virtuális asztalhoz. nem esztétikát árulunk, hanem kőkemény matekot és adatvezérelt skálázódást. felelősséget vállalunk a bevételedért."
  },
  
  // 2. SZOLGÁLTATÁSOK - NÉGY OSZLOP
  {
    keywords: ["mit csináltok", "mivel foglalkoztok", "szolgáltatások", "mit kínáltok"],
    answer: "négy fő oszlopon alapul a rendszerünk: 1. üzleti stratégia és audit. 2. prémium egyedi webfejlesztés (next.js). 3. tartalom- és videógyártás. 4. adatvezérelt performance marketing (meta, google, tiktok)."
  },
  {
    keywords: ["audit", "átvilágítás", "elemzés"],
    answer: "minden munkát egy growth audittal kezdünk. átnézzük a bevételt, a csatornákat és a szűk keresztmetszeteket. nem te mondod meg mit szeretnél — mi mondjuk meg, hol van a növekedési potenciál az üzletedben."
  },
  {
    keywords: ["web", "honlap", "fejlesztés", "oldal", "landing", "weboldal"],
    answer: "kizárólag egyedi, next.js alapú weboldalakat építünk. nem wordpress, nem sablon. villámgyors (99+ pagespeed), biztonságos, és 100%-ban konverzióra (cro) van optimalizálva."
  },
  {
    keywords: ["tartalom", "videó", "ugc", "reels", "tiktok content"],
    answer: "stratégia-alapú tartalomgyártást végzünk: social videók, brand content, testimonialok és fotó. nem random posztolunk — minden képkocka a vásárlás előidézését szolgálja."
  },
  {
    keywords: ["hirdetés", "kampány", "ads", "ads management", "meta", "google ads", "tiktok ads"],
    answer: "teljes performance marketinget viszünk. úgy költünk, mintha a sajátunk lenne, és minden fillér megtérülését (roi) élő dashboardokon mutatjuk meg neked."
  },
  
  // 3. ÁRAZÁS & CSOMAGOK
  {
    keywords: ["ár", "mennyi", "költség", "fizetés", "pénz", "csomag"],
    answer: "havi előfizetéses modellben dolgozunk, nincsenek sablon csomagok. az együttműködés 600.000 ft/hó és 1.200.000 ft/hó + sikerdíj között mozog jellemzően, a pontos ár az audit után derül ki."
  },
  {
    keywords: ["growth foundation", "alap csomag"],
    answer: "a growth foundation (600k+/hó) a működő cégek alap fegyverarzenálja: audit, next.js fejlesztés, meta/google ads, analitika, alap tartalomgyártás és transzparens dashboard."
  },
  {
    keywords: ["full scale", "skálázó csomag", "vip"],
    answer: "a full scale (1.2m+/hó + sikerdíj) agresszív dominanciára van tervezve: tömeges high-end videó, fpv drón, ai generált reklámok, egyedi app/e-commerce és b2b linkedin outreach rendszer."
  },
  {
    keywords: ["hirdetési büdzsé", "hirdetésre mennyit"],
    answer: "a hirdetési büdzsé mindig külön tétel és közvetlenül a platformon (meta, google) fizeted. ez nem része a havi partneri díjunknak."
  },
  {
    keywords: ["sikerdíj", "jutalék"],
    answer: "a full scale modellben beépítünk egy transzparens sikerdíjas profitmegosztást is, így még inkább érdekeltek vagyunk a közös sikerben."
  },

  // 4. KI EZ / KI NEM EZ
  {
    keywords: ["kinek valö", "kinek nem", "mikor ne", "startup", "magánszemély"],
    answer: "működő vállalkozásoknak vagyunk a legjobbak, akik már bizonyítottak és skálázódni akarnak. nem alkalmas startupoknak bevétel nélkül, vagy olyan nagyvállalatoknak, akiknek saját nagy marketing osztályuk van."
  },
  {
    keywords: ["mit nem", "dropshipping", "mlm", "scam", "olcsó"],
    answer: "nem építünk 50 ezres sablon weboldalakat, és nem vállalunk dropshipping, mlm vagy scam projekteket. csak komoly, legitim vállalkozásokkal dolgozunk."
  },

  // 5. FOLYAMAT & SZERZŐDÉS
  {
    keywords: ["hogyan működik", "folyamat", "lépések", "hogy indulunk"],
    answer: "három lépés: 1. growth audit (adatok átnézése). 2. rendszer felépítés (web, tartalom, hirdetés). 3. havi optimalizálás és scale. negyedévente leülünk és stratégiát korrigálunk."
  },
  {
    keywords: ["szerződés", "felmondás", "minimum", "elköteleződés"],
    answer: "3 hónapos minimum elköteleződéssel kezdünk, mert ennyi idő kell a rendszerek felépítéséhez és az első valid adatokhoz. utána havi szinten bármikor felmondható a közös munka."
  },
  {
    keywords: ["mikor lesz eredmény", "idő", "meddig tart"],
    answer: "az 1. hónap az építésé. a 2-3. hónaptól jönnek az első mérhető eredmények, a 6. hónapra pedig már egy stabil, fenntartható növekedési pálya a cél."
  },

  // 6. TECHNIKAI & SPECIFIKUS
  {
    keywords: ["wordpress", "wp", "miért nem wp", "sablon oldal"],
    answer: "a wordpress jó bizonyos dolgokra, de lassú és sérülékeny lehet. mi egyedi rendszert építünk, ami 99+ pagespeed pontszámot hoz, és nincsenek felesleges pluginok, amik belassítják a vásárlást."
  },
  {
    keywords: ["analitika", "analytics", "ga4", "mérés", "pixel", "capi"],
    answer: "google analytics 4, gtm, hotjar és meta conversions api (capi) alap nálunk. mindent mérünk szerveroldalon is, és te is valós időben látod a számokat egy dashboardon."
  },
  {
    keywords: ["hirdetési fiók", "fiók hozzáférés", "kié a fiók"],
    answer: "a hirdetési fiók 100%-ban a te tulajdonod marad, mi csak szerkesztői hozzáféréssel kezeljük. teljes átláthatóság, bármikor ellenőrizheted a költéseket."
  },
  {
    keywords: ["in-house", "saját programozó", "saját fejlesztő"],
    answer: "szívesen dolgozunk együtt a saját csapatoddal is, de a tapasztalatunk az, hogy a legjobb eredményt akkor érjük el, ha a teljes konverziós gépezetet mi felügyeljük."
  },
  {
    keywords: ["külföld", "nemzetközi", "angol", "export"],
    answer: "igen, külpiaci skálázásban is profik vagyunk (dach, uk, usa). nyelvi lokalizáció, külföldi hirdetéskezelés és seo terén is tudunk segíteni."
  },

  // 7. KAPCSOLAT & KOMMUNIKÁCIÓ
  {
    keywords: ["hol vagytok", "iroda", "cím", "lokáció"],
    answer: "az advant bázisa budapesten, a 1062 andrássy út területén található."
  },
  {
    keywords: ["slack", "kommunikáció", "hogy beszélünk", "elérhetőség"],
    answer: "dedikált slack csatornát vagy vip whatsapp csoportot kap minden partnerünk. nálunk nincs emailezgetős várólista, azonnal reagálunk a kérdésekre."
  },
  {
    keywords: ["telefon", "szám", "visszahívás"],
    answer: "hívj minket bátran a +36 70 885 6534-es számon, vagy töltsd ki az űrlapot és 24 órán belül mi keresünk!"
  },
  {
    keywords: ["email", "levél", "mail"],
    answer: "írj nekünk a hello@advant.hu-ra, és a csapat legkésőbb másnap válaszol."
  },
  {
    keywords: ["hogyan indulunk", "jelentkezés", "szeretném kipróbálni", "következő lépés"],
    answer: "a leggyorsabb, ha kitöltöd a jelentkezési űrlapot az oldalon. így látjuk az alapvető infókat a cégedről, és a 15 perces discovery hívásunk már rögtön lényegre törő lesz."
  },

  // 8. SZEMÉLYES & AI
  {
    keywords: ["ki vagy", "robot", "chatbot", "ai"],
    answer: "az advant digitális asszisztense vagyok. az a feladatom, hogy segítsek megérteni, hogyan dolgozunk. ha valós emberrel beszélnél, hívj minket telefonon!"
  },
  {
    keywords: ["szia", "hello", "üdv", "hé", "szió"],
    answer: "szia! üdv az advant-nál. kistérségi magázódás nincs nálunk, szóval kérdezz bátran bármit a growth partner modellünkről!"
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
    
    // Exact multiple word or phrase matching first
    for (const item of botKnowledge) {
      if (item.keywords.some(kw => textInfo.includes(kw))) {
        return item.answer;
      }
    }
    
    // Default fallback
    return "erre a kérdésre jelenleg nem tudok pontos választ adni. írj nekünk a hello@advant.hu-ra, hívj a +36 70 885 6534-en, vagy töltsd ki a jelentkezési űrlapot!";
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), role: "user", text: inputVal };
    setMessages(prev => [...prev, newUserMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate thinking delay - slightly faster for better UX
    setTimeout(() => {
      const responseText = getBotResponse(newUserMsg.text);
      const newBotMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", text: responseText };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500); 
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
              transition={{ duration: 0.5, delay: 5.5 }}
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
            className="fixed bottom-6 right-6 md:right-10 w-[90vw] md:w-[420px] h-[550px] max-h-[85vh] z-50 bg-black/95 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="leading-tight">
                  <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase">advant ai</h3>
                  <p className="text-zinc-500 text-[10px] tracking-widest lowercase">válaszidő: azonnal</p>
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
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 max-w-[88%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`w-7 h-7 shrink-0 flex items-center justify-center border ${msg.role === "bot" ? "bg-white text-black border-white" : "border-white/20 text-zinc-400"}`}>
                    {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className={`text-sm lowercase font-light leading-relaxed p-4
                    ${msg.role === "bot" ? "bg-white/5 text-zinc-200 border border-white/5" : "bg-zinc-900 border border-white/10 text-white"}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 max-w-[88%] mr-auto items-end">
                  <div className="w-7 h-7 shrink-0 flex items-center justify-center bg-white text-black border border-white">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/5 text-zinc-500 border border-white/5 p-4 flex gap-1 items-center h-full">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-white" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-white" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-white" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black relative">
              <div className="flex items-center border border-white/20 focus-within:border-white transition-colors bg-black/50">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="kérdezz bármit..."
                  className="bg-transparent flex-1 p-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none lowercase"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputVal.trim() || isTyping}
                  className="p-3.5 text-zinc-500 hover:text-white disabled:opacity-50 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="mt-2 text-[8px] text-zinc-600 text-center uppercase tracking-widest pointer-events-none">
                advant growth partner divízió
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
