"use client";

import React, { useState, useEffect, useRef } from 'react';

const ScrollToTopCube = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const targetSpeedRef = useRef(0.3);  // positive = right
  const currentSpeedRef = useRef(0.3);
  const rotationRef = useRef(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      // Smoothly interpolate speed towards target (lerp)
      currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.02;
      rotationRef.current += currentSpeedRef.current;
      setRotation(rotationRef.current);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleHover = () => {
    setIsHovered(true);
    targetSpeedRef.current *= -1;
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const size = 40;
  const half = size / 2;

  const bg = isHovered ? '#ffffff' : '#000000';
  const border = isHovered ? '#000000' : '#ffffff';
  const arrow = isHovered ? '#000000' : '#ffffff';

  const faceBase: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    border: `1px solid ${border}`,
    backgroundColor: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, border-color 0.3s',
    backfaceVisibility: 'visible',
  };

  const arrowSvg = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2L12 10H2L7 2Z" fill={arrow} />
    </svg>
  );

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 50,
        width: size,
        height: size,
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        outline: 'none',
        perspective: 300,
      }}
      aria-label="Scroll to top"
    >
      <div
        style={{
          width: size,
          height: size,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(-20deg) rotateY(${rotation}deg)`,
        }}
      >
        <div style={{ ...faceBase, transform: `translateZ(${half}px)` }}>{arrowSvg}</div>
        <div style={{ ...faceBase, transform: `rotateY(180deg) translateZ(${half}px)` }}>{arrowSvg}</div>
        <div style={{ ...faceBase, transform: `rotateY(90deg) translateZ(${half}px)` }}>{arrowSvg}</div>
        <div style={{ ...faceBase, transform: `rotateY(-90deg) translateZ(${half}px)` }}>{arrowSvg}</div>
        <div style={{ ...faceBase, transform: `rotateX(90deg) translateZ(${half}px)` }}>{arrowSvg}</div>
        <div style={{ ...faceBase, transform: `rotateX(-90deg) translateZ(${half}px)` }}>{arrowSvg}</div>
      </div>
    </button>
  );
};

export default ScrollToTopCube;
