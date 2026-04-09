"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQItemClient({ 
  question, 
  answer, 
  index, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className={`border-b border-white/10 overflow-hidden transition-all duration-500 relative ${isOpen ? "bg-zinc-950/20" : ""}`}>
      {isOpen && (
        <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-transparent pointer-events-none opacity-50" />
      )}
      <button
        onClick={onToggle}
        className="w-full py-8 px-4 flex items-center justify-between text-left group hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold text-zinc-800 transition-colors group-hover:text-zinc-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm md:text-base font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors lowercase">
            {question}
          </span>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-zinc-700 group-hover:text-white transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-14 pb-10 text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-4xl lowercase">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQListClient({ 
  initialItems, 
  extraItems 
}: { 
  initialItems: any[]; 
  extraItems: any[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto border-t border-white/10 mt-20 relative z-10 transition-all duration-1000">
        {initialItems.map((item, index) => (
          <FAQItemClient
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {extraItems.map((item, index) => (
                <FAQItemClient
                  key={index + initialItems.length}
                  index={index + initialItems.length}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === (index + initialItems.length)}
                  onToggle={() => setOpenIndex(openIndex === (index + initialItems.length) ? null : (index + initialItems.length))}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-16 relative z-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group flex flex-col items-center gap-4 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
            {showAll ? "kevesebb kérdés elrejtése" : "további szakmai kérdések"}
          </span>
          <div className="w-px h-16 bg-white/10 group-hover:bg-white/40 transition-colors" />
        </button>
      </div>
    </>
  );
}
