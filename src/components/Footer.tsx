import React from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { ArrowUp, Linkedin, Instagram } from 'lucide-react';
import { trackLinkedInClick, trackInstagramClick, trackPageView } from '../utils/analytics';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Wordmark & Tagline + Back to top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-neutral-900 gap-8">
          <div className="flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-lg overflow-hidden bg-white p-1 border border-neutral-800 shadow-xs flex items-center justify-center shrink-0">
              <img
                src={COMPANY_CONFIG.logoUrl}
                alt="TELAN TECH"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <a
                href="#home"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-2xl font-bold tracking-tight text-white mb-0.5"
              >
                <span>{COMPANY_CONFIG.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              </a>
              <p className="text-sm text-neutral-400 font-medium">
                "{COMPANY_CONFIG.tagline}"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Navigation & Channels */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => trackPageView(link.href, `TELAN TECH – ${link.label}`)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-4">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-neutral-400">
              <li>Digital Marketing</li>
              <li>Data Analytics</li>
              <li>Lead Generation</li>
              <li>CRM Management</li>
              <li>Market Research</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-4">
              Channels
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={COMPANY_CONFIG.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLinkedInClick('footer')}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-violet-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInstagramClick('footer')}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-violet-400" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-4">
              Transparency
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed mb-3">
              We respect your digital privacy. Review our analytics policy or update your consent preferences.
            </p>
            <button
              onClick={onOpenPrivacyModal}
              className="text-xs text-violet-400 hover:text-violet-300 underline underline-offset-4"
            >
              Privacy & Analytics Notice
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {currentYear} {COMPANY_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Professional Business Solutions · Digital Marketing & Data Analytics
          </div>
        </div>
      </div>
    </footer>
  );
};
