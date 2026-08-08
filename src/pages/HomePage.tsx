import React from 'react';
import HeroSection from '../components/HeroSection';
import StoryIntroSection from '../components/StoryIntroSection';
import FullWidthImageStorySection from '../components/FullWidthImageStorySection';
import CabinExperienceSection from '../components/CabinExperienceSection';
import SustainabilitySection from '../components/SustainabilitySection';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
import ValuesEditorialSection from '../components/ValuesEditorialSection';
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

      {/* 3. FULL-WIDTH CINEMATIC IMAGE STORY (LIVING WITH THE LAND) */}
      <FullWidthImageStorySection />

      {/* 4. CABIN EXPERIENCE */}
      <CabinExperienceSection />

      {/* 5. NATURE & SUSTAINABILITY */}
      <SustainabilitySection />

      {/* 6. PROJECTS SHOWCASE (PENGEMBANGAN KAMI - SAUNG SARE) */}
      <ProjectShowcaseSection onOpenSaungSareModal={onOpenSaungSareModal} />

      {/* 10. VALUES (EDITORIAL INTERACTIVE VERTICAL LIST) */}
      <ValuesEditorialSection />

      {/* 12. BRAND STATEMENT */}
      <BrandStatementSection />

    </div>
  );
}
