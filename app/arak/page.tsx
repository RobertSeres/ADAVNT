"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20">
          <Pricing />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
