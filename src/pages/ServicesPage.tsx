import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';

interface ServicesPageProps {
  onOpenContactModal?: (serviceName?: string) => void;
}

export default function ServicesPage({ onOpenContactModal }: ServicesPageProps) {
  const serviceImages = [
    SITE_IMAGES.propertyDev,
    SITE_IMAGES.hospitalityMgmt,
    SITE_IMAGES.investmentHQ,
    SITE_IMAGES.travelLifestyle,
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F8F6F0] text-[#111817] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Layanan Perusahaan</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#1B3B2B] uppercase tracking-tight">
            Layanan Utama Kami
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Solusi integratif <strong>{COMPANY_DATA.name}</strong> di bidang Property, Hospitality, Investasi, dan Travel Lifestyle.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {COMPANY_DATA.services.map((svc, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={serviceImages[idx]}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1B3B2B] text-[#D4AF37] px-4 py-1.5 rounded-full font-serif font-bold text-sm shadow-lg">
                  Pilar 0{idx + 1}
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-[#1B3B2B]">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
