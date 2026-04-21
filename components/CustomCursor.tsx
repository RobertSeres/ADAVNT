"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");
  const [isClient, setIsClient] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const innerX = useSpring(mouseX, { damping: 40, stiffness: 800 });
  const innerY = useSpring(mouseY, { damping: 40, stiffness: 800 });

  useEffect(() => {
    setIsClient(true);
    
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.getAttribute("data-cursor") === "pointer"
      ) {
        setCursorType("pointer");
      } else if (target.getAttribute("data-cursor") === "big") {
        setCursorType("big");
      } else if (target.getAttribute("data-cursor") === "text") {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isClient) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    pointer: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
    },
    big: {
      width: 120,
      height: 120,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    text: {
      width: 4,
      height: 40,
      borderRadius: 2,
      backgroundColor: "rgba(255, 255, 255, 1)",
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
      {/* Outer Glow / Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorType === "pointer" ? 0 : 1,
          opacity: cursorType === "text" ? 0 : 1,
        }}
      />
    </div>
  );
}
