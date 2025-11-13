'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";
import { trackButtonClick, trackNavigationClick } from "@/lib/analytics";

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useModal();

  const handleAuditClick = () => {
    trackButtonClick({
      button_name: 'Free 15-Minute Audit',
      button_location: 'header',
      page: pathname || 'unknown',
      destination: 'contact_modal'
    });
    openModal();
  };

  const handleNavClick = (linkText: string, destination: string) => {
    trackNavigationClick({
      link_text: linkText,
      destination,
      location: 'header'
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo-with-text.webp" 
              alt="Dineably - Restaurant Marketing Agency Logo" 
              width={200} 
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              onClick={() => handleNavClick('Home', '/')}
              className={`${pathname === '/' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/why-us" 
              onClick={() => handleNavClick('Why Us', '/why-us')}
              className={`${pathname === '/why-us' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Why Us
            </Link>
            <Link 
              href="/services" 
              onClick={() => handleNavClick('Services', '/services')}
              className={`${pathname === '/services' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              onClick={() => handleNavClick('Process', '/process')}
              className={`${pathname === '/process' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Process
            </Link>
            <Link 
              href="/case-studies" 
              onClick={() => handleNavClick('Case Studies', '/case-studies')}
              className={`${pathname === '/case-studies' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Case Studies
            </Link>
            <Link 
              href="/faq" 
              onClick={() => handleNavClick('FAQ', '/faq')}
              className={`${pathname === '/faq' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={handleAuditClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap"
          >
            Free 15-Minute Audit
          </button>
        </div>
      </div>
    </header>
  );
}

