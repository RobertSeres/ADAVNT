"use client";

import { useEffect, useLayoutEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.1,
      infinite: false,
      // @ts-ignore - Some versions use syncTouch
      syncTouch: false, // Let mobile use native touch for best performance
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add ScrollTrigger.normalizeScroll(true) for smooth mobile experience
    // This addresses major "janky" issues on mobile browsers like Safari
    ScrollTrigger.normalizeScroll(true);

    // Config GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Pre-calculate scroll triggers on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Handle anchor links manually for a smoother experience
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      
      let href = target.getAttribute("href");
      if (!href) return;

      // Handle cases like "/#home" or "#home"
      const isInternalMatch = href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/");

      if (isInternalMatch) {
        const hash = href.includes("#") ? "#" + href.split("#")[1] : "";
        if (!hash) return;

        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          lenis.scrollTo(element as HTMLElement, {
            offset: -100, // Offset for the floating navbar
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as any);
    });

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as any);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
