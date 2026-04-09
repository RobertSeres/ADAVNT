"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function PrivacyPolicy() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-6 pt-40 pb-32 max-w-4xl">
          <h1 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-8 uppercase">
            Jogi Dokumentumok
          </h1>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white lowercase mb-16">
            adatkezelési tájékoztató
          </h2>
          
          <div className="space-y-12 text-zinc-400 font-light lowercase text-sm leading-relaxed">
            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">1. Bevezetés</h3>
              <p>
                [Cégnév / Adóószám] (a továbbiakban: Szolgáltató vagy Adatkezelő) magára nézve kötelezőnek ismeri el a jelen jogi közlemény tartalmát. Kötelezettséget vállal arra, hogy tevékenységével kapcsolatos minden adatkezelés megfelel a jelen szabályzatban és a hatályos nemzeti jogszabályokban, valamint az Európai Unió jogi aktusaiban meghatározott elvárásoknak.
              </p>
            </section>
            
            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">2. Az adatkezelő adatai</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>Név: [Cégnév]</li>
                <li>Székhely: [Székhely Címe]</li>
                <li>Cégjegyzékszám: [00-00-000000]</li>
                <li>Adószám: [00000000-0-00]</li>
                <li>Képviselő: [Név]</li>
                <li>E-mail: hello@advant.hu</li>
              </ul>
            </section>

            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">3. A kezelt adatok köre, célja és ideje</h3>
              <p className="mb-2"><strong>Kapcsolatfelvétel és Jelentkezés az Auditra:</strong></p>
              <p>Kezelt adatok: név, email cím, telefonszám, cégadatok, megadott üzleti kihívások.</p>
              <p>Adatkezelés célja: kapcsolatfelvétel, üzleti egyeztetés, árajánlat és growth audit biztosítása.</p>
              <p>Adatkezelés ideje: az üzleti kapcsolat fennállásáig, vagy a felhasználó törlési kérelméig.</p>
            </section>

            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">4. Analitika és Sütik (Cookies)</h3>
              <p>
                A weboldal Google Analytics 4, valamint Meta (Facebook) Pixel kódokat is futtat a konverzió optimalizálás és a hirdetési rendszerek mérése céljából. Ezen technológiák használata a felhasználó hozzájárulásához (Cookie banner) kötött.
              </p>
            </section>

            <div className="p-4 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 mt-16 text-xs uppercase tracking-widest font-bold">
              Figyelem: Ez egy sablon (placeholder) szöveg. Élesítés előtt érdemes jogásszal véglegesíteni az adatok behelyettesítése után.
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
