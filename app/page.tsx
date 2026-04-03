import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Philosophy from "@/components/Philosophy";
import ServiceGrid from "@/components/ServiceGrid";
import CommonPoints from "@/components/CommonPoints";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTopCube from "@/components/ScrollToTopCube";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <ScrollToTopCube />
        
        {/* Main Content Stack - Ensures natural scroll flow and height calculation */}
        <div className="relative w-full overflow-hidden">
          <Hero />
          <TrustStrip />
          <Philosophy />
          <ServiceGrid />
          <CommonPoints />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
