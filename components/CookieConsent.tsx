"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("advant_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("advant_cookie_consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 left-8 z-[200] max-w-sm w-full"
        >
          <div className="bg-zinc-950 border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
            {/* Decorative background pulse */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={18} className="text-zinc-500" />
                <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">cookie tájékoztató</span>
              </div>
              
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 lowercase">
                oldalunk sütiket használ a legjobb felhasználói élmény és az analitikai mérések érdekében. a továbblépéssel elfogadja az 
                <Link href="/legal/privacy" className="text-white hover:underline mx-1">adatkezelési tájékoztatónkat</Link>.
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={handleAccept}
                  className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex-1"
                >
                  elfogadom
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="px-8 py-3 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  bezárás
                </button>
              </div>
            </div>

            {/* Absolute close button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-zinc-800 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
