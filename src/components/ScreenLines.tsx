"use client";

import React from "react";

type ScreenLinesProps = {
  /** Number of bright white streaks to animate across the screen */
  count?: number;
};

export default function ScreenLines({ count = 12 }: ScreenLinesProps) {
  const lines = React.useMemo(() => {
    const arr: Array<{ top: string; left: string; width: string; delay: string; duration: string; opacity: number }> = [];
    for (let i = 0; i < count; i++) {
      const top = `${Math.round(Math.random() * 96 + 2)}%`;
      // Scatter across the whole screen (0% - 98%)
      const leftPercent = Math.random() * 98;
      const left = `${leftPercent.toFixed(2)}%`;
      // Tiny dash widths (px for consistency)
      const width = `${Math.round(6 + Math.random() * 10)}px`; // 6-16px
      const delay = `${(Math.random() * 3.5).toFixed(2)}s`;
      const duration = `${(1.6 + Math.random() * 1.8).toFixed(2)}s`;
      const opacity = 0.18 + Math.random() * 0.22; // subtler
      arr.push({ top, left, width, delay, duration, opacity });
    }
    return arr;
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* sporadic bright streaks */}
      {lines.map((l, i) => (
        <span
          key={i}
          className="block absolute bg-white"
          style={{
            top: l.top,
            left: l.left,
            width: l.width,
            height: 0.5,
            opacity: l.opacity,
            borderRadius: 1,
            filter: "drop-shadow(0 0 1px rgba(255,255,255,0.3))",
            animation: `crtFlash ${l.duration} steps(1,end) ${l.delay} infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes crtFlash {
          0%, 78% { opacity: 0; transform: translateX(0); }
          79% { opacity: 0.85; transform: translateX(-2px); }
          80% { opacity: 0.5; transform: translateX(1px); }
          82% { opacity: 1; transform: translateX(0); }
          84% { opacity: 0; transform: translateX(0); }
          92% { opacity: 0.85; transform: translateX(-1px); }
          94%, 100% { opacity: 0; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}


