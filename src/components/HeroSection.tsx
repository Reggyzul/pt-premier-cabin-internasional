import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, Building, Trees, ChevronDown } from 'lucide-react';

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
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-[#FDFBF7] via-[#F5EFE4] to-[#FDFBF7] text-[#0F172A] overflow-hidden border-b border-[#0F382C]/10"
    >
      {/* Background Soft Glow & Botanical Accent Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0F382C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-left-column">
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-widest uppercase shadow-xs"
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
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#B8860b] block font-semibold leading-tight">
                "Mulih Ka Alam"
              </span>
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F382C] tracking-tight uppercase leading-tight">
                Properti Eksklusif & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#B8860B] to-[#D4AF37]">
                  Hospitality Premium
                </span>
              </h1>
            </motion.div>

            {/* BRIEF INTRO */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-medium max-w-xl"
            >
              PT. Premier Cabin Internasional mempersembahkan penggabungan arsitektur kayu tropis yang harmonis dengan alam dan layanan pengelolaan resor bintang lima berkaliber dunia untuk pengalaman bernilai tinggi dan berkesinambungan.
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
                className="bg-gradient-to-r from-[#0F382C] via-[#14532D] to-[#0F382C] hover:from-[#14532D] hover:to-[#051A14] text-[#F4EFE6] border border-[#C5A059]/50 font-sans font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-xl shadow-[#0F382C]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105 shine-effect"
              >
                <Sparkles className="w-4.5 h-4.5 text-[#C5A059]" />
                <span>Lihat Pilot Project: Saung Sare</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <button
                onClick={handleScrollToServices}
                className="bg-white hover:bg-slate-50 text-[#0F382C] font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl border border-[#0F382C]/20 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-[#C5A059]"
              >
                <Compass className="w-4 h-4 text-[#B8860B]" />
                <span>Jelajahi Layanan</span>
              </button>
            </motion.div>

            {/* HIGHLIGHT STATS BADGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-6 grid grid-cols-3 gap-3 border-t border-[#0F382C]/10 max-w-lg"
            >
              <div className="p-3 rounded-xl bg-white/80 border border-[#0F382C]/10 text-left">
                <span className="font-display font-black text-xl text-[#0F382C] block">100%</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block">Eco Sustainable</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#0F382C]/10 text-left">
                <span className="font-display font-black text-xl text-[#B8860B] block">5-Star</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block">Hospitality Standard</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#0F382C]/10 text-left">
                <span className="font-display font-black text-xl text-[#0F382C] block">Global</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider block">Investment Network</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SHOWCASE IMAGE COLUMN */}
          <div className="lg:col-span-5 relative" id="hero-right-column">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/30 bg-[#051A14] aspect-[4/3] sm:aspect-[16/11] group"
            >
              <img
                src="/src/assets/saung_sare_hero.png"
                alt="Saung Sare Eco Luxury Resort Villa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#051A14] via-transparent to-transparent opacity-80" />

              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-[#051A14]/90 backdrop-blur-md text-[#F4EFE6] border border-[#C5A059]/40 px-3.5 py-1.5 rounded-full font-display font-bold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>PILOT PROJECT PERDANA</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-1">
                <span className="font-script text-2xl text-[#C5A059] block">Mahakarya Saung Sare</span>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
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
