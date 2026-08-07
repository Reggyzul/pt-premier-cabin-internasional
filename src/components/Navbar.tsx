import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'saung-sare' | 'services' | 'contact';
  setCurrentPage?: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenContactModal?: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'INDONESIA' | 'ENGLISH'>('INDONESIA');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* 👑 PLATARAN STYLE 100% SERUPA TOP NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-5 flex items-center justify-between text-white transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1B3B2B]/95 backdrop-blur-md shadow-2xl py-4'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        {/* LEFT SIDE: ☰ MENU & LANGUAGE DROPDOWN */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* HAMBURGER MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-sans font-medium text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span className="text-base leading-none">☰</span>
            <span>MENU</span>
          </button>

          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-sans font-medium text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <ChevronDown className="w-3.5 h-3.5 text-white/80" />
              <span>{language}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[#1B3B2B] border border-white/20 rounded shadow-xl py-1 w-32 z-50 text-left">
                <button
                  onClick={() => {
                    setLanguage('INDONESIA');
                    setLangDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-xs uppercase tracking-wider text-gray-200 hover:text-[#D4AF37] hover:bg-black/20"
                >
                  INDONESIA
                </button>
                <button
                  onClick={() => {
                    setLanguage('ENGLISH');
                    setLangDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-xs uppercase tracking-wider text-gray-200 hover:text-[#D4AF37] hover:bg-black/20"
                >
                  ENGLISH
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CENTER: SIGNATURE CALLIGRAPHIC EMBLEM LOGO (PLATARAN STYLE) */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer text-center group flex flex-col items-center justify-center"
        >
          <span className="font-script text-3xl sm:text-4xl text-white font-normal leading-none tracking-wide group-hover:scale-105 transition-transform">
            Premier Cabin
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans mt-0.5 font-semibold">
            Internasional
          </span>
        </div>

        {/* RIGHT SIDE: CONTACT & RESERVATIONS OUTLINE BUTTON */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="#contact"
            onClick={() => handleNavClick('contact', 'contact')}
            className="hidden md:inline-block text-xs uppercase tracking-[0.15em] font-sans font-medium text-white hover:text-[#D4AF37] transition-colors"
          >
            CONTACT
          </a>

          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="border border-white/80 hover:border-white hover:bg-white hover:text-[#111817] text-white font-sans text-xs tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-300 cursor-pointer shadow-lg"
          >
            RESERVATIONS
          </a>
        </div>
      </header>

      {/* FULL SCREEN OVERLAY DRAWER MENU (PLATARAN STYLE) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B3B2B]/98 backdrop-blur-xl text-white flex flex-col justify-between p-8 sm:p-16 transition-all">
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <span className="font-script text-3xl text-[#D4AF37]">Premier Cabin</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white hover:text-[#D4AF37]">
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-center py-10">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className="font-serif text-3xl hover:text-[#D4AF37] transition-colors"
            >
              BERANDA
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('about', 'about')}
              className="font-serif text-3xl hover:text-[#D4AF37] transition-colors"
            >
              TENTANG KAMI
            </a>
            <a
              href="#pilot-project"
              onClick={() => handleNavClick('saung-sare', 'pilot-project')}
              className="font-serif text-3xl text-[#D4AF37] hover:text-white transition-colors"
            >
              SAUNG SARE RESORT
            </a>
            <a
              href="#services"
              onClick={() => handleNavClick('services', 'services')}
              className="font-serif text-3xl hover:text-[#D4AF37] transition-colors"
            >
              LAYANAN UTAMA
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('contact', 'contact')}
              className="font-serif text-3xl hover:text-[#D4AF37] transition-colors"
            >
              KONTAK & KEMITRAAN
            </a>
          </nav>

          <div className="text-center text-xs text-gray-400 border-t border-white/10 pt-6">
            <p>© 2026 PT. Premier Cabin Internasional. Tagline: <i>"Mulih Ka Alam"</i>.</p>
          </div>
        </div>
      )}
    </>
  );
}
