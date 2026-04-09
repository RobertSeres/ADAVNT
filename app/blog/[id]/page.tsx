"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white px-6">
        <Navbar />
        <div className="pt-32 pb-40 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="text-[10px] font-bold tracking-widest text-zinc-500 hover:text-white mb-16 flex items-center gap-2 transition-all uppercase no-underline"
            >
              <ArrowLeft size={16} /> vissza a bloghoz
            </Link>
            
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-6 uppercase">
              STRATÉGIA / 2024.04.09
            </span>
            <h1 className="text-5xl md:text-7xl font-black lowercase tracking-tighter mb-12 leading-none">
              hogyan szerezzen egy étterem több foglalást online
            </h1>
            
            <div className="prose prose-invert prose-zinc max-w-none font-light text-lg text-zinc-400 leading-relaxed lowercase">
              <p className="mb-8">
                A brutális igazság az, hogy a legtöbb étterem kidobja a pénzt az ablakon marketing címszó alatt. Facebook posztok értelmetlen ételekről, 20 like, 0 új asztalfoglalás.
              </p>
              <h2 className="text-3xl font-black text-white mb-6 mt-16 lowercase">1. adatvezérelt alapok</h2>
              <p className="mb-8">
                Minden ott kezdődik, hogy mérjük a konverziót. Ha nem tudod pontosan, hány foglalást hozott az utolsó kampányod, akkor csak találgatsz. Be kell mérni minden kattintást a "foglalás" gombra.
              </p>
              <h2 className="text-3xl font-black text-white mb-6 mt-16 lowercase">2. a sebesség és a mobil élmény</h2>
              <p className="mb-8">
                Ha az étlapod egy 50MB-os PDF, amit mobilról nem lehet elolvasni, már vesztettél. Egy villámgyors landing page, ahol 3 kattintással tudsz foglalni, és azonnal látszanak a szabad asztalok — ez a titka minden sikeres vendéglátóhelynek 2026-ban.
              </p>
              <p className="mt-20 border-t border-white/10 pt-16 text-zinc-500">
                Szeretnél több asztalfoglalást? <br/>
                <Link href="/apply" className="text-white hover:underline transition-all">Jelentkezz auditra →</Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
