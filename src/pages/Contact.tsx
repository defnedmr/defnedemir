import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { data, t, language } = useLanguage();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      </div>
    </div>
  );
};
