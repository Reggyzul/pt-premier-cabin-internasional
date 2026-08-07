import { Service, CaseStudy, InsightArticle, Testimonial, OfficeLocation } from '../types';

export const COMPANY_STATS = [
  { value: 15, prefix: '', suffix: '+ Tahun', label: 'Pengalaman Industri', detail: 'Melayani proyek konstruksi & pertambangan' },
  { value: 99, prefix: '', suffix: '.8%', label: 'Kepuasan Pelanggan', detail: 'Kemitraan jangka panjang dengan perusahaan nasional' },
  { value: 120, prefix: '', suffix: '+ Unit', label: 'Armada Alat Berat & Mobil', detail: 'Unit prima siap pakai & terawat berkala' },
  { value: 250, prefix: '', suffix: '+ SDM', label: 'Manpower Terampil', detail: 'Operator & tenaga ahli bersertifikat K3' },
];

export const MANAGEMENT_TEAM = {
  direktur: { name: 'Paimbar Parapat', role: 'Direktur (Director)', desc: 'Memimpin visi strategis, pertumbuhan bisnis, dan komitmen mutu operasional PT. Premier Cabin Internasional.' },
  wadir: { name: 'Emmy', role: 'Wakil Direktur (Deputy Director)', desc: 'Mengawasi operasional harian, tata kelola keuangan, dan manajerial organisasi.' },
  staff: [
    { name: 'Moses Hamongangan Parapat', role: 'Staff Operasional & Proyek' },
    { name: 'Rebecca Octaviani', role: 'Staff Administrasi & Keuangan' },
    { name: 'Situmorang Ishak Pernando', role: 'Staff Logistik & Pemeliharaan Armada' }
  ]
};

export const CLIENT_LOGOS = [
  { name: 'PT Pupuk Kaltim', sector: 'Petrokimia', tier: 'Mitra Strategis' },
  { name: 'PT Badak NGL', sector: 'Migas & Energi', tier: 'Mitra Utama' },
  { name: 'PT Indominco Mandiri', sector: 'Pertambangan Batu Bara', tier: 'Kontraktor Alat Berat' },
  { name: 'Gesits Motors Indonesia', sector: 'Kendaraan Listrik EV', tier: 'Dealer Resmi Bontang' },
  { name: 'Kaltim Industrial Estate', sector: 'Kawasan Industri', tier: 'Mitra General Contractor' },
  { name: 'PT Pembangkitan Kaltim', sector: 'Pembangkit Listrik', tier: 'Manpower & Equipment' },
];

export const PILARS = [
  {
    title: 'INTEGRATED SOLUTIONS',
    subtitle: 'Solusi Terintegrasi',
    desc: 'Menyediakan cakupan layanan komprehensif, mulai dari general contractor, manajemen proyek, hingga penyediaan sumber daya teknis secara menyeluruh untuk efisiensi proyek Anda.',
    icon: 'Layers'
  },
  {
    title: 'QUALITY & ON-TIME RENTAL',
    subtitle: 'Unit Prima & Tepat Waktu',
    desc: 'Berkomitmen penuh pada ketersediaan alat berat yang prima untuk memastikan setiap tahap proyek diselesaikan tepat waktu sesuai jadwal dengan standar presisi tinggi.',
    icon: 'Clock'
  },
  {
    title: 'PROFESSIONAL MANPOWER',
    subtitle: 'Tenaga Kerja Bersertifikat',
    desc: 'Didukung oleh kolaborasi tenaga ahli yang profesional, operator alat berat yang terampil, serta manpower bersertifikat yang siap memberikan performa handal di lapangan.',
    icon: 'Users'
  },
  {
    title: 'SAFETY & UNIT RELIABILITY',
    subtitle: 'Keamanan & Keandalan Unit',
    desc: 'Mengedepankan tanggung jawab penuh terhadap keselamatan kerja dan pemeliharaan unit yang ketat sebagai fondasi utama di setiap operasional yang kami tangani.',
    icon: 'ShieldCheck'
  }
];

export const K3L_POLICIES = [
  {
    title: 'Target "Zero Accident"',
    desc: 'Penerapan disiplin Keselamatan dan Kesehatan Kerja (K3) yang ketat untuk mencegah segala bentuk kecelakaan di lokasi operasional dan area persewaan alat berat.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Jaminan Mutu (Quality Control)',
    desc: 'Pengawasan kualitas secara berlapis, mulai dari pemilihan unit armada terbaik hingga seleksi tenaga kerja ahli, guna memastikan hasil pekerjaan yang presisi dan andal.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Standar Keamanan Maksimal (APD & SIA/SIO)',
    desc: 'Pemenuhan fasilitas Alat Pelindung Diri (APD) berstandar SNI/Internasional, inspeksi rutin, serta izin layak operasi (SIA/SIO) aktif untuk seluruh unit & operator.',
    icon: 'Award'
  },
  {
    title: 'Tanggung Jawab Lingkungan (K3L)',
    desc: 'Menjalankan metode kerja ramah lingkungan dan mengelola limbah operasional alat berat (oli & suku cadang bekas) secara bertanggung jawab guna meminimalisir dampak polusi.',
    icon: 'Leaf'
  }
];

export const VISI_MISI = {
  visi: "Menjadi perusahaan penyedia jasa konstruksi, penyewaan alat berat, dan pemasok tenaga kerja yang terdepan serta terpercaya, dengan mengutamakan keandalan armada, kompetensi sumber daya manusia, serta komitmen penuh pada kualitas dan keselamatan kerja.",
  misi: [
    "Menghasilkan pekerjaan konstruksi tepat waktu dengan standar kualitas yang tinggi.",
    "Menyediakan unit alat berat yang prima untuk mendukung kelancaran operasional pelanggan.",
    "Menyiapkan tenaga kerja yang terampil, profesional, dan berintegritas di lapangan.",
    "Membangun kemitraan strategis melalui layanan yang responsif dan kompetitif.",
    "Menerapkan standar keselamatan kerja yang ketat untuk mencapai target 'Zero Accident'."
  ]
};

export const OPERATIONAL_RESOURCES = {
  heavyEquipment: [
    { name: 'Excavator', desc: 'Tersedia berbagai kapasitas (PC75, PC130, PC200) untuk kebutuhan penggalian dan pemuatan material.' },
    { name: 'Bulldozer', desc: 'Unit andal untuk pengerjaan perataan lahan dan pembersihan area (land clearing).' },
    { name: 'Vibro Roller', desc: 'Untuk kebutuhan pemadatan tanah dan pengerasan jalan pada proyek infrastruktur.' },
    { name: 'Dump Truck', desc: 'Armada pengangkut material heavy duty dengan berbagai kapasitas angkut.' }
  ],
  manpower: [
    { name: 'Operator Alat Berat', desc: 'Tenaga ahli yang memiliki SIO (Surat Izin Operator) aktif dan berpengalaman di medan proyek.' },
    { name: 'Tenaga Mekanik', desc: 'Tim teknis yang siap melakukan perawatan dan perbaikan unit secara cepat di lokasi.' },
    { name: 'Helper & General Worker', desc: 'Tenaga kerja lapangan yang disiplin untuk mendukung efisiensi pengerjaan fisik proyek.' },
    { name: 'Pengawas Lapangan (Supervisor)', desc: 'Personel yang bertanggung jawab memastikan standar kerja dan K3 berjalan optimal.' }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'heavy-equipment',
    title: 'Heavy Equipment Rental (Alat Berat)',
    shortDesc: 'Penyewaan Excavator (PC75, PC130, PC200), Bulldozer, Vibro Roller, dan Dump Truck dengan ketersediaan unit prima & terawat berkala.',
    fullDesc: 'Menyediakan unit alat berat berkualitas tinggi yang selalu melalui inspeksi rutin dan berlisensi izin layak operasi (SIA/SIO) aktif guna menjamin kelancaran pekerjaan proyek tanpa kendala teknis.',
    category: 'Sewa Alat Berat',
    icon: 'TrendingUp',
    keyDeliverables: [
      'Excavator Komatsu PC75, PC130, PC200',
      'Bulldozer Land Clearing & Perataan Lahan',
      'Vibro Roller Pemadatan Jalan Infrastruktur',
      'Dump Truck Angkut Material Heavy Duty'
    ],
    impactMetric: 'Inspeksi Rutin & Izin SIA/SIO Aktif',
    image: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'manpower-supplier',
    title: 'Manpower Supplier & Operator SIO',
    shortDesc: 'Penyediaan Operator Alat Berat (SIO aktif), Tenaga Mekanik, Helper/General Worker, dan Pengawas Lapangan (Supervisor).',
    fullDesc: 'Menyalurkan tenaga kerja terampil dan bersertifikat resmi yang telah dibekali induksi K3, APD standar SNI, serta etos kerja tinggi untuk mendukung kelancaran proyek Anda.',
    category: 'Tenaga Kerja',
    icon: 'ShieldCheck',
    keyDeliverables: [
      'Operator Alat Berat Lisensi SIO Resmi',
      'Tim Mekanik Perawatan Unit Siaga 24 Jam',
      'Helper & General Worker Lapangan Disiplin',
      'Supervisor Pengawas Standar Kerja & K3'
    ],
    impactMetric: 'SDM Bersertifikat & Komitmen Zero Accident',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'general-contractor',
    title: 'General Contractor & Pemutakhiran Lahan',
    shortDesc: 'Pengelolaan proyek konstruksi sipil, pembersihan lahan (land clearing), pematangan tanah, dan infrastruktur jalan.',
    fullDesc: 'Pengerjaan proyek konstruksi terintegrasi dari tahap persiapan lahan hingga penyelesaian fisik dengan manajemen mutu ketat, pengawasan presisi, dan penyelesaian tepat waktu.',
    category: 'Konstruksi',
    icon: 'Compass',
    keyDeliverables: [
      'Pekerjaan Land Clearing & Pematangan Lahan',
      'Konstruksi Infrastruktur Jalan & Sipil',
      'Manajemen Material & Earthworks Proyek',
      'Pengawasan Kualitas & Manajemen K3L'
    ],
    impactMetric: 'Penyelesaian Presisi & Tepat Waktu',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'dealer-gesits',
    title: 'Dealer Bontang Gesits (Motor Listrik)',
    shortDesc: 'Penjualan resmi, suku cadang, dan pusat servis motor listrik Gesits buatan Indonesia untuk armada instansi & korporasi.',
    fullDesc: 'PT. Premier Cabin Internasional bangga menjadi Dealer Resmi Motor Listrik Gesits di Bontang. Menyediakan fleet sepeda motor listrik ramah lingkungan, stasiun pengisian daya, serta layanan purna jual resmi.',
    category: 'Green Mobility',
    icon: 'Bike',
    keyDeliverables: [
      'Penjualan Unit Motor Listrik Gesits G1 & Raya',
      'Pengadaan Fleet Kendaraan Listrik Korporasi',
      'Pusat Servis Resmi & Suku Cadang OEM',
      'Garansi Baterai & Motor Listrik Resmi'
    ],
    impactMetric: '100% Produk Dalam Negeri & Zero Emission',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rental-mobil',
    title: 'Rental Mobil Operasional & 4x4',
    shortDesc: 'Penyewaan mobil operasional, SUV, MPV, dan Double Cabin 4x4 untuk kebutuhan harian, bulanan, maupun tahunan perusahaan.',
    fullDesc: 'Menyediakan armada mobil terlengkap dan selalu dalam kondisi siap jalan untuk mendukung mobilitas manajemen, tim proyek, dan lapangan.',
    category: 'Transportasi',
    icon: 'Car',
    keyDeliverables: [
      'Sewa Mobil Passenger (Innova, Avanza, Fortuner)',
      'Sewa Double Cabin 4x4 Tambang & Proyek',
      'Layanan Driver Profesional & Berpengalaman',
      'Perawatan Berkala & Asuransi Kendaraan'
    ],
    impactMetric: 'Armada Prima & Asuransi Total',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pabrik-baterai',
    title: 'Pabrik & Perakitan Baterai EV',
    shortDesc: 'Lini manufaktur, assembly, dan perawatan baterai litium untuk kendaraan listrik dan penyimpanan energi industri.',
    fullDesc: 'Perakitan paket baterai berkualitas tinggi untuk motor listrik dan energi terbarukan dengan battery management system (BMS) yang aman dan tahan lama.',
    category: 'Energi Terbarukan',
    icon: 'BatteryCharging',
    keyDeliverables: [
      'Assembly Battery Pack Lithium-ion & LiFePO4',
      'Battery Management System (BMS) Calibration',
      'Pengujian Proteksi Thermal & Ketahanan',
      'Maintenance Sistem Energi Baterai'
    ],
    impactMetric: 'Standar Proteksi Thermal & Daya Tahan Tinggi',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const LEGALITAS_DATA = [
  { title: 'Akta Pendirian Perusahaan', detail: 'Terdaftar & Disahkan Notaris serta Kemenkumham RI' },
  { title: 'NIB (Nomor Induk Berusaha)', detail: 'Izin Usaha Konstruksi, Heavy Equipment & Supplier Resmi' },
  { title: 'NPWP & Status PKP', detail: 'Wajib Pajak Patuh & Pengusaha Kena Pajak Resmi' },
  { title: 'Sertifikasi K3 & SIA/SIO', detail: 'Izin Layak Operasi Unit Alat Berat & Operator Lisensi SIO' },
];

export const GALERI_ITEMS = [
  { title: 'Excavator & Alat Berat Proyek', category: 'Heavy Equipment', image: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=800&q=80' },
  { title: 'Showroom Dealer Gesits Bontang', category: 'Dealer Gesits', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80' },
  { title: 'Armada Rental Mobil Passenger & 4x4', category: 'Rental Mobil', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Perakitan Battery Pack EV', category: 'Pabrik Baterai', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80' },
  { title: 'Proyek Konstruksi & Land Clearing', category: 'General Contractor', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' },
  { title: 'Operator SIO & Tim Manpower Terampil', category: 'Manpower Supplier', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Ir. Hendra Wijaya',
    title: 'Project Procurement Manager',
    company: 'Mitra Industri Kalimantan Timur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Armada Excavator PC200 dan Vibro Roller dari PT. Premier Cabin Internasional selalu datang tepat waktu dengan kondisi unit yang sangat baik. Ketersediaan mekanik siaga di lokasi membuat proyek berjalan tanpa hambatan.',
    rating: 5,
    highlightStat: '100% On-Time Mobilization'
  },
  {
    id: '2',
    author: 'Budi Santoso, S.T.',
    title: 'Head of Operational Logistics',
    company: 'Instansi Sektor Energi Bontang',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Kerjasama pengadaan motor listrik Gesits dan instalasi armada dengan PT. Premier Cabin Internasional sangat profesional. Responsif, suku cadang OEM terjamin, dan sangat mendukung program zero-emission.',
    rating: 5,
    highlightStat: 'Resmi & Garansi Pabrik'
  },
  {
    id: '3',
    author: 'Ahmad Faisal',
    title: 'Site Safety Supervisor',
    company: 'Kontraktor Pertambangan',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    quote: 'Tenaga kerja dan operator dari PT. Premier Cabin Internasional dibekali lisensi SIO resmi serta kedisiplinan K3 yang tinggi. Target zero accident proyek kami dapat dipertahankan dengan baik.',
    rating: 5,
    highlightStat: 'Zero Accident Record'
  }
];

export const COMPANY_CONTACT = {
  phone: '081254554817',
  displayPhone: '+62 812-5455-4817',
  waLink: 'https://wa.me/6281254554817',
  mapLink: 'https://share.google/D6oTVFSWtZJ5trPlR',
  address: 'Bontang, Kalimantan Timur, Indonesia',
  email: 'contact@premiercabin.co.id'
};
