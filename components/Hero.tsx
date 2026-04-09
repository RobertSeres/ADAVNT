import React from 'react';
import { HeroClient } from './HeroClient';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-black font-[var(--font-familjen-grotesk)]">
      <HeroClient 
        title="advant"
        subtitle={
          <>
            stratégia, végrehajtás, eredmény — egy csapatban. <br className="hidden md:block" />
            <span className="text-white font-medium italic">havi előfizetéssel a teljes digitális növekedésedet visszük, hogy te a szakmádra fókuszálhass.</span>
          </>
        }
        ctaText="nézzük meg, hol tartasz →"
        ctaHref="/arak"
      />
    </section>
  );
};

export default Hero;
