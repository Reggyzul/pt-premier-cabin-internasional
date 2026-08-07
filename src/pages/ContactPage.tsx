import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquareCode, Send, CheckCircle2, Headset } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Property Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert('Mohon isi semua kolom bertanda *!');
      return;
    }

    const waNumber = '6281234567890';
    const textTemplate = `Halo *${COMPANY_DATA.name}* 👋

Berikut formulir pengajuan / konsultasi saya:

📋 *DETAIL KONSULTASI:*
• Kategori Layanan: *${serviceCategory}*
• Pesan / Pertanyaan: *${message || '-'}*

👤 *DATA DIRI / INVESTOR:*
• Nama Lengkap: *${fullName}*
• Instansi / Perusahaan: *${company || '-'}*
• No. WhatsApp / HP: *${phone}*
• Email: *${email}*

Mohon tim advisor ${COMPANY_DATA.name} dapat memberikan konsultasi & penawaran resmi. Terima kasih!`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(textTemplate)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FDFBF7] text-[#0F172A] text-left space-y-16">
      
      {/* PAGE HERO HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-widest uppercase shadow-xs">
            <Headset className="w-4 h-4 text-[#C5A059]" />
            <span>KONTAK & MEDIA SOSIAL</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F382C] uppercase tracking-tight leading-tight">
            Kontak Resmi <span className="text-[#C5A059]">{COMPANY_DATA.shortName}</span>
          </h1>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Kantor pusat berlokasi di lokasi bisnis strategis Blok M Square Office, Kebayoran Baru, Jakarta Selatan.
          </p>
        </div>
      </div>

      {/* OFFICE DETAILS & CONTACT CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ALAMAT KANTOR PUSAT */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-3">
            <div className="p-3 rounded-2xl bg-[#0F382C]/5 border border-[#C5A059]/30 w-fit">
              <MapPin className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#0F382C] uppercase">Alamat Kantor Resmi</h3>
            <div className="font-sans text-xs text-slate-700 leading-relaxed font-medium space-y-1">
              <p className="font-bold text-[#0F382C]">{COMPANY_DATA.address.building}</p>
              <p>{COMPANY_DATA.address.street}</p>
              <p>RT | RW: {COMPANY_DATA.address.rtRw}</p>
              <p>Kelurahan: {COMPANY_DATA.address.kelurahan}</p>
              <p>Kecamatan: {COMPANY_DATA.address.kecamatan}</p>
              <p>Kota / Provinsi: {COMPANY_DATA.address.city}, {COMPANY_DATA.address.province}</p>
              <p>Kode Pos: {COMPANY_DATA.address.postalCode}</p>
            </div>
          </div>

          {/* TELEPON FIXLINE & WA */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-3">
            <div className="p-3 rounded-2xl bg-[#0F382C]/5 border border-[#C5A059]/30 w-fit">
              <Phone className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#0F382C] uppercase">Kontak Direct & WA</h3>
            <div className="font-sans text-xs text-slate-700 leading-relaxed font-medium space-y-2">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block">Fixline Kantor:</span>
                <strong className="text-[#0F382C] text-sm">{COMPANY_DATA.contact.fixline}</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block">WhatsApp Advisor 24/7:</span>
                <strong className="text-[#B8860B] text-sm">{COMPANY_DATA.contact.whatsapp}</strong>
              </div>
              <p className="text-[11px] text-[#B8860B] font-bold">Layanan Reservasi & Konsultasi Properti</p>
            </div>
          </div>

          {/* EMAIL & JAM OPERASIONAL */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-3">
            <div className="p-3 rounded-2xl bg-[#0F382C]/5 border border-[#C5A059]/30 w-fit">
              <Mail className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#0F382C] uppercase">Email & Jam Kerja</h3>
            <div className="font-sans text-xs text-slate-700 leading-relaxed font-medium space-y-2">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block">Email General:</span>
                <strong className="text-[#0F382C] text-sm">{COMPANY_DATA.contact.email}</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block">Email Partnership:</span>
                <strong className="text-[#0F382C] text-sm">{COMPANY_DATA.contact.emailPartnership}</strong>
              </div>
              <p className="text-[11px] text-slate-500">Senin - Jumat: 08.00 - 17.00 WIB</p>
            </div>
          </div>

        </div>
      </div>

      {/* FORMULIR INQUIRIES & GOOGLE MAPS INTEGRATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* FORMULIR KONTAK INTERAKTIF (LEFT) */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <div>
              <span className="font-script text-3xl text-[#B8860B] block">Formulir Pertanyaan & Inquiries</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F382C] uppercase tracking-tight">
                Hubungi Tim Advisor
              </h2>
              <p className="font-sans text-xs text-slate-500 font-medium mt-1">
                Kirimkan pesan untuk peluang kemitraan, investasi properti Saung Sare, atau layanan holding.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori Layanan / Topik Inquiries <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <option value="Property Development">Property Development (Perumahan, Apartemen, Komersial & Properti Investasi)</option>
                    <option value="Hospitality Management">Hospitality Management (Hotel, Resort, Villa & Akomodasi Premium)</option>
                    <option value="Investment & Partnership">Investment & Partnership (Peluang Investasi Properti & Kerjasama Bisnis)</option>
                    <option value="Travel & Lifestyle Services">Travel & Lifestyle Services (Paket Perjalanan & Pengalaman Lifestyle Eksklusif)</option>
                    <option value="Pilot Project Saung Sare">Pilot Project: Saung Sare</option>
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
                      No. WhatsApp / HP <span className="text-red-500">*</span>
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
                      Email <span className="text-red-500">*</span>
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
                    Pesan Spesifik
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Pertanyaan seputar lokasi kantor, jadwal meeting, atau proposal kemitraan..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F382C] hover:bg-[#14532D] text-[#F4EFE6] font-sans font-bold text-xs uppercase py-4 rounded-xl border border-[#C5A059]/40 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C5A059]" />
                  <span>Kirim Inquiries via WhatsApp</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#0F382C]/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto border border-[#C5A059]/30">
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                </div>
                <h4 className="font-display font-black text-2xl text-[#0F382C]">Pesan Terkirim!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Terima kasih! Inquiries Anda telah berhasil dikirimkan ke WhatsApp resmi {COMPANY_DATA.name}.
                </p>
              </div>
            )}
          </div>

          {/* GOOGLE MAPS INTEGRATION (RIGHT) */}
          <div className="lg:col-span-6 bg-slate-100 relative min-h-[400px] flex flex-col">
            <iframe
              title={`Google Maps Lokasi ${COMPANY_DATA.name} Blok M Square Office`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195029302636!2d106.79796037586884!3d-6.237998993750241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f168c4a45a33%3A0xb35a3962ec30026e!2sBlok%20M%20Square!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full min-h-[450px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>

    </div>
  );
}
