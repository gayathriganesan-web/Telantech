import React from 'react';
import { X, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { ProjectItem, COMPANY_CONFIG } from '../data/config';
import { trackEmailClick } from '../utils/analytics';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const emailSubject = encodeURIComponent(`Inquiry regarding ${project.title}`);
  const emailBody = encodeURIComponent(
    `Hello TELAN TECH,\n\nI reviewed your project architecture for "${project.title}" (${project.category}) and would like to discuss a similar implementation for my organization.\n\nBest regards,`
  );
  const emailUrl = `mailto:${COMPANY_CONFIG.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs text-neutral-500">
              <span className="font-semibold text-violet-600">{project.category}</span>
              {project.isPlaceholderNote && (
                <>
                  <span>·</span>
                  <span className="text-neutral-400 font-mono text-[11px]">{project.isPlaceholderNote}</span>
                </>
              )}
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-neutral-900">
              {project.title}
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

        {/* Project Image Showcase */}
        <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {project.isPlaceholderNote && (
            <div className="absolute bottom-3 left-3 bg-neutral-900/85 backdrop-blur-xs text-neutral-200 text-xs px-3 py-1.5 rounded border border-neutral-700/80">
              {project.isPlaceholderNote}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Architecture Overview
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Key Deliverable Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Implementation Highlights
            </h3>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Stack Used (Clean text list) */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
              {project.tools.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span className="font-medium text-neutral-800">{tool}</span>
                  {idx < project.tools.length - 1 && <span className="text-neutral-300">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500">
            Contact: <strong className="text-neutral-800">{COMPANY_CONFIG.contact.email}</strong>
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={emailUrl}
              onClick={() => trackEmailClick(`project_modal_${project.id}`)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email About Similar Project</span>
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
