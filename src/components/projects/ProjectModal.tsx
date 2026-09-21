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
  Terminal,
  BarChart3,
  CheckSquare
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { Project } from '../../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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

  const currentPhoto = project.photos[selectedPhotoIndex] || { url: '', caption: 'Project Preview' };
  const hasMultiplePhotos = project.photos.length > 1;

  const renderMockup = (projectId: string) => {
    if (projectId === 'task-tracker') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#fcfaff] to-[#f4eefc] dark:from-[#13121d] dark:to-[#1a1727] text-foreground select-none">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <div className="flex items-center gap-1.5">
              <CheckSquare className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold">Workspace Board</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
              Live Sync
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1826] border border-border/80 shadow-sm space-y-1">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase">To Do</div>
              <div className="p-1 rounded bg-secondary text-[9px] font-medium border border-border/40 truncate">
                DB Indexes
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1826] border border-border/80 shadow-sm space-y-1">
              <div className="text-[9px] font-semibold text-primary uppercase">Active</div>
              <div className="p-1 rounded bg-primary/10 text-primary text-[9px] font-medium border border-primary/20 truncate">
                Kanban UI
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1826] border border-border/80 shadow-sm space-y-1">
              <div className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">Done</div>
              <div className="p-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-medium border border-emerald-500/20 line-through truncate">
                JWT Auth
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span className="font-mono">{selectedPhotoIndex + 1}/{project.photos.length}</span>
          </div>
        </div>
      );
    }

    if (projectId === 'ml-classification') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#fcfaff] to-[#f4eefc] dark:from-[#13121d] dark:to-[#1a1727] text-foreground select-none">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold">Evaluation Results</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Acc: 96.4%
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1826] border border-border/80 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="text-[10px] font-bold text-primary truncate w-full">Random Forest</div>
              <div className="text-base font-extrabold text-foreground mt-0.5">0.96</div>
              <div className="text-[8px] text-muted-foreground">F1 Score</div>
            </div>

            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1826] border border-border/80 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="text-[10px] font-bold text-primary truncate w-full">Neural MLP</div>
              <div className="text-base font-extrabold text-foreground mt-0.5">0.94</div>
              <div className="text-[8px] text-muted-foreground">F1 Score</div>
            </div>

            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1826] border border-border/80 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="text-[10px] font-bold text-primary truncate w-full">SVM (RBF)</div>
              <div className="text-base font-extrabold text-foreground mt-0.5">0.92</div>
              <div className="text-[8px] text-muted-foreground">F1 Score</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span className="font-mono">{selectedPhotoIndex + 1}/{project.photos.length}</span>
          </div>
        </div>
      );
    }

    if (projectId === 'riscv-sim' || projectId === 'mini-os') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0e0d16] text-gray-200 select-none font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>debugger@riscv:~$</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">● RUNNING</span>
          </div>

          <div className="space-y-1 text-xs text-gray-300 my-auto leading-relaxed">
            <div className="text-emerald-400">&gt; load_binary --elf ./kernel.elf</div>
            <div className="text-gray-400">[0x00] ADDI x1, x0, 42</div>
            <div className="text-gray-400">[0x04] SW   x1, 0(x2)</div>
            <div className="text-pink-400">[STATUS] PC = 0x00000008</div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1.5 border-t border-gray-800">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span>ELF32 • Cycle 1048</span>
          </div>
        </div>
      );
    }

    // Default preview
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#fcfaff] to-[#f4eefc] dark:from-[#13121d] dark:to-[#1a1727] text-foreground select-none">
        <div className="flex items-center justify-between pb-2 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold">{project.title} Interface</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
            Preview
          </span>
        </div>

        <div className="text-center my-auto py-2 space-y-1 max-w-xs mx-auto">
          <div className="text-base font-bold text-foreground font-heading">{project.title}</div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {currentPhoto.caption || project.shortDesc}
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
          <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
          <span className="font-mono">{selectedPhotoIndex + 1}/{project.photos.length}</span>
        </div>
      </div>
    );
  };

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
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Width-First Landscape Popup (Short vertical length, image left, explanation right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-[95vw] max-w-4xl rounded-3xl bg-white dark:bg-[#111118] text-foreground border border-border shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row md:h-[390px] md:max-h-[420px]"
        >
          {/* ================= LEFT SIDE: IMAGE / PREVIEW SPACE ================= */}
          <div className="w-full md:w-[46%] lg:w-[45%] shrink-0 flex flex-col bg-secondary/30 border-b md:border-b-0 md:border-r border-border relative overflow-hidden h-[190px] sm:h-[220px] md:h-full">
            
            {/* Top Mockup Header Bar */}
            <div className="px-3.5 py-2 bg-secondary/80 border-b border-border flex items-center justify-between text-[11px] shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="px-2.5 py-0.5 rounded-md bg-card text-[10px] font-mono text-muted-foreground border border-border/60 truncate max-w-[150px] sm:max-w-[200px]">
                defnedemir.dev/projects/{project.id}
              </div>
              <div className="text-[10px] font-mono text-muted-foreground">
                {selectedPhotoIndex + 1}/{project.photos.length}
              </div>
            </div>

            {/* Photo / Mockup Container */}
            <div className="relative flex-1 w-full bg-card overflow-hidden flex items-center justify-center">
              {currentPhoto.url ? (
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.caption || project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                renderMockup(project.id)
              )}

              {/* Photo Controls (< >) if multiple photos */}
              {hasMultiplePhotos && (
                <>
                  <button
                    onClick={() =>
                      setSelectedPhotoIndex(prev => (prev === 0 ? project.photos.length - 1 : prev - 1))
                    }
                    aria-label="Previous view"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground shadow-md hover:scale-110 transition-all border border-border"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedPhotoIndex(prev => (prev === project.photos.length - 1 ? 0 : prev + 1))
                    }
                    aria-label="Next view"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground shadow-md hover:scale-110 transition-all border border-border"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ================= RIGHT SIDE: EXPLANATION SPACE ================= */}
          <div className="w-full md:w-[54%] lg:w-[55%] p-5 sm:p-6 flex flex-col justify-between bg-white dark:bg-[#111118]">
            
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
                aria-label="Close modal"
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

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans line-clamp-3">
                {project.fullDesc}
              </p>

              {/* Highlights (Compact 2 items) */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {project.highlights.slice(0, 2).map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-secondary/60 border border-border/70 text-[11px] font-sans text-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-card text-foreground hover:border-primary transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border border-border bg-secondary text-foreground hover:bg-muted transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
