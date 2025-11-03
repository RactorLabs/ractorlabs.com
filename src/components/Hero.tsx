"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import ScreenLines from "./ScreenLines";

import ractorLogo from "@/images/ractorlablogo.png";
import logo1 from "@/images/logos/image 3.png";
import logo2 from "@/images/logos/image 4.png";
import logo3 from "@/images/logos/image 5.png";
import logo4 from "@/images/logos/image 6.png";
import logo5 from "@/images/logos/image 7.png";
import logo6 from "@/images/logos/image 8.png";
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
  const items: { src: StaticImageData; alt: string; scale?: number }[] = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" ,scale: 1.9},
    // Make this specific logo a bit larger so it reads better visually
    { src: logo5, alt: "Logo 5", scale: 1.25 },
    { src: logo6, alt: "Logo 6" ,scale: 1.8 },
  ];

  return (
    <div className="mx-auto w-[min(1100px,94vw)] py-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center justify-items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 sm:gap-y-6">
        {items.map((it, i) => (
          <div key={i} className="flex h-10 sm:h-12 md:h-14 w-full items-center justify-center" style={{ transform: `scale(${it.scale ?? 1})` }}>
            <Image src={it.src} alt={it.alt} className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const headline = useTypewriter("On a mission to make agents productive.", 20);
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white">
      <ScreenLines />
      {/* Top-left brand: logo + name */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-md ring-1 ring-white/10" aria-hidden>
          <Image src={ractorLogo} alt="Ractor Labs logo" fill sizes="44px" className="object-contain" priority />
        </div>
        <span className="text-white font-semibold tracking-tight text-[16px] sm:text-[20px]">Ractor Labs</span>
      </div>

      {/* Top-right social icons + label */}
      <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
        <span className="hidden sm:inline-block font-mono text-xs sm:text-sm text-white/70">Join us at</span>
        <a
          href="https://discord.gg/jTpP6PgZtt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          title="Discord"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-white/10 hover:bg-white/5 transition"
        >
          <Image src={discordLogo} alt="Discord" width={20} height={20} className="object-contain" />
        </a>
        <a
          href="https://github.com/RactorLabs/ractor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-white/10 hover:bg-white/5 transition"
        >
          {/* GitHub mark (SVG) to blend with current design */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white/80"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2C6.477 2 2 6.486 2 12.017c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.531 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.338-2.221-.253-4.555-1.114-4.555-4.956 0-1.094.39-1.99 1.03-2.69-.104-.253-.447-1.273.098-2.654 0 0 .84-.269 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.851.004 1.708.115 2.507.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.381.203 2.401.1 2.654.64.7 1.028 1.596 1.028 2.69 0 3.851-2.337 4.7-4.566 4.949.36.31.682.92.682 1.855 0 1.338-.012 2.416-.012 2.743 0 .268.18.579.688.48A10.02 10.02 0 0 0 22 12.017C22 6.486 17.523 2 12 2Z"/>
          </svg>
        </a>
        <a
          href="https://x.com/ractorlabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          title="X (Twitter)"
          className="grid h-10 w-10 place-items-center rounded-md ring-1 ring-white/10 hover:bg-white/5 transition"
        >
          <Image src={xLogo} alt="X (Twitter)" width={20} height={20} className="object-contain" />
        </a>
      </div>

      {/* Main heading */}
      <div className="z-10 w-[min(1200px,94vw)] px-4 sm:px-6">
        <div className="text-center">
          <GlitchText
            text={headline}
            className="font-mono font-semibold text-white text-[26px] sm:text-[36px] md:text-[48px]"
          />
        </div>

        {/* Byline */}
        <p className="mt-12 text-center font-mono text-sm sm:text-base text-white/70">
          By engineers from
        </p>

        {/* Logo strip */}
        <LogoStrip />
      </div>

      {/* Footer */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto w-full border-t border-white/10" />
        <p className="py-3 text-center font-mono text-xs sm:text-sm text-white/70">© 2025 Ractor Labs</p>
      </div>
    </div>
  );
}













