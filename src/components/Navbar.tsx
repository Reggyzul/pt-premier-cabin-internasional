import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HcLogo } from './HcLogo';

interface NavbarProps {
  onOpenContact: (inquiryType?: string) => void;
  onOpenEstimator?: () => void;
  currentPage: 'home' | 'profil' | 'bidang-usaha';
  onNavigate: (page: 'home' | 'profil' | 'bidang-usaha', subTabId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilDropdownOpen, setProfilDropdownOpen] = useState(false);
  const [bidangUsahaDropdownOpen, setBidangUsahaDropdownOpen] = useState(false);
  const [mobileProfilOpen, setMobileProfilOpen] = useState(false);
  const [mobileBidangUsahaOpen, setMobileBidangUsahaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profilSubItems = [
    { id: 'tentang-perusahaan', label: 'Tentang Perusahaan' },
    { id: 'visi-misi', label: 'Visi & Misi' },
    { id: 'layanan-kami', label: 'Layanan Kami' },
    { id: 'struktur-organisasi', label: 'Struktur Organisasi' },
    { id: 'legalitas', label: 'Legalitas' },
    { id: 'galeri', label: 'Galeri' },
  ];

  const bidangUsahaSubItems = [
    { id: 'dealer-gesits', label: 'Dealer Bontang Gesits' },
    { id: 'rental-mobil', label: 'Rental Mobil' },
    { id: 'pabrik-baterai', label: 'Pabrik Baterai' },
  ];

  const navItems = [
    { label: 'BERANDA', target: 'home' as const, href: '#hero' },
    { label: 'PROFIL', target: 'profil' as const, href: '#tentang-perusahaan', isDropdown: true },
    { label: 'BIDANG USAHA', target: 'bidang-usaha' as const, href: 'dealer-gesits', isDropdown: true, isBidangUsaha: true },
    { label: 'HUBUNGI KAMI', target: 'home' as const, href: '#kontak' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md py-3 border-b border-slate-100' : 'py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              {/* Official Red Circular HC Logo (Transparent Background) */}
              <HcLogo className="w-10 h-10 sm:w-11 sm:h-11 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#0066b2] font-montserrat uppercase leading-tight">
                  PT. Premier Cabin Internasional
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider text-slate-500 font-extrabold uppercase font-sans">
                  Dedikasi dalam Solusi Infrastruktur Terpadu
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navItems.map((item) => {
                const isActive = (currentPage === 'home' && item.label === 'BERANDA') ||
                                 (currentPage === 'profil' && item.label === 'PROFIL') ||
                                 (currentPage === 'bidang-usaha' && item.label === 'BIDANG USAHA');

                if (item.isDropdown) {
                  const isBidang = item.isBidangUsaha;
                  const isOpen = isBidang ? bidangUsahaDropdownOpen : profilDropdownOpen;
                  const setOpen = isBidang ? setBidangUsahaDropdownOpen : setProfilDropdownOpen;
                  const subItems = isBidang ? bidangUsahaSubItems : profilSubItems;
                  const title = isBidang ? 'Bidang Usaha Kami' : 'Profil Perusahaan';

                  return (
                    <div
                      key={item.label}
                      className="relative py-2"
                      onMouseEnter={() => setOpen(true)}
                      onMouseLeave={() => setOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate(item.target, item.href)}
                        className={`inline-flex items-center gap-1.5 text-xs xl:text-sm font-extrabold tracking-wider font-montserrat transition-colors cursor-pointer ${
                          isActive || isOpen ? 'text-[#0066b2]' : 'text-slate-700 hover:text-[#0066b2]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0066b2]' : 'text-slate-400'}`} />
                        {(isActive || isOpen) && (
                          <motion.div
                            layoutId="activeUnderline"
                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066b2] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      {/* Dropdown Menu Box */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 z-50 text-left"
                          >
                            <h4 className="text-sm font-black text-[#0066b2] font-montserrat tracking-tight pb-3 mb-3 border-b border-slate-100">
                              {title}
                            </h4>
                            <div className="flex flex-col space-y-1.5 font-sans">
                              {subItems.map((sub, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    onNavigate(isBidang ? 'bidang-usaha' : 'profil', sub.id);
                                    setOpen(false);
                                  }}
                                  className="group flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-bold text-slate-700 hover:text-[#0066b2] hover:bg-blue-50/70 transition-all text-left cursor-pointer"
                                >
                                  <span className="text-[#0066b2] text-[10px] group-hover:translate-x-0.5 transition-transform">▸</span>
                                  <span className="group-hover:translate-x-0.5 transition-transform">{sub.label}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={(e) => {
                      if (item.href === '#kontak') {
                        onOpenContact('Inquiry Umum');
                      } else if (item.target === 'profil') {
                        onNavigate('profil', item.href);
                      } else {
                        onNavigate('home', item.href);
                      }
                    }}
                    className={`relative py-1 text-xs xl:text-sm font-extrabold tracking-wider font-montserrat transition-colors cursor-pointer ${
                      isActive ? 'text-[#0066b2]' : 'text-slate-700 hover:text-[#0066b2]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066b2] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Far Right Header Buttons (Hamburger Menu Button) */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#0066b2] hover:border-[#0066b2] transition-all cursor-pointer"
                title="Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Slide-down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-4 pt-3 pb-6"
            >
              <div className="flex flex-col space-y-2 font-montserrat">
                {navItems.map((item) => {
                  if (item.isDropdown) {
                    const isBidang = item.isBidangUsaha;
                    const isOpen = isBidang ? mobileBidangUsahaOpen : mobileProfilOpen;
                    const setOpen = isBidang ? setMobileBidangUsahaOpen : setMobileProfilOpen;
                    const subItems = isBidang ? bidangUsahaSubItems : profilSubItems;

                    return (
                      <div key={item.label} className="flex flex-col">
                        <button
                          onClick={() => setOpen(!isOpen)}
                          className={`py-2 px-3 rounded-lg text-sm font-bold flex items-center justify-between ${
                            isOpen ? 'bg-blue-50 text-[#0066b2]' : 'text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isOpen && (
                          <div className="pl-4 py-1 space-y-1 bg-slate-50/70 rounded-lg mt-1 border border-slate-100">
                            {subItems.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  onNavigate(isBidang ? 'bidang-usaha' : 'profil', sub.id);
                                  setMobileMenuOpen(false);
                                }}
                                className="w-full py-2 px-3 text-xs font-bold text-slate-700 hover:text-[#0066b2] flex items-center gap-2 text-left cursor-pointer"
                              >
                                <span className="text-[#0066b2] text-[10px]">▸</span>
                                <span>{sub.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.href === '#kontak') {
                          onOpenContact('Inquiry Umum');
                        } else if (item.target === 'profil') {
                          onNavigate('profil', item.href);
                        } else {
                          onNavigate('home', item.href);
                        }
                      }}
                      className={`py-2 px-3 rounded-lg text-sm font-bold flex items-center justify-between cursor-pointer ${
                        (currentPage === 'home' && item.label === 'BERANDA') ||
                        (currentPage === 'profil' && item.label === 'PROFIL')
                          ? 'bg-blue-50 text-[#0066b2]'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact('Hubungi Langsung');
                    }}
                    className="bg-[#0066b2] hover:bg-[#004b87] text-white px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Hubungi Kami</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
