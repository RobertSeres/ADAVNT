"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

// FULL CATEGORIZED Knowledge Base from docx and user keywords
const botKnowledge = [
  // 1. KÖSZÖNTÉS / NYITÁS
  {
    keywords: ["szia", "hello", "helo", "helló", "hey", "hé", "hali", "szervusz", "szevasz", "jó napot", "jó estét", "jó reggelt", "üdv", "üdvözlöm", "heló", "csá", "csáó", "mi újság", "hogy vagy", "vagyok itt", "itt vagyok"],
    answer: "szia! üdv az advant-nál. én az advant digitális asszisztense vagyok. miben segíthetek a szolgáltatásainkkal vagy a growth partner modellünkkel kapcsolatban?"
  },
  
  // 2. ELKÖSZÖNÉS
  {
    keywords: ["viszlát", "viszonthallásra", "szia szia", "köszi", "köszönöm", "kösz", "ennyi", "ennyi volt", "megvagyok", "minden oké", "oké köszi", "hát ennyi", "pá", "bye", "cső", "mennem kell", "elég volt", "szép napot", "jó éjt"],
    answer: "szívesen! örülök, ha tudtam segíteni. ha bármi kérdésed maradna, itt vagyok. legyen szép napod!"
  },

  // 3. MI AZ ADVANT / BEMUTATKOZÁS
  {
    keywords: ["mi az advant", "mit csináltok", "mivel foglalkoztok", "kik vagytok", "mi ez", "miről szól", "bemutatkozás", "about", "rólatok", "magukról", "ki áll mögötte", "milyen cég", "mióta vagytok", "létezik"],
    answer: "az advant egy fiatal, technológia-fókuszú growth partner csapat. nem klasszikus ügynökség vagyunk, hanem egy olyan stratégiai partner, aki havi előfizetéssel viszi a teljes digitális növekedésedet: fejlesztéstől a kampányokig."
  },

  // 4. GROWTH PARTNER KONCEPCIÓ
  {
    keywords: ["growth partner", "növekedési partner", "mi az a growth", "mit jelent a partner", "hogyan működik", "miben más", "miben különböztök", "nem ügynökség", "ügynökség különbség", "mi a különbség", "miért nem ügynökség", "partner modell"],
    answer: "a growth partner modell lényege, hogy nem szolgáltatóként, hanem tulajdonosi szemlélettel dolgozunk veled. nem hirdetéseket állítunk be, hanem az egész üzleti struktúrádat optimalizáljuk, hogy a hirdetett forintok tényleges profitot hozzanak."
  },

  // 5. SZOLGÁLTATÁSOK — ÁLTALÁNOS
  {
    keywords: ["szolgáltatás", "mit kínáltok", "mit adtok", "mit kapok", "mi van benne", "csomag", "tartalmaz", "beletartozik", "része", "eszköz", "eszköztár", "mit tudtok"],
    answer: "négy fő területen dolgozunk: 1. üzleti stratégia és audit, 2. egyedi next.js webfejlesztés, 3. stratégiai tartalomgyártás (videó/fotó), 4. performance marketing (ads) és analitika. mindez egy kézben, egymást segítve."
  },

  // 6. STRATÉGIA
  {
    keywords: ["stratégia", "audit", "growth audit", "üzleti audit", "üzleti terv", "tervezés", "KPI", "célok", "mérőszámok", "review", "negyedéves", "elemzés", "átvilágítás", "felmérés"],
    answer: "minden együttműködést egy growth audittal kezdünk. átnézzük a számaidat, keressük a szűk keresztmetszeteket, és felállítjuk a KPI-okat. negyedévente pedig nagy review-t tartunk, hogy lássuk, jó irányba tartunk-e."
  },

  // 7. WEBFEJLESZTÉS
  {
    keywords: ["weboldal", "website", "webfejlesztés", "landing page", "honlap", "oldal készítés", "webdesign", "fejlesztés", "next.js", "react", "wordpress", "sablon", "template", "sebesség", "pagespeed", "UX", "konverzió", "CRO", "A/B teszt", "optimalizálás"],
    answer: "kizárólag egyedi next.js weboldalakat építünk kódolással, nem wordpress sablonokat. ez garantálja a 99+ pagespeed pontszámot, a maximális biztonságot és a tűpontos konverziós (cro) méréseket."
  },

  // 8. TARTALOM / VIDEÓ
  {
    keywords: ["videó", "videók", "tartalom", "content", "social media", "social", "poszt", "posztolás", "instagram", "facebook", "tiktok", "linkedin", "reels", "shorts", "brand videó", "testimonial", "fotó", "reklámfilm", "kreatív", "vizuál"],
    answer: "nem 'szép' képeket gyártunk, hanem pszichológiai elemekre épülő, eladást segítő videókat (tiktok/reels), ugc-t és brand contentet. a cél, hogy a tartalom ne csak dekoráció, hanem konverziós gép legyen."
  },

  // 9. HIRDETÉSEK / KAMPÁNY
  {
    keywords: ["hirdetés", "kampány", "reklám", "google ads", "meta ads", "facebook hirdetés", "instagram hirdetés", "tiktok ads", "PPC", "retargeting", "remarketing", "célzás", "büdzsé", "költés", "kattintás", "megjelenés"],
    answer: "teljes performancet viszünk: google kereső és display, meta (fb/ig), tiktok és linkedin. minden fillér költést mérünk, és transzparensen látsz mindent a dashboardodon. a hirdetési keretet te fizeted a platformnak, mi kezeljük azt."
  },

  // 10. ANALITIKA / MÉRÉS
  {
    keywords: ["analitika", "analytics", "GA4", "google analytics", "mérés", "dashboard", "riport", "jelentés", "konverzió", "konverziókövetés", "tracking", "adat", "adatvezérelt", "hotjar", "heatmap", "eredmény", "szám", "ROI", "megtérülés"],
    answer: "adatvezéreltek vagyunk: ga4, meta conversions api (capi), google tag manager és hotjar/clarity hőtérképek segítik a döntéseinket. mindent mérünk, ami profitot hoz, és egy élő dashboardon te is látod az eredményeket."
  },

  // 11. ÁRAZÁS
  {
    keywords: ["ár", "árak", "árazás", "mennyibe kerül", "mennyi", "költség", "drága", "olcsó", "befektetés", "havi díj", "előfizetés", "retainer", "foundation", "full scale", "600", "1200", "csomag ár", "fizetés", "számla", "számlázás", "pénz"],
    answer: "havi előfizetéses (retainer) modellben dolgozunk. a growth foundation csomagunk 600.000 ft/hó-tól, a full scale pedig 1.200.000 ft/hó-tól indul. a pontos ár az audit után derül ki a feladatok komplexitása alapján."
  },

  // 12. SIKERDÍJ
  {
    keywords: ["sikerdíj", "profit", "profitmegosztás", "jutalék", "bónusz", "teljesítmény alapú", "success fee"],
    answer: "a full scale modellünkben nyitottak vagyunk profit-alapú sikerdíjas kiegészítésre is. hiszünk abban, hogy ha neked nagyot szakítunk, mi is jobban járunk — így teljes az összhang a céljaink között."
  },

  // 13. SZERZŐDÉS / GARANCIA
  {
    keywords: ["szerződés", "kötelezettség", "elköteleződés", "minimum", "meddig", "hány hónap", "felmondás", "kilépés", "lemondás", "feltétel", "garancia", "kockázat", "mi van ha nem", "mi van ha nem működik", "nem tetszik"],
    answer: "3 hónapos elköteleződéssel kezdünk (audit + rendszer felépítés ideje), utána havi szintre váltunk és bármikor felmondható. ha nem hozzuk a számokat, stratégiát váltunk — nálunk nincs 'lock-in', csak eredményalapú munka."
  },

  // 14. IDŐKERET
  {
    keywords: ["idő", "mennyi idő", "mikor", "mikorra", "meddig tart", "mennyi idő kell", "eredmény mikor", "első hónap", "első hét", "timeline", "határidő", "gyors", "lassú", "türelem"],
    answer: "az első hónap az audit és az alapok építése. a 2-3. hónaptól jönnek az első mérhető, stabil eredmények. a teljes modell általában a 6. hónapra érik be teljesen, amikor már golyóálló a rendszer."
  },

  // 15. HOGYAN KEZDJÜNK
  {
    keywords: ["hogyan kezdjünk", "hogyan induljunk", "első lépés", "jelentkezés", "űrlap", "hol kezdjem", "mi a folyamat", "regisztráció", "belépés", "csatlakozás", "érdeklődés", "érdekel", "kipróbálnám", "meg akarom nézni", "próba", "ingyenes"],
    answer: "szuper, hogy belevágnál! töltsd ki a jelentkezési űrlapot az oldalon — ez 2 perc. utána felhívunk egy 15 perces discovery hívásra, és ha van közös pont, megcsináljuk neked az ingyenes auditot."
  },

  // 16. KOMMUNIKÁCIÓ
  {
    keywords: ["kommunikáció", "kapcsolat", "elérhetőség", "telefon", "telefonszám", "email", "slack", "meeting", "hívás", "beszéljünk", "felveszem a kapcsolatot", "írjak", "hívjalak", "hol találom"],
    answer: "slacken élünk a csapattal (vagy dedikált hívásokon), nálunk nincs emailezgetős várólista. hívj bátran a +36 70 885 6534 számon, írj a hello@advant.hu-ra, vagy töltsd ki az űrlapot!"
  },

  // 17. CÉLCSOPORT / NEKEM VALÓ
  {
    keywords: ["nekem való", "jó nekem", "passzol", "működő vállalkozás", "KKV", "startup", "nagyvállalat", "kisvállalkozás", "iparág", "étterem", "vendéglátó", "webshop", "e-commerce", "szolgáltató", "ingatlan", "B2B", "milyen cégeknek"],
    answer: "vendéglátásban, e-commercben és b2b piacon vagyunk otthon. ha van egy működő üzleted, amit skáláznál és kifizeted a minimum 600k havi díjat, akkor mi vagyunk a te embereid."
  },

  // 18. TECHNOLÓGIA
  {
    keywords: ["technológia", "tech", "milyen technológiát", "milyen rendszert", "CMS", "platform", "next", "react", "programozás", "kód", "szerver", "hosting", "tárhely", "biztonság", "sebesség"],
    answer: "next.js, react és tailwind esszencia — ez a mai modern web csúcsa. nincs cms korlát, nincs sablon lassúság. szerveroldali mérésekkel és dedikált felhő hostinggal dolgozunk a sebességért."
  },

  // 19. REFERENCIA / EREDMÉNY
  {
    keywords: ["referencia", "eredmény", "eredmények", "ügyfél", "portfólió", "példa", "esettanulmány", "case study", "bizonyíték", "mutass valamit", "kinek dolgoztatok"],
    answer: "nda (titoktartás) miatt nem rakunk ki mindent a netre, de egy privát hívásban szívesen mutatok esettanulmányokat és roas eredményeket a saját iparágadhoz kapcsolódóan."
  },

  // 20. MUNKA / CSATLAKOZÁS
  {
    keywords: ["állás", "munka", "dolgozhatok", "csatlakozás", "csapat", "csatlakoznék", "karrier", "pozíció", "felvétel", "jelentkezés nálatok", "alkalmazás"],
    answer: "mindig keressük a tehetségeket! írj a hello@advant.hu-ra a portfóliódal és pár mondattal magadról. ha van nyitott pozíció és passzolsz, keresni fogunk!"
  },

  // 21. PARTNERI EGYÜTTMŰKÖDÉS
  {
    keywords: ["partner", "együttműködés", "kooperáció", "affiliate", "közös", "B2B partner", "ajánlás", "jutalék"],
    answer: "nyitottak vagyunk partneri együttműködésekre és ajánló rendszerekre is. írj nekünk a hello@advant.hu-ra a részletekkel, és beszéljük át a lehetőségeket!"
  },

  // 22. CHATBOT KÉRDÉSEK
  {
    keywords: ["robot", "bot", "AI", "mesterséges intelligencia", "ember", "valódi", "élő", "gép", "automatikus", "emberi"],
    answer: "robot vagyok (ai asszisztens), de az advant csapata tanított be. ha élő emberrel beszélnél, hívd a +36 70 885 6534-et vagy írj nekünk!"
  },

  // 23. ANGOL / MÁS NYELV
  {
    keywords: ["english", "speak english", "deutsch", "german", "sprache", "language", "nyelv"],
    answer: "hey! we primarily work in hungarian, but feel free to write in english — we can help. what's your question about advant?"
  },

  // 24. TILTOTT TÉMÁK
  {
    keywords: ["politika", "párt", "szavazás", "választás", "kormány", "háború", "orosz", "ukrán", "konfliktus", "vallás", "isten", "egyház", "hit", "bevándorlás", "migráns", "woke", "LMBTQ", "gender", "abort", "halál", "meghalt", "öl"],
    answer: "ezzel a témával sajnos nem tudok segíteni — én az advant üzleti növekedési modelljéhez értek. ha üzlettel kapcsolatban van kérdésed, kérdezz bátran!"
  }
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", text: "üdv! én az advant digitális asszisztense vagyok. miben segíthetek a szolgáltatásainkkal vagy a growth partner modellünkkel kapcsolatban?" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getBotResponse = (userText: string) => {
    const textInfo = userText.toLowerCase();
    
    // Sort knowledge by keyword length (descending) to match longer/more specific phrases first
    const sortedKnowledge = [...botKnowledge].sort((a, b) => {
      const aMaxLen = Math.max(...a.keywords.map(k => k.length));
      const bMaxLen = Math.max(...b.keywords.map(k => k.length));
      return bMaxLen - aMaxLen;
    });

    for (const item of sortedKnowledge) {
      if (item.keywords.some(kw => textInfo.includes(kw.toLowerCase()))) {
        return item.answer;
      }
    }
    
    return "erre a kérdésre jelenleg nem tudok pontos választ adni. írj nekünk a hello@advant.hu-ra, hívj a +36 70 885 6534-en, vagy töltsd ki a jelentkezési űrlapot az oldalon!";
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), role: "user", text: inputVal };
    setMessages(prev => [...prev, newUserMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(newUserMsg.text);
      const newBotMsg: Message = { id: (Date.now() + 1).toString(), role: "bot", text: responseText };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600); 
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
          {!isOpen && isPopupVisible && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 5 }}
              className="relative hidden md:block"
            >
              <div
                className="bg-white text-black text-[10px] font-black tracking-[0.2em] uppercase px-5 py-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer hover:bg-zinc-200 transition-colors"
                onClick={() => setIsOpen(true)}
              >
                kérdésed van?
              </div>
              
              {/* Dedicated hit area for the close button to ensure it works every time */}
              <div className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center z-[60]">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsPopupVisible(false);
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="w-6 h-6 bg-black text-white border border-white/20 flex items-center justify-center hover:bg-red-600 transition-colors shadow-2xl cursor-pointer"
                  title="Bezárás"
                >
                  <X size={12} strokeWidth={3} />
                </button>
              </div>
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
            className="fixed bottom-6 right-6 md:right-10 w-[90vw] md:w-[420px] h-[550px] max-h-[85vh] z-50 bg-black/95 backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="leading-tight">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
