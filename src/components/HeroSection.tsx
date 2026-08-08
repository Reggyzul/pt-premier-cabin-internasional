import React from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  onOpenSaungSare?: () => void;
  onOpenContactModal?: () => void;
  onNavigatePage?: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
}

export default function HeroSection({ onOpenSaungSare, onNavigatePage }: HeroSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[90vh] sm:h-screen min-h-[600px] flex items-center justify-center bg-[#0B241C] text-white overflow-hidden">
      
      {/* 🌲 FULL-BLEED CINEMATIC BACKDROP */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_IMAGES.heroMaster}
          alt="Premier Cabin International - Luxury Eco Resort Architecture"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[15000ms] hover:scale-100"
        />
        {/* Multi-layer Editorial Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0B241C] z-10" />
      </div>

      {/* 🏛️ EDITORIAL CENTER TYPOGRAPHY */}
      <div className="relative z-20 text-center max-w-5xl px-6 space-y-6 pt-16 sm:pt-0">
        
        {/* SMALL LABEL */}
        <span className="inline-block text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227] drop-shadow-md">
          {t.label}
        </span>

        {/* MAIN SERIF HEADLINE */}
        <h1 className="font-serif font-normal text-4xl sm:text-7xl md:text-8xl text-[#F5F1E8] tracking-tight leading-[1.05] drop-shadow-2xl max-w-4xl mx-auto">
          {t.titleLine1} <br className="hidden sm:block" />
          <span className="italic font-light text-white">{t.titleLine2}</span>
        </h1>

        {/* SUBTEXT */}
        <p className="font-sans font-light text-xs sm:text-base text-[#D8CDBB] max-w-2xl mx-auto leading-relaxed drop-shadow-md tracking-wide px-4">
          {t.subtitle}
        </p>

        {/* ACTION BUTTONS & SUBTITLE */}
        <div className="pt-6 flex flex-col items-center justify-center gap-6">
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* CTA PRIMARY */}
            <button
              onClick={() => onNavigatePage && onNavigatePage('about')}
              className="border border-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B241C] text-white font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 shadow-2xl cursor-pointer rounded-none"
            >
              {t.ctaPrimary}
            </button>

            {/* CTA SECONDARY */}
            <button
              onClick={() => onNavigatePage ? onNavigatePage('saung-sare') : handleScrollToSection('projects')}
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 cursor-pointer rounded-none backdrop-blur-sm"
            >
              {t.ctaSecondary}
            </button>
          </div>

          {/* SUBTITLE CONTAINER - JBI WORLD HOLDING COMPANY */}
          <div className="mt-4 sm:mt-5 flex flex-col items-center justify-center text-center">
            <span className="font-sans font-light text-[8px] sm:text-[9px] text-white/70 tracking-[0.3em] uppercase drop-shadow-sm mb-0.5">
              DEVELOPMENT BY
            </span>
            <span className="font-sans font-bold text-[10px] sm:text-[12px] text-[#F5F1E8] tracking-[0.2em] uppercase drop-shadow-lg">
              JBI WORLD HOLDING COMPANY
            </span>
          </div>

        </div>

      </div>

      {/* SUBTLE BOTTOM PARALLAX GRADIENT FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B241C] to-transparent z-20 pointer-events-none" />

    </section>
  );
}
