import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Philosophy from "@/components/Philosophy";
import Manifesto from "@/components/Manifesto";
import ServiceGrid from "@/components/ServiceGrid";
import CommonPoints from "@/components/CommonPoints";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        
        {/* Main Content Stack - Ensures natural scroll flow and height calculation */}
        <div className="relative w-full overflow-clip">
          <Hero />
          {/* <TrustStrip /> */}
          <Philosophy />
          <Manifesto />
          <ServiceGrid />
          {/* <Results /> */}
          <CommonPoints />
          <Pricing />
          <FAQ />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
