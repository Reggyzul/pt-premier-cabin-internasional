import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Building2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'saung-sare' | 'services' | 'contact';
  setCurrentPage: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenContactModal: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { name: string; page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact'; isHighlight?: boolean }[] = [
    { name: 'Beranda', page: 'home' },
    { name: 'Tentang Kami', page: 'about' },
    { name: 'Saung Sare', page: 'saung-sare', isHighlight: true },
    { name: 'Layanan Utama', page: 'services' },
    { name: 'Kontak Kami', page: 'contact' },
  ];

  const handleNavClick = (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* BRAND LOGO WITH TAGLINE "MULIH KA ALAM" */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F382C] to-[#051A14] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-md group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#0F382C] uppercase leading-none">
                PREMIER CABIN <span className="text-[#C5A059]">INTERNASIONAL</span>
              </span>
              <span className="font-script text-xs sm:text-sm text-[#B8860B] font-bold leading-tight mt-0.5">
                "Mulih Ka Alam" — Holding Company
              </span>
            </div>
          </div>

          {/* DESKTOP NAV ITEMS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`font-sans text-xs font-extrabold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0F382C] text-[#F4EFE6] shadow-sm'
                      : item.isHighlight
                      ? 'bg-[#C5A059]/15 text-[#B8860B] border border-[#C5A059]/40 hover:bg-[#C5A059]/30'
                      : 'text-[#0F382C] hover:text-[#B8860B] hover:bg-[#0F382C]/5'
                  }`}
                >
                  {item.isHighlight && <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />}
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* QUICK CTA BUTTON */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContactModal}
              className="bg-gradient-to-r from-[#0F382C] via-[#14532D] to-[#0F382C] hover:from-[#14532D] hover:to-[#051A14] text-[#F4EFE6] border border-[#C5A059]/50 font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md shadow-[#0F382C]/20 transition-all flex items-center gap-2 hover:scale-105 cursor-pointer shine-effect"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Hubungi Kami</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0F382C]/5 text-[#0F382C] hover:text-[#B8860B] border border-[#0F382C]/10 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDFBF7] border-b border-[#0F382C]/10 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 text-left">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left font-sans font-bold text-sm py-2.5 border-b border-[#0F382C]/5 uppercase tracking-wider cursor-pointer ${
                    currentPage === item.page ? 'text-[#B8860B] font-extrabold' : 'text-[#0F382C]'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full bg-[#0F382C] text-[#F4EFE6] font-sans font-bold text-xs uppercase py-3 rounded-xl shadow-md border border-[#C5A059]/40 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                  <span>Hubungi Kami / Inquiries</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
