import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SaungSarePage from './pages/SaungSarePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { ChevronUp, MessageSquareCode } from 'lucide-react';
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

  const handleFastWhatsApp = () => {
    const waNumber = '6281234567890';
    const text = encodeURIComponent(
      'Halo PT. PREMIER CABIN INTERNASIONAL, saya berminat berkonsultasi mengenai Properti & Pilot Project Saung Sare. Terima kasih!'
    );
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank');
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

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Fast Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={handleFastWhatsApp}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all border-2 border-white"
          title="Chat WhatsApp Advisor PT. Premier Cabin Internasional"
          id="floater-wa"
        >
          <MessageSquareCode className="w-7 h-7" />
        </motion.button>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#0F382C] hover:bg-[#14532D] text-[#F4EFE6] border border-[#C5A059]/40 rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-all"
              title="Kembali ke Atas"
              id="floater-scroll-top"
            >
              <ChevronUp className="w-6 h-6 text-[#C5A059]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
