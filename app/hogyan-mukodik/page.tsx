"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Philosophy from "@/components/Philosophy";

export default function HowItWorksPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20">
          <Philosophy />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
