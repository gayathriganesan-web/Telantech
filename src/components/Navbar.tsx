import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { trackContactCtaClick, trackPageView } from '../utils/analytics';

import { COMPANY_CONFIG } from '../data/config';

interface NavbarProps {
  onLetsTalkClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLetsTalkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string, label: string) => {
    setMobileMenuOpen(false);
    trackPageView(href, `TELAN TECH – ${label}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Official Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home', 'Home')}
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <div className="h-9 sm:h-10 w-9 sm:w-10 rounded-lg overflow-hidden bg-white shadow-xs border border-neutral-200/80 p-0.5 flex items-center justify-center">
            <img
              src={COMPANY_CONFIG.logoUrl}
              alt="TELAN TECH"
              className="h-full w-full object-contain"
            />
          </div>
          <span className={`text-lg font-bold tracking-tight whitespace-nowrap transition-colors ${
            isScrolled ? 'text-neutral-900' : 'text-white'
          }`}>
            TELAN TECH
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href, link.label)}
              className="relative py-1 text-neutral-600 hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => {
              trackContactCtaClick('navbar_cta');
              onLetsTalkClick();
            }}
            className="group flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 shadow-xs active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => {
              trackContactCtaClick('mobile_nav_quick_talk');
              onLetsTalkClick();
            }}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-neutral-950 rounded-md"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white border-b border-neutral-200 shadow-xl px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.label)}
                className="text-base font-medium text-neutral-800 hover:text-violet-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackContactCtaClick('mobile_drawer_cta');
                  onLetsTalkClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-neutral-950 rounded-lg"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
