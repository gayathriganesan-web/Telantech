import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/config';
import { ProjectModal } from './ProjectModal';
import { trackPortfolioView } from '../utils/analytics';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Digital Marketing',
    'Data Analytics',
    'Business Research',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    trackPortfolioView(project.id, project.title);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 block mb-3">
              Case Studies & Blueprints
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-4 text-balance">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed text-balance">
              Representative frameworks and analytical architectures engineered to solve tangible marketing, reporting, and lead acquisition challenges.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group cursor-pointer flex flex-col bg-neutral-50/60 rounded-2xl overflow-hidden border border-neutral-200/80 transition-all duration-300 hover:bg-white hover:border-neutral-300 hover:shadow-md"
            >
              {/* Project Screenshot Container with Fallback */}
              <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                
                {/* Confidential / Demo Tag (Subtle & Honest) */}
                {project.isPlaceholderNote && (
                  <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-xs text-neutral-300 text-[11px] font-mono px-2.5 py-1 rounded border border-neutral-800">
                    Demonstration Model
                  </div>
                )}
              </div>

              {/* Project Body */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span className="font-semibold text-violet-600">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{project.tools.slice(0, 3).join(', ')}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-violet-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-violet-600 transition-colors">
                  <span>View Project Details</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-mono text-neutral-400 group-hover:text-violet-500">Inspect</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Client Confidentiality & Authenticity */}
        <div className="mt-14 p-6 rounded-xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-neutral-400 shrink-0" />
            <p className="text-xs text-neutral-600 leading-relaxed">
              <strong className="text-neutral-900 font-semibold">Client Confidentiality:</strong> Live client datasets, private CRM databases, and proprietary ad accounts are strictly protected under non-disclosure agreements. Project cards above display authorized architecture demonstrations.
            </p>
          </div>
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
