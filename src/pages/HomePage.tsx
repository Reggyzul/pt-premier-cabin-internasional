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
    <div className="space-y-0 text-left">
      
      {/* 1. HERO SECTION (First Impression - Tagline Mulih Ka Alam) */}
      <HeroSection onOpenSaungSare={() => onNavigatePage('saung-sare')} />

      {/* 2. ABOUT US (Ringkasan Singkat Holding Company & Visi Misi) */}
      <AboutSection />

      {/* 3. FEATURED PILOT PROJECT (Showcase Utama: Saung Sare) */}
      <PilotProjectSection onOpenSaungSareModal={() => onNavigatePage('saung-sare')} />

      {/* 4. OUR CORE SERVICES (Overview 4 Pilar Utama) */}
      <CoreServicesSection onSelectService={(title) => onOpenContactModal(title)} />

      {/* 5. WHY CHOOSE US / VALUES (5 Pilar Utama Nilai Perusahaan) */}
      <ValuesSection />

    </div>
  );
}
