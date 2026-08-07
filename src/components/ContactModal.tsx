import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, ShieldCheck, Building2, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledInquiry?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, prefilledInquiry }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState(prefilledInquiry || 'General Contractor');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const randomRef = 'PREMIER-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        >
          {/* Top Bar */}
          <div className="bg-[#0B1B3D] text-white p-6 sm:p-8 flex items-center justify-between border-b-4 border-[#E63946]">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E63946] text-xs font-black text-white uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FORMULIR PENAWARAN & INQUIRY PROYEK</span>
              </div>
              <h3 className="text-2xl font-black font-sans uppercase">
                Hubungi PT. Premier Cabin Internasional
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-0 max-h-[75vh] overflow-y-auto">
            
            {/* Left Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {prefilledInquiry && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs font-bold text-[#E63946]">
                      Topik: {prefilledInquiry}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda..."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-[#0B1B3D]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Telepon / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-[#0B1B3D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Perusahaan / Instansi
                      </label>
                      <input
                        type="text"
                        placeholder="Nama PT / Instansi"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-[#0B1B3D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Layanan / Bidang Usaha yang Diminati
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-[#0B1B3D]"
                    >
                      <option value="Dealer Bontang Gesits">Dealer Bontang Gesits (Motor Listrik)</option>
                      <option value="Rental Mobil">Rental Mobil & Fleet Operasional</option>
                      <option value="Pabrik Baterai">Pabrik & Perakitan Baterai EV</option>
                      <option value="General Contractor">General Contractor & Proyek Sipil</option>
                      <option value="Heavy Equipment Rental">Heavy Equipment Rental (Alat Berat)</option>
                      <option value="Manpower Supplier">Manpower Supplier & Operator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Rincian Kebutuhan / Pesan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tuliskan spesifikasi unit, durasi sewa, atau rincian proyek Anda..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:border-[#0B1B3D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ED1C24] hover:bg-[#C8102E] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Penawaran</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-[#0B1B3D] uppercase">
                    Pesan Berhasil Terkirim
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
                    Terima kasih, <span className="font-bold text-[#0B1B3D]">{fullName}</span>. Permintaan penawaran Anda untuk layanan <span className="font-bold text-[#0B1B3D]">{topic}</span> telah diterima oleh tim PT PREMIER CABIN INTERNASIONAL.
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs max-w-sm mx-auto space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Kode Tiket Inquiry:</span>
                      <span className="font-mono font-bold text-[#0B1B3D]">{refCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estimasi Respon:</span>
                      <span className="font-bold text-emerald-600">Maksimal 1-2 Jam Workday</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="bg-[#0B1B3D] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Tutup Modal
                  </button>
                </div>
              )}
            </div>

            {/* Right Office Directory Column */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 border-l border-slate-200/80 space-y-4">
              <h4 className="text-xs font-black text-[#0B1B3D] uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#E63946]" />
                <span>Kantor & Layanan Kontak</span>
              </h4>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E63946] text-white flex items-center justify-center font-bold text-xs">
                    HC
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0B1B3D]">PT. Premier Cabin Internasional</h5>
                    <p className="text-[10px] text-slate-500 font-medium">Kantor Operasional & Dealer</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100 font-medium">
                  <a
                    href="https://share.google/D6oTVFSWtZJ5trPlR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-[#0066b2] transition-colors group cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="font-bold underline decoration-slate-300">
                      Bontang, Kalimantan Timur (Google Maps)
                    </span>
                  </a>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#E63946] shrink-0" />
                    <a href="https://wa.me/6281254554817" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0B1B3D] hover:underline">
                      +62 812-5455-4817
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#E63946] shrink-0" />
                    <span>contact@premiercabin.co.id</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 font-medium space-y-2">
                <div className="font-black flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Respon Cepat via WhatsApp</span>
                </div>
                <p className="text-[11px]">
                  Konsultasi & Penawaran langsung via WhatsApp ke <strong className="font-bold">+62 812-5455-4817</strong>.
                </p>
                <a
                  href="https://wa.me/6281254554817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-extrabold text-xs transition-colors shadow-sm cursor-pointer mt-1"
                >
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

