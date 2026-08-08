import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SaungSarePageProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function SaungSarePage({ onOpenContactModal }: SaungSarePageProps) {
  const { language } = useLanguage();
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(SITE_IMAGES.saungSareHero);

  const galleryImages = [
    { title: language === 'ID' ? 'Fasad Utama Eco-Resort' : 'Main Eco-Resort Façade', src: SITE_IMAGES.saungSareHero },
    { title: language === 'ID' ? 'Interior Master Suite Villa' : 'Master Suite Villa Interior', src: SITE_IMAGES.saungSareInterior },
    { title: language === 'ID' ? 'Lanskap Alam Tropis' : 'Tropical Natural Landscape', src: SITE_IMAGES.cabinMorning },
    { title: language === 'ID' ? 'Area Peristirahan Sanctuary' : 'Sanctuary Retreat Deck', src: SITE_IMAGES.cabinExterior },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0B241C] text-[#F5F1E8] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              FEATURED PILOT PROJECT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            Saung Sare Eco Luxury Resort
          </h1>

          <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed">
            {language === 'ID'
              ? 'Pilot project percontohan villa eco-resort berarsitektur kayu tropis di Subang, Jawa Barat. Menghadirkan harmoni sempurna antara kenyamanan villa master suite dan kelestarian alam.'
              : 'Pilot project showcase of eco-resort tropical timber villas in Subang, West Java. Delivering perfect harmony between master suite villa luxury and environmental preservation.'}
          </p>
        </div>

        {/* MAIN DISPLAY IMAGE */}
        <div className="relative aspect-[16/9] max-h-[550px] overflow-hidden rounded-none shadow-2xl border border-white/10">
          <img
            src={selectedGalleryImg}
            alt="Saung Sare Master Sanctuary"
            className="w-full h-full object-cover filter brightness-95 transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 bg-[#0B241C]/90 backdrop-blur-md px-6 py-3 border border-[#C9A227]/40">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227]">
              Pilot Project • Subang, West Java
            </span>
          </div>
        </div>

        {/* THUMBNAIL GALLERY */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedGalleryImg(img.src)}
              className={`cursor-pointer aspect-[4/3] overflow-hidden border transition-all duration-300 ${
                selectedGalleryImg === img.src ? 'border-[#C9A227] scale-102' : 'border-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* FEATURES & SPECS GRID */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-normal text-[#F5F1E8]">
              {language === 'ID' ? 'Keunggulan Proyek Saung Sare' : 'Saung Sare Key Features'}
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm font-sans font-light text-[#D8CDBB]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{language === 'ID' ? 'Konsep arsitektur kayu tropis "Mulih Ka Alam"' : '"Mulih Ka Alam" eco tropical timber architecture'}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{language === 'ID' ? 'Layanan white-glove hospitality 24/7' : 'White-glove 24/7 hospitality service'}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{language === 'ID' ? 'Skema investasi & bagi hasil transparan' : 'Transparent investment & yield sharing model'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C9A227] uppercase">
                INVESTMENT & RESERVATION
              </span>
              <h4 className="font-serif text-2xl text-white">
                {language === 'ID' ? 'Konsultasi Proyek Saung Sare' : 'Saung Sare Project Consultation'}
              </h4>
              <p className="text-xs font-sans text-[#D8CDBB] font-light leading-relaxed">
                {language === 'ID'
                  ? 'Hubungi tim advisor kami untuk reservasi unit villa atau diskusi skema bagi hasil investasi Saung Sare.'
                  : 'Contact our advisory team to reserve villa units or discuss Saung Sare investment yield models.'}
              </p>
            </div>

            <button
              onClick={() => onOpenContactModal && onOpenContactModal('Pilot Project Saung Sare')}
              className="inline-flex items-center justify-center gap-3 border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white text-xs font-sans font-semibold uppercase tracking-[0.2em] py-4 transition-all"
            >
              <span>{language === 'ID' ? 'KONSULTASI SEKARANG' : 'CONSULT NOW'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
