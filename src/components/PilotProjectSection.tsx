import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Building, CheckCircle2, Trees, Waves, Coffee, Compass } from 'lucide-react';

interface PilotProjectSectionProps {
  onOpenSaungSareModal: () => void;
}

export default function PilotProjectSection({ onOpenSaungSareModal }: PilotProjectSectionProps) {
  const saungSareHighlights = [
    {
      icon: <Building className="w-5 h-5 text-[#C5A059]" />,
      title: 'Arsitektur Wooden Cabin Modern',
      desc: 'Perpaduan kayu jati solid khas Nusantara dengan fasad kaca panorama alam.'
    },
    {
      icon: <Waves className="w-5 h-5 text-[#C5A059]" />,
      title: 'Private Infinity Lagoon Pool',
      desc: 'Kolam renang pribadi berlatar pemandangan lembah pegunungan nan asri.'
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#C5A059]" />,
      title: 'Farm-to-Table Restaurant',
      desc: 'Restoran sehat bahan organik lokal disajikan chef profesional bintang lima.'
    },
    {
      icon: <Trees className="w-5 h-5 text-[#C5A059]" />,
      title: 'Outdoor Wellness & Forest Spa',
      desc: 'Fasilitas pemulihan jiwa & ragawi di tengah keindahan hutan pinus sejuk.'
    }
  ];

  return (
    <section id="pilot-project" className="py-20 sm:py-28 bg-[#051A14] text-white relative overflow-hidden border-b border-[#C5A059]/20">
      
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="pilot-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#F4EFE6] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>FEATURED PILOT PROJECT — MAHAKARYA PERDANA</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            Pilot Project: <span className="text-[#C5A059]">"Saung Sare"</span>
          </h2>

          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Proyek percontohan hunian resor kayu eksklusif garapan PT. Premier Cabin Internasional yang memadukan keasrian alam tropis dengan kemewahan fasilitas modern.
          </p>
        </div>

        {/* FEATURED SHOWCASE MAIN CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-[#C5A059]/30 shadow-2xl">
          
          {/* IMAGE TEASER GALLERY SHOWCASE */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 aspect-[16/10] group">
              <img
                src="/src/assets/saung_sare_hero.png"
                alt="Saung Sare Master Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051A14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="font-script text-3xl text-[#C5A059] block">Konsep Mulih Ka Alam</span>
                <span className="font-display font-extrabold text-lg text-white block uppercase">Saung Sare Sanctuary Villa</span>
              </div>
            </div>

            {/* TEASER MINI GALLERY GRID */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 aspect-video group">
                <img
                  src="/src/assets/saung_sare_interior.png"
                  alt="Interior Saung Sare"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-[#051A14]/80 text-[10px] text-[#C5A059] px-2 py-0.5 rounded font-bold uppercase">
                  Interior & Suite
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/30 aspect-video group">
                <img
                  src="/src/assets/premier_cabin_property.png"
                  alt="Masterplan Saung Sare"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-[#051A14]/80 text-[10px] text-[#C5A059] px-2 py-0.5 rounded font-bold uppercase">
                  Lanskap & Area
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT DETAILS & KEUNGGULAN */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-script text-3xl text-[#C5A059] block">Highlight & Konsep Unggulan</span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Saung Sare Eco-Luxury
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Dirancang khusus bagi mereka yang merindukan suasana kedamaian alam tanpa mengorbankan kenyamanan akomodasi berstandar internasional.
              </p>
            </div>

            {/* 4 HIGHLIGHT LIST */}
            <div className="space-y-3 pt-2">
              {saungSareHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059]/50 transition-colors">
                  <div className="p-2 rounded-xl bg-[#051A14] border border-[#C5A059]/30 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                    <p className="font-sans text-[11px] text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <button
                onClick={onOpenSaungSareModal}
                className="w-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#051A14] font-sans font-black text-xs uppercase tracking-wider py-4 px-6 rounded-2xl shadow-xl shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-2 cursor-pointer shine-effect"
              >
                <Compass className="w-4 h-4 text-[#051A14]" />
                <span>Pelajari Lebih Lanjut tentang Saung Sare</span>
                <ArrowRight className="w-4 h-4 text-[#051A14]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
