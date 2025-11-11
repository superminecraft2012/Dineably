'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useModal();

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
              className={`${pathname === '/' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/why-us" 
              className={`${pathname === '/why-us' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Why Us
            </Link>
            <Link 
              href="/services" 
              className={`${pathname === '/services' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className={`${pathname === '/process' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Process
            </Link>
            <Link 
              href="/case-studies" 
              className={`${pathname === '/case-studies' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              Case Studies
            </Link>
            <Link 
              href="/faq" 
              className={`${pathname === '/faq' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap"
          >
            Free 15-Minute Audit
          </button>
        </div>
      </div>
    </header>
  );
}

