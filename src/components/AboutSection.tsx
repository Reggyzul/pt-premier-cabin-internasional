import React, { useState } from 'react';
import { ShieldCheck, Layers, Clock, Users, Target, CheckCircle2, ChevronRight, Building, UserCheck, Truck, HardHat, Award, Leaf, FileCheck, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { PILARS, VISI_MISI, MANAGEMENT_TEAM, OPERATIONAL_RESOURCES, K3L_POLICIES, LEGALITAS_DATA, GALERI_ITEMS } from '../data/companyData';

interface AboutSectionProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Clock': return Clock;
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      default: return Target;
    }
  };

  const galleryCategories = ['Semua', ...Array.from(new Set(GALERI_ITEMS.map((item) => item.category)))];
  const filteredGallery = selectedCategory === 'Semua' 
    ? GALERI_ITEMS 
    : GALERI_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 1. TENTANG PERUSAHAAN */}
        <div id="tentang-perusahaan" className="scroll-mt-28 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ED1C24]/10 text-[#ED1C24] text-xs font-black uppercase tracking-wider mb-3">
                <Building className="w-4 h-4" />
                <span>TENTANG KAMI • PROFILE PT. Premier Cabin Internasional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] font-sans tracking-tight uppercase">
                Dedikasi dalam Solusi Infrastruktur Terpadu
              </h2>
            </div>
            <p className="text-slate-600 max-w-lg text-sm sm:text-base mt-4 md:mt-0 leading-relaxed font-medium">
              <strong className="text-[#0B1B3D]">PT. Premier Cabin Internasional</strong> adalah mitra terpercaya yang menyediakan solusi terintegrasi di bidang General Contractor, penyewaan alat berat, dan penyediaan tenaga kerja terampil di Kalimantan Timur.
            </p>
          </div>

          {/* 4 Pilar Keunggulan Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-xs font-black text-[#ED1C24] uppercase tracking-widest mb-1">Pilar Keunggulan</h3>
              <p className="text-2xl font-black text-[#0B1B3D] font-sans">
                4 Pilar Utama Nilai Keberhasilan Proyek Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILARS.map((pillar, idx) => {
                const IconComp = getPillarIcon(pillar.icon);
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] rounded-2xl p-6 border-2 border-slate-100 hover:border-[#ED1C24] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
                  >
                    <div>
                      {/* Pillar Icon & Top Bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors duration-300 shadow-md">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black text-[#ED1C24] bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                          PILAR 0{idx + 1}
                        </span>
                      </div>

                      {/* Pillar Title & Subtitle */}
                      <h4 className="text-base font-black text-[#0B1B3D] uppercase tracking-wide group-hover:text-[#ED1C24] transition-colors font-sans mb-1">
                        {pillar.title}
                      </h4>
                      <span className="text-xs font-bold text-[#ED1C24] block mb-3">
                        {pillar.subtitle}
                      </span>

                      {/* Pillar Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B1B3D]">
                      <span>Standar Mutu K3</span>
                      <CheckCircle2 className="w-4 h-4 text-[#ED1C24]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. VISI & MISI */}
        <div id="visi-misi" className="scroll-mt-28 bg-gradient-to-br from-[#0B1B3D] via-[#162A45] to-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED1C24]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Visi */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ED1C24] text-white text-xs font-black uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>VISI PERUSAHAAN</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-snug font-sans text-white">
                Visi PT. Premier Cabin Internasional
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal bg-white/5 p-5 rounded-2xl border border-white/10">
                "{VISI_MISI.visi}"
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenContact('Konsultasi Strategis')}
                  className="bg-[#ED1C24] hover:bg-[#C8102E] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Bermitra Bersama Kami</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Misi */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-400 text-xs font-black uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>MISI STRATEGIS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-sans text-white mb-4">
                Komitmen & Misi Operasional
              </h3>
              <div className="space-y-3">
                {VISI_MISI.misi.map((misiItem, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#ED1C24] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-100 leading-snug">
                      {misiItem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SUMBER DAYA OPERASIONAL */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border-2 border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1B3D] text-white text-xs font-black uppercase tracking-wider mb-2">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>SUMBER DAYA OPERASIONAL</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] font-sans uppercase">
                Armada Alat Berat & Klasifikasi Tenaga Kerja
              </h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-md mt-2 md:mt-0">
              Dukungan armada tangguh & SDM berpengalaman lisensi SIO untuk efisiensi pekerjaan proyek.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Daftar Alat Berat */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-black text-[#0B1B3D] uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
                <Truck className="w-5 h-5 text-[#ED1C24]" />
                <span>Daftar Armada Alat Berat (Heavy Equipment)</span>
              </h4>
              <div className="space-y-3">
                {OPERATIONAL_RESOURCES.heavyEquipment.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#0B1B3D]">{item.name}</span>
                      <span className="text-[10px] font-bold bg-[#0B1B3D] text-white px-2 py-0.5 rounded">Ready Unit</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Klasifikasi Manpower */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-black text-[#0B1B3D] uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
                <HardHat className="w-5 h-5 text-[#ED1C24]" />
                <span>Klasifikasi Tenaga Kerja (Manpower Supplier)</span>
              </h4>
              <div className="space-y-3">
                {OPERATIONAL_RESOURCES.manpower.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#0B1B3D]">{item.name}</span>
                      <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">Bersertifikat SIO</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. STRUKTUR ORGANISASI */}
        <div id="struktur-organisasi" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#ED1C24] text-xs font-black uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4" />
              <span>STRUKTUR ORGANISASI</span>
            </div>
            <h3 className="text-3xl font-black text-[#0B1B3D] font-sans uppercase">
              Jajaran Manajemen & Tim Profesional PT PREMIER CABIN INTERNASIONAL
            </h3>
            <p className="text-slate-600 text-sm font-medium mt-1">
              Kepemimpinan yang berintegritas dan berdedikasi tinggi untuk memberikan hasil kerja terbaik.
            </p>
          </div>

          {/* Org Chart Cards */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Top Level: Direktur & Wakil Direktur */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Direktur */}
              <div className="bg-gradient-to-br from-[#0B1B3D] to-[#162A45] text-white p-6 rounded-2xl border-2 border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ED1C24]/20 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ED1C24] text-white flex items-center justify-center font-black text-lg shadow-md">
                    P
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">{MANAGEMENT_TEAM.direktur.name}</h4>
                    <span className="text-xs font-bold text-amber-400">{MANAGEMENT_TEAM.direktur.role}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {MANAGEMENT_TEAM.direktur.desc}
                </p>
              </div>

              {/* Wakil Direktur */}
              <div className="bg-gradient-to-br from-[#0B1B3D] to-[#162A45] text-white p-6 rounded-2xl border-2 border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ED1C24]/20 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ED1C24] text-white flex items-center justify-center font-black text-lg shadow-md">
                    E
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">{MANAGEMENT_TEAM.wadir.name}</h4>
                    <span className="text-xs font-bold text-amber-400">{MANAGEMENT_TEAM.wadir.role}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {MANAGEMENT_TEAM.wadir.desc}
                </p>
              </div>
            </div>

            {/* Staff Level Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {MANAGEMENT_TEAM.staff.map((staffMember, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm hover:border-[#ED1C24] transition-all text-center">
                  <div className="w-10 h-10 rounded-full bg-[#0B1B3D] text-white font-black flex items-center justify-center mx-auto mb-3 shadow-md">
                    {staffMember.name.charAt(0)}
                  </div>
                  <h5 className="text-sm font-black text-[#0B1B3D]">{staffMember.name}</h5>
                  <p className="text-[11px] text-[#ED1C24] font-bold mt-1">{staffMember.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. LEGALITAS PERUSAHAAN */}
        <div id="legalitas" className="scroll-mt-28 bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border-2 border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#ED1C24] text-xs font-black uppercase tracking-wider mb-2">
              <FileCheck className="w-4 h-4" />
              <span>LEGALITAS PERUSAHAAN</span>
            </div>
            <h3 className="text-3xl font-black text-[#0B1B3D] font-sans uppercase">
              Dokumen Kepatuhan & Izin Usaha Resmi
            </h3>
            <p className="text-slate-600 text-sm font-medium mt-1">
              PT. Premier Cabin Internasional beroperasi secara legal sesuai peraturan perundang-undangan Republik Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {LEGALITAS_DATA.map((doc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ED1C24] flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-[#0B1B3D] mb-2">{doc.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{doc.detail}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Terverifikasi & Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. GALERI PERUSAHAAN */}
        <div id="galeri" className="scroll-mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#ED1C24] text-xs font-black uppercase tracking-wider mb-2">
              <ImageIcon className="w-4 h-4" />
              <span>GALERI PERUSAHAAN</span>
            </div>
            <h3 className="text-3xl font-black text-[#0B1B3D] font-sans uppercase">
              Dokumentasi Operasional & Proyek Lapangan
            </h3>
            <p className="text-slate-600 text-sm font-medium mt-1">
              Gambaran visual armada, fasilitas showroom, dan aktivitas pengerjaan proyek PT. Premier Cabin Internasional.
            </p>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ED1C24] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#ED1C24] px-2.5 py-1 rounded-md mb-2 inline-block shadow-sm">
                      {item.category}
                    </span>
                    <h4 className="text-base font-black leading-snug group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



