import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';

interface SaungSarePageProps {
  onOpenContactModal?: (serviceName?: string) => void;
}

export default function SaungSarePage({ onOpenContactModal }: SaungSarePageProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(SITE_IMAGES.saungSareHero);

  const galleryItems = [
    { title: 'Fasad Utama Eco-Resort', src: SITE_IMAGES.saungSareHero },
    { title: 'Interior Master Suite Villa', src: SITE_IMAGES.saungSareInterior },
    { title: 'Lanskap & Masterplan Area', src: SITE_IMAGES.propertyDev },
    { title: 'Private Infinity Pool Deck', src: SITE_IMAGES.hospitalityMgmt },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F8F6F0] text-[#111817] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Featured Pilot Project</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1B3B2B] uppercase tracking-tight">
            Saung Sare
          </h1>
          <p className="text-[#D4AF37] font-serif italic text-xl">
            Solusi Hunian & Restorasi Ketenangan Jiwa
          </p>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Proyek perdana persembahan <strong>{COMPANY_DATA.name}</strong> yang mengintegrasikan keasrian alam pegunungan dengan arsitektur kayu tropis dan standar layanan hospitality resor bintang lima.
          </p>
        </div>

        {/* GALLERY SHOWCASE */}
        <div className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 aspect-[16/9] max-h-[550px] bg-[#111817]">
            <img
              src={selectedGalleryImg}
              alt="Saung Sare Master View"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGalleryImg(item.src)}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                  selectedGalleryImg === item.src ? 'border-[#D4AF37] scale-105 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 text-white text-[10px] font-sans font-semibold">
                  <span className="truncate">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* PILOT PROJECT HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <span className="text-[#D4AF37] font-serif font-bold text-2xl">01</span>
            <h3 className="font-serif font-bold text-xl text-[#1B3B2B]">Desain Menyatu Alam</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Arsitektur cabin kayu berkelanjutan yang dirancang untuk menyatu harmonis dengan lingkungan pegunungan tropis.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <span className="text-[#D4AF37] font-serif font-bold text-2xl">02</span>
            <h3 className="font-serif font-bold text-xl text-[#1B3B2B]">Hospitality Eksklusif</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pengelolaan manajemen resor profesional bintang 5 yang menghadirkan layanan pribadi kelas atas bagi wisatawan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <span className="text-[#D4AF37] font-serif font-bold text-2xl">03</span>
            <h3 className="font-serif font-bold text-xl text-[#1B3B2B]">Peluang Investasi Aman</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Skema kepemilikan dan bagi hasil yang transparan serta berkelanjutan untuk nilai imbal hasil (ROI) yang optimal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
