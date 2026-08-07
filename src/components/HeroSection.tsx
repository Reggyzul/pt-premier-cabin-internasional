import React from 'react';
import { COMPANY_DATA } from '../data/companyData';

interface HeroSectionProps {
  onOpenSaungSare?: () => void;
  onOpenContactModal?: () => void;
}

export default function HeroSection({ onOpenSaungSare, onOpenContactModal }: HeroSectionProps) {
  const handleScrollToPilot = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenSaungSare) {
      onOpenSaungSare();
    } else {
      const el = document.getElementById('pilot-project');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#1B3B2B] text-white overflow-hidden">
      {/* 🌊 PLATARAN STYLE FULL-BLEED LANDSCAPE BACKDROP BANNER */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/aurora_hero_master.png"
          alt="Discover Indonesia - Premier Cabin"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12000ms] hover:scale-100"
        />
        {/* Plataran Multi-layer Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/80 z-10" />
      </div>

      {/* 🏛️ CENTER TYPOGRAPHY LAYOUT (100% SERUPA PLATARAN.COM) */}
      <div className="relative z-20 text-center max-w-5xl px-6 space-y-4">
        {/* MAIN SERIF DISPLAY HEADLINE */}
        <h1 className="font-serif font-normal text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none drop-shadow-lg">
          Discover Indonesia
        </h1>

        {/* SUB-HEADLINE SLOGAN (UPPERCASE SANS-SERIF WITH WIDE TRACKING) */}
        <p className="font-sans font-medium text-xs sm:text-sm lg:text-base text-white uppercase tracking-[0.3em] max-w-3xl mx-auto drop-shadow-md">
          INSPIRING IMPACT, CRAFTING EXCELLENCE
        </p>

        {/* ACTION BUTTONS */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pilot-project"
            onClick={handleScrollToPilot}
            className="border border-white/90 hover:border-white hover:bg-white hover:text-[#111817] text-white font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300 shadow-2xl cursor-pointer"
          >
            EKSPLOR PROYEK: SAUNG SARE
          </a>
        </div>
      </div>
    </section>
  );
}
