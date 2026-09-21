import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Centered Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
            Experience
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            Where I've worked and what I've learned along the way.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 mb-12">
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#111118] text-foreground border border-border shadow-sm hover:border-primary/50 transition-all duration-300 relative z-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-primary pt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description Bullets */}
              <ul className="space-y-2 text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-6 font-sans">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[#f5f0fa] dark:bg-[#1d1927] text-primary font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#111118] text-foreground border border-border shadow-sm relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#f5f0fa] dark:bg-[#1d1927] text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground font-heading">
                {portfolioData.education.institution}
              </h3>
              <p className="text-sm font-semibold text-primary">
                {portfolioData.education.degree}
              </p>
              <p className="text-xs font-mono text-muted-foreground">
                {portfolioData.education.period}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {portfolioData.education.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-[#f5f0fa] dark:bg-[#1d1927] text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
