import React from 'react';
import { PROCESS_STAGES } from '../data/config';
import { Compass, CalendarCheck, Zap, RefreshCw } from 'lucide-react';

export const Process: React.FC = () => {
  const stageIcons = [Compass, CalendarCheck, Zap, RefreshCw];

  return (
    <section id="process" className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 block mb-3">
            Workflow Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4 text-balance">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed text-balance">
            A linear, accountable framework designed to eliminate guesswork and turn business objectives into systematic execution.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-neutral-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stageIcons[idx] || Compass;

              return (
                <div
                  key={stage.number}
                  className="relative flex flex-col p-6 rounded-xl bg-neutral-50/50 border border-neutral-200/70 hover:bg-white hover:shadow-xs transition-all duration-300"
                >
                  {/* Step Header with Node */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                      {stage.number}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-600 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-violet-600" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-lg font-bold text-neutral-950 mb-2">
                    {stage.title}
                  </h3>

                  {/* Core Description */}
                  <p className="text-sm font-medium text-neutral-800 mb-3 leading-snug">
                    {stage.description}
                  </p>

                  {/* In-Depth Explanation */}
                  <p className="text-xs text-neutral-500 leading-relaxed mt-auto pt-2 border-t border-neutral-100">
                    {stage.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
