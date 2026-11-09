import React from 'react';
import { X, CheckCircle2, Mail, ArrowUpRight } from 'lucide-react';
import { ServiceItem, COMPANY_CONFIG } from '../data/config';
import { trackEmailClick } from '../utils/analytics';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const emailUrl = `mailto:${COMPANY_CONFIG.contact.email}?subject=${encodeURIComponent(
    `Inquiry regarding ${service.title}`
  )}&body=${encodeURIComponent(
    `Hello TELAN TECH,\n\nI would like to explore your ${service.title} services for my business.\n\nBest regards,`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-1 bg-neutral-100 text-neutral-800 rounded">
              SERVICE {service.number}
            </span>
            <h2 id="service-modal-title" className="text-xl font-bold text-neutral-900">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Strategic Objective
            </h3>
            <p className="text-base text-neutral-800 font-medium leading-relaxed">
              {service.description}
            </p>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* Sub-Services Provided */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Included Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.services.map((sub, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Deliverables */}
          <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
              Standard Deliverables & Outputs
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direct Action Footer */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500 text-center sm:text-left">
            Contact us at <strong className="text-neutral-800">{COMPANY_CONFIG.contact.email}</strong>
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={emailUrl}
              onClick={() => trackEmailClick(`service_modal_${service.id}`)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email About This Service</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-neutral-600 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
