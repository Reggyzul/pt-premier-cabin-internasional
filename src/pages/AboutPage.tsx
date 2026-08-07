import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2, Award, Trees, ShieldCheck, HeartHandshake, Lightbulb, Globe, Building2, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onOpenContactModal: () => void;
}

export default function AboutPage({ onOpenContactModal }: AboutPageProps) {
  const valuesList = [
    {
      num: '01',
      title: 'Profesional',
      subtitle: 'Standar Eksekusi Papan Atas',
      icon: <Award className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Dikelola secara profesional oleh jajaran direksi, praktisi properti, dan eksekutif hospitality berdedikasi tinggi dengan rekam jejak teruji.'
    },
    {
      num: '02',
      title: 'Terpercaya',
      subtitle: 'Legalitas & Tata Kelola Transparan',
      icon: <ShieldCheck className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Menjamin kepastian hukum perizinan, sertifikasi hak properti, transparansi laporan dividen investasi, dan kepatuhan penuh pada tata kelola.'
    },
    {
      num: '03',
      title: 'Inovatif',
      subtitle: 'Arsitektur Hijau & Smart Cabin',
      icon: <Lightbulb className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Menerapkan inovasi arsitektur kayu tropis yang ramah lingkungan ("Mulih Ka Alam") dipadukan dengan efisiensi teknologi smart cabin terkini.'
    },
    {
      num: '04',
      title: 'Berorientasi Global',
      subtitle: 'Standar & Jaringan Internasional',
      icon: <Globe className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Memiliki standar estetika, kualitas layanan akomodasi, serta jangkauan jaringan pemasaran dan reservasi berkelas internasional.'
    },
    {
      num: '05',
      title: 'Pelayanan Prima',
      subtitle: 'White-Glove Hospitality 24/7',
      icon: <HeartHandshake className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Menghadirkan pelayanan concierge ramah, responsif, dan siap melayani setiap kebutuhan pemilik properti maupun tamu resor selama 24 jam.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FDFBF7] text-[#0F172A] text-left space-y-16">
      
      {/* PAGE HERO HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-widest uppercase shadow-xs">
            <Trees className="w-4 h-4 text-[#C5A059]" />
            <span>TENTANG KAMI — PROFIL PERUSAHAAN</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F382C] uppercase tracking-tight leading-tight">
            Tentang <span className="text-[#C5A059]">PT. Premier Cabin Internasional</span>
          </h1>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Holding company yang menaungi inovasi pengembangan properti ramah lingkungan (*eco-luxury property*) dan layanan pengelola resor bintang lima terkemuka di Indonesia.
          </p>
        </div>
      </div>

      {/* 1. PROFIL PERUSAHAAN COMPLETE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0F382C]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-script text-3xl sm:text-4xl text-[#B8860B] block">
              Harmoni Kehidupan Bersama Alam ("Mulih Ka Alam")
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
              Profil Perusahaan & <span className="text-[#C5A059]">Holding Corporate</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              <strong className="text-[#0F382C]">PT. Premier Cabin Internasional</strong> berdiri sebagai holding company berwawasan masa depan yang memadukan dua pilar bisnis strategis: <strong className="text-[#B8860B]">Property Development</strong> dan <strong className="text-[#B8860B]">Hospitality Management</strong>.
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Dengan memegang teguh semangat filosofis kebudayaan <strong className="text-[#B8860B]">"Mulih Ka Alam"</strong> (Kembali ke Alam), perusahaan berkomitmen menciptakan kawasan villa eksklusif, wooden cabin bernilai estetika tinggi, serta resor liburan keluarga yang memberikan ketenangan alami tanpa sedikit pun mengabaikan standar kenyamanan *white-glove hospitality* modern.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#0F382C]/10 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-display font-bold text-xs uppercase text-[#0F382C] block">Pengembangan Kawasan Properti</strong>
                  <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Konstruksi villa kayu jati solid & masterplan terpadu</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#0F382C]/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-display font-bold text-xs uppercase text-[#0F382C] block">Hospitality Standards 5-Star</strong>
                  <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Manajemen operasional resor & reservasi global</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/40 aspect-[4/3]">
              <img
                src="/src/assets/premier_cabin_property.png"
                alt="Premier Cabin Property Portfolio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051A14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059] text-white">
                  Holding Corporate
                </span>
                <p className="font-display font-bold text-sm text-white mt-1">
                  Integrasi Properti, Resor & Investasi Strategis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VISI & MISI ELEGANT SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* VISI */}
          <div className="bg-[#051A14] text-white rounded-3xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-xl space-y-4 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#F4EFE6] text-xs font-bold uppercase border border-[#C5A059]/40">
              <Target className="w-4 h-4 text-[#C5A059]" />
              <span>VISI STRATEGIS</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Menjadi Pelopor <span className="text-[#C5A059]">Eco-Hospitality Global</span>
            </h3>

            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              "Menjadi perusahaan pengembang properti dan pengelola hospitality ramah lingkungan terpercaya berkaliber internasional yang menjadi garda terdepan dalam menginspirasi gaya hidup harmonis bersama alam (*Mulih Ka Alam*)."
            </p>
          </div>

          {/* MISI */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0F382C]/10 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382C]/5 text-[#B8860B] text-xs font-bold uppercase border border-[#C5A059]/40">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>MISI PERUSAHAAN</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
              Komitmen <span className="text-[#C5A059]">Mutu & Keberlanjutan</span>
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Pengembangan kawasan villa resor bernilai investasi tinggi dengan standar konstruksi terbaik.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Penerapan manajemen hospitality bintang lima berbasis kepuasan pelanggan dan efisiensi operasional.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Penjagaan ekosistem lingkungan alam tropis Indonesia serta kontribusi positif bagi komunitas lokal.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. CORE VALUES (5 PILAR UTAMA INFOGRAFIS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C5A059]/20 text-[#B8860B] text-xs font-bold uppercase border border-[#C5A059]/40">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>CORE VALUES — 5 PILAR UTAMA</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F382C] uppercase tracking-tight">
            Nilai Perusahaan <span className="text-[#C5A059]">PT. Premier Cabin Internasional</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {valuesList.map((val) => (
            <div
              key={val.num}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:border-[#C5A059] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-2xl text-[#C5A059]">{val.num}</span>
                  <div className="p-2.5 rounded-2xl bg-[#0F382C]/5 border border-[#C5A059]/30">
                    {val.icon}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-black text-lg text-[#0F382C]">{val.title}</h3>
                  <p className="text-[10px] text-[#B8860B] font-bold uppercase mt-0.5">{val.subtitle}</p>
                </div>

                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
