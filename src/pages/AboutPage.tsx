import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';

interface AboutPageProps {
  onOpenContactModal?: () => void;
}

export default function AboutPage({ onOpenContactModal }: AboutPageProps) {
  const companyNameWithoutPT = COMPANY_DATA.name.replace(/^PT\.\s*/i, '');

  return (
    <div className="pt-28 pb-20 bg-[#F8F6F0] text-[#111817] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Profil Perusahaan</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B3B2B] uppercase tracking-tight">
            {companyNameWithoutPT}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            {COMPANY_DATA.description}
          </p>
        </div>

        {/* HERO IMAGE SHOWCASE (USER UPLOADED PHOTO) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 aspect-[16/9] max-h-[500px]">
          <img
            src={SITE_IMAGES.aboutUsMaster}
            alt="Premier Cabin Property & Hospitality Masterpiece"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B]/90 via-transparent to-transparent flex items-end p-8 text-white">
            <div>
              <span className="text-[#D4AF37] font-serif italic text-xl block">Holding Company</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase">{COMPANY_DATA.industry}</h2>
            </div>
          </div>
        </div>

        {/* VISI & MISI */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#1B3B2B] space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#1B3B2B]">Visi Perusahaan</h3>
            <p className="text-gray-700 leading-relaxed italic text-base">
              "{COMPANY_DATA.visi}"
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#D4AF37] space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#1B3B2B]">Misi Perusahaan</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {COMPANY_DATA.misi.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#D4AF37] font-bold text-base">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Fondasi Bisnis</span>
            <h3 className="text-3xl font-serif font-bold text-[#1B3B2B] mt-1">Nilai Perusahaan (Core Values)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_DATA.values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-2 hover:border-[#D4AF37] transition-all">
                <span className="text-[#D4AF37] font-serif font-bold text-2xl block">0{idx + 1}</span>
                <h4 className="font-serif font-bold text-base text-[#1B3B2B]">{val.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
