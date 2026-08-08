import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import {
  Wind,
  Bed,
  UtensilsCrossed,
  Heart,
  ShieldCheck,
  Sparkles,
  TreePine,
  CheckCircle2,
  Phone,
  Instagram,
  Globe,
  MapPin,
  ArrowRight,
  Flame,
  Waves,
  Trees
} from 'lucide-react';

interface SaungSarePageProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function SaungSarePage({ onOpenContactModal }: SaungSarePageProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'rooms' | 'resto' | 'pool' | 'activities'>('all');

  const pillars = [
    {
      icon: <Wind className="w-6 h-6 text-[#C9A227]" />,
      title: language === 'ID' ? 'Udara Segar' : 'Fresh Air',
      desc: language === 'ID' ? 'Alam asri yang menenangkan.' : 'Serene natural environment.',
    },
    {
      icon: <Bed className="w-6 h-6 text-[#C9A227]" />,
      title: language === 'ID' ? 'Istirahat Nyaman' : 'Comfortable Rest',
      desc: language === 'ID' ? 'Akomodasi nyaman untuk tidur berkualitas.' : 'Cozy accommodation for quality sleep.',
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-[#C9A227]" />,
      title: language === 'ID' ? 'Makanan Lezat' : 'Delicious Dining',
      desc: language === 'ID' ? 'Hidangan rumahan yang menyehatkan.' : 'Wholesome home-cooked cuisine.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C9A227]" />,
      title: language === 'ID' ? 'Waktu Berkualitas' : 'Quality Time',
      desc: language === 'ID' ? 'Bersama keluarga, tanpa terburu-buru.' : 'With family, without rushing.',
    },
  ];

  const assurances = [
    { label: language === 'ID' ? 'TENANG' : 'SERENE', desc: language === 'ID' ? 'Tanpa keramaian' : 'Far from crowd' },
    { label: language === 'ID' ? 'NYAMAN' : 'COMFORTABLE', desc: language === 'ID' ? 'Fasilitas lengkap' : 'Full amenities' },
    { label: language === 'ID' ? 'AMAN' : 'SECURE', desc: language === 'ID' ? 'Lingkungan terjaga' : 'Protected area' },
    { label: language === 'ID' ? 'BERSIH' : 'PRISTINE', desc: language === 'ID' ? 'Standar kebersihan tinggi' : 'High hygiene standards' },
  ];

  const facilityCards = [
    {
      category: 'rooms',
      icon: <Bed className="w-5 h-5 text-[#C9A227]" />,
      title: language === 'ID' ? 'Akomodasi Nyaman' : 'Comfortable Accommodation',
      desc: language === 'ID' ? 'Kamar dan saung dengan desain hangat dan tenang.' : 'Warm and peaceful wooden rooms & saungs.',
      image: SITE_IMAGES.saungSareInterior,
    },
    {
      category: 'resto',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#C9A227]" />,
      title: language === 'ID' ? 'Resto Saung Sare' : 'Saung Sare Restaurant',
      desc: language === 'ID' ? 'Menu lezat, sehat, dan menggugah selera.' : 'Delicious, healthy, and savory local cuisine.',
      image: SITE_IMAGES.hospitalityMgmt,
    },
    {
      category: 'pool',
      icon: <Waves className="w-5 h-5 text-[#C9A227]" />,
      title: language === 'ID' ? 'Kolam Renang Infinity' : 'Infinity Swimming Pool',
      desc: language === 'ID' ? 'Bersih, luas, dan dikelilingi pemandangan hijau.' : 'Clean, spacious, overlooking green valleys.',
      image: SITE_IMAGES.saungSareHero,
    },
    {
      category: 'activities',
      icon: <Trees className="w-5 h-5 text-[#C9A227]" />,
      title: language === 'ID' ? 'Area Santai & Taman' : 'Relaxation Lawn & Gazebo',
      desc: language === 'ID' ? 'Gazebo, taman, hammock, dan banyak spot istirahat.' : 'Gazebos, lawns, hammocks, and quiet nooks.',
      image: SITE_IMAGES.cabinExterior,
    },
    {
      category: 'activities',
      icon: <Flame className="w-5 h-5 text-[#C9A227]" />,
      title: language === 'ID' ? 'Aktivitas Relaksasi' : 'Relaxation Activities',
      desc: language === 'ID' ? 'Api unggun, yoga, bersepeda, membaca, dan lainnya.' : 'Bonfires, yoga, cycling, reading & stargazing.',
      image: SITE_IMAGES.cabinMorning,
    },
  ];

  return (
    <div className="bg-[#0B241C] text-[#F5F1E8] min-h-screen text-left">
      
      {/* 1. HERO SECTION (PERSIS BROCHURE GOLDEN HOUR INFINITY POOL) */}
      <section className="relative w-full h-[85vh] sm:h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.saungSareHero}
            alt="Saung Sare Rest Destination Cisarua Infinity Pool Sunset"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[15000ms] hover:scale-100 filter brightness-90"
          />
          {/* MULTI-LAYER EDITORIAL GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#0B241C] z-10" />
        </div>

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-20 text-center max-w-5xl px-6 space-y-6 pt-20 sm:pt-10">
          
          {/* BRAND MOTIF BADGE & TAGLINE */}
          <div className="inline-flex items-center gap-2 border border-[#C9A227]/60 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full">
            <TreePine className="w-4 h-4 text-[#C9A227]" />
            <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#F5F1E8]">
              SAUNG SARE
            </span>
            <span className="text-[#C9A227] font-serif italic text-sm border-l border-white/20 pl-2">
              Mulih Ka Alam
            </span>
          </div>

          {/* MAIN BRAND TITLE & TAGLINE */}
          <div className="space-y-2">
            <h1 className="font-serif font-bold text-5xl sm:text-7xl md:text-8xl text-[#F5F1E8] tracking-tight leading-[1.05] drop-shadow-2xl">
              Saung Sare
            </h1>
            <p className="font-serif italic text-2xl sm:text-4xl text-[#C9A227] font-light">
              "Mulih Ka Alam"
            </p>
          </div>

          {/* SLOGAN SUBTEXT */}
          <p className="font-sans font-light text-xs sm:text-base text-[#D8CDBB] max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-md px-4">
            Tempat untuk berhenti sejenak dari rutinitas. Tarik napas. Lepaskan penat. Nikmati waktu berkualitas bersama orang yang Anda sayangi.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onOpenContactModal && onOpenContactModal('Reservasi Saung Sare Rest Destination')}
              className="border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white font-sans text-xs uppercase tracking-[0.25em] px-8 py-3.5 transition-all shadow-xl cursor-pointer"
            >
              {language === 'ID' ? 'PESAN SEKARANG' : 'BOOK NOW'}
            </button>

            <a
              href="#welcome"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-sans text-xs uppercase tracking-[0.25em] px-8 py-3.5 transition-all cursor-pointer backdrop-blur-sm"
            >
              {language === 'ID' ? 'LIHAT FASILITAS' : 'EXPLORE AMENITIES'}
            </a>
          </div>

        </div>
      </section>

      {/* 2. WELCOME SECTION (FILOSOFI & 4 PILAR UTAMA) */}
      <section id="welcome" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: FILOSOFI & 4 IKON (7 COLS) */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                    SAUNG SARE
                  </span>
                  <span className="text-xs font-serif italic text-white/70">— Mulih Ka Alam</span>
                </div>
                <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#F5F1E8]">
                  Tempat Terbaik Untuk Mengisi Ulang Energi Anda.
                </h2>
                <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed pt-2">
                  Di sini, tidak ada agenda padat. Tidak ada terburu-buru. Hanya Anda, waktu, dan ketenangan di tengah bentang alam tropis yang segar.
                </p>
              </div>

              {/* 4 IKON PILLARS GRID */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                {pillars.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white/5 border border-white/10 space-y-2.5">
                    <div className="p-2.5 bg-[#0B241C] border border-[#C9A227]/30 w-fit">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-lg text-white">{item.title}</h4>
                    <p className="font-sans text-xs text-[#D8CDBB] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: HIGHLIGHT QUOTE CARD (5 COLS) */}
            <div className="lg:col-span-5 bg-white/5 border border-[#C9A227]/40 p-8 sm:p-10 relative overflow-hidden space-y-8">
              
              {/* CIRCULAR 'MAGER' BADGE */}
              <div className="w-32 h-32 rounded-full border border-[#C9A227] bg-[#071913] flex flex-col items-center justify-center text-center p-3 mx-auto shadow-2xl">
                <span className="font-serif italic text-lg text-[#C9A227] leading-tight">Mager</span>
                <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-white font-bold mt-1">
                  ITU BOLEH DI SAUNG SARE!
                </span>
              </div>

              <div className="text-center space-y-3">
                <Sparkles className="w-6 h-6 text-[#C9A227] mx-auto" />
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F5F1E8]">
                  "Bukan sekadar menginap, ini waktunya beristirahat."
                </blockquote>
              </div>

            </div>

          </div>

          {/* 4 ASSURANCE BADGES BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-10">
            {assurances.map((item, idx) => (
              <div key={idx} className="p-4 border border-white/10 bg-white/5 flex flex-col items-center text-center space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#C9A227] mb-1" />
                <span className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-white">{item.label}</span>
                <span className="font-sans font-light text-[10px] text-[#D8CDBB]">{item.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FACILITIES & ACCOMMODATION GRID PREVIEW */}
      <section className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                FASILITAS PENUNJANG & AKOMODASI
              </span>
            </div>

            <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#F5F1E8]">
              Suasana Nyaman & Fasilitas Lengkap
            </h2>
          </div>

          {/* GRID VISUAL CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onOpenContactModal && onOpenContactModal(`Tanya Fasilitas: ${card.title}`)}
                className="group cursor-pointer bg-white/5 border border-white/10 hover:border-[#C9A227] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-[#0B241C]/90 border border-[#C9A227]/40">
                    {card.icon}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl text-white group-hover:text-[#C9A227] transition-colors">{card.title}</h3>
                  <p className="font-sans font-light text-xs text-[#D8CDBB] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE PASSAGEWAY (TRANSISI RITME ALAM) */}
      <section className="relative w-full h-[60vh] sm:h-[75vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src={SITE_IMAGES.fullWidthStory}
          alt="Saung Sare Mountain Landscape"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10" />

        <div className="relative z-20 text-center max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#C9A227]">
              SAUNG SARE
            </span>
            <span className="text-xs font-serif italic text-white/80">— Mulih Ka Alam</span>
          </div>
          <h3 className="font-serif font-normal text-3xl sm:text-6xl text-[#F5F1E8] italic leading-tight">
            "Hanya Anda, waktu, dan ketenangan."
          </h3>
        </div>
      </section>

      {/* 5. SAUNG SARE PASSPORT (MEMBERSHIP SECTION) */}
      <section className="py-24 sm:py-36 bg-[#071913] text-[#F5F1E8] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: 3D METALLIC PASSPORT CARD VISUAL (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-md aspect-[1.58/1] bg-gradient-to-br from-[#0B241C] via-[#051A14] to-[#123C2E] rounded-2xl border-2 border-[#C9A227]/70 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:rotate-1 transition-transform duration-500">
                {/* METALLIC FOIL ACCENTS */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A227]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-6 h-6 text-[#C9A227]" />
                    <span className="font-serif font-bold text-lg text-white tracking-wide">SAUNG SARE</span>
                  </div>
                  <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-[#C9A227] uppercase">PASSPORT</span>
                </div>

                <div className="mt-12 space-y-1">
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-white/50 block">MEMBER ID</span>
                  <span className="font-mono text-sm tracking-widest text-[#C9A227]">SS-VIP-2026-8888</span>
                </div>

                <div className="mt-6 flex justify-between items-end">
                  <span className="font-serif italic text-xs text-white/80">Rest & Travel Companion</span>
                  <span className="text-[8px] font-sans uppercase tracking-widest text-[#C9A227]">PREMIER CABIN</span>
                </div>
              </div>
            </div>

            {/* RIGHT: PASSPORT BENEFITS LIST (7 COLS) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                  EXCLUSIVE MEMBERSHIP
                </span>
                <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#F5F1E8]">
                  Saung Sare Passport: Teman Perjalanan & Istirahat Anda
                </h2>
              </div>

              {/* BENEFITS LIST WITH GOLD CHECKMARKS */}
              <ul className="space-y-4 text-xs sm:text-sm font-sans font-light text-[#D8CDBB]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>Akses khusus harga terbaik di Saung Sare dan mitra pilihan kami.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>Prioritas reservasi di semua properti Saung Sare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>Travel Advisor pribadi untuk membantu rencana perjalanan Anda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>Promo eksklusif resto, aktivitas, dan fasilitas penunjang.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>Setiap perjalanan Anda mendukung pembangunan Saung Sare.</span>
                </li>
              </ul>

              {/* CTA BUTTON */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenContactModal && onOpenContactModal('Pendaftaran Saung Sare Passport')}
                  className="inline-flex items-center gap-3 border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white text-xs font-sans font-semibold uppercase tracking-[0.25em] px-8 py-4 transition-all shadow-xl cursor-pointer"
                >
                  <span>DAFTAR PASSPORT SEKARANG</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* CLOSING SLOGAN BOX */}
          <div className="p-8 sm:p-12 bg-[#0B241C] border border-[#C9A227]/40 text-center space-y-3">
            <h4 className="font-sans font-bold text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C9A227]">
              SAATNYA BERISTIRAHAT. KARENA ANDA PANTAS.
            </h4>
            <p className="font-serif italic text-2xl sm:text-4xl text-[#F5F1E8]">
              "Datang. Istirahat. Pulang lebih baik."
            </p>
          </div>

        </div>
      </section>

      {/* 6. COMMITMENT SECTION & FOOTER INFO */}
      <section className="py-20 bg-[#051A14] text-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12 text-center">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <TreePine className="w-8 h-8 text-[#C9A227] mx-auto" />
            <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wide">
              SETIAP KUNJUNGAN ANDA MENDUKUNG ALAM & MASYARAKAT LOKAL
            </h3>
            <p className="font-sans font-light text-xs sm:text-sm text-[#D8CDBB]">
              Saung Sare berkomitmen untuk menjaga alam dan memberdayakan warga sekitar.
            </p>
          </div>

          {/* LOCATION & CONTACT BAR */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans text-[#D8CDBB]">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              <span>Cisarua, Bogor - Jawa Barat</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-[#C9A227]" />
              <span>0812 3456 7890 (WhatsApp)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4 text-[#C9A227]" />
              <span>@saungsare</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-4 h-4 text-[#C9A227]" />
              <span>www.saungsare.id</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
