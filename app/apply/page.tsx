"use client";

import React, { useEffect, useLayoutEffect, useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ArrowLeft, Check, Send } from "lucide-react";
import Grainient from "@/components/Grainient";
import Link from "next/link";

import { sanitizeInput, ApplyFormSchema } from "@/lib/security";

const ApplyContent = () => {
  const [tier, setTier] = useState<string>("foundation");
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
  
  useEffect(() => {
    // Scroll handled by SmoothScroll (scrolls to 0 when no hash present)
    const searchParams = new URLSearchParams(window.location.search);
    const tierFromUrl = searchParams.get("tier");
    if (tierFromUrl === "scale") {
      setTier("scale");
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const isScale = tier === "scale";

  return (
    <div id="hero" className="relative w-full pt-32 pb-40 overflow-clip">
      {/* Background with Tier Specific Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <Grainient
          color1="#000000"
          color2={isScale ? "#a855f7" : "#3b82f6"}
          color3="#111111"
          timeSpeed={0.2}
          zoom={0.8}
          noiseScale={2.5}
          grainAmount={0.25}
          className="h-full w-full opacity-60"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[5px]" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        
        {/* Navigation Back */}
        <Link href="/#pricing" className="inline-flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest hover:text-zinc-300 transition-colors mb-16 border border-white/20 px-4 py-2 bg-black/40">
          <ArrowLeft size={14} /> Vissza az árakhoz
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/50 block mb-4 uppercase">
                JELENTKEZÉS AUDITRA
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white lowercase mb-6 leading-tight">
                szintlépés a <br />
                <span className={isScale ? "text-purple-400" : "text-blue-500"}>
                  {isScale ? "full scale" : "foundation"}
                </span> <br />
                csomaggal.
              </h1>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Leadod a jelentkezést</h3>
                    <p className="text-zinc-400 text-sm font-light lowercase">kitöltöd a jobb oldali űrlapot a legfontosabb sarokszámokkal.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Villámhívás (24 órán belül)</h3>
                    <p className="text-zinc-400 text-sm font-light lowercase">felhívunk egy 15 perces kérdezz-felelekre, hogy letisztázzuk, tudunk-e rajta többszörözni.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 bg-white text-black">3</div>
                  <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Mély Audit & Stratégia</h3>
                    <p className="text-zinc-400 text-sm font-light lowercase">ha megvan a kémia, belevágunk a közös auditba, rejtett költségek és elköteleződés nélkül.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-black/60 border border-white/10 p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up py-20">
                <div className={`w-20 h-20 rounded-full mb-8 flex items-center justify-center ${isScale ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  <Check size={40} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white lowercase tracking-tight mb-4">
                  kérésed rögzítettük.
                </h3>
                <p className="text-zinc-400 font-light lowercase leading-relaxed max-w-sm mb-12">
                  megkaptuk a {isScale ? 'skálázódás' : 'foundation'} iránti jelentkezést. 24 órán belül hívni fogunk a megadott számon.
                </p>
                <a href="/" className="inline-block border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-4 hover:bg-white hover:text-black transition-colors">
                  vissza a főoldalra
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-light text-white mb-8 lowercase">
                  mesélj a jelenlegi helyzetedről.
                </h3>
                <form 
                  className="flex flex-col gap-6" 
                  autoComplete="off"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setErrors({});

                    // 1. Sanitize all inputs
                    const sanitizedData = {
                      name: sanitizeInput(formData.name),
                      company: sanitizeInput(formData.company),
                      email: sanitizeInput(formData.email),
                      phone: sanitizeInput(formData.phone),
                      goal: sanitizeInput(formData.goal),
                    };

                    // 2. Validate with Zod
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

                    // 3. Simulate API Call (with a small delay for UX)
                    await new Promise(resolve => setTimeout(resolve, 800));
                    
                    setIsSubmitted(true);
                    setIsSubmitting(false);
                  }}
                >
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3 relative">
                      <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 flex justify-between">
                        <span className={errors.name ? "text-red-400" : ""}>Keresztnév / Vezetéknév</span>
                        {formData.name.length > 2 && !errors.name && <Check size={12} className="text-emerald-500" />}
                      </label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/5 border border-white/10 p-4 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                        required 
                      />
                    </div>
                    <div className="flex flex-col gap-3 relative">
                      <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 flex justify-between">
                        <span className={errors.company ? "text-red-400" : ""}>Cég neve / Weboldal</span>
                        {formData.company.length > 2 && !errors.company && <Check size={12} className="text-emerald-500" />}
                      </label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-white/5 border border-white/10 p-4 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3 relative">
                      <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 flex justify-between">
                        <span className={errors.email ? "text-red-400" : ""}>Email cím</span>
                        {formData.email.includes('@') && formData.email.includes('.') && !errors.email && <Check size={12} className="text-emerald-500" />}
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white/5 border border-white/10 p-4 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                        required 
                      />
                    </div>
                    <div className="flex flex-col gap-3 relative">
                      <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 flex justify-between">
                        <span className={errors.phone ? "text-red-400" : ""}>Telefonszám (Közvetlen)</span>
                        {formData.phone.length > 5 && !errors.phone && <Check size={12} className="text-emerald-500" />}
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/5 border border-white/10 p-4 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-4 relative">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 flex justify-between">
                      <span className={errors.goal ? "text-red-400" : ""}>Hol vagy most, és mi a legnagyobb célod?</span>
                      {formData.goal.length > 10 && !errors.goal && <Check size={12} className="text-emerald-500" />}
                    </label>
                    <textarea 
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                      className="bg-white/5 border border-white/10 p-4 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors resize-none h-32" 
                      placeholder="oszd meg velünk röviden..." 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`mt-6 w-full py-6 text-black text-xs font-black tracking-[0.3em] uppercase transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} ${isScale ? 'bg-purple-400 hover:bg-purple-300' : 'bg-blue-500 hover:bg-blue-400'}`}
                  >
                    {isSubmitting ? 'Küldés...' : 'Jelentkezés beküldése'} <Send size={14} />
                  </button>
                  
                  <div className="text-center mt-2 flex items-center justify-center gap-2 text-[10px] text-zinc-500">
                    <Check size={10} /> az adataidat biztonságosan es bizalmasan kezeljük.
                  </div>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default function ApplyPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white text-[10px] uppercase tracking-widest">töltés...</div>}>
           <ApplyContent />
        </Suspense>
      </main>
    </SmoothScroll>
  );
}
