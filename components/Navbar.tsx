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
    { name: "Főoldal", href: "/" },
    { name: "Szolgáltatások", href: "/#services" },
    { name: "Eredmények", href: "/#results" },
    { name: "Befektetés", href: "/#pricing" },
    { name: "Gy.I.K.", href: "/#faq" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    // If already on the home page, force a reload to satisfy "frissitse ujra az oldalt"
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.location.href = "/";
    }
  };

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
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="text-xl font-black tracking-tighter text-white hover:opacity-100 transition-opacity lowercase relative group"
        >
          advant
          <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full duration-500" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href === "/" && window.location.pathname === "/") {
                  e.preventDefault();
                  window.location.href = "/";
                }
              }}
              className="text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-all lowercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link 
          href="/#pricing" 
          className="hidden md:block px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95"
        >
          beszéljünk
        </Link>

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
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (link.href === "/" && window.location.pathname === "/") {
                  e.preventDefault();
                  window.location.href = "/";
                }
              }}
              className="text-[10px] lowercase font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#pricing" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-zinc-200 active:scale-95 shadow-2xl inline-block no-underline"
          >
            beszéljünk
          </Link>
        </div>
      </div>

      {/* Scroll Progress Bar (Artistic Gradient) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-transparent">
        <div 
          className="h-full bg-linear-to-r from-white/5 via-white/40 to-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
