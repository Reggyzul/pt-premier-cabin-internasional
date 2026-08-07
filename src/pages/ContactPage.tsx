import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Mohon isi nama lengkap dan email!');
      return;
    }

    const waNumber = '6281234567890';
    const textTemplate = `Halo *${COMPANY_DATA.name}* 👋

Berikut pengajuan inquiry / diskusi proyek saya:

📋 *DETAIL DISKUSI:*
• Pesan / Diskusi Proyek: *${message || '-'}*

👤 *DATA DIRI:*
• Nama Lengkap: *${fullName}*
• Email: *${email}*

Mohon respon resmi. Terima kasih!`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(textTemplate)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#1B3B2B] text-white border-t border-[#D4AF37]/20 text-left pt-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Hubungi Kami</span>
          <h2 className="text-3xl font-serif font-bold mt-2 mb-6">Kantor Pusat</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p className="font-bold text-white text-base">{COMPANY_DATA.name}</p>
            <p>
              {COMPANY_DATA.address.building}<br />
              {COMPANY_DATA.address.street}, RT {COMPANY_DATA.address.rtRw}<br />
              Kel. {COMPANY_DATA.address.kelurahan}, Kec. {COMPANY_DATA.address.kecamatan}<br />
              {COMPANY_DATA.address.city}, {COMPANY_DATA.address.province} {COMPANY_DATA.address.postalCode}
            </p>
            <p className="pt-2"><strong className="text-[#D4AF37]">Fixline:</strong> {COMPANY_DATA.contact.fixline}</p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl">
          <h3 className="font-serif font-bold text-2xl text-[#1B3B2B] mb-4">Inquiry / Kerjasama</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1B3B2B]"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1B3B2B]"
              />
              <textarea
                placeholder="Pesan / Diskusi Proyek (Saung Sare/Investasi)"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1B3B2B]"
              />
              <button
                type="submit"
                className="w-full bg-[#1B3B2B] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-black transition-colors cursor-pointer"
              >
                Kirim Pesan
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <h4 className="font-serif font-bold text-xl text-[#1B3B2B]">Pesan Terkirim!</h4>
              <p className="text-xs text-gray-600">Inquiry Anda telah berhasil dikirimkan ke WhatsApp tim {COMPANY_DATA.name}.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
