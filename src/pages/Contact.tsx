import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const contactItems = [
    {
      id: 'email',
      label: 'EMAIL',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      icon: Mail,
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: portfolioData.personal.github,
      href: portfolioData.personal.githubUrl,
      icon: GithubIcon,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: portfolioData.personal.linkedin,
      href: portfolioData.personal.linkedinUrl,
      icon: LinkedinIcon,
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: portfolioData.personal.location,
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
            Contact
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            Have a question or opportunity? Reach out.
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
            Send a quick note
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 font-sans">
            Leave your message directly and I will get back to you shortly.
          </p>

          {isSent ? (
            <div className="p-6 rounded-2xl bg-[#f5f0fa] dark:bg-[#1d1927] text-primary flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div className="text-sm font-medium">
                Message sent successfully! Thank you for reaching out.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#faf8fd] dark:bg-[#171420] text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[#faf8fd] dark:bg-[#171420] text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <textarea
                rows={4}
                required
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-[#faf8fd] dark:bg-[#171420] text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-all flex items-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
