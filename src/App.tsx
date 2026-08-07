import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SaungSarePage from './pages/SaungSarePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'saung-sare' | 'services' | 'contact'>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Pilot Project Saung Sare');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setContactModalOpen(true);
  };

  const handleNavigatePage = (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#0F172A] selection:bg-[#0F382C] selection:text-[#F4EFE6] font-sans">
      
      {/* NAVBAR WITH 5-PAGE ROUTING */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigatePage}
        onOpenContactModal={() => handleOpenContactWithService('General Consultation')}
      />

      {/* MAIN RENDERED PAGE FLOW */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <HomePage
            onNavigatePage={handleNavigatePage}
            onOpenSaungSareModal={() => handleNavigatePage('saung-sare')}
            onOpenContactModal={handleOpenContactWithService}
          />
        ) : currentPage === 'about' ? (
          <AboutPage onOpenContactModal={() => handleOpenContactWithService('General Consultation')} />
        ) : currentPage === 'saung-sare' ? (
          <SaungSarePage onOpenContactModal={(svc) => handleOpenContactWithService(svc)} />
        ) : currentPage === 'services' ? (
          <ServicesPage onOpenContactModal={(svc) => handleOpenContactWithService(svc)} />
        ) : (
          <ContactPage />
        )}
      </main>

      {/* FOOTER SECTION */}
      <FooterSection
        onNavigatePage={handleNavigatePage}
        onOpenContactModal={() => handleOpenContactWithService('Footer Inquiry')}
      />

      {/* CONTACT & INQUIRY POPUP MODAL */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedService}
      />

      {/* FLOATING ACTION BUTTON (SCROLL TO TOP ONLY) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-11 h-11 bg-[#1B3B2B] hover:bg-black text-[#D4AF37] border border-[#D4AF37]/40 rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-all"
              title="Kembali ke Atas"
              id="floater-scroll-top"
            >
              <ChevronUp className="w-5 h-5 text-[#D4AF37]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
