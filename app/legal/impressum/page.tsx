"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Impressum() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-6 pt-40 pb-32 max-w-4xl">
          <h1 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-8 uppercase">
            Jogi Dokumentumok
          </h1>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white lowercase mb-16">
            Impresszum
          </h2>
          
          <div className="space-y-12 text-zinc-400 font-light lowercase text-sm leading-relaxed">
            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">Szolgáltató (Üzemeltető) Adatai</h3>
              <ul className="list-none space-y-4">
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Cégnév:</strong> [Kft. / Ev. Neve]</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Székhely:</strong> [Irányítószám, Város, Utca, Házszám]</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Adószám:</strong> [00000000-0-00]</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Cégjegyzékszám / Nyilvántartási szám:</strong> [00-00-000000]</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Képviselő neve:</strong> [Képviselő Neve]</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">Kapcsolateltérhetőségek</h3>
              <ul className="list-none space-y-4">
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">E-mail cím:</strong> hello@advant.hu</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Telefonszám:</strong> +36 70 885 6534</li>
              </ul>
            </section>

            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">Tárhelyszolgáltató Adatai</h3>
              <ul className="list-none space-y-4">
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Cégnév:</strong> [Tárhelyszolgáltató Kft.]</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">Székhely:</strong> [Tárhely Város, Cím]</li>
                <li><strong className="text-white uppercase text-[10px] tracking-widest block mb-1">E-mail cím:</strong> [support@tarhely.hu]</li>
              </ul>
            </section>

            <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 mt-16 text-xs uppercase tracking-widest font-bold">
              Figyelem: Ez egy sablon (placeholder) szöveg. Élesítés előtt helyettesítsd be a céged és a tárhelyszolgáltatód valós adataival.
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
