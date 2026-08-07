import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2, Award, Trees, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-[#0F172A] relative overflow-hidden border-b border-[#0F382C]/10">
      
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="about-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-wider uppercase shadow-xs">
            <Trees className="w-4 h-4 text-[#C5A059]" />
            <span>ABOUT US — TENTANG KAMI</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F382C] tracking-tight uppercase leading-tight">
            Pengenalan Perusahaan & <span className="text-[#C5A059]">Visi Misi</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Mengenal filosofi bisnis, komitmen keharmonisan alam, serta arah strategis PT. Premier Cabin Internasional.
          </p>
        </div>

        {/* 1. PENGENALAN PERUSAHAAN (PROPERTY & HOSPITALITY) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#FDFBF7] via-white to-[#F5EFE4] rounded-3xl p-7 sm:p-12 border border-[#0F382C]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left"
        >
          <div className="lg:col-span-7 space-y-5">
            <span className="font-script text-3xl sm:text-4xl text-[#B8860B] block">
              Properti Eksklusif & Hospitality Premium
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
              PT. Premier Cabin <span className="text-[#C5A059]">Internasional</span>
            </h3>

            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              <strong className="text-[#0F382C] font-bold">PT. Premier Cabin Internasional</strong> adalah perusahaan pengembang properti ramah lingkungan (*eco-luxury property development*) dan pengelola *hospitality premium* bintang lima di Indonesia. 
            </p>

            <p className="font-sans text-sm text-slate-600 leading-relaxed font-medium">
              Berlandaskan prinsip filosofi kebudayaan <strong className="text-[#B8860B]">"Mulih Ka Alam"</strong> (Kembali ke Alam), kami menciptakan kawasan hunian resor, villa kayu mewah, serta destinasi wisata gaya hidup bernilai investasi tinggi yang menyatu secara harmonis dengan lanskap alam tropis tanpa merusak ekosistem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-[#0F382C]/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-display font-bold text-xs uppercase text-[#0F382C] block">Arsitektur Hijau Eco-Resort</strong>
                  <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Konstruksi kayu jati & material ramah lingkungan</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#0F382C]/10 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-display font-bold text-xs uppercase text-[#0F382C] block">White-Glove Hospitality</strong>
                  <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Pelayanan concierge & manajemen villa 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#C5A059]/30 aspect-[4/3]">
              <img
                src="/src/assets/premier_cabin_property.png"
                alt="Premier Cabin Property Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051A14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059] text-white">
                  Masterplan Concept
                </span>
                <p className="font-display font-bold text-sm text-white mt-1">
                  Pengembangan Properti Resor Ramah Lingkungan
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. SEKILAS VISI & MISI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#051A14] text-white rounded-3xl p-8 border border-[#C5A059]/30 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#F4EFE6] text-xs font-bold uppercase border border-[#C5A059]/40">
              <Target className="w-4 h-4 text-[#C5A059]" />
              <span>VISI PERUSAHAAN</span>
            </div>

            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
              Menjadi Pelopor <span className="text-[#C5A059]">Eco-Hospitality Global</span>
            </h3>

            <p className="font-sans text-sm text-slate-200 leading-relaxed font-medium">
              "Menjadi perusahaan pengembang properti dan pengelola hospitality ramah lingkungan terpercaya berkaliber internasional yang menjadi garda terdepan dalam menginspirasi gaya hidup harmonis bersama alam (*Mulih Ka Alam*)."
            </p>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-[#0F382C]/10 shadow-xl space-y-4 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382C]/5 text-[#B8860B] text-xs font-bold uppercase border border-[#C5A059]/40">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>MISI STRATEGIS</span>
            </div>

            <h3 className="font-display font-black text-2xl text-[#0F382C] uppercase tracking-tight">
              Komitmen <span className="text-[#C5A059]">Mutu & Keberlanjutan</span>
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Pengembangan kawasan villa resor bernilai investasi tinggi dengan standar konstruksi terbaik.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Penerapan manajemen hospitality bintang lima berbasis kepuasan pelanggan dan efisiensi operasional.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Penjagaan ekosistem lingkungan alam tropis Indonesia serta kontribusi positif bagi komunitas lokal.</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
