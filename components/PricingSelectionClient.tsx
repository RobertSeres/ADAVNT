"use client";

import React, { useState } from 'react';
import { Check, ArrowRight, Zap, X, Send } from 'lucide-react';
import Grainient from './Grainient';
import { sanitizeInput, ApplyFormSchema } from "@/lib/security";

const foundationFeatures = [
  "Átfogó Üzleti Audit & Konverziós Stratégia",
  "Dedikált Next.js Prémium Weboldalfejlesztés",
  "Teljes Performance Marketing (Meta & Google)",
  "Stratégia-alapú Reklámképek, Posztok & Videók",
  "Szerveroldali Adatanalitika (GA4, Meta CAPI)",
  "Folyamatos Konverzió Optimalizálás (CRO)",
  "Kétheti Stratégiai Mérföldkő Meetingek",
  "Élő Transzparens Teljesítmény Dashboardok"
];

const scaleFeatures = [
  "Minden a Growth Foundation csomagból",
  "Tömeges High-End Videógyártás & FPV Drón",
  "Kizárólagos AI Generált Prémium Reklámfilmek",
  "Custom App & Headless E-commerce Vonal",
  "Egyedi AI Projekt-Asszisztens & Lead Generálás",
  "B2B LinkedIn Outreach Rendszer Integráció",
  "Heti Deep-Dive Sync & VIP Slack Csatorna",
  "Transzparens Sikerdíjas Profitmegosztás"
];

const PricingSelectionClient = () => {
  const [selectedTier, setSelectedTier] = useState<null | 'foundation' | 'scale'>(null);
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

  const handleApply = async (e: React.FormEvent) => {
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

    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSelectedTier(null);
    setIsSubmitted(false);
    setFormData({ name: "", company: "", email: "", phone: "", goal: "" });
    setErrors({});
  };

  return (
    <div className="relative">
      <div className={`flex flex-col md:flex-row border border-white/10 md:bg-white/5 relative min-h-[850px] overflow-hidden`}>
        
        {/* Foundation Tier */}
        <div 
          className={`relative border-b md:border-b-0 md:border-r border-white/10 transition-all duration-500 ease-out flex flex-col group
            ${selectedTier === 'scale' ? 'max-h-0 md:max-h-none md:max-w-0 opacity-0 pointer-events-none' : 'max-h-[1000px] md:max-h-none opacity-100'}
            ${selectedTier === 'foundation' ? 'md:flex-1 bg-blue-500/5' : 'md:w-1/2'}
            ${selectedTier === null ? 'hover:bg-white/[0.02]' : ''}
          `}
          style={{ transitionProperty: 'max-width, max-height, opacity, background-color' }}
        >
          <div className={`p-10 md:p-14 h-full flex flex-col transition-all duration-300 ${selectedTier !== null ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <div className="mb-10">
              <h3 className="text-3xl font-black text-white lowercase tracking-tight mb-2">growth foundation</h3>
              <p className="text-zinc-500 text-sm font-light lowercase">működő cégek alapvető digitális fegyverarzenálja.</p>
            </div>
            
            <div className="mb-12">
              <span className="text-[10px] tracking-widest text-zinc-600 uppercase font-bold block mb-2">irányár</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-white">600k Ft</span>
                <span className="text-zinc-500 font-light text-sm">/ hó -tól</span>
              </div>
            </div>

            <div className="flex-1">
              <span className="text-[10px] tracking-[0.2em] text-white uppercase font-bold border-b border-white/10 pb-4 flex mb-6">mit építünk fel?</span>
              <ul className="space-y-4">
                {foundationFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check size={16} className="text-white/30 mt-1 shrink-0" />
                    <span className="text-sm text-zinc-400 font-light lowercase">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => setSelectedTier('foundation')}
              className="mt-12 w-full py-6 border border-white/20 text-center text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 hover:text-black hover:bg-white transition-all duration-300"
            >
              kiválasztom
            </button>
          </div>

          {selectedTier === 'foundation' && (
             <div className="absolute inset-0 z-0 opacity-40 pointer-events-none transition-opacity duration-1000">
               <Grainient color1="#000000" color2="#3b82f6" color3="#000000" timeSpeed={0.2} zoom={1.2} noiseScale={3} grainAmount={0.2} className="h-full w-full" />
             </div>
          )}
        </div>

        {/* Scale Tier */}
        <div 
          className={`relative transition-all duration-500 ease-out flex flex-col group
            ${selectedTier === 'foundation' ? 'max-h-0 md:max-h-none md:max-w-0 opacity-0 pointer-events-none' : 'max-h-[1000px] md:max-h-none opacity-100'}
            ${selectedTier === 'scale' ? 'md:flex-1 bg-purple-500/5' : 'md:w-1/2'}
            ${selectedTier === null ? 'hover:bg-white/[0.02]' : ''}
          `}
          style={{ transitionProperty: 'max-width, max-height, opacity, background-color' }}
        >
          <div className={`p-10 md:p-14 h-full flex flex-col transition-all duration-300 ${selectedTier !== null ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <div className="mb-10">
              <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 mb-4">
                <span className="text-[9px] text-white font-bold tracking-[0.3em] uppercase flex items-center gap-2">
                  <Zap size={10} className="text-white" /> maximális potenciál
                </span>
              </div>
              <h3 className="text-3xl font-black text-white lowercase tracking-tight mb-2">full scale partner</h3>
              <p className="text-zinc-500 text-sm font-light lowercase">agresszív felskálázásra és dominanciára tervezve.</p>
            </div>
            
            <div className="mb-12">
              <span className="text-[10px] tracking-widest text-zinc-600 uppercase font-bold block mb-2">irányár</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-white">1.2m Ft</span>
                <span className="text-zinc-500 font-light text-sm">/ hó -tól + sikerdíj</span>
              </div>
            </div>

            <div className="flex-1">
              <span className="text-[10px] tracking-[0.2em] text-white uppercase font-bold border-b border-white/10 pb-4 flex mb-6">mivel ad többet?</span>
              <ul className="space-y-4">
                {scaleFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check size={16} className="text-white/30 mt-1 shrink-0" />
                    <span className="text-sm text-zinc-400 font-light lowercase">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => setSelectedTier('scale')}
              className="mt-12 w-full py-6 bg-white text-black text-center text-xs font-black tracking-[0.3em] uppercase hover:bg-zinc-300 transition-all duration-300 flex items-center justify-center gap-3"
            >
              skálázódni akarok <ArrowRight size={14} />
            </button>
          </div>

          {selectedTier === 'scale' && (
             <div className="absolute inset-0 z-0 opacity-40 pointer-events-none transition-opacity duration-1000">
               <Grainient color1="#000000" color2="#a855f7" color3="#111111" timeSpeed={0.2} zoom={0.8} noiseScale={2.5} grainAmount={0.25} className="h-full w-full" />
             </div>
          )}
        </div>

        {/* Form State Overlay */}
        <div 
          className={`absolute inset-0 z-20 transition-all duration-500 p-8 md:p-20 overflow-y-auto
            ${selectedTier ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
        >
          <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${selectedTier ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/50 block mb-2 uppercase">JELENTKEZÉS AUDITRA</span>
                <h2 className={`text-2xl md:text-3xl font-black text-white lowercase tracking-tight`}>
                  {selectedTier === 'scale' ? 'full scale partner' : 'growth foundation'} — {selectedTier === 'scale' ? '1.2m' : '600k'} Ft/hó
                </h2>
              </div>
              <button 
                onClick={handleReset}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
              >
                <X size={14} /> másik csomag
              </button>
            </div>

            {isSubmitted ? (
               <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className={`w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center ${selectedTier === 'scale' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white lowercase tracking-tight mb-4">kérésed rögzítettük.</h3>
                  <p className="text-zinc-400 font-light lowercase max-w-sm mx-auto mb-12 italic">24 órán belül hívni fogunk a megadott számon a részletekkel.</p>
                  <button onClick={handleReset} className="border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-10 py-5 hover:bg-white hover:text-black transition-colors">vissza az árakhoz</button>
               </div>
            ) : (
              <form onSubmit={handleApply} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">Keresztnév / Vezetéknév</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border border-white/10 p-5 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                    required 
                  />
                  {errors.name && <span className="text-red-400 text-[10px] uppercase font-bold mt-1">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">Cég neve / Weboldal</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-white/5 border border-white/10 p-5 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">Email cím</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border border-white/10 p-5 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">Telefonszám (Közvetlen)</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/5 border border-white/10 p-5 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors" 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">Mi a legnagyobb kihívásod jelenleg?</label>
                  <textarea 
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    className="bg-white/5 border border-white/10 p-5 text-white text-sm font-light focus:outline-none focus:border-white/30 transition-colors resize-none h-32" 
                    placeholder="oszd meg velünk röviden..." 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`md:col-span-2 py-6 text-black text-xs font-black tracking-[0.3em] uppercase transition-all duration-500 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} ${selectedTier === 'scale' ? 'bg-purple-400 hover:bg-purple-300' : 'bg-blue-500 hover:bg-blue-400'}`}
                >
                  {isSubmitting ? 'Küldés...' : 'Jelentkezés beküldése'} <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingSelectionClient;
