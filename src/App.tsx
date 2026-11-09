/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsentBanner } from './components/ConsentBanner';
import { PrivacyModal } from './components/PrivacyModal';
import { initGA, trackScrollDepth } from './utils/analytics';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Initialize GA4 if consent has already been granted
  useEffect(() => {
    initGA();

    // Scroll depth tracking (25%, 50%, 75%, 90%)
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100);

      if (scrollPercentage >= 90) trackScrollDepth(100);
      else if (scrollPercentage >= 75) trackScrollDepth(75);
      else if (scrollPercentage >= 50) trackScrollDepth(50);
      else if (scrollPercentage >= 25) trackScrollDepth(25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-violet-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar onLetsTalkClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* Full-Screen Hero */}
        <Hero
          onExploreServices={scrollToServices}
          onLetsTalk={scrollToContact}
        />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* How We Work Process Section */}
        <Process />

        {/* Selected Work Portfolio Section */}
        <Portfolio />

        {/* Tools & Expertise Section */}
        <Skills />

        {/* Why Work With Us Section */}
        <WhyUs />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Privacy & GA4 Consent Banner */}
      <ConsentBanner onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
