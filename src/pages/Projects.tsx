import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from '../components/projects/ProjectModal';

export const Projects: React.FC = () => {
  const { data, t } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Centered Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
            {t.projectsTitle}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            {t.projectsSubtitle}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {data.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer rounded-3xl p-7 sm:p-8 bg-white dark:bg-[#111118] text-foreground border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative z-10"
            >
              <div className="space-y-4">
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#f5f0fa] dark:bg-[#1d1927] text-primary font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-foreground pt-1 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Concise Description */}
                <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-sans">
                  {project.shortDesc}
                </p>
              </div>

              {/* View Project Link (Opens Modal) */}
              <div className="pt-6 mt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:opacity-85 transition-opacity group-hover:translate-x-1 duration-200 font-sans"
                >
                  <span>{project.linkText || t.viewProjectBtn}</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Bigger Detail Popup Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
