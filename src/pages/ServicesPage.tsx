import React from 'react';
import { motion } from 'motion/react';
import { Building2, Hotel, TrendingUp, Compass, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface ServicesPageProps {
  onOpenContactModal: (serviceName?: string) => void;
}

export default function ServicesPage({ onOpenContactModal }: ServicesPageProps) {
  const detailedServices = [
    {
      id: 'property-development',
      icon: <Building2 className="w-10 h-10 text-[#C5A059]" />,
      title: 'Property Development',
      badge: 'Pilar 01',
      subtitle: 'Pengembangan Perumahan, Komersial & Properti Investasi',
      image: '/src/assets/premier_cabin_property.png',
      description: 'PT. Premier Cabin Internasional merancang dan membangun kawasan perumahan eksklusif, villa wooden cabin ramah lingkungan, properti komersial, serta kawasan resor bernilai estetika dan investasi tinggi.',
      subDetails: [
        'Masterplan & Architectural Concept Eco-Luxury',
        'Konstruksi Wooden Cabin & Hunian Ramah Lingkungan',
        'Pengembangan Kawasan Komersial & Properti Investasi',
        'Struktur Bangunan Bebas Karbon & Material Berkualitas'
      ]
    },
    {
      id: 'hospitality-management',
      icon: <Hotel className="w-10 h-10 text-[#C5A059]" />,
      title: 'Hospitality Management',
      badge: 'Pilar 02',
      subtitle: 'Pengelolaan Hotel, Resort, Villa & Akomodasi Premium',
      image: '/src/assets/hospitality_villa.png',
      description: 'Pengelolaan operasional resor bintang lima, boutique hotel, serta jaringan villa mewah secara profesional dengan standar white-glove hospitality, perawatan unit berkala, dan integrasi reservasi online global.',
      subDetails: [
        'Manajemen Operasional Resor & Villa Bintang Lima',
        'Layanan Concierge 24/7 & White-Glove Hospitality',
        'Strategi Yield Management & Pemasaran Reservasi Global',
        'Pemeliharaan Unit Properti & Standar Kebersihan Higienis'
      ]
    },
    {
      id: 'investment-partnership',
      icon: <TrendingUp className="w-10 h-10 text-[#C5A059]" />,
      badge: 'Pilar 03',
      subtitle: 'Skema Kemitraan Bisnis & Investasi Transparan',
      image: '/src/assets/investment_office.png',
      description: 'Peluang investasi properti produktif dengan skema kemitraan transparan, pengelolaan risiko profesional, serta jaminan laporan dividen berkala yang memberikan imbal hasil (ROI) berkelanjutan.',
      subDetails: [
        'Skema Bagi Hasil Resor & Villa Transparan',
        'Legalitas Kepemilikan & Sertifikasi Berpayung Hukum',
        'Konsultasi Portofolio & Diversifikasi Aset Properti',
        'Manajemen Risiko Invesment Berkelanjutan'
      ]
    },
    {
      id: 'travel-lifestyle',
      icon: <Compass className="w-10 h-10 text-[#C5A059]" />,
      badge: 'Pilar 04',
      subtitle: 'Paket Perjalanan Eksklusif & Pengalaman Gaya Hidup Modern',
      image: '/src/assets/saung_sare_hero.png',
      description: 'Penyediaan paket perjalanan privat berkelas VIP, kurasi pengalaman liburan kurasi khusus, pengondisian transportasi helikopter/limosin, serta pemenuhan gaya hidup elit di destinasi favorit Indonesia & mancanegara.',
      subDetails: [
        'VIP Concierge & Custom Luxury Itinerary Planner',
        'Layanan Transportasi & Transfer Privat Berkelas',
        'Eksplorasi Tur Kurasi Khusus & Destinasi Eksklusif',
        'Pengalaman Lifestyle & Private Event Conditioning'
      ]
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FDFBF7] text-[#0F172A] text-left space-y-16">
      
      {/* PAGE HERO HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-widest uppercase shadow-xs">
            <Building2 className="w-4 h-4 text-[#C5A059]" />
            <span>EXECUTIVE BUSINESS PILARS</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F382C] uppercase tracking-tight leading-tight">
            Layanan & Pilar Bisnis <span className="text-[#C5A059]">Perusahaan</span>
          </h1>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Penjabaran komprehensif 4 pilar bisnis strategis PT. Premier Cabin Internasional dalam mendukung pertumbuhan ekonomi berkelanjutan.
          </p>
        </div>
      </div>

      {/* 4 DETAILED SERVICES CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {detailedServices.map((svc, idx) => (
          <div
            key={svc.id}
            className={`bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#0F382C] text-[#F4EFE6] text-xs font-black px-3 py-1 rounded-full uppercase">
                  {svc.badge}
                </span>
                <span className="font-sans text-xs font-bold text-[#B8860B] uppercase tracking-wider">
                  {svc.subtitle}
                </span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
                {svc.title}
              </h2>

              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {svc.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-[#0F382C] uppercase block">Cakupan Layanan Spesifik:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {svc.subDetails.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenContactModal(svc.title)}
                  className="bg-[#0F382C] hover:bg-[#14532D] text-[#F4EFE6] font-sans font-bold text-xs uppercase py-3.5 px-6 rounded-xl border border-[#C5A059]/40 shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Konsultasi {svc.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C5A059]/30 aspect-[4/3]">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A14] text-white p-8 sm:p-10 rounded-3xl border border-[#C5A059]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-black text-2xl text-white uppercase">
              Butuh Penawaran atau Diskusi Layanan Khusus?
            </h3>
            <p className="font-sans text-xs text-slate-300">
              Tim spesialis PT. Premier Cabin Internasional siap membantu skema kerja sama terbaik.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal('Inquiry Layanan Utama')}
            className="bg-[#C5A059] hover:bg-[#D4AF37] text-[#051A14] font-sans font-bold text-xs uppercase px-7 py-3.5 rounded-xl shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Hubungi Tim Layanan
          </button>
        </div>
      </div>

    </div>
  );
}
