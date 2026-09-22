import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, data, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.navHome, path: '/' },
    { name: t.navExperience, path: '/experience' },
    { name: t.navProjects, path: '/projects' },
    { name: t.navContact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Name with Logoified SVG Drawing */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-all duration-200 hover:opacity-90 font-heading group"
        ><span>{data.personal.name}</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`text-sm sm:text-base transition-colors duration-200 ${
                    isActive
                      ? 'font-semibold text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Controls: Language Switcher + Theme Toggle */}
          <div className="flex items-center gap-3 pl-2 border-l border-border/60">
            {/* TR / ENG Pill Toggle */}
            <div className="flex items-center p-0.5 rounded-full border border-border bg-card/80 text-xs font-semibold shadow-xs">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === 'tr'
                    ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Türkçe'ye geç"
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Switch to English"
              >
                ENG
              </button>
            </div>

            {/* Circular Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={t.themeToggle}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all shadow-xs hover:scale-105 active:scale-95"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-2.5">
          {/* Compact Mobile Language Switcher */}
          <div className="flex items-center p-0.5 rounded-full border border-border bg-card text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setLanguage('tr')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'tr' ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground'
              }`}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'en' ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground'
              }`}
            >
              ENG
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={t.themeToggle}
            className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 border-b border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base transition-colors ${
                    isActive
                      ? 'font-bold text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
