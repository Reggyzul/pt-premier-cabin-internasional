import React from 'react';
import { SITE_IMAGES } from '../data/assetsData';

interface HeroSectionProps {
  onOpenSaungSare?: () => void;
  onOpenContactModal?: () => void;
}

export default function HeroSection({ onOpenSaungSare }: HeroSectionProps) {
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
    <section className="relative w-full h-[68vh] sm:h-[82vh] md:h-screen min-h-[440px] sm:min-h-[550px] flex items-center justify-center bg-[#1B3B2B] text-white overflow-hidden">
      {/* 🌊 PLATARAN STYLE FULL-BLEED LANDSCAPE BACKDROP BANNER */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_IMAGES.heroMaster}
          alt="Discover New Possibilities - Premier Cabin"
          className="w-full h-full object-cover object-[center_35%] sm:object-center scale-105 transition-transform duration-[12000ms] hover:scale-100"
        />
        {/* Plataran Multi-layer Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/85 z-10" />
      </div>

      {/* 🏛️ CENTER TYPOGRAPHY LAYOUT (PRECISE FOR ANDROID & IPHONE) */}
      <div className="relative z-20 text-center max-w-5xl px-4 sm:px-6 space-y-3 sm:space-y-4 pt-12 sm:pt-0">
        {/* MAIN SERIF DISPLAY HEADLINE */}
        <h1 className="font-serif font-normal text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight sm:leading-none drop-shadow-lg">
          Discover New Possibilities
        </h1>

        {/* SUB-HEADLINE SLOGAN */}
        <p className="font-sans font-medium text-[9px] sm:text-xs md:text-sm lg:text-base text-white uppercase tracking-[0.15em] sm:tracking-[0.3em] max-w-3xl mx-auto drop-shadow-md px-2">
          CABINS FOR LIFESTYLE, TRAVEL & INVESTMENT
        </p>

        {/* ACTION BUTTON & SUBTITLE */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center justify-center">
          {/* BUTTON KOTAK */}
          <a
            href="#pilot-project"
            onClick={handleScrollToPilot}
            className="border border-white/90 hover:border-white hover:bg-white hover:text-[#111817] text-white font-sans text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] uppercase px-6 sm:px-9 py-3 sm:py-3.5 transition-all duration-300 shadow-2xl cursor-pointer rounded-none"
          >
            Saung Sare Project Exploration
          </a>

          {/* SUBTITLE CONTAINER - SPACING PROFESIONAL DARI KOTAK */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center text-center">
            <span className="font-sans font-light text-[8px] sm:text-[9px] text-white/70 tracking-[0.25em] sm:tracking-[0.3em] uppercase drop-shadow-sm mb-0.5">
              DEVELOPMENT BY
            </span>
            <span className="font-sans font-bold text-[10px] sm:text-[12px] md:text-[13px] text-white tracking-[0.18em] sm:tracking-[0.22em] uppercase drop-shadow-lg">
              JBI WORLD HOLDING COMPANY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
