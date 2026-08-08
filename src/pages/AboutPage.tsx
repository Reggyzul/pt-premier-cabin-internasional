import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';
import CoreBusinessSection from '../components/CoreBusinessSection';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface AboutPageProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function AboutPage({ onOpenContactModal }: AboutPageProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const companyNameWithoutPT = COMPANY_DATA.name.replace(/^PT\.\s*/i, '');

  return (
    <div className="pt-32 pb-24 bg-[#0B241C] text-[#F5F1E8] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              {language === 'ID' ? 'PROFIL PERUSAHAAN' : 'COMPANY PROFILE'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            {companyNameWithoutPT}
          </h1>

          <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed">
            {COMPANY_DATA.description}
          </p>
        </div>

        {/* HERO IMAGE SHOWCASE */}
        <div className="relative overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] max-h-[550px]">
          <img
            src={SITE_IMAGES.storyMaster}
            alt="Premier Cabin Property & Hospitality Masterpiece"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C]/90 via-transparent to-transparent flex items-end p-8 sm:p-12 text-white">
            <div>
              <span className="text-[#C9A227] font-serif italic text-xl sm:text-2xl block">Holding Company</span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase">{COMPANY_DATA.industry}</h2>
            </div>
          </div>
        </div>

        {/* LAYANAN UTAMA PERUSAHAAN (3 DIMENSI TERPADU LENGKAP WITH PHOTOGRAPHY) */}
        <CoreBusinessSection onOpenContactModal={onOpenContactModal} />

        {/* VISI & MISI */}
        <div className="grid md:grid-cols-2 gap-12 items-start border-t border-white/10 pt-16">
          <div className="bg-white/5 p-8 border border-white/10 space-y-4">
            <h3 className="text-2xl font-serif font-normal text-[#F5F1E8]">{t.visionMission.visionLabel}</h3>
            <p className="text-[#D8CDBB] leading-relaxed italic text-base font-serif">
              "{t.visionMission.visionTitle}"
            </p>
          </div>

          <div className="bg-white/5 p-8 border border-white/10 space-y-4">
            <h3 className="text-2xl font-serif font-normal text-[#F5F1E8]">{t.visionMission.missionLabel}</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#D8CDBB] font-light">
              {[t.visionMission.m1, t.visionMission.m2, t.visionMission.m3, t.visionMission.m4].map((m, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#C9A227] font-serif font-bold text-base">0{idx + 1}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
