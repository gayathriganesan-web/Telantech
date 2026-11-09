import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { 
  trackEmailClick, 
  trackLinkedInClick, 
  trackInstagramClick 
} from '../utils/analytics';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Digital Marketing');

  const { contact } = COMPANY_CONFIG;

  const emailTopics = [
    'Digital Marketing',
    'Data Analytics',
    'Lead Generation',
    'CRM Management',
    'General Inquiry',
  ];

  const emailSubject = encodeURIComponent(`TELAN TECH – ${selectedTopic} Consultation Inquiry`);
  const emailBody = encodeURIComponent(
    `Hello TELAN TECH,\n\nI would like to inquire about your ${selectedTopic} services for my business.\n\nProject details:\n- Company/Industry: \n- Key Goals & Objectives: \n- Preferred Timeline: \n\nBest regards,`
  );
  const emailMailtoUrl = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Subtle Violet Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-900/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-400 block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 text-balance">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed text-balance">
            Have a project or business requirement? Connect directly with TELAN TECH via email.
          </p>
        </div>

        {/* Two-Column Dedicated Email Communication Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Direct Email Dispatch Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-violet-950/70 border border-violet-800/60 text-violet-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  <span>Prompt 24h Response</span>
                </div>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                Direct Email Contact
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {contact.email}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Send your RFP, project details, or consultation request directly. We review every brief thoroughly and reply with clear next steps.
              </p>

              {/* Inquiry Subject Selector */}
              <div className="mb-8">
                <label className="text-xs font-medium text-neutral-400 block mb-2.5">
                  Select your primary area of interest:
                </label>
                <div className="flex flex-wrap gap-2">
                  {emailTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        selectedTopic === topic
                          ? 'bg-violet-600 text-white font-semibold shadow-xs'
                          : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800 hover:text-white'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-neutral-800">
              <a
                href={emailMailtoUrl}
                onClick={() => trackEmailClick('contact_primary_mailto')}
                className="group flex items-center justify-center gap-2 w-full py-4 px-6 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-xl transition-all duration-200 active:scale-[0.99] shadow-md"
              >
                <span>Compose Email in Your App</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950/80 hover:bg-neutral-800/60 border border-neutral-800 rounded-xl transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email copied to clipboard ({contact.email})</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span>Copy email address to clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Scoping Checklist Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-neutral-900/50 border border-neutral-800/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 block mb-3">
                Scoping Guidelines
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                What to Include in Your Email
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                To help us provide a precise initial response, consider including the following points in your note:
              </p>

              <ul className="space-y-4 text-sm text-neutral-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-white block font-medium">Business Context:</strong>
                    Your company profile, target market, or current customer demographic.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-white block font-medium">Primary Challenges:</strong>
                    Whether you need lead generation, analytics dashboards, or ad campaigns.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-white block font-medium">Expected Timelines:</strong>
                    Your target launch date or desired cadence for ongoing reporting.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-neutral-800/80 mt-6 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Direct communication. Strict client confidentiality assured.</span>
            </div>
          </div>
        </div>

        {/* Social & Professional Channels */}
        <div className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-400">
              Official TELAN TECH inquiries are handled directly via <strong className="text-white font-medium">{contact.email}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLinkedInClick('contact_strip')}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 text-xs font-semibold transition-colors"
            >
              <Linkedin className="w-4 h-4 text-violet-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInstagramClick('contact_strip')}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 text-xs font-semibold transition-colors"
            >
              <Instagram className="w-4 h-4 text-violet-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
