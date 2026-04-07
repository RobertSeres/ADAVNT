"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Főoldal", href: "/#home" },
    { name: "Rendszerek", href: "/#systems" },
    { name: "Filozófia", href: "/#philosophy" },
    { name: "Miért mi?", href: "/#why-us" },
    { name: "Kapcsolat", href: "/#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 z-100 w-full transition-all duration-500
        ${isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
          : "bg-transparent border-b border-white/5 py-5"
        }
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/#home" className="text-xl font-black tracking-tighter text-white hover:opacity-100 transition-opacity lowercase">
          advant
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-all lowercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="hidden md:block px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95"
        >
          ajánlat
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? "max-h-[400px] opacity-100 py-8" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[10px] lowercase font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-zinc-200 active:scale-95 shadow-2xl inline-block no-underline"
          >
            ajánlat
          </a>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent">
        <div 
          className="h-full bg-white transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
