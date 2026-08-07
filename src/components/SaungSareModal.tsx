import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Building, CheckCircle2, Trees, Waves, Coffee, Send, MapPin, Phone } from 'lucide-react';

interface SaungSareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function SaungSareModal({ isOpen, onClose, onOpenContact }: SaungSareModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'facilities'>('overview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#051A14]/80 backdrop-blur-md"
        />

        {/* Modal Container Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-[#C5A059]/40"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT COLUMN: HERO IMAGE & BADGE */}
          <div className="lg:col-span-5 bg-[#051A14] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-r border-[#C5A059]/20 text-left">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#F4EFE6] text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>MAHAKARYA PILOT PROJECT</span>
              </div>

              <div>
                <span className="font-script text-3xl text-[#C5A059] block">Konsep Mulih Ka Alam</span>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  Saung Sare Sanctuary
                </h3>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 aspect-[4/3] shadow-lg">
                <img
                  src="/src/assets/saung_sare_hero.png"
                  alt="Saung Sare Sanctuary Villa"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-xs text-slate-300 leading-relaxed font-medium">
                Perpaduan harmoni kayu jati alami khas Nusantara dengan standar kemewahan resor kelas atas lima bintang.
              </p>

              <div className="space-y-2 text-xs text-slate-200 font-semibold pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Private Infinity Pool Overlooking Forest</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Farm-to-Table Organic Dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Holistic Forest Spa & Outdoor Yoga</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 text-[11px] text-[#C5A059] font-bold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Lokasi: Area Pegunungan Asri Indonesia</span>
            </div>
          </div>

          {/* RIGHT COLUMN: TABS & CONTENT */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white max-h-[85vh] overflow-y-auto text-left space-y-6">
            
            <div>
              <h4 className="font-display font-black text-2xl text-[#0F382C] uppercase tracking-tight">
                Pilot Project: Saung Sare
              </h4>
              <p className="font-sans text-xs text-slate-600 font-medium mt-1">
                Eksplorasi konsep hunian resor, keunggulan arsitektur, dan peluang investasi bersama PT. Premier Cabin Internasional.
              </p>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#0F382C] text-[#F4EFE6]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Konsep & Overview
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-[#0F382C] text-[#F4EFE6]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Galeri Visual
              </button>
              <button
                onClick={() => setActiveTab('facilities')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                  activeTab === 'facilities'
                    ? 'bg-[#0F382C] text-[#F4EFE6]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Fasilitas Resor
              </button>
            </div>

            {/* TAB CONTENT */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-xs text-slate-700 font-medium">
                <p className="leading-relaxed">
                  <strong className="text-[#0F382C]">Saung Sare</strong> dirancang sebagai simbol kebangkitan arsitektur eco-luxury yang berorientasi pada ketenangan dan pemulihan jiwa raga (*wellness sanctuary*).
                </p>
                <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#0F382C]/10 space-y-2">
                  <span className="font-display font-bold text-xs text-[#B8860B] uppercase block">Poin Keunggulan Utama:</span>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                    <li>Struktur bangunan kayu jati solid bebas emisi karbon.</li>
                    <li>Sistem pengolahan air & tata kelola energi terbarukan mandiri.</li>
                    <li>Manajemen reservasi resor bintang lima dengan ROI bagi hasil menarik bagi investor.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video">
                  <img src="/src/assets/saung_sare_hero.png" alt="Saung Sare Villa Exterior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video">
                  <img src="/src/assets/saung_sare_interior.png" alt="Saung Sare Suite Room" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video col-span-2">
                  <img src="/src/assets/premier_cabin_property.png" alt="Saung Sare Landscape Aerial View" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeTab === 'facilities' && (
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <Building className="w-4 h-4 text-[#C5A059]" />
                  <strong className="text-xs font-bold text-[#0F382C] block">Master Suite Villa</strong>
                  <span className="text-[11px] text-slate-600 block">Fasad kaca panorama pegunungan</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <Waves className="w-4 h-4 text-[#C5A059]" />
                  <strong className="text-xs font-bold text-[#0F382C] block">Infinity Lagoon Pool</strong>
                  <span className="text-[11px] text-slate-600 block">Kolam renang pribadi berhawa sejuk</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <Coffee className="w-4 h-4 text-[#C5A059]" />
                  <strong className="text-xs font-bold text-[#0F382C] block">Organic Restaurant</strong>
                  <span className="text-[11px] text-slate-600 block">Hidangan lezat bahan alami segar</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <Trees className="w-4 h-4 text-[#C5A059]" />
                  <strong className="text-xs font-bold text-[#0F382C] block">Forest Wellness Spa</strong>
                  <span className="text-[11px] text-slate-600 block">Relaksasi alami di tengah hutan</span>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full bg-[#0F382C] hover:bg-[#14532D] text-[#F4EFE6] font-sans font-bold text-xs uppercase py-3.5 rounded-xl border border-[#C5A059]/40 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Konsultasi Investasi Saung Sare</span>
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
