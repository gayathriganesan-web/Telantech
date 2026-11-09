import React from 'react';
import { TOOLS_EXPERTISE } from '../data/config';
import { Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="tools" className="py-24 sm:py-32 bg-neutral-50/60 text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 block mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4 text-balance">
            Tools & Expertise
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed text-balance">
            We focus on industry-standard platforms that deliver reliable analytics, streamlined customer relationship tracking, and scalable advertising performance.
          </p>
        </div>

        {/* Text-based Minimal Presentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOOLS_EXPERTISE.map((group, idx) => (
            <div
              key={group.category}
              className="p-8 rounded-xl bg-white border border-neutral-200/90 transition-all duration-300 hover:border-neutral-300"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                <span className="text-xs font-mono font-bold text-neutral-400">
                  0{idx + 1}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-violet-600 font-semibold">
                  {group.category}
                </span>
              </div>

              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-base font-semibold text-neutral-800 flex items-center justify-between"
                  >
                    <span>{skill}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
