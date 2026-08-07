import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProfilPage } from './components/ProfilPage';
import { BidangUsahaPage } from './components/BidangUsahaPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'profil' | 'bidang-usaha'>('home');
  const [activeProfilTab, setActiveProfilTab] = useState<string | undefined>();
  const [activeBidangUsahaTab, setActiveBidangUsahaTab] = useState<string | undefined>();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [prefilledInquiry, setPrefilledInquiry] = useState<string | undefined>();

  const handleOpenContact = (inquiryType?: string) => {
    setPrefilledInquiry(inquiryType);
    setContactModalOpen(true);
  };

  const handleScrollToEstimator = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('estimator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('estimator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (page: 'home' | 'profil' | 'bidang-usaha', targetId?: string) => {
    setCurrentPage(page);
    if (page === 'profil') {
      if (targetId) setActiveProfilTab(targetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'bidang-usaha') {
      if (targetId) setActiveBidangUsahaTab(targetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'home') {
      if (targetId && targetId.startsWith('#')) {
        setTimeout(() => {
          const el = document.querySelector(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0066b2] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenEstimator={handleScrollToEstimator}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'home' ? (
        <main>
          {/* Hero Section */}
          <Hero
            onOpenContact={handleOpenContact}
            onOpenEstimator={handleScrollToEstimator}
            onNavigateToProfil={(subId) => handleNavigate('profil', subId)}
          />
          {/* Empat Pilar Keunggulan */}
          <PillarsSection />
        </main>
      ) : currentPage === 'bidang-usaha' ? (
        <main>
          <BidangUsahaPage
            onOpenContact={handleOpenContact}
            onNavigateHome={() => handleNavigate('home')}
            initialTab={activeBidangUsahaTab}
          />
        </main>
      ) : (
        <main>
          <ProfilPage
            onOpenContact={handleOpenContact}
            onNavigateHome={() => handleNavigate('home')}
            initialTab={activeProfilTab}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenEstimator={handleScrollToEstimator}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefilledInquiry={prefilledInquiry}
      />
    </div>
  );
}

