import React, { useState, useEffect } from 'react';
import { getStoredConsent, setConsent, ConsentStatus } from '../utils/analytics';
import { ShieldCheck, X } from 'lucide-react';

interface ConsentBannerProps {
  onOpenPrivacyModal: () => void;
}

export const ConsentBanner: React.FC<ConsentBannerProps> = ({ onOpenPrivacyModal }) => {
  const [consent, setConsentState] = useState<ConsentStatus>('granted');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const status = getStoredConsent();
    setConsentState(status);
    if (status === 'pending') {
      // Delay slightly for smooth non-intrusive appearance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setConsent('granted');
    setConsentState('granted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setConsent('denied');
    setConsentState('denied');
    setIsVisible(false);
  };

  if (!isVisible || consent !== 'pending') {
    return null;
  }

  return (
    <aside
      aria-label="Privacy & Analytics Consent"
      className="fixed bottom-5 right-5 z-50 max-w-md w-[calc(100vw-2.5rem)] bg-neutral-950 text-white rounded-xl p-5 shadow-2xl border border-neutral-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-neutral-900 text-violet-400 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 text-sm">
          <h4 className="font-semibold text-white text-sm mb-1">Privacy & Analytics</h4>
          <p className="text-neutral-400 text-xs leading-relaxed mb-3">
            TELAN TECH uses optional, privacy-respecting Google Analytics to measure site interactions and optimize our services. No personal details or cookies are stored without consent.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-md transition-colors"
            >
              Accept Analytics
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors"
            >
              Decline
            </button>
            <button
              onClick={onOpenPrivacyModal}
              className="text-xs text-neutral-400 hover:text-violet-300 underline underline-offset-4 ml-auto"
            >
              Learn more
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close consent banner"
          className="text-neutral-500 hover:text-neutral-300 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
