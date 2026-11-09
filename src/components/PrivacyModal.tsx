import React from 'react';
import { X, Shield, Lock, Activity, Check } from 'lucide-react';
import { getStoredConsent, setConsent, GA_MEASUREMENT_ID } from '../utils/analytics';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const currentConsent = getStoredConsent();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-100 text-neutral-900">
              <Shield className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <h2 id="privacy-policy-title" className="text-lg font-bold text-neutral-900">
                Privacy Notice & Analytics Policy
              </h2>
              <p className="text-xs text-neutral-500">TELAN TECH Data Transparency Commitment</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm text-neutral-600 leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-violet-600" />
              1. Google Analytics 4 (GA4) Usage
            </h3>
            <p>
              TELAN TECH uses Google Analytics 4 to understand website engagement, content effectiveness, and visitor interest in our consulting services. We only collect aggregated, non-personally identifiable telemetry such as page navigation paths, scroll depth, and outbound contact channel clicks.
            </p>
            <p className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-lg border border-neutral-200 font-mono">
              Configured Measurement ID: {GA_MEASUREMENT_ID ? GA_MEASUREMENT_ID : 'VITE_GA_MEASUREMENT_ID (Not set in production env / Passive mode)'}
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-violet-600" />
              2. Strict No-PII Commitment
            </h3>
            <p>
              We never collect, store, or transmit Personally Identifiable Information (PII) including names, telephone numbers, financial details, or IP addresses (IP anonymization is enforced). All inquiries and project discussions happen directly through your own email client.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-neutral-900">3. Your Consent Status</h3>
            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">
                  Current Status
                </span>
                <span className="text-sm font-semibold text-neutral-900 capitalize">
                  {currentConsent === 'granted' ? 'Analytics Enabled (Consent Granted)' : 'Analytics Disabled (Consent Denied)'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setConsent('granted');
                    onClose();
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    currentConsent === 'granted'
                      ? 'bg-violet-600 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  Enable
                </button>
                <button
                  onClick={() => {
                    setConsent('denied');
                    onClose();
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    currentConsent === 'denied'
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  Disable
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
