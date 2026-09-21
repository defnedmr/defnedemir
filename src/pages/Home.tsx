import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from '../components/projects/ProjectModal';

export const Home: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-[calc(100vh-80px)]">
      
      {/* 1. HERO SECTION (Clean, Minimal, Centered) */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-[#f5f0fa] dark:bg-[#1d1927] text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{portfolioData.personal.status}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-foreground font-heading"
          >
            Hi, I'm{' '}
            <span className="text-primary">
              {portfolioData.personal.name}
            </span>
            .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-lg sm:text-xl font-medium text-primary font-sans"
          >
            {portfolioData.personal.title} • {portfolioData.personal.location}
          </motion.p>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans"
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm text-primary-foreground bg-primary hover:opacity-90 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] font-sans"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm border border-border bg-white dark:bg-[#111118] text-foreground hover:border-primary transition-all hover:scale-[1.02] active:scale-[0.98] font-sans relative z-10"
            >
              <span>Get in Touch</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 2. SKILLS OVERVIEW */}
      <section className="py-12 border-t border-border/70 bg-white/40 dark:bg-[#111118]/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.skills.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#111118] border border-border shadow-sm space-y-3 relative z-10"
              >
                <h3 className="text-sm font-semibold tracking-wider uppercase text-primary font-heading">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.list.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-3 py-1 rounded-full bg-[#f5f0fa] dark:bg-[#1d1927] text-primary font-medium font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PREVIEW */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading">
                Featured Projects
              </h2>
              <p className="text-sm text-muted-foreground mt-1 font-sans">
                A selection of recent projects and experiments.
              </p>
            </div>
            <Link
              to="/projects"
              className="text-sm font-semibold text-primary hover:underline flex items-center gap-1 font-sans"
            >
              <span>See all</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portfolioData.projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="cursor-pointer rounded-3xl p-7 bg-white dark:bg-[#111118] text-foreground border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative z-10"
              >
                <div className="space-y-4">
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

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:opacity-85 transition-opacity group-hover:translate-x-1 duration-200 font-sans"
                  >
                    <span>View project →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
