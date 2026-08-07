import React from 'react';
import { Phone, Mail, MapPin, Building2, ChevronRight, Headset, MessageSquareCode } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

interface FooterSectionProps {
  onNavigatePage: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenContactModal: () => void;
}

export default function FooterSection({ onNavigatePage, onOpenContactModal }: FooterSectionProps) {
  return (
    <footer id="contact" className="bg-[#051A14] text-white pt-20 pb-8 border-t border-[#C5A059]/30 relative overflow-hidden text-left">
      
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* UPPER CALLOUT CONTACT QUICK-ACCESS */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="font-script text-3xl text-[#C5A059] block">Layanan Konsultasi & Inquiries</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Tertarik Berdiskusi Properti atau Investasi Resor?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300">
              Tim advisor {COMPANY_DATA.name} siap melayani diskusi kemitraan dan informasi detail unit Saung Sare.
            </p>
          </div>

          <button
            onClick={onOpenContactModal}
            className="bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#051A14] font-sans font-black text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer shine-effect"
          >
            <Headset className="w-5 h-5 text-[#051A14]" />
            <span>Hubungi Tim Advisor</span>
          </button>
        </div>

        {/* CORE FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
          
          {/* COLUMN 1: BRAND LOGO & OFFICIAL ADDRESS */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F382C] to-[#051A14] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg text-white uppercase leading-none">
                  PREMIER CABIN <span className="text-[#C5A059]">INTERNASIONAL</span>
                </span>
                <span className="font-script text-xs text-[#C5A059] font-bold">
                  "{COMPANY_DATA.tagline}" — {COMPANY_DATA.industry}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-sm font-medium">
              {COMPANY_DATA.description}
            </p>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  <strong>Alamat Kantor Resmi:</strong><br />
                  {COMPANY_DATA.address.building}, {COMPANY_DATA.address.street}, RT/RW {COMPANY_DATA.address.rtRw}, Kel. {COMPANY_DATA.address.kelurahan}, Kec. {COMPANY_DATA.address.kecamatan}, {COMPANY_DATA.address.city}, {COMPANY_DATA.address.province} {COMPANY_DATA.address.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <span>
                  <strong>Fixline Kantor:</strong> {COMPANY_DATA.contact.fixline}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquareCode className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <span>
                  <strong>WhatsApp 24/7:</strong> {COMPANY_DATA.contact.whatsapp}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                <span>
                  <strong>Email Resmi:</strong> {COMPANY_DATA.contact.email} / {COMPANY_DATA.contact.emailPartnership}
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION LINKS */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-[#C5A059] uppercase tracking-widest border-l-2 border-[#C5A059] pl-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <button onClick={() => onNavigatePage('home')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> 1. Homepage (Utama)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('about')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> 2. About Us (Tentang Kami)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('saung-sare')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> 3. Saung Sare Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('services')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> 4. Services (Layanan Utama)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('contact')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> 5. Contact Us (Kontak Kami)
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CORE SERVICES LIST */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-[#C5A059] uppercase tracking-widest border-l-2 border-[#C5A059] pl-2">
              Layanan Utama
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-medium">
              {COMPANY_DATA.services.map((s) => (
                <div key={s.id} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-white block">{s.title}</strong>
                  <span className="text-[11px] text-slate-400">{s.description}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 {COMPANY_DATA.name}. All Rights Reserved.</span>
          <span className="font-script text-base text-[#C5A059]">"{COMPANY_DATA.tagline}" — {COMPANY_DATA.industry}</span>
        </div>

      </div>
    </footer>
  );
}
