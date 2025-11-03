"use client";

import React from "react";

type GlitchTextProps = {
  text: string;
  className?: string;
};

export default function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <div className={"glitch-container " + (className ?? "")}>
      <div className="glitch" data-text={text}>
        <span>{text}</span>
      </div>

      {/* subtle scanlines overlay */}
      <div className="scanlines" aria-hidden />

      {/* sporadic white glitch lines */}
      <div className="spike-lines" aria-hidden>
        <span className="bar bar1" />
        <span className="bar bar2" />
        <span className="bar bar3" />
      </div>

      <style jsx>{`
        .glitch-container {
          position: relative;
          display: inline-block;
        }
        .glitch {
          position: relative;
          white-space: pre-wrap;
          line-height: 1.15;
          will-change: transform, filter;
          animation: glitchSkew 3s infinite linear alternate;
        }
        .glitch > span {
          position: relative;
          z-index: 3;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 2;
          mix-blend-mode: screen;
        }
        /* cyan channel */
        .glitch::before {
          color: #22d3ee; /* cyan */
          animation: glitchSlice1 2.6s infinite steps(24) alternate-reverse;
          text-shadow: -1px 0 0 #22d3ee;
        }
        /* magenta channel */
        .glitch::after {
          color: #ec4899; /* magenta */
          animation: glitchSlice2 2.2s infinite steps(22) alternate-reverse;
          text-shadow: 1px 0 0 #ec4899;
        }
        .scanlines {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.15;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 3px
          );
          animation: scanMove 6s linear infinite;
        }

        .spike-lines {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 4; /* above text for crisp lines */
          mix-blend-mode: screen;
        }
        .bar {
          position: absolute;
          left: -2%;
          width: 104%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 50%, transparent 100%);
          opacity: 0;
          filter: blur(0.2px);
        }
        .bar1 { animation: whiteLine1 2.6s infinite steps(1, end); }
        .bar2 { animation: whiteLine2 3.1s infinite steps(1, end) 0.5s; }
        .bar3 { animation: whiteLine3 4.2s infinite steps(1, end) 0.9s; }

        @keyframes glitchSkew {
          0% { transform: skew(0deg); }
          50% { transform: skew(0.6deg); }
          100% { transform: skew(0deg); }
        }
        @keyframes scanMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        /* slice animations emulate digital glitch bands */
        @keyframes glitchSlice1 {
          0% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, -1px); }
          10% { clip-path: inset(10% 0 85% 0); transform: translate(1px, 1px); }
          20% { clip-path: inset(30% 0 55% 0); transform: translate(-1px, 0px); }
          30% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translate(-1px, 1px); }
          50% { clip-path: inset(5% 0 75% 0); transform: translate(2px, 0px); }
          60% { clip-path: inset(75% 0 10% 0); transform: translate(-2px, -1px); }
          70% { clip-path: inset(45% 0 35% 0); transform: translate(1px, 1px); }
          80% { clip-path: inset(20% 0 70% 0); transform: translate(-1px, 0px); }
          90% { clip-path: inset(65% 0 15% 0); transform: translate(2px, -1px); }
          100% { clip-path: inset(0% 0 90% 0); transform: translate(-2px, 1px); }
        }
        @keyframes glitchSlice2 {
          0% { clip-path: inset(0% 0 90% 0); transform: translate(2px, 1px); }
          10% { clip-path: inset(65% 0 15% 0); transform: translate(-2px, 0px); }
          20% { clip-path: inset(20% 0 70% 0); transform: translate(1px, -1px); }
          30% { clip-path: inset(45% 0 35% 0); transform: translate(-1px, 1px); }
          40% { clip-path: inset(75% 0 10% 0); transform: translate(2px, 0px); }
          50% { clip-path: inset(5% 0 75% 0); transform: translate(-2px, -1px); }
          60% { clip-path: inset(40% 0 40% 0); transform: translate(1px, 1px); }
          70% { clip-path: inset(60% 0 20% 0); transform: translate(-1px, 0px); }
          80% { clip-path: inset(30% 0 55% 0); transform: translate(2px, -1px); }
          90% { clip-path: inset(10% 0 85% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(80% 0 5% 0); transform: translate(2px, 0px); }
        }

        /* Flashing white bars at discrete, varied positions */
        @keyframes whiteLine1 {
          0%, 9% { opacity: 0; }
          10% { opacity: 1; top: 12%; }
          11%, 39% { opacity: 0; }
          40% { opacity: 1; top: 47%; }
          41%, 66% { opacity: 0; }
          67% { opacity: 1; top: 72%; }
          68%, 100% { opacity: 0; }
        }
        @keyframes whiteLine2 {
          0%, 18% { opacity: 0; }
          19% { opacity: 1; top: 28%; }
          20%, 55% { opacity: 0; }
          56% { opacity: 1; top: 63%; }
          57%, 100% { opacity: 0; }
        }
        @keyframes whiteLine3 {
          0%, 32% { opacity: 0; }
          33% { opacity: 1; top: 38%; }
          34%, 74% { opacity: 0; }
          75% { opacity: 1; top: 8%; }
          76%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}


