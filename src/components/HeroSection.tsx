import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, Building, Trees, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface HeroSectionProps {
  onOpenSaungSare: () => void;
}

export default function HeroSection({ onOpenSaungSare }: HeroSectionProps) {
  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPilot = () => {
    const el = document.getElementById('pilot-project');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 text-white overflow-hidden bg-[#051A14] border-b border-[#C5A059]/30"
    >
      {/* 🌿 NATURAL LANDSCAPE BACKDROP (BACKDROP ALAM HIGH-RES) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/aurora_hero_master.png"
          alt="Backdrop Alam Tropis PT Premier Cabin Internasional"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12000ms] hover:scale-100"
        />
        {/* Multilayered Gradient Overlay for Text Readability & Eco Luxury Feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051A14] via-[#051A14]/85 to-[#051A14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051A14] via-transparent to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN OVER BACKDROP ALAM */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-left-column">
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/50 text-[#C5A059] font-sans font-extrabold text-xs tracking-widest uppercase shadow-xl"
            >
              <Trees className="w-4 h-4 text-[#C5A059]" />
              <span>PHILOSOPHY OF HARMONY & LUXURY</span>
            </motion.div>

            {/* SLOGAN & HEADLINE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#C5A059] block font-semibold leading-tight drop-shadow-md">
                "{COMPANY_DATA.tagline}"
              </span>
              <h1 className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight">
                Properti Eksklusif & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#F4EFE6]">
                  Hospitality Premium
                </span>
              </h1>
            </motion.div>

            {/* BRIEF INTRO OFFICIAL DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-xl text-shadow-sm"
            >
              {COMPANY_DATA.description}
            </motion.p>

            {/* QUICK CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <button
                onClick={handleScrollToPilot}
                className="bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#051A14] font-sans font-black text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105 shine-effect"
              >
                <Sparkles className="w-4.5 h-4.5 text-[#051A14]" />
                <span>Lihat Pilot Project: Saung Sare</span>
                <ArrowRight className="w-4 h-4 text-[#051A14]" />
              </button>

              <button
                onClick={handleScrollToServices}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl border border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>Jelajahi Layanan Utama</span>
              </button>
            </motion.div>

            {/* HIGHLIGHT STATS BADGES OVER BACKDROP ALAM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-6 grid grid-cols-3 gap-3 border-t border-white/15 max-w-lg"
            >
              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-left">
                <span className="font-serif font-bold text-xl text-[#C5A059] block">100%</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Eco Sustainable</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-left">
                <span className="font-serif font-bold text-xl text-white block">5-Star</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Hospitality Standard</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-left">
                <span className="font-serif font-bold text-xl text-[#C5A059] block">Global</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Investment Network</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SHOWCASE CARD OVER BACKDROP ALAM */}
          <div className="lg:col-span-5 relative" id="hero-right-column">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 bg-[#051A14] aspect-[4/3] sm:aspect-[16/11] group"
            >
              <img
                src="/src/assets/saung_sare_hero.png"
                alt="Saung Sare Eco Luxury Resort Villa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#051A14] via-transparent to-transparent opacity-80" />

              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-[#051A14]/90 backdrop-blur-md text-[#F4EFE6] border border-[#C5A059]/40 px-3.5 py-1.5 rounded-full font-sans font-bold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>PILOT PROJECT PERDANA</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-1">
                <span className="font-script text-2xl text-[#C5A059] block">Mahakarya Saung Sare</span>
                <h3 className="font-serif font-normal text-xl text-white uppercase tracking-tight">
                  Harmony of Nature & Luxury Resort
                </h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
