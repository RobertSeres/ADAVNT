"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommonPointItemClient({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: any; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className={`border-b border-white/10 transition-all duration-700 relative overflow-hidden ${isOpen ? "bg-zinc-950/40" : ""}`}>
      {isOpen && (
        <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-transparent pointer-events-none opacity-50" />
      )}
      <button
        onClick={onToggle}
        className="w-full py-10 px-4 md:px-8 flex items-center justify-between group transition-colors hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-8 md:gap-16">
          <span className="text-[10px] font-bold text-zinc-800 transition-colors group-hover:text-zinc-500">
            {item.id}
          </span>
          <span className="text-xl md:text-3xl font-black tracking-tighter text-zinc-300 group-hover:text-white transition-colors lowercase">
            {item.title}
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-[10px] font-bold tracking-[0.3em] text-zinc-700 group-hover:text-zinc-500 uppercase transition-colors">
            {item.tagline}
          </span>
          <div className="flex-shrink-0">
            {isOpen ? (
              <X size={20} className="text-white rotate-0 transition-transform duration-500" />
            ) : (
              <Plus size={20} className="text-zinc-700 group-hover:text-white transition-transform duration-500" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`absolute inset-0 z-0 bg-linear-to-br ${item.bgClass}`}
            />

            <div className="px-8 md:px-16 pb-16 pt-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-l border-white/10 pl-8 md:pl-12">
                {item.columns.map((col: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-6 group/col">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-px bg-zinc-800 group-hover/col:w-4 transition-all" />
                      <span className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">
                        {col.label}
                      </span>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed tracking-tight transition-colors ${idx === 2 ? "text-white font-bold" : "text-zinc-400 font-light"}`}>
                      {col.content}
                    </p>
                    {col.tags && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {col.tags.map((tag: string) => (
                          <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] font-bold tracking-widest text-zinc-500 uppercase hover:text-white hover:border-white/30 transition-all cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CommonPointsListClient({ items }: { items: any[] }) {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <div className="max-w-7xl mx-auto border-t border-white/10">
      {items.map((item) => (
        <CommonPointItemClient
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
