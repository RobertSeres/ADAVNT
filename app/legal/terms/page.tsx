"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function TermsAndConditions() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-6 pt-40 pb-32 max-w-4xl">
          <h1 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-8 uppercase">
            Jogi Dokumentumok
          </h1>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white lowercase mb-16">
            Általános szerződési feltételek (ÁSZF)
          </h2>
          
          <div className="space-y-12 text-zinc-400 font-light lowercase text-sm leading-relaxed">
            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">1. Alapvető rendelkezések</h3>
              <p>
                A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) [Cégnév] (a továbbiakban: Szolgáltató) és a Szolgáltató által nyújtott elektronikus és marketing szolgáltatásokat (Growth Partner, Webfejlesztés, Kampánykezelés) igénybe vevő Ügyfél jogait és kötelezettségeit tartalmazza. 
              </p>
            </section>

            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">2. Szolgáltatások Köre</h3>
              <p>
                A Szolgáltató integrált B2B digitális növekedési (growth) megoldásokat, egyedi szoftver- és webfejlesztést, Tartalom-előállítást és Performance Marketing kampánykezelést végez havi díjas (Retainer) bázison vagy egyedi megállapodás alapján.
              </p>
            </section>

            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">3. A szerződés létrejötte és díjazás</h3>
              <p>
                A weboldalon történő audit jelentkezés nem minősül automatikus szerződéskötésnek. A hivatalos Megbízási Szerződés minden esetben a személyes/online konzultációt, valamint egyedi árajánlat megküldését és írásos elfogadását követően jön létre a Felek között. 
              </p>
            </section>

            <section>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-4">4. Titoktartás (NDA)</h3>
              <p>
                Felek rögzítik, hogy az együttműködés során tudomásukra jutott minden üzleti adat, stratégia és statisztika üzleti titoknak minősül, azokat harmadik félnek engedély nélkül nem adják ki. Ez alól kivételt képezhet a százalékos sikermutatók név nélküli esettanulmányként történő felhasználása a Szolgáltató részéről.
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
