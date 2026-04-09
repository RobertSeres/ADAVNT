"use client";

import React, { useState } from 'react';
import Grainient from './Grainient';

export default function PricingCard({ 
  tier, 
  children, 
  colors 
}: { 
  tier: string; 
  children: React.ReactNode; 
  colors: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black relative group overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Background Engine */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <Grainient 
          color1={colors[0]} 
          color2={colors[1]} 
          color3={colors[2]} 
          timeSpeed={0.3} 
          zoom={0.8} 
          noiseScale={3.0} 
          grainAmount={0.15} 
          className="h-full w-full" 
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
