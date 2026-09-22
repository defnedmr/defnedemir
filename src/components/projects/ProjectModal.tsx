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

  const currentPhoto = project.photos[selectedPhotoIndex] || { url: '', caption: project.title };
  const hasMultiplePhotos = project.photos.length > 1;

  const renderMockup = (projectId: string) => {
    // 1. KNOCK: AI Interrogation Simulator
    if (projectId === 'ai-chatbot') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0e0d16] text-gray-200 select-none font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800">
            <div className="flex items-center gap-1.5 text-xs text-rose-400">
              <Bot className="w-3.5 h-3.5 text-rose-400" />
              <span>suspect_ai://interrogate</span>
            </div>
            <span className="text-[10px] text-rose-400 font-semibold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20">
              ● {language === 'tr' ? 'SORGU AKTİF' : 'LIVE AI SESSION'}
            </span>
          </div>

          <div className="space-y-2 my-auto text-xs">
            <div className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-400">
              <span className="text-primary font-bold">{language === 'tr' ? 'DEDEKTİF:' : 'DETECTIVE:'}</span> "Where were you between 22:00 and midnight?"
            </div>
            <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-900/40 text-purple-200">
              <span className="text-rose-400 font-bold">{language === 'tr' ? 'ŞÜPHELİ (AI):' : 'SUSPECT (AI):'}</span> "I was in the library... reading alone."
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 text-amber-300 text-[10px] border border-amber-500/20">
              <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{language === 'tr' ? 'Çelişki Saptandı: Kütüphane 20:00\'de kapalıydı.' : 'Contradiction: Library closed at 20:00.'}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1.5 border-t border-gray-800">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span className="text-primary font-bold">itch.io in-browser</span>
          </div>
        </div>
      );
    }

    // 2. CLOVERNOTE: Note Sharing Platform
    if (projectId === 'clovernote') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#fcfaff] to-[#f4eefc] dark:from-[#13121d] dark:to-[#1a1727] text-foreground select-none">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-xs font-semibold font-heading">CloverNote Feed</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
              .NET + Angular
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-xl bg-white dark:bg-[#1a1826] border border-border/80 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-foreground truncate">Data Structures & Algo Notes.pdf</div>
                <div className="text-[9px] text-muted-foreground">CS201 • Computer Engineering</div>
              </div>
              <span className="text-[10px] font-bold text-amber-500">★ 4.9</span>
            </div>

            <div className="p-2 rounded-xl bg-white dark:bg-[#1a1826] border border-border/80 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-foreground truncate">Operating Systems Midterm Review</div>
                <div className="text-[9px] text-muted-foreground">CS302 • Semester 5</div>
              </div>
              <span className="text-[10px] font-bold text-amber-500">★ 4.8</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span className="font-mono">{selectedPhotoIndex + 1}/{project.photos.length}</span>
          </div>
        </div>
      );
    }

    // 3. AYS (Afet Yönetim Sistemi Katkısı)
    if (projectId === 'ays-frontend') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#fcfaff] to-[#f4eefc] dark:from-[#13121d] dark:to-[#1a1727] text-foreground select-none">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <div className="flex items-center gap-1.5">
              <LifeBuoy className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold font-heading">AYS Afet Yönetim Portalı</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Open Source
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2 rounded-xl bg-white dark:bg-[#1a1826] border border-border/80 text-center shadow-xs">
              <div className="text-[14px] font-extrabold text-foreground">42</div>
              <div className="text-[8px] text-muted-foreground uppercase font-medium">{language === 'tr' ? 'Lojistik Nokta' : 'Relief Points'}</div>
            </div>
            <div className="p-2 rounded-xl bg-white dark:bg-[#1a1826] border border-border/80 text-center shadow-xs">
              <div className="text-[14px] font-extrabold text-emerald-600 dark:text-emerald-400">98.4%</div>
              <div className="text-[8px] text-muted-foreground uppercase font-medium">{language === 'tr' ? 'Eşleşme Oranı' : 'Needs Matched'}</div>
            </div>
            <div className="p-2 rounded-xl bg-white dark:bg-[#1a1826] border border-border/80 text-center shadow-xs">
              <div className="text-[14px] font-extrabold text-primary">TS / React</div>
              <div className="text-[8px] text-muted-foreground uppercase font-medium">{language === 'tr' ? 'Kurumsal UI' : 'Institution UI'}</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span className="font-mono">{selectedPhotoIndex + 1}/{project.photos.length}</span>
          </div>
        </div>
      );
    }

    // 4. PORTFOLIO WEBSITE
    if (projectId === 'portfolio-site') {
      return (
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#fcfaff] to-[#f4eefc] dark:from-[#13121d] dark:to-[#1a1727] text-foreground select-none">
          <div className="flex items-center justify-between pb-2 border-b border-border/60">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold font-heading">Interactive 3D Canvas</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Three.js + Vite
            </span>
          </div>

          <div className="text-center my-auto py-2 space-y-1.5 max-w-xs mx-auto">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
              <Layers className="w-3 h-3" />
              <span>Pink & Black / Purple & White Dual Theme</span>
            </div>
            <div className="text-sm font-bold text-foreground font-heading">
              defnedemir.dev
            </div>
            <div className="text-[10px] text-muted-foreground">
              {language === 'tr' ? 'Duyarlı tipografi & akıcı sayfa geçişleri' : 'Responsive typography & fluid page transitions'}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1.5 border-t border-border/60">
            <span className="truncate max-w-[200px]">{currentPhoto.caption}</span>
            <span className="font-mono">{selectedPhotoIndex + 1}/{project.photos.length}</span>
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
            {t.previewLabel}
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
