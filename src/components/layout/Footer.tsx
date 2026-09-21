import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground transition-colors font-sans">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-foreground font-heading">
            {portfolioData.personal.name}
          </span>
          <span className="mx-2">•</span>
          <span>{portfolioData.personal.title}</span>
          <span className="mx-2">•</span>
          <span>{portfolioData.personal.location}</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link to="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
