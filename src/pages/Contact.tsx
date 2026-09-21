import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { data, t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const contactItems = [
    {
      id: 'email',
      label: language === 'tr' ? 'E-POSTA' : 'EMAIL',
      value: data.personal.email,
      href: `mailto:${data.personal.email}`,
      icon: Mail,
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: data.personal.github,
      href: data.personal.githubUrl,
      icon: GithubIcon,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: data.personal.linkedin,
      href: data.personal.linkedinUrl,
      icon: LinkedinIcon,
    },
    {
      id: 'location',
      label: language === 'tr' ? 'KONUM' : 'LOCATION',
      value: data.personal.location,
      href: undefined,
      icon: MapPin,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Centered Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
            {t.contactTitle}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            {t.contactSubtitle}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#111118] text-foreground border border-border shadow-sm hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group relative z-10"
              >
                {/* Circular Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f5f0fa] dark:bg-[#1d1927] text-primary shrink-0 transition-transform group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="truncate">
                  <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase font-medium">
                    {item.label}
                  </span>
                  <div className="text-sm sm:text-base font-semibold text-foreground truncate pt-0.5 group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            );

            return item.href ? (
              <a
                key={item.id}
                href={item.href}
                target={item.id !== 'email' ? '_blank' : undefined}
                rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={item.id}>{CardContent}</div>
            );
          })}
        </div>

        {/* Clean Message Box */}
        <div className="rounded-3xl p-7 sm:p-10 bg-white dark:bg-[#111118] border border-border shadow-sm relative z-10">
          <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
            {t.sendNoteTitle}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 font-sans">
            {t.sendNoteSubtitle}
          </p>

          {isSent ? (
            <div className="p-6 rounded-2xl bg-[#f5f0fa] dark:bg-[#1d1927] text-primary flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div className="text-sm font-medium">
                {t.messageSuccess}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#faf8fd] dark:bg-[#171420] text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#faf8fd] dark:bg-[#171420] text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <textarea
                rows={4}
                required
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-[#faf8fd] dark:bg-[#171420] text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-all flex items-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{t.sendMessageBtn}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
