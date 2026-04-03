"use client";

import React, { useState } from "react";
import { Check, Send } from "lucide-react";
import Grainient from "./Grainient";
import MetallicPaint from "./MetallicPaint";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const formFields = [
    { id: "01", label: "név", type: "text", placeholder: "írja be a nevét..." },
    { id: "02", label: "email", type: "email", placeholder: "kapcsolattartási cím..." },
    { id: "03", label: "telefonszám", type: "tel", placeholder: "+36..." },
    { id: "04", label: "terület", type: "text", placeholder: "web / media / scale / dron..." },
    { id: "05", label: "üzenet", type: "text", placeholder: "miben segíthetünk?" },
  ];

  return (
    <section 
      id="contact" 
      className="relative pt-24 pb-64 md:pb-[400px] border-t border-white/10"
    >
      {/* 1. LAYER: GRAINIENT ANIMATED BACKGROUND (60/30/10) */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#000000"
          color2="#111111"
          color3="#e5e5e5"
          timeSpeed={0.2}
          zoom={0.65}
          noiseScale={3.5}
          grainAmount={0.12}
          className="h-full w-full opacity-60"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      {/* 2. LAYER: FULL-WIDTH BRANDING SIGNATURE */}
      <div className="absolute bottom-0 left-0 w-full h-[350px] z-0 overflow-hidden pointer-events-none">
        <div className="w-screen h-full translate-y-[20%]">
          <MetallicPaint
            imageSrc="/advant-text.svg"
            seed={10}
            scale={2.8}
            speed={0.07}
            liquid={0.4}
            refraction={0.01}
            brightness={1.6}
            contrast={0.7}
            chromaticSpread={0.05}
            lightColor="#FFFFFF"
            darkColor="#0a0a0a"
            tintColor="#d4d4d8"
            mouseAnimation={true}
            patternSharpness={0.6}
          />
        </div>
      </div>

      {/* 3. LAYER: CONTENT */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Breadcrumb */}
        <div className="flex justify-between items-center mb-16 md:mb-24 text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
          <span>04 / P-S</span>
          <span className="text-white">kapcsolat</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Info Section */}
          <div className="flex flex-col h-full min-h-[350px]">
            <div>
              <h2 className="text-6xl md:text-[7vw] font-black tracking-tighter leading-none text-white lowercase mb-10">
                írj nekünk!
              </h2>
              <div className="max-w-sm mb-12">
                <p className="text-lg md:text-xl font-black text-white lowercase mb-3">köszönjük, hogy itt vagy.</p>
                <p className="text-zinc-500 text-sm lowercase leading-tight">
                  projektekhez és közös munkához töltsd ki az űrlapot.<br />
                  vagy írj nekünk közvetlenül:
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-auto">
              <button 
                onClick={() => copyToClipboard("+36 70 885 6534", "phone")}
                className="flex items-center gap-4 text-white hover:opacity-100 transition-opacity group"
              >
                <span className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest w-12 text-left">phone</span>
                <span className="text-lg font-light tracking-tight group-hover:underline">+36 70 885 6534</span>
                {copied === "phone" && <Check size={14} className="text-emerald-500" />}
              </button>
              
              <button 
                onClick={() => copyToClipboard("hello@advant.hu", "email")}
                className="flex items-center gap-4 text-white hover:opacity-100 transition-opacity group"
              >
                <span className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest w-12 text-left">mail</span>
                <span className="text-lg font-light tracking-tight group-hover:underline">hello@advant.hu</span>
                {copied === "email" && <Check size={14} className="text-emerald-500" />}
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full">
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              {/* Individual Fields to handle Select special case */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 group border-b border-white/5 pb-4 focus-within:border-white/20 transition-colors">
                <span className="text-[10px] font-bold text-zinc-800 transition-colors group-focus-within:text-zinc-600">01</span>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 min-w-[120px]">név*</label>
                <input 
                  type="text" 
                  placeholder="írja be a nevét..."
                  className="bg-transparent flex-1 text-white font-light lowercase placeholder:text-zinc-800 focus:outline-none focus:placeholder:text-zinc-700 h-10"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 group border-b border-white/5 pb-4 focus-within:border-white/20 transition-colors">
                <span className="text-[10px] font-bold text-zinc-800 transition-colors group-focus-within:text-zinc-600">02</span>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 min-w-[120px]">email*</label>
                <input 
                  type="email" 
                  placeholder="kapcsolattartási cím..."
                  className="bg-transparent flex-1 text-white font-light lowercase placeholder:text-zinc-800 focus:outline-none focus:placeholder:text-zinc-700 h-10"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 group border-b border-white/5 pb-4 focus-within:border-white/20 transition-colors">
                <span className="text-[10px] font-bold text-zinc-800 transition-colors group-focus-within:text-zinc-600">03</span>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 min-w-[120px]">telefonszám*</label>
                <input 
                  type="tel" 
                  placeholder="+36..."
                  className="bg-transparent flex-1 text-white font-light lowercase placeholder:text-zinc-800 focus:outline-none focus:placeholder:text-zinc-700 h-10"
                  required
                />
              </div>

              {/* Area Select */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 group border-b border-white/5 pb-4 focus-within:border-white/20 transition-colors relative">
                <span className="text-[10px] font-bold text-zinc-800 transition-colors group-focus-within:text-zinc-600">04</span>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 min-w-[120px]">terület*</label>
                <select 
                  className="bg-transparent flex-1 text-white font-light lowercase focus:outline-none h-10 appearance-none cursor-pointer group-focus-within:text-white"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black text-zinc-800">válasszon területet...</option>
                  <option value="web" className="bg-black text-white">advant web</option>
                  <option value="media" className="bg-black text-white">advant media</option>
                  <option value="scale" className="bg-black text-white">advant scale</option>
                  <option value="dronera" className="bg-black text-white">advant dronera</option>
                  <option value="other" className="bg-black text-white">egyéb projekt</option>
                </select>
                <div className="absolute right-0 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 border-r border-b border-white rotate-45 mb-1" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 group border-b border-white/5 pb-4 focus-within:border-white/20 transition-colors">
                <span className="text-[10px] font-bold text-zinc-800 transition-colors group-focus-within:text-zinc-600">05</span>
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500 min-w-[120px]">üzenet*</label>
                <input 
                  type="text" 
                  placeholder="miben segíthetünk?"
                  className="bg-transparent flex-1 text-white font-light lowercase placeholder:text-zinc-800 focus:outline-none focus:placeholder:text-zinc-700 h-10"
                  required
                />
              </div>

              <button type="submit" className="group flex items-center gap-6 text-white self-start pt-8 pb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">üzenet küldése</span>
                <div className="w-16 h-px bg-white transition-all group-hover:w-24 origin-left" />
                <Send size={16} className="transition-transform group-hover:translate-x-3" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
