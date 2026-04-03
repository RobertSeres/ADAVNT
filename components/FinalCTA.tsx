"use client";

import React from 'react';
import MetallicPaint from './MetallicPaint';

const FinalCTA = () => {
  return (
    <section className="relative w-full flex items-center justify-center p-0 h-[300px] md:h-[450px] z-20 overflow-hidden bg-black border-t border-white/5">
      
      {/* 
          ULTRA-WIDE MASSIVE BRAND SIGNATURE
          Silver and Off-White Metallic Paint creates a high-impact branding finale.
      */}
      <div className="absolute inset-0 z-0 opacity-80">
        <MetallicPaint
          imageSrc="/advant-logo.svg"
          seed={123}
          scale={2.1}
          speed={0.15}
          liquid={0.8}
          lightColor="#F5F5F5"
          darkColor="#C0C0C0"
          tintColor="#C0C0C0"
          mouseAnimation={true}
          brightness={1.6}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <h2 className="sr-only">ADVANT</h2>
      </div>
    </section>
  );
};

export default FinalCTA;
