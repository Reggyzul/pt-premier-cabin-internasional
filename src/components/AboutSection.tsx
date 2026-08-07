import React from 'react';
import { COMPANY_DATA } from '../data/companyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto text-left">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Tentang Kami</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B3B2B] mt-2 mb-6">
            {COMPANY_DATA.name}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Kami adalah perusahaan holding terdepan di bidang <strong>{COMPANY_DATA.industry}</strong>. Berkomitmen menghadirkan solusi properti eksklusif dan layanan akomodasi kelas dunia yang berorientasi pada nilai investasi berkelanjutan serta kelestarian lingkungan.
          </p>
          <div className="border-l-2 border-[#D4AF37] pl-4 my-6">
            <h3 className="font-serif font-bold text-lg text-[#1B3B2B]">Visi Perusahaan</h3>
            <p className="text-gray-600 text-sm italic">
              "{COMPANY_DATA.visi}"
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/src/assets/premier_cabin_property.png"
            alt="Hospitality Luxury"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#1B3B2B] text-white p-6 rounded-xl hidden sm:block border border-[#D4AF37]/30">
            <p className="font-serif text-2xl font-bold text-[#D4AF37]">Global Standard</p>
            <p className="text-xs text-gray-300">Profesionalisme & Pelayanan Prima</p>
          </div>
        </div>
      </div>
    </section>
  );
}
