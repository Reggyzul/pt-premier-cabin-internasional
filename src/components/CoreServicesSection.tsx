import React from 'react';
import { motion } from 'motion/react';
import { Building2, Hotel, TrendingUp, Compass, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

interface CoreServicesSectionProps {
  onSelectService: (title: string) => void;
}

export default function CoreServicesSection({ onSelectService }: CoreServicesSectionProps) {
  const services = [
    {
      id: 'property-development',
      icon: <Building2 className="w-8 h-8 text-[#C5A059]" />,
      title: 'Property Development',
      badge: 'Layanan Pengembang',
      badgeBg: 'bg-[#0F382C]/10 text-[#0F382C] border-[#0F382C]/20',
      subtitle: 'Perancangan & Konstruksi Properti Eksklusif',
      description: 'Pengembangan proyek kawasan villa, wooden cabin, dan fasilitas hospitality ramah lingkungan berarsitektur mewah bernilai investasi tinggi.',
      features: [
        'Masterplan & Architectural Concept',
        'Konstruksi Wooden Cabin Eco-Luxury',
        'Infrastruktur Kawasan & Landscaping'
      ]
    },
    {
      id: 'hospitality-management',
      icon: <Hotel className="w-8 h-8 text-[#C5A059]" />,
      badge: 'Manajemen Operasional',
      badgeBg: 'bg-[#C5A059]/10 text-[#B8860B] border-[#C5A059]/30',
      title: 'Hospitality Management',
      subtitle: 'Pengelolaan Resor Bintang Lima & Villa',
      description: 'Manajemen operasional akomodasi resor kelas atas dengan standar pelayanan white-glove hospitality, perawatan unit, dan integrasi reservasi online.',
      features: [
        'Manajemen Operasional Resor & Villa 24/7',
        'Strategi Yield Management & Pemasaran Global',
        'Standar Kebersihan, Keamanan & Layanan Tamu'
      ]
    },
    {
      id: 'investment-partnership',
      icon: <TrendingUp className="w-8 h-8 text-[#C5A059]" />,
      badge: 'Kemitraan Strategis',
      badgeBg: 'bg-[#0F382C]/10 text-[#0F382C] border-[#0F382C]/20',
      title: 'Investment & Partnership',
      subtitle: 'Peluang Investasi Properti Berkelanjutan',
      description: 'Skema kerja sama investasi properti produktif dengan imbal hasil (ROI) menarik, transparansi laporan dividen berkala, dan manajemen risiko terukur.',
      features: [
        'Skema Bagi Hasil Resor Transparan',
        'Legalitas Kepemilikan & Sertifikasi Resmi',
        'Konsultasi Portofolio Investasi Properti'
      ]
    },
    {
      id: 'travel-lifestyle',
      icon: <Compass className="w-8 h-8 text-[#C5A059]" />,
      badge: 'Pengalaman Eksklusif',
      badgeBg: 'bg-[#C5A059]/10 text-[#B8860B] border-[#C5A059]/30',
      title: 'Travel & Lifestyle Services',
      subtitle: 'Layanan Concierge & Perjalanan Privat VIP',
      description: 'Perancangan pengalaman liburan mewah, tur privat berpanduan khusus, layanan jet/helikopter charter, serta penyediaan kebutuhan gaya hidup elit.',
      features: [
        'VIP Concierge & Custom Itinerary Planner',
        'Layanan Transportasi & Transfer Privat',
        'Eksplorasi Wisata Kurasi Berkelas'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FDFBF7] text-[#0F172A] relative overflow-hidden border-b border-[#0F382C]/10">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="services-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F382C]/5 border border-[#C5A059]/40 text-[#B8860B] font-display font-extrabold text-xs tracking-wider uppercase shadow-xs">
            <Shield className="w-4 h-4 text-[#C5A059]" />
            <span>OUR CORE SERVICES — PILAR UTAMA BISNIS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F382C] tracking-tight uppercase leading-tight">
            Layanan Utama <span className="text-[#C5A059]">Perusahaan</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Empat pilar layanan komprehensif PT. Premier Cabin Internasional dalam ekosistem properti, pengelolaan resor, investasi, dan perjalanan eksklusif.
          </p>
        </div>

        {/* 4 CORE SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0F382C]/5 border border-[#C5A059]/30 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl text-[#0F382C] group-hover:text-[#B8860B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B8860B] font-bold mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-5 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(item.title)}
                  className="w-full bg-[#0F382C] hover:bg-[#14532D] text-[#F4EFE6] font-sans font-bold text-xs uppercase py-3 px-4 rounded-xl border border-[#C5A059]/40 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Konsultasi Layanan</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
