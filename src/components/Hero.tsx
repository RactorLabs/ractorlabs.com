"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ractorLogo from "@/images/ractorlablogo.png";
import amazonLogo from "@/images/companylogo/amazonblakc.png";
import metaLogo from "@/images/companylogo/META1.webp";
import microsoftLogo from "@/images/companylogo/microsoft.png";
import mitLogo from "@/images/companylogo/mit.png";
import salesforceLogo from "@/images/companylogo/salesforceblackpng.png";
import harvardLogo from "@/images/companylogo/harvardlog.png";
import discordLogo from "@/images/sociallogo/discordlogo.jpg";
import xLogo from "@/images/sociallogo/xlogo.png";

function useTypewriter(text: string, speed = 26) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    setI(0);
    const id = setInterval(() => setI((v) => (v < text.length ? v + 1 : v)), speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return text.slice(0, i);
}

function LogoStrip() {
  const items: { src: StaticImageData; alt: string }[] = [
    { src: amazonLogo, alt: "Amazon" },
    { src: metaLogo, alt: "Meta" },
    { src: microsoftLogo, alt: "Microsoft" },
    { src: mitLogo, alt: "MIT" },
    { src: salesforceLogo, alt: "Salesforce" },
    { src: harvardLogo, alt: "Harvard" },
  ];

  return (
    <div className="mx-auto mt-4 w-[min(1100px,94vw)] py-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center justify-items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 sm:gap-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex h-10 sm:h-12 md:h-14 w-full items-center justify-center">
            <Image src={it.src} alt={it.alt} className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const headline = useTypewriter("Hardware-level orchestration for the next generation of agents", 24);
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white text-black">
      {/* Top-left brand: logo + name */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-md ring-1 ring-black/10" aria-hidden>
          <Image src={ractorLogo} alt="Ractor Labs logo" fill sizes="44px" className="object-contain" priority />
        </div>
        <span className="text-black font-semibold tracking-tight text-[16px] sm:text-[20px]">Ractor Labs</span>
      </div>

      {/* Top-right social icons + label */}
      <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
        <span className="hidden sm:inline-block font-mono text-xs sm:text-sm text-black/70">Contact us at</span>
        <a
          href="https://discord.gg/mDGFXPAMTr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          title="Discord"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-black/10 hover:bg-black/5 transition"
        >
          <Image src={discordLogo} alt="Discord" width={20} height={20} className="object-contain" />
        </a>
        <a
          href="https://x.com/ractorlabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          title="X (Twitter)"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-black/10 hover:bg-black/5 transition"
        >
          <Image src={xLogo} alt="X (Twitter)" width={20} height={20} className="object-contain" />
        </a>
      </div>

      {/* Main heading */}
      <div className="z-10 w-[min(1200px,94vw)] px-4 sm:px-6">
        <p
          className="font-mono font-semibold text-center text-black text-[26px] sm:text-[36px] md:text-[48px] leading-[1.3] whitespace-normal"
          style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
          {headline}
          <motion.span
            aria-hidden
            className="inline-block h-[1em] w-[0.45ch] translate-y-[0.15em] align-baseline bg-black"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ repeat: Infinity, duration: 1.1 }}
          />
        </p>

        {/* Byline */}
        <p className="mt-8 text-center font-mono text-sm sm:text-base text-black/70">
          Built by engineers from
        </p>

        {/* Logo strip */}
        <LogoStrip />
      </div>

      {/* Footer */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto w-full border-t border-black/10" />
        <p className="py-3 text-center font-mono text-xs sm:text-sm text-black/70">© 2025 Ractor Labs</p>
      </div>
    </div>
  );
}







