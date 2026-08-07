import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'saung-sare' | 'services' | 'contact';
  setCurrentPage?: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenContactModal?: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact', sectionId?: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#1B3B2B]/95 backdrop-blur-md text-white border-b border-[#D4AF37]/20 text-left">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={() => handleNavClick('home')} className="flex flex-col">
          <span className="font-serif font-bold text-xl tracking-wider text-[#D4AF37]">PREMIER CABIN</span>
          <span className="text-[9px] tracking-[0.2em] text-gray-300 uppercase">Internasional</span>
        </a>

        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#about" onClick={() => handleNavClick('about', 'about')} className="hover:text-[#D4AF37] transition-colors">
            Tentang Kami
          </a>
          <a href="#pilot-project" onClick={() => handleNavClick('saung-sare', 'pilot-project')} className="hover:text-[#D4AF37] transition-colors font-semibold text-[#D4AF37]">
            Saung Sare
          </a>
          <a href="#services" onClick={() => handleNavClick('services', 'services')} className="hover:text-[#D4AF37] transition-colors">
            Layanan
          </a>
          <a href="#values" onClick={() => handleNavClick('home', 'values')} className="hover:text-[#D4AF37] transition-colors">
            Nilai Utama
          </a>
          <a href="#contact" onClick={() => handleNavClick('contact', 'contact')} className="hover:text-[#D4AF37] transition-colors">
            Kontak
          </a>
        </div>

        <a
          href="#contact"
          onClick={() => handleNavClick('contact')}
          className="hidden md:inline-block bg-[#D4AF37] hover:bg-yellow-600 text-[#111817] px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
        >
          Kemitraan
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#D4AF37]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B3B2B] border-b border-[#D4AF37]/20 px-6 py-4 space-y-3">
          <a href="#about" onClick={() => handleNavClick('about', 'about')} className="block text-sm text-gray-200 hover:text-[#D4AF37]">
            Tentang Kami
          </a>
          <a href="#pilot-project" onClick={() => handleNavClick('saung-sare', 'pilot-project')} className="block text-sm text-[#D4AF37] font-semibold">
            Saung Sare
          </a>
          <a href="#services" onClick={() => handleNavClick('services', 'services')} className="block text-sm text-gray-200 hover:text-[#D4AF37]">
            Layanan
          </a>
          <a href="#values" onClick={() => handleNavClick('home', 'values')} className="block text-sm text-gray-200 hover:text-[#D4AF37]">
            Nilai Utama
          </a>
          <a href="#contact" onClick={() => handleNavClick('contact', 'contact')} className="block text-sm text-gray-200 hover:text-[#D4AF37]">
            Kontak
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="block text-center bg-[#D4AF37] text-[#111817] py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest"
            >
              Kemitraan
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
