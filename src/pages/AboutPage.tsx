import React from 'react';
import { Target, CheckCircle2, Award, Trees, ShieldCheck, HeartHandshake, Lightbulb, Globe, Building2, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface AboutPageProps {
  onOpenContactModal: () => void;
}

export default function AboutPage({ onOpenContactModal }: AboutPageProps) {
  const valuesList = [
    {
      num: '01',
      title: COMPANY_DATA.values[0].name,
      subtitle: 'Standar Eksekusi Papan Atas',
      icon: <Award className="w-7 h-7 text-[#C5A059]" />,
      desc: COMPANY_DATA.values[0].desc
    },
    {
      num: '02',
      title: COMPANY_DATA.values[1].name,
      subtitle: 'Legalitas & Tata Kelola Transparan',
      icon: <ShieldCheck className="w-7 h-7 text-[#C5A059]" />,
      desc: COMPANY_DATA.values[1].desc
    },
    {
      num: '03',
      title: COMPANY_DATA.values[2].name,
      subtitle: 'Arsitektur Hijau & Solusi Masa Depan',
      icon: <Lightbulb className="w-7 h-7 text-[#C5A059]" />,
      desc: COMPANY_DATA.values[2].desc
    },
    {
      num: '04',
      title: COMPANY_DATA.values[3].name,
      subtitle: 'Standar & Jaringan Pasar Global',
      icon: <Globe className="w-7 h-7 text-[#C5A059]" />,
      desc: COMPANY_DATA.values[3].desc
    },
    {
      num: '05',
      title: COMPANY_DATA.values[4].name,
      subtitle: 'White-Glove Hospitality 24/7',
      icon: <HeartHandshake className="w-7 h-7 text-[#C5A059]" />,
      desc: COMPANY_DATA.values[4].desc
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FDFBF7] text-[#0F172A] text-left space-y-16">
      
      {/* PAGE HERO HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-widest uppercase shadow-xs">
            <Trees className="w-4 h-4 text-[#C5A059]" />
            <span>COMPANY PROFILE — TENTANG KAMI</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F382C] uppercase tracking-tight leading-tight">
            Tentang <span className="text-[#C5A059]">{COMPANY_DATA.name}</span>
          </h1>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Perusahaan holding yang bergerak di bidang {COMPANY_DATA.industry} dengan tagline "{COMPANY_DATA.tagline}".
          </p>
        </div>
      </div>

      {/* 1. PROFIL PERUSAHAAN COMPLETE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0F382C]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-script text-3xl sm:text-4xl text-[#B8860B] block">
              Tagline: "{COMPANY_DATA.tagline}"
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
              {COMPANY_DATA.name}
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              <strong className="text-[#0F382C]">{COMPANY_DATA.name}</strong> adalah perusahaan yang bergerak di bidang <strong className="text-[#B8860B]">{COMPANY_DATA.industry}</strong>.
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {COMPANY_DATA.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#0F382C]/10 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-display font-bold text-xs uppercase text-[#0F382C] block">Solusi Properti Eksklusif</strong>
                  <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Pengembangan proyek perumahan, komersial & investasi</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#0F382C]/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-display font-bold text-xs uppercase text-[#0F382C] block">Hospitality Premium</strong>
                  <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Hotel, resort, villa & akomodasi berstandar internasional</span>
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
                  Property & Hospitality Development
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
              <span>VISI PERUSAHAAN</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Perusahaan Holding <span className="text-[#C5A059]">Terdepan</span>
            </h3>

            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              "{COMPANY_DATA.visi}"
            </p>
          </div>

          {/* MISI */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0F382C]/10 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382C]/5 text-[#B8860B] text-xs font-bold uppercase border border-[#C5A059]/40">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>MISI STRATEGIS</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
              Empat Pilar <span className="text-[#C5A059]">Misi Perusahaan</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              {COMPANY_DATA.misi.map((m, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. CORE VALUES (5 PILAR UTAMA INFOGRAFIS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C5A059]/20 text-[#B8860B] text-xs font-bold uppercase border border-[#C5A059]/40">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>NILAI PERUSAHAAN / VALUES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F382C] uppercase tracking-tight">
            5 Nilai Perusahaan <span className="text-[#C5A059]">Utama</span>
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
