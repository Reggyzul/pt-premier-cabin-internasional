import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function ValuesEditorialSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].values;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const valuesData = [
    {
      num: '01',
      title: t.v01Title,
      desc: t.v01Desc,
      image: SITE_IMAGES.valuesDetail1,
    },
    {
      num: '02',
      title: t.v02Title,
      desc: t.v02Desc,
      image: SITE_IMAGES.valuesDetail2,
    },
    {
      num: '03',
      title: t.v03Title,
      desc: t.v03Desc,
      image: SITE_IMAGES.valuesDetail3,
    },
    {
      num: '04',
      title: t.v04Title,
      desc: t.v04Desc,
      image: SITE_IMAGES.valuesDetail4,
    },
    {
      num: '05',
      title: t.v05Title,
      desc: t.v05Desc,
      image: SITE_IMAGES.valuesDetail5,
    },
  ];

  return (
    <section id="values" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              {t.label}
            </span>
          </div>

          <h2 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-[#F5F1E8] leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* INTERACTIVE EDITORIAL VERTICAL LIST & PREVIEW SPLIT */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: VERTICAL LIST (7 COLS) */}
          <div className="lg:col-span-7 space-y-2">
            {valuesData.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`cursor-pointer p-6 sm:p-8 transition-all duration-500 border-b border-white/10 ${
                    isActive ? 'bg-white/5 border-l-4 border-l-[#C9A227]' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className={`font-serif text-2xl sm:text-3xl font-semibold transition-colors duration-300 ${
                        isActive ? 'text-[#C9A227]' : 'text-white/40'
                      }`}
                    >
                      {item.num}
                    </span>

                    <div className="space-y-2">
                      <h3
                        className={`font-serif text-xl sm:text-2xl tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-[#C9A227]' : 'text-[#F5F1E8]'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`font-sans font-light text-xs sm:text-sm text-[#D8CDBB] leading-relaxed transition-all duration-500 ${
                          isActive ? 'opacity-100 max-h-40 mt-2' : 'opacity-70 sm:opacity-50'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC IMAGE PREVIEW (5 COLS) */}
          <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden rounded-none shadow-2xl border border-white/10 hidden lg:block">
            {valuesData.map((item, idx) => (
              <img
                key={item.num}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 filter brightness-95 ${
                  activeIndex === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <span className="font-serif text-xl text-[#F5F1E8] italic">
                {valuesData[activeIndex].title} — Premier Cabin Standard
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
