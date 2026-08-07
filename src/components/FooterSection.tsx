import React from 'react';
import { COMPANY_DATA } from '../data/companyData';

interface FooterSectionProps {
  onNavigatePage?: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenContactModal?: () => void;
}

export default function FooterSection({ onNavigatePage, onOpenContactModal }: FooterSectionProps) {
  return (
    <footer className="bg-[#111817] text-gray-400 text-xs py-8 text-center border-t border-white/5">
      <p>&copy; 2026 {COMPANY_DATA.name}. All Rights Reserved. Tagline: <i>{COMPANY_DATA.tagline}</i>.</p>
    </footer>
  );
}
