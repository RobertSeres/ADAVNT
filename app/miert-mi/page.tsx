"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CommonPoints from "@/components/CommonPoints";

export default function WhyUsPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="pt-20">
          <CommonPoints />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
