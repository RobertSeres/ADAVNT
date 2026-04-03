import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-40 pb-32">
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            Legal / Impresszum
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 lowercase">
            Impresszum
          </h1>
          
          <div className="space-y-12 text-zinc-400 font-light leading-relaxed">
            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">1. Tulajdonosi Információk</h2>
              <ul className="space-y-2">
                <li><span className="text-white font-bold">Cégnév:</span> Advant Group Krft.</li>
                <li><span className="text-white font-bold">Székhely:</span> Budapest, Magyarország</li>
                <li><span className="text-white font-bold">Adószám:</span> 12345678-x-xx</li>
                <li><span className="text-white font-bold">Cégjegyzékszám:</span> 01-09-123456</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">2. Kapcsolat</h2>
              <ul className="space-y-2">
                <li><span className="text-white font-bold">E-mail:</span> hello@advant.hu</li>
                <li><span className="text-white font-bold">Telefon:</span> +36 70 885 6534</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">3. Tárhelyszolgáltató</h2>
              <p>
                A weboldal tárhelyszolgáltatása és üzemeltetésének technikai háttere az Advant Media hálózatán belül valósul meg.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">4. Felelősségkizárás</h2>
              <p>
                A Szolgáltató minden tőle telhetőt megtesz az oldalon található információk aktualitása érdekében, azonban az adatok pontosságáért felelősséget nem vállal. Minden tartalom szellemi tulajdont képez.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
