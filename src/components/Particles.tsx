"use client";

import React from "react";

type ParticlesProps = {
  count?: number;
  color?: string;
  className?: string;
};

export default function Particles({ count = 60, color = "255,255,255", className = "" }: ParticlesProps) {
  const items = React.useMemo(() =>
    Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 2 + 1; // 1-3px
      const left = Math.random() * 100; // %
      const duration = 14 + Math.random() * 18; // 14-32s
      const delay = Math.random() * duration * -1; // negative to desync
      const opacity = 0.15 + Math.random() * 0.35;
      return { id: i, size, left, duration, delay, opacity };
    }), [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {items.map(p => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] rounded-full will-change-transform"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: `rgba(${color}, ${p.opacity})`,
            boxShadow: `0 0 6px rgba(${color}, ${Math.min(p.opacity + 0.15, 0.6)})`,
            animation: `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}


