import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '// 01. ABOUT', href: '#about', id: 'about' },
    { label: '// 02. STACK', href: '#stack', id: 'stack' },
    { label: '// 03. EXPERIENCE', href: '#experience', id: 'experience' },
    { label: '// 04. PROJECTS', href: '#projects', id: 'projects' },
    { label: '// 05. CREDENTIALS', href: '#credentials', id: 'credentials' },
    { label: '// 06. CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#242424] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white font-mono text-sm tracking-wider"
        >
          <span className="w-8 h-8 rounded bg-[#161616] border border-[#2B2B2B] flex items-center justify-center font-bold text-xs text-[#D71927] group-hover:border-[#D71927] group-hover:shadow-[0_0_15px_rgba(215,25,39,0.4)] transition-all">
            {PERSONAL_DATA.monogram}
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-widest text-[#F5F5F5] group-hover:text-[#D71927] transition-colors">
              ALVINO P SHATTO
            </span>
            <span className="text-[10px] text-[#777777] tracking-wider uppercase hidden sm:block">
              FULL-STACK & AI
            </span>
          </div>
        </a>

        {/* Live Availability Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#242424] text-[11px] font-mono text-[#A3A3A3]">
          <span className="w-2 h-2 rounded-full bg-[#D71927] animate-pulse"></span>
          <span>AVAILABLE FOR ROLES & INTERNSHIPS</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-[#D71927] font-semibold'
                    : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_DATA.links.resume}
            download="Alvino_P_Shatto_Resume.pdf"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#141414] hover:bg-[#D71927] text-white border border-[#2E2E2E] hover:border-[#D71927] text-xs font-mono transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(215,25,39,0.4)]"
          >
            <Download className="w-3.5 h-3.5 text-[#D71927] group-hover:text-white transition-colors" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#A3A3A3] hover:text-white border border-[#242424] rounded bg-[#141414]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#242424] px-6 py-6 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#141414] border border-[#242424] text-[11px] font-mono text-[#A3A3A3] w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D71927] animate-pulse"></span>
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>

          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#A3A3A3] hover:text-[#D71927] py-2 border-b border-[#1A1A1A] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#555]" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <a
              href={PERSONAL_DATA.links.resume}
              download="Alvino_P_Shatto_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded bg-[#D71927] text-white font-mono text-xs font-semibold tracking-wider"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
