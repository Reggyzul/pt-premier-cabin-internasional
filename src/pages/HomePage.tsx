import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PilotProjectSection from '../components/PilotProjectSection';
import CoreServicesSection from '../components/CoreServicesSection';
import ValuesSection from '../components/ValuesSection';

interface HomePageProps {
  onNavigatePage: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenSaungSareModal: () => void;
  onOpenContactModal: (serviceName?: string) => void;
}

export default function HomePage({ onNavigatePage, onOpenSaungSareModal, onOpenContactModal }: HomePageProps) {
  return (
    <div className="relative text-left">
      
      {/* 1. HERO SECTION (STICKY BACKDROP BANNER FOR SMOOTH COVER REVEAL) */}
      <div className="sticky top-0 z-0 w-full overflow-hidden">
        <HeroSection onOpenSaungSare={() => onNavigatePage('saung-sare')} />
      </div>

      {/* 2. OVERLAY SECTIONS CONTAINER (SLIDES OVER HERO GRADUALLY AS YOU SCROLL) */}
      <div className="relative z-10 bg-[#F8F6F0] rounded-t-[28px] sm:rounded-t-[44px] shadow-[0_-20px_50px_rgba(0,0,0,0.45)] border-t border-[#D4AF37]/30 transition-all duration-300">
        
        {/* 2. ABOUT US (Klik Selengkapnya membuka Halaman Khusus Tentang Kami) */}
        <AboutSection onOpenAboutPage={() => onNavigatePage('about')} />

        {/* 3. FEATURED PILOT PROJECT (Showcase Utama: Saung Sare) */}
        <PilotProjectSection onOpenSaungSareModal={() => onNavigatePage('saung-sare')} />

        {/* 4. OUR CORE SERVICES (Overview 4 Pilar Utama) */}
        <CoreServicesSection onSelectService={(title) => onOpenContactModal(title)} />

        {/* 5. WHY CHOOSE US / VALUES (5 Pilar Utama Nilai Perusahaan) */}
        <ValuesSection />

      </div>

    </div>
  );
}
