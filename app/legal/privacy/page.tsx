import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-40 pb-32">
        <div className="max-w-3xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 block mb-4 uppercase">
            Legal / Adatkezelési Tájékoztató
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 lowercase">
            Adatkezelés
          </h1>
          
          <div className="space-y-12 text-zinc-400 font-light leading-relaxed">
            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">1. Általános Rendelkezések</h2>
              <p>
                Az Advant Group Krft. (a továbbiakban: Szolgáltató) elkötelezett a felhasználók személyes adatainak védelme mellett. Jelen tájékoztató célja, hogy rögzítse az adatkezelési folyamatokat és biztosítsa az érintettek jogainak érvényesülését a GDPR előírásaival összhangban.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">2. Az Adatkezelés Célja</h2>
              <p>
                A Szolgáltató a megadott adatokat kizárólag a kért szolgáltatás nyújtása, kapcsolattartás, ajánlatadás és hírlevél küldése céljából kezeli, a felhasználó kifejezett hozzájárulása mellett.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">3. Adatbiztonság</h2>
              <p>
                Minden technikai és szervezési intézkedést megteszünk annak érdekében, hogy megvédjük az adatokat a jogosulatlan hozzáféréstől, módosítástól vagy törléstől. Rendszereinket folyamatosan monitorozzuk és frissítjük a legújabb biztonsági szabványoknak megfelelően.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold uppercase text-xs tracking-widest mb-6">4. Az érintettek jogai</h2>
              <p>
                Önnek joga van tájékoztatást kérni adatai kezeléséről, kérheti azok helyesbítését vagy törlését. Bármilyen kérdés esetén vegye fel velünk a kapcsolatot a hello@advant.hu címen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
