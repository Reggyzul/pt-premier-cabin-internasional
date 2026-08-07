import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Building2, Headset } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService || 'Pilot Project Saung Sare');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert('Mohon isi semua kolom bertanda *!');
      return;
    }

    const waNumber = '6281234567890';
    const textTemplate = `Halo *PT. PREMIER CABIN INTERNASIONAL* 👋

Berikut formulir pengajuan / konsultasi properti & hospitality saya:

📋 *DETAIL KONSULTASI:*
• Kategori Layanan: *${serviceCategory}*
• Catatan / Pesan: *${message || '-'}*

👤 *DATA DIRI:*
• Nama Lengkap: *${fullName}*
• Instansi / Perusahaan: *${company || '-'}*
• No. WhatsApp / HP: *${phone}*
• Email: *${email}*

Mohon tim advisor PT. Premier Cabin Internasional dapat memberikan konsultasi & penawaran resmi. Terima kasih!`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(textTemplate)}`, '_blank');
    setSubmitted(true);
  };

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

        {/* Modal Container */}
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

          {/* LEFT SIDEBAR: COMPANY CONTACT DETAILS */}
          <div className="lg:col-span-5 bg-[#051A14] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-r border-[#C5A059]/20 text-left">
            <div className="space-y-6 relative z-10">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F382C] to-[#051A14] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Building2 className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-base text-white uppercase leading-none">
                    PREMIER CABIN <span className="text-[#C5A059]">INTERNASIONAL</span>
                  </span>
                  <span className="font-script text-xs text-[#C5A059]">"Mulih Ka Alam"</span>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  Konsultasi Properti & Resor
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  Diskusi investasi properti, reservasi pilot project Saung Sare, dan layanan hospitality.
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-200 font-medium pt-2 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4.5 h-4.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Premier Cabin Building, Jl. Raya Utama No. 88, Indonesia</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                  <span>Fixline: +62 (021) 8899-7766</span>
                </div>

                <div className="flex items-center gap-3">
                  <Headset className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                  <span>WhatsApp 24/7: +62 812-3456-7890</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 text-[#C5A059] shrink-0" />
                  <span>info@premiercabin.co.id</span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 mt-6 text-[10px] text-slate-400 font-medium">
              © 2026 PT. Premier Cabin Internasional. All Rights Reserved.
            </div>
          </div>

          {/* RIGHT SIDEBAR: FORM */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white max-h-[85vh] overflow-y-auto text-left relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <h4 className="font-display font-black text-2xl text-[#0F382C] uppercase tracking-tight">
                    Formulir Konsultasi Properti
                  </h4>
                  <p className="font-sans text-xs text-slate-500 font-medium mt-1">
                    Silakan lengkapi formulir di bawah ini untuk terhubung langsung dengan Tim Advisor.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori Layanan / Proyek <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  >
                    <option value="Pilot Project Saung Sare">Pilot Project: Saung Sare</option>
                    <option value="Property Development">Property Development</option>
                    <option value="Hospitality Management">Hospitality Management</option>
                    <option value="Investment & Partnership">Investment & Partnership</option>
                    <option value="Travel & Lifestyle Services">Travel & Lifestyle Services</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Hendra Wijaya"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Instansi / Perusahaan
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nama Perusahaan / Pribadi"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nomor WhatsApp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="081234567890"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hendra@domain.com"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pesan / Pertanyaan Spesifik
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Pertanyaan mengenai lokasi, skema bagi hasil, atau kunjungan ke lokasi Saung Sare..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0F382C] hover:bg-[#14532D] text-[#F4EFE6] font-sans font-bold text-xs uppercase py-4 rounded-xl border border-[#C5A059]/40 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>Kirim Formulir via WhatsApp</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#0F382C]/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto border border-[#C5A059]/30">
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                </div>
                <h4 className="font-display font-black text-2xl text-[#0F382C]">
                  Formulir Konsultasi Terkirim!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih! Pesan Anda telah diteruskan ke WhatsApp Tim Advisor PT. Premier Cabin Internasional.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#0F382C] text-[#F4EFE6] font-bold text-xs uppercase px-6 py-3 rounded-xl border border-[#C5A059]/40 hover:bg-[#14532D]"
                >
                  Tutup Form
                </button>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
