import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { data, t } = useLanguage();

  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground transition-colors font-sans relative z-10 bg-background/90 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-foreground font-heading">
            {data.personal.name}
          </span>
          <span className="mx-2">•</span>
          <span>{data.personal.title}</span>
          <span className="mx-2">•</span>
          <span>{data.personal.location}</span>
        </div>

      </div>
    </footer>
  );
};
