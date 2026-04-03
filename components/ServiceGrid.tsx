"use client";

import Link from 'next/link';
import Grainient from './Grainient';

type ServiceProps = {
  title: string;
  description: string;
  ctaText: string;
  href: string;
  bgClass: string;
  borderColor?: string;
  colors: string[];
};

const ServiceCard = ({ title, description, ctaText, href, bgClass, borderColor = "border-white/5", colors }: ServiceProps) => (
  <div className={`relative h-[50vh] min-h-[400px] flex flex-col overflow-hidden group border-r border-b ${borderColor} ${bgClass}`}>
    {/* Animated Grainient Background on Hover */}
    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
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
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    </div>

    <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-end overflow-hidden">
      {/* Animated white line on hover */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      <div className="relative z-10 max-w-lg">
        <div className="w-12 h-px bg-white/10 group-hover:bg-white transition-all mb-6" />
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 mb-2 block transition-all duration-500 group-hover:tracking-[0.6em] group-hover:text-white">
          advant
        </span>
        <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9] group-hover:scale-[1.02] transition-transform duration-500 origin-left text-white lowercase">
          {title}
        </h3>
        <p className="text-zinc-500 text-lg md:text-xl font-light mb-10 leading-tight max-w-sm group-hover:text-zinc-300 transition-colors lowercase">
          {description}
        </p>
        
        <Link
          href={href}
          className="px-8 py-3 bg-white text-black text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:bg-zinc-100 hover:text-black border border-white/10 shadow-xl inline-block no-underline"
        >
          {ctaText}
        </Link>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-12 right-12 text-6xl md:text-8xl font-black text-white/5 select-none transition-all duration-1000 group-hover:rotate-90 group-hover:scale-125 group-hover:text-white/10">
        +
      </div>
    </div>
  </div>
);

const ServiceGrid = () => {
  const services = [
    {
      title: "WEB",
      description: "Prémium webfejlesztés, ami ügyfelet hoz – nem csak jól néz ki.",
      ctaText: "Részletek →",
      href: "/services/web",
      bgClass: "bg-black",
      colors: ["#22c55e", "#000000", "#ffffff"] // Green, Black, White
    },
    {
      title: "INGATLAN MEDIA",
      description: "Ingatlan videók és drón tartalom, ami felgyorsítja az eladást.",
      ctaText: "Részletek →",
      href: "/services/media",
      bgClass: "bg-black",
      colors: ["#ffffff", "#3b82f6", "#1d4ed8"] // White, Blue, Dark Blue
    },
    {
      title: "SCALE",
      description: "Vendéglátóhelyek digitális rendszere, ami több foglalást hoz.",
      ctaText: "Részletek →",
      href: "/services/scale",
      bgClass: "bg-black",
      colors: ["#fef08a", "#eab308", "#a855f7"] // Lemon, Gold, Purple
    },
    {
      title: "DRONERA",
      description: "Ipari drónmegoldások felméréshez, dokumentációhoz és vizsgálathoz.",
      ctaText: "Részletek →",
      href: "/services/dronera",
      bgClass: "bg-black",
      colors: ["#000000", "#f97316", "#6b7280"] // Black, Orange, Gray
    }
  ];

  return (
    <section id="systems" className="bg-black text-white grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl relative z-1">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </section>
  );
};

export default ServiceGrid;
