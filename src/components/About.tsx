import React from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { Globe, BarChart3, TrendingUp, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  const focusPillars = [
    {
      icon: Globe,
      title: 'Digital Presence',
      description: 'Establishing consistent visibility and structured brand authority across major search, ad, and social channels.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Replacing intuition with verifiable metrics, structured reporting, and actionable business intelligence models.',
    },
    {
      icon: TrendingUp,
      title: 'Business Development',
      description: 'Building qualified lead databases and outreach pipelines that directly generate tangible commercial opportunities.',
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Streamlining communication, CRM lifecycle stages, and customer follow-up to build lasting commercial relationships.',
    },
    {
      icon: Target,
      title: 'Marketing Performance',
      description: 'Structuring campaigns with disciplined budget management, conversion attribution, and constant efficiency reviews.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 block mb-3">
            Our Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6 text-balance">
            About TELAN TECH
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed text-balance">
            TELAN TECH provides digital marketing, data analytics and business support services designed to help businesses improve their online presence, understand their customers and make informed decisions.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {focusPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-8 rounded-xl bg-neutral-50/70 border border-neutral-200/80 transition-all duration-300 hover:bg-white hover:border-neutral-300 hover:shadow-xs"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 group-hover:bg-violet-50 text-neutral-800 group-hover:text-violet-600 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}

          {/* Editorial Philosophy Statement Card */}
          <div className="p-8 rounded-xl bg-neutral-950 text-white flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <span className="text-xs font-mono tracking-wider text-violet-400 uppercase block mb-3">
                Our Purpose
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Practical execution over vague theory.
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We believe that modern businesses do not need another complex dashboard they never check or uncoordinated ad campaigns that drain budgets. They need clean data models, organized prospect lists, and campaigns that produce clear outcomes.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 mt-6 flex items-center justify-between text-xs text-neutral-400">
              <span>TELAN TECH</span>
              <span className="text-violet-400 font-medium">B2B Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
