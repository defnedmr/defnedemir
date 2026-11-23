import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Bot,
  BookOpen,
  LifeBuoy,
  Sparkles,
  Layers,
  AlertTriangle
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Project } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Reset photo index when project changes
  useEffect(() => {
    setSelectedPhotoIndex(0);
  }, [project]);

  if (!project) return null;

  const currentPhoto = project.photos[selectedPhotoIndex];
  const hasPhotos = project.photos.length > 0;
  const hasMultiplePhotos = project.photos.length > 1;

  const modalContent = (
    <AnimatePresence>
      {/* Highest Z-Index (z-[100]) via Portal to escape any stacking context */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 select-none">
        
        {/* Full-Screen Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80"
        />

        {/* Width-First Landscape Popup (Short vertical length, image left, explanation right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className={`relative w-[95vw] ${hasPhotos ? 'max-w-4xl' : 'max-w-xl'} rounded-3xl bg-white dark:bg-[#111118] text-foreground border border-border shadow-2xl z-10 max-h-[90vh] overflow-y-auto flex flex-col md:flex-row ${hasPhotos ? 'md:min-h-[390px]' : ''}`}
        >
          {hasPhotos && (
            <div className="w-full md:w-[46%] lg:w-[45%] md:self-stretch shrink-0 bg-black border-b md:border-b-0 md:border-r border-border relative overflow-hidden h-[190px] sm:h-[220px] md:h-auto">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption || project.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: currentPhoto.position }}
              />
              {hasMultiplePhotos && (
                <>
                  <button
                    onClick={() => setSelectedPhotoIndex(prev => (prev === 0 ? project.photos.length - 1 : prev - 1))}
                    aria-label="Previous view"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground shadow-md hover:scale-110 transition-all border border-border"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIndex(prev => (prev === project.photos.length - 1 ? 0 : prev + 1))}
                    aria-label="Next view"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground shadow-md hover:scale-110 transition-all border border-border"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          )}

          {/* ================= RIGHT SIDE: EXPLANATION SPACE ================= */}
          <div className={`w-full ${hasPhotos ? 'md:w-[54%] lg:w-[55%]' : ''} gap-4 p-5 sm:p-6 flex flex-col justify-between bg-white dark:bg-[#111118]`}>
            
            {/* Top Bar: Tech Tags & Close Icon */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5 max-w-[85%]">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-primary font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={onClose}
                aria-label={t.closeBtn}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-muted text-foreground border border-border shadow-sm hover:scale-110 transition-all shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle Section: Title, Description & Highlights */}
            <div className="space-y-2.5 my-auto py-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight font-heading">
                {project.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                {project.fullDesc}
              </p>

              {/* Highlights (Compact 2 items) */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {project.highlights.slice(0, 4).map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 p-2 rounded-xl bg-secondary/60 border border-border/70 text-[11px] font-sans text-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.githubUrl && project.githubUrl !== 'private repo!' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t.githubBtn}</span>
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== 'tba!!!' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-card text-foreground hover:border-primary transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>
                      {project.id === 'ai-chatbot'
                        ? (language === 'tr' ? 'Oyunu Oyna' : 'Play Game')
                        : t.liveDemoBtn}
                    </span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-secondary text-foreground hover:bg-muted transition-colors"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
