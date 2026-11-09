import React from 'react';
import { WHY_WORK_WITH_US } from '../data/config';
import { 
  GitCommit, 
  Binary, 
  MessageSquare, 
  CheckSquare, 
  Layers, 
  Briefcase 
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const principleIcons = [
    GitCommit,
    Binary,
    MessageSquare,
    CheckSquare,
    Layers,
    Briefcase,
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 block mb-3">
            Core Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4 text-balance">
            Why Work With Us?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed text-balance">
            We partner with businesses seeking disciplined execution, transparent measurement, and dependable digital systems without agency bureaucracy.
          </p>
        </div>

        {/* 6 Genuine Service Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_WORK_WITH_US.map((item, index) => {
            const Icon = principleIcons[index] || GitCommit;

            return (
              <div
                key={item.title}
                className="p-8 rounded-xl bg-neutral-50/60 border border-neutral-200/80 transition-all duration-300 hover:bg-white hover:border-neutral-300 hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 text-violet-600 flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
