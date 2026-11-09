import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem, COMPANY_CONFIG } from '../data/config';
import { ServiceModal } from './ServiceModal';
import { trackServiceView, trackEmailClick } from '../utils/analytics';
import { 
  ArrowUpRight, 
  Check, 
  Mail, 
  Maximize2 
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenService = (service: ServiceItem) => {
    setSelectedService(service);
    trackServiceView(service.id, service.title);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 block mb-3">
            Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4 text-balance">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed text-balance">
            Every service is powered by genuine enterprise platforms. Below are authentic interface views of the exact tools we configure, manage, and optimize for client operations.
          </p>
        </div>

        {/* 6 Services - Alternating Clean 2-Column Presentation with Genuine Software Interfaces */}
        <div className="space-y-24 sm:space-y-32">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Description Column (5 cols) */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded">
                      SERVICE {service.number}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {service.softwareName}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-base text-neutral-700 font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Included Services List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Included Capabilities
                    </span>
                    {service.services.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-neutral-800">
                        <Check className="w-4 h-4 text-violet-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions: Inquire via email & Deep-dive modal */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}?subject=${encodeURIComponent(
                        `Inquiry regarding ${service.title}`
                      )}&body=${encodeURIComponent(
                        `Hello TELAN TECH,\n\nI would like to discuss your ${service.title} services for my business.\n\nBest regards,`
                      )}`}
                      onClick={() => trackEmailClick(`service_direct_${service.id}`)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email About This Service</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleOpenService(service)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                    >
                      <span>View Scope & Deliverables</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Software Screenshot Browser Frame (7 cols) */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div 
                    onClick={() => handleOpenService(service)}
                    className="group cursor-pointer rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-neutral-300"
                  >
                    {/* Clean Minimalist Browser Chrome Frame */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-neutral-800/80 text-[11px] font-mono text-neutral-400">
                        <span>{service.softwareName} · Live Platform Interface</span>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-500 group-hover:text-white transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
                      <img
                        src={service.softwareScreenshot}
                        alt={`${service.softwareName} interface for ${service.title}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </div>

                    {/* Caption strip */}
                    <div className="p-3.5 bg-neutral-950 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                      <p className="truncate pr-4 text-[12px]">
                        {service.softwareCaption}
                      </p>
                      <span className="text-[11px] font-mono text-violet-400 shrink-0 font-medium">
                        Click to Inspect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Deliverable Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
