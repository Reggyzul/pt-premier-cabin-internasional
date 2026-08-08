import React from 'react';
import HeroSection from '../components/HeroSection';
import StoryIntroSection from '../components/StoryIntroSection';
import FullWidthImageStorySection from '../components/FullWidthImageStorySection';
import CoreBusinessSection from '../components/CoreBusinessSection';
import CabinExperienceSection from '../components/CabinExperienceSection';
import InvestmentSection from '../components/InvestmentSection';
import SustainabilitySection from '../components/SustainabilitySection';
import DestinationsSection from '../components/DestinationsSection';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
import ValuesEditorialSection from '../components/ValuesEditorialSection';
import VisionMissionSection from '../components/VisionMissionSection';
import BrandStatementSection from '../components/BrandStatementSection';

interface HomePageProps {
  onNavigatePage: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenSaungSareModal: () => void;
  onOpenContactModal: (serviceName?: string) => void;
}

export default function HomePage({ onNavigatePage, onOpenSaungSareModal, onOpenContactModal }: HomePageProps) {
  return (
    <div className="relative text-left bg-[#0B241C] text-[#F5F1E8]">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        onNavigatePage={onNavigatePage}
        onOpenSaungSare={onOpenSaungSareModal}
      />

      {/* 2. STORYTELLING INTRO */}
      <StoryIntroSection onNavigatePage={onNavigatePage} />

      {/* 3. FULL-WIDTH CINEMATIC IMAGE STORY */}
      <FullWidthImageStorySection />

      {/* 4. CORE BUSINESS (3 DIMENSIONS) */}
      <CoreBusinessSection onOpenContactModal={onOpenContactModal} />

      {/* 5. CABIN EXPERIENCE */}
      <CabinExperienceSection />

      {/* 6. INVESTMENT STORY */}
      <InvestmentSection onOpenContactModal={onOpenContactModal} />

      {/* 7. NATURE & SUSTAINABILITY */}
      <SustainabilitySection />

      {/* 8. INDONESIAN DESTINATIONS */}
      <DestinationsSection onOpenContactModal={onOpenContactModal} />

      {/* 9. PROJECTS SHOWCASE (SAUNG SARE) */}
      <ProjectShowcaseSection onOpenSaungSareModal={onOpenSaungSareModal} />

      {/* 10. VALUES (EDITORIAL INTERACTIVE VERTICAL LIST) */}
      <ValuesEditorialSection />

      {/* 11. VISION & MISSION */}
      <VisionMissionSection />

      {/* 12. BRAND STATEMENT */}
      <BrandStatementSection />

    </div>
  );
}
