"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-[min(1200px,94vw)]">
        <nav className="mt-3 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <span className="text-xs text-white/70">Let your agent breathe</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a href="#get-started" className="rounded-full bg-white text-[#0b0f1a] px-4 py-2 text-xs font-medium hover:opacity-90 transition">
            Get started
          </a>
        </nav>
      </div>
    </div>
  );
}


