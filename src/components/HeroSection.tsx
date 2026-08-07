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

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#1B3B2B] text-white pt-16">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/aurora_hero_master.png')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B] via-[#1B3B2B]/50 to-transparent z-0" />
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <span className="text-[#D4AF37] font-serif italic text-xl md:text-2xl mb-3 block">
          "{COMPANY_DATA.tagline}"
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          Harmoni Properti Eksklusif & Layanan Hospitality Premium
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8 font-light max-w-2xl mx-auto">
          {COMPANY_DATA.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pilot-project"
            onClick={handleScrollToPilot}
            className="bg-[#D4AF37] hover:bg-yellow-600 text-[#111817] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-xl cursor-pointer"
          >
            Eksplor Proyek: Saung Sare
          </a>
          <a
            href="#about"
            onClick={handleScrollToAbout}
            className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all cursor-pointer"
          >
            Tentang Perusahaan
          </a>
        </div>
      </div>
    </section>
  );
}
