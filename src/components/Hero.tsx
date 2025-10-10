"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import ractorLogo from "@/images/ractorlablogo.png";
import amazonLogo from "@/images/companylogo/amazonblakc.png";
import metaLogo from "@/images/companylogo/META1.webp";
import microsoftLogo from "@/images/companylogo/microsoft.png";
import mitLogo from "@/images/companylogo/mit.png";
import salesforceLogo from "@/images/companylogo/salesforceblackpng.png";
import harvardLogo from "@/images/companylogo/harvardlog.png";

function useTypewriter(lines: string[], speed = 28) {
  const joined = useMemo(() => lines.join("\n"), [lines]);
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    const id = setInterval(() => {
      setI((v) => (v < joined.length ? v + 1 : v));
    }, speed);
    return () => clearInterval(id);
  }, [joined, speed]);
  return joined.slice(0, i);
}

function LogoStrip() {
  const items: { src: StaticImageData; alt: string; className?: string }[] = [
    { src: amazonLogo, alt: "Amazon", className: "scale-85" },
    { src: metaLogo, alt: "Meta", className: "scale-110" },
    { src: microsoftLogo, alt: "Microsoft", className: "scale-145" },
    { src: mitLogo, alt: "MIT", className: "scale-120" },
    { src: salesforceLogo, alt: "Salesforce", className: "scale-145" },
    { src: harvardLogo, alt: "Harvard", className: "scale-200" },
  ];

  return (
    <div className="mx-auto mt-8 w-[min(1100px,94vw)] py-4">
      <div className="grid grid-cols-6 items-center justify-items-center gap-x-6 sm:gap-x-8">
        {items.map((it, i) => (
          <div key={i} className="flex h-12 md:h-14 w-full items-center justify-center opacity-100 transition">
            <Image
              src={it.src}
              alt={it.alt}
              className={`h-8 md:h-10 w-auto object-contain transform ${it.className ?? ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const prompt = useTypewriter([
    "Engineering the layer that makes your agent run efficiently \u2014 and endlessly.",
  ], 22);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white text-black">
      {/* Top-left brand: logo + name */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-md ring-1 ring-black/10" aria-hidden>
          <Image src={ractorLogo} alt="Ractor Labs logo" fill sizes="44px" className="object-contain" priority />
        </div>
        <span className="text-black font-semibold tracking-tight text-[18px] sm:text-[20px]">Ractor Labs</span>
      </div>
      <div className="z-10 w-[min(1200px,94vw)] px-6">
        <div
          className="font-mono font-semibold text-center text-black text-[32px] sm:text-[40px] md:text-[48px] leading-[1.3]"
          style={{
            fontFamily:
              '"Courier New", Courier, monospace',
          }}
        >
          <pre className="whitespace-pre-wrap">
            {prompt}
            <motion.span
              aria-hidden
              className="inline-block h-[1em] w-[0.45ch] translate-y-[0.15em] align-baseline bg-black"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
            />
          </pre>
        </div>
        {/* Logo strip */}
        <LogoStrip />
      </div>

      {/* Top-right social icons */}
      <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          title="Discord"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-black/10 hover:bg-black/5 transition"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="currentColor" aria-hidden>
            <rect x="3" y="6" width="18" height="12" rx="6" />
            <circle cx="9" cy="12" r="1.5" fill="white" />
            <circle cx="15" cy="12" r="1.5" fill="white" />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          title="X (Twitter)"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-black/10 hover:bg-black/5 transition"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" aria-hidden>
            <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 text-center">
        <p className="pointer-events-auto font-mono text-xs sm:text-sm text-black/70">© 2025 Ractor Labs</p>
      </div>

      
    </div>
  );
}
