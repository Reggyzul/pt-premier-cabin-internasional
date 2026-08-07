import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Building, CheckCircle2, Trees, Waves, Coffee, Compass, Phone, Shield, TrendingUp, HeartHandshake } from 'lucide-react';

interface SaungSarePageProps {
  onOpenContactModal: (serviceName?: string) => void;
}

export default function SaungSarePage({ onOpenContactModal }: SaungSarePageProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>('/src/assets/saung_sare_hero.png');

  const galleryImages = [
    { title: 'Fasad Utama Eco-Resort', src: '/src/assets/saung_sare_hero.png' },
    { title: 'Interior Master Suite Villa', src: '/src/assets/saung_sare_interior.png' },
    { title: 'Lanskap & Masterplan Area', src: '/src/assets/premier_cabin_property.png' },
    { title: 'Private Infinity Pool Deck', src: '/src/assets/hospitality_villa.png' },
  ];

  const saungSareHighlights = [
    {
      icon: <Building className="w-6 h-6 text-[#C5A059]" />,
      title: 'Arsitektur Wooden Cabin Modern',
      desc: 'Perpaduan kayu jati solid khas Nusantara dengan fasad kaca panorama alam bebas emisi karbon.'
    },
    {
      icon: <Waves className="w-6 h-6 text-[#C5A059]" />,
      title: 'Private Infinity Lagoon Pool',
      desc: 'Kolam renang pribadi berlatar pemandangan lembah pegunungan nan asri dan berhawa sejuk.'
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#C5A059]" />,
      title: 'Farm-to-Table Organic Restaurant',
      desc: 'Restoran kuliner sehat berbasis bahan organik lokal disajikan oleh chef profesional bintang lima.'
    },
    {
      icon: <Trees className="w-6 h-6 text-[#C5A059]" />,
      title: 'Outdoor Wellness & Forest Spa',
      desc: 'Fasilitas pemulihan jiwa & ragawi di tengah keindahan hutan pinus dan gemericik air alami.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FDFBF7] text-[#0F172A] text-left space-y-16">
      
      {/* 1. HERO BANNER SAUNG SARE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A14] text-white rounded-3xl p-8 sm:p-14 border border-[#C5A059]/40 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#F4EFE6] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>DEDICATED PILOT PROJECT SHOWCASE</span>
            </div>

            <span className="font-script text-4xl sm:text-5xl text-[#C5A059] block">
              Konsep "Mulih Ka Alam"
            </span>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
              Saung Sare <span className="text-[#C5A059]">Sanctuary Resort</span>
            </h1>

            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Pilot project mahakarya perdana PT. Premier Cabin Internasional yang memadukan kedamaian alam tropis Indonesia dengan kemewahan fasilitas akomodasi resor bintang lima.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenContactModal('Peluang Investasi Saung Sare')}
                className="bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#051A14] font-sans font-black text-xs uppercase tracking-wider py-4 px-7 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer shine-effect"
              >
                <TrendingUp className="w-4 h-4 text-[#051A14]" />
                <span>Peluang Investasi Saung Sare</span>
                <ArrowRight className="w-4 h-4 text-[#051A14]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 aspect-[4/3]">
              <img
                src="/src/assets/saung_sare_hero.png"
                alt="Saung Sare Sanctuary Resort Exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. KONSEP PROYEK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0F382C]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-script text-3xl text-[#B8860B] block">Filosofi & Konsep Desain</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
              Keharmonisan Alam & <span className="text-[#C5A059]">Hospitality Premium</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Nama <strong className="text-[#0F382C]">Saung Sare</strong> terinspirasi dari kearifan budaya Sunda (*Saung* = tempat bernaung/istirahat; *Sare* = tidur/kedamaian). Dipadukan dengan filosofi <strong className="text-[#B8860B]">"Mulih Ka Alam"</strong>, kawasan ini dirancang untuk menjadi suaka peristirahatan eksklusif (*wellness sanctuary*) tempat tubuh dan jiwa kembali menyatu dengan alam tropis.
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Setiap unit villa dibangun mengusung arsitektur kayu tropis berteknologi ramah lingkungan yang mengoptimalkan sirkulasi udara alami, pencahayaan matahari, serta vegetasi tanaman asli tanpa mengganggu bentang alam yang ada.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/10]">
              <img
                src="/src/assets/saung_sare_interior.png"
                alt="Saung Sare Interior Suite"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. FASILITAS & KEUNGGULAN (INTEGRASI ALAM & POTENSI INVESTASI) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-script text-3xl text-[#B8860B] block">Fasilitas Berkelas Bintang Lima</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F382C] uppercase tracking-tight">
            Fasilitas & Potensi <span className="text-[#C5A059]">Investasi Hospitality</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saungSareHighlights.map((fac, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-3">
              <div className="p-3 rounded-2xl bg-[#0F382C]/5 border border-[#C5A059]/30 w-fit">
                {fac.icon}
              </div>
              <h3 className="font-display font-bold text-base text-[#0F382C]">{fac.title}</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">{fac.desc}</p>
            </div>
          ))}
        </div>

        {/* POTENSI INVESTASI BANNER */}
        <div className="bg-gradient-to-r from-[#0F382C] via-[#14532D] to-[#051A14] text-white p-8 rounded-3xl border border-[#C5A059]/40 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#C5A059] shrink-0" />
            <div>
              <strong className="font-display font-bold text-sm text-white block uppercase">Skema Bagi Hasil Resor</strong>
              <span className="text-xs text-slate-300">Manajemen sewa villa profesional oleh holding</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-[#C5A059] shrink-0" />
            <div>
              <strong className="font-display font-bold text-sm text-white block uppercase">Kepemilikan Hak Terjamin</strong>
              <span className="text-xs text-slate-300">Sertifikasi perizinan legalitas transparan</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HeartHandshake className="w-8 h-8 text-[#C5A059] shrink-0" />
            <div>
              <strong className="font-display font-bold text-sm text-white block uppercase">High Capital Appreciation</strong>
              <span className="text-xs text-slate-300">Lokasi strategis nilai investasi terus naik</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. GALERI VISUAL & MASTERPLAN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-script text-3xl text-[#B8860B] block">Visual Masterplan & Rendering</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F382C] uppercase tracking-tight">
            Galeri Konsep <span className="text-[#C5A059]">Saung Sare</span>
          </h2>
        </div>

        {/* Selected Big Preview */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 aspect-[16/9] max-h-[450px]">
          <img src={selectedGalleryImg} alt="Saung Sare Active Showcase" className="w-full h-full object-cover" />
        </div>

        {/* Gallery Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedGalleryImg(img.src)}
              className={`rounded-2xl overflow-hidden border-2 cursor-pointer transition-all aspect-video ${
                selectedGalleryImg === img.src ? 'border-[#C5A059] scale-105 shadow-md' : 'border-slate-200 opacity-80 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* 5. CALL TO ACTION KHUSUS INVESTASI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051A14] text-white p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="font-script text-3xl text-[#C5A059] block">Opportunities for Investors</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Tertarik Berinvestasi atau Bermitra di Saung Sare?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300">
              Dapatkan proposal investasi resmi dan jadwalkan kunjungan privat ke lokasi proyek bersama tim PT. Premier Cabin Internasional.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal('Peluang Investasi Saung Sare')}
            className="bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#051A14] font-sans font-black text-xs uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer shine-effect"
          >
            <Phone className="w-4 h-4 text-[#051A14]" />
            <span>Hubungi Kami untuk Peluang Investasi</span>
          </button>
        </div>
      </div>

    </div>
  );
}
