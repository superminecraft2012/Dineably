import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo-with-text.webp" 
              alt="Dineably Logo" 
              width={200} 
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/why-us" className="text-gray-400 hover:text-white transition-colors">
              Why Us
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/process" className="text-gray-400 hover:text-white transition-colors">
              Process
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="#contact">
            <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Scaling
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

