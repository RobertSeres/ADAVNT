"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { ArrowLeft, Check, Send, ChevronDown, ChevronUp } from "lucide-react";
import Grainient from "@/components/Grainient";
import Link from "next/link";
import { sanitizeInput, ApplyFormSchema } from "@/lib/security";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold lowercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-zinc-500" /> : <ChevronDown size={20} className="text-zinc-500" />}
      </button>
      {isOpen && (
        <div className="pb-6 animate-fade-in">
          <p className="text-zinc-500 font-light lowercase leading-relaxed max-w-2xl">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function RapidCallPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    goal: ""
  });

  const faqs = [
    {
      question: "tényleg ingyenes?",
      answer: "igen. nincs rejtett költség, nincs \"de aztán\". 20 perc, ingyen, és ha nem akarunk együtt dolgozni, semmi gond."
    },
    {
      question: "mi történik a hívás alatt?",
      answer: "átnézzük a weboldalad, a social jelenléted, és ha van, a hirdetési fiókod. nem a problémákat keressük — a lehetőségeket. megmutatjuk, hol van a legnagyobb növekedési potenciál a te üzletedben."
    },
    {
      question: "ez egy sales hívás?",
      answer: "nem. ez egy 20 perces visszajelzés, ami neked hasznos, akár dolgozunk együtt utána, akár nem. ha a hívás végén úgy érezzük, hogy van értelme partneri együttműködésnek, elmondunk róla pár mondatot. de nem nyomulunk."
    },
    {
      question: "ki fog felhívni?",
      answer: "nem egy call center — hanem az a csapattag, aki tényleg dolgozni fog a projekteden, ha elindulunk. szóval már az első perctől érdemi beszélgetést kapsz."
    }
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <div className="relative w-full pt-32 pb-40 overflow-clip">
          <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <Grainient
              color1="#000000"
              color2="#3b82f6"
              color3="#000000"
              timeSpeed={0.1}
              zoom={1.2}
              noiseScale={4}
              grainAmount={0.15}
              className="h-full w-full"
            />
          </div>

          <div className="relative container mx-auto px-6 z-10">
            {/* Header / Hero */}
            <div className="max-w-4xl mb-24">
              <Link href="/#pricing" className="inline-flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest hover:text-zinc-300 transition-colors mb-16 border border-white/20 px-4 py-2 bg-black/40">
                <ArrowLeft size={14} /> Vissza az árakhoz
              </Link>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter lowercase leading-[0.85] mb-8">
                nem vagy biztos benne? <br/> beszéljünk.
              </h1>
              <p className="text-xl md:text-2xl font-light text-zinc-400 lowercase max-w-2xl leading-tight">
                20 perc. ingyen. semmi elköteleződés. <br/>
                megmutatjuk, hol hagysz pénzt az asztalon — és te döntöd el, mit kezdesz vele.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">
              {/* Left Column: Values */}
              <div className="lg:col-span-5 flex flex-col gap-16">
                <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-black text-white/10 shrink-0">01</span>
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-widest mb-3">kitöltöd az űrlapot</h3>
                      <p className="text-zinc-500 font-light lowercase text-lg leading-relaxed">2 perc az egész. megadod a neved, a céged, és pár mondatban leírod, hol tartasz most.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-black text-white/10 shrink-0">02</span>
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-widest mb-3">felhívunk 24 órán belül</h3>
                      <p className="text-zinc-500 font-light lowercase text-lg leading-relaxed">nem egy bot, nem egy stázsista — az, aki tényleg dolgozni fog veled. 20 percben átnézzük az üzleted digitális jelenlétét, és megmutatjuk, hol van a növekedési potenciál.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-black text-white/10 shrink-0">03</span>
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-widest mb-3">kapsz egy tiszta képet</h3>
                      <p className="text-zinc-500 font-light lowercase text-lg leading-relaxed">nem sales pitch-et kapsz, hanem őszinte visszajelzést: mi működik, mi nem, és min érdemes változtatni. ha utána úgy döntesz, hogy együtt dolgozunk — szuper. ha nem — semmi harag, és a visszajelzés akkor is a tiéd marad.</p>
                    </div>
                  </div>
                </div>

                {/* Social Proof Quote */}
                <div className="p-8 border-l-2 border-white/10 bg-white/1">
                  <p className="text-zinc-400 italic text-lg leading-relaxed lowercase mb-4">
                    "a villámhívás után 10-ből 8 vállalkozó azt mondja: ennyi hasznos visszajelzést még senkitől nem kapott ingyen."
                  </p>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Growth Benchmark 2024</span>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7 bg-white/1 border border-white/5 p-8 md:p-12 backdrop-blur-xl h-fit sticky top-32">
                {isSubmitted ? (
                  <div className="py-20 text-center animate-fade-in-up">
                    <div className="w-20 h-20 rounded-full bg-blue-500/20 text-blue-400 mx-auto mb-8 flex items-center justify-center">
                      <Check size={40} />
                    </div>
                    <h3 className="text-3xl font-black lowercase mb-4">kérésed megérkezett.</h3>
                    <p className="text-zinc-500 lowercase font-light mb-10">24 órán belül hívunk a megadott számon.</p>
                    <Link href="/" className="inline-block px-8 py-4 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">vissza a főoldalra</Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black lowercase tracking-tight mb-10">mesélj röviden a cégedről.</h2>
                    <form 
                      className="flex flex-col gap-6"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        setErrors({});
                        
                        const sanitizedData = {
                          name: sanitizeInput(formData.name),
                          company: sanitizeInput(formData.company),
                          email: sanitizeInput(formData.email),
                          phone: sanitizeInput(formData.phone),
                          goal: sanitizeInput(formData.goal),
                        };

                        const result = ApplyFormSchema.safeParse(sanitizedData);
                        if (!result.success) {
                          const formattedErrors: Record<string, string> = {};
                          result.error.issues.forEach((issue) => {
                            formattedErrors[String(issue.path[0])] = issue.message;
                          });
                          setErrors(formattedErrors);
                          setIsSubmitting(false);
                          return;
                        }

                        await new Promise(resolve => setTimeout(resolve, 800));
                        setIsSubmitted(true);
                        setIsSubmitting(false);
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">keresztnév / vezetéknév</label>
                          <input 
                            required
                            type="text" 
                            className="bg-black border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white transition-all font-light"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">cég neve / weboldal</label>
                          <input 
                            required
                            type="text" 
                            className="bg-black border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white transition-all font-light"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">email cím</label>
                          <input 
                            required
                            type="email" 
                            className="bg-black border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white transition-all font-light"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">telefonszám (közvetlen)</label>
                          <input 
                            required
                            type="tel" 
                            className="bg-black border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white transition-all font-light"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">mi a legnagyobb kihívásod most?</label>
                        <textarea 
                          required
                          className="bg-black border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white transition-all font-light h-32 resize-none"
                          placeholder="pl. van weboldalunk, de nem jönnek róla ügyfelek..."
                          value={formData.goal}
                          onChange={(e) => setFormData({...formData, goal: e.target.value})}
                        />
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? 'küldés...' : 'villámhívás kérése'} →
                      </button>

                      <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest">
                        az adataidat biztonságosan és bizalmasan kezeljük. nem spammelünk, ígérjük.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto pt-32 border-t border-white/10">
              <h2 className="text-4xl font-black lowercase tracking-tighter mb-16 underline underline-offset-8 decoration-white/10">
                gyakori kérdések
              </h2>
              <div className="flex flex-col">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
