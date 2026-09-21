import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, portfolioDataEn, portfolioDataTr } from '../data/portfolioData';

export type Language = 'en' | 'tr';

export interface Translations {
  // Navigation
  navHome: string;
  navExperience: string;
  navProjects: string;
  navContact: string;
  themeToggle: string;
  langToggle: string;

  // Home Hero
  greeting: string;
  viewProjects: string;
  getInTouch: string;
  langOptionTr: string;
  langOptionEn: string;

  // Home Featured
  featuredProjects: string;
  featuredSubtitle: string;
  seeAll: string;
  viewProjectBtn: string;

  // Experience
  experienceTitle: string;
  experienceSubtitle: string;
  educationTitle: string;

  // Projects
  projectsTitle: string;
  projectsSubtitle: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  sendNoteTitle: string;
  sendNoteSubtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendMessageBtn: string;
  messageSuccess: string;

  // Modal
  closeBtn: string;
  liveDemoBtn: string;
  githubBtn: string;
  previewLabel: string;
}

const translations: Record<Language, Translations> = {
  en: {
    navHome: 'Home',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    themeToggle: 'Toggle Theme',
    langToggle: 'Switch to Turkish',

    greeting: "Hi, I'm",
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    langOptionTr: 'Türkçe',
    langOptionEn: 'English',

    featuredProjects: 'Featured Projects',
    featuredSubtitle: 'A selection of recent projects and experiments.',
    seeAll: 'See all',
    viewProjectBtn: 'View project →',

    experienceTitle: 'Experience',
    experienceSubtitle: "Where I've worked and what I've learned along the way.",
    educationTitle: 'Education',

    projectsTitle: 'Projects',
    projectsSubtitle: "A few things I've built while learning.",

    contactTitle: 'Contact',
    contactSubtitle: 'Have a question or opportunity? Reach out.',
    sendNoteTitle: 'Send a quick note',
    sendNoteSubtitle: 'Leave your message directly and I will get back to you shortly.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message...',
    sendMessageBtn: 'Send Message',
    messageSuccess: 'Message sent successfully! Thank you for reaching out.',

    closeBtn: 'Close',
    liveDemoBtn: 'Live Demo',
    githubBtn: 'GitHub',
    previewLabel: 'Preview'
  },
  tr: {
    navHome: 'Ana Sayfa',
    navExperience: 'Deneyim',
    navProjects: 'Projeler',
    navContact: 'İletişim',
    themeToggle: 'Temayı Değiştir',
    langToggle: "İngilizce'ye Geç",

    greeting: 'Merhaba, ben',
    viewProjects: 'Projeleri Gör',
    getInTouch: 'İletişime Geç',
    langOptionTr: 'Türkçe',
    langOptionEn: 'English',

    featuredProjects: 'Öne Çıkan Projeler',
    featuredSubtitle: 'Geliştirdiğim güncel projeler ve çalışmalardan bir seçki.',
    seeAll: 'Tümünü gör',
    viewProjectBtn: 'Projeyi incele →',

    experienceTitle: 'Deneyim',
    experienceSubtitle: 'Çalıştığım yerler ve bu süreçte edindiğim tecrübeler.',
    educationTitle: 'Eğitim',

    projectsTitle: 'Projeler',
    projectsSubtitle: 'Öğrenme sürecimde geliştirdiğim projeler.',

    contactTitle: 'İletişim',
    contactSubtitle: 'Bir sorunuz veya iş birliği fırsatınız mı var? İletişime geçin.',
    sendNoteTitle: 'Hızlı bir mesaj bırakın',
    sendNoteSubtitle: 'Mesajınızı doğrudan iletin, en kısa sürede geri dönüş yapayım.',
    namePlaceholder: 'Adınız Soyadınız',
    emailPlaceholder: 'E-posta Adresiniz',
    messagePlaceholder: 'Mesajınız...',
    sendMessageBtn: 'Mesaj Gönder',
    messageSuccess: 'Mesajınız başarıyla iletildi! İletişime geçtiğiniz için teşekkürler.',

    closeBtn: 'Kapat',
    liveDemoBtn: 'Canlı Önizleme',
    githubBtn: 'GitHub',
    previewLabel: 'Önizleme'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: PortfolioData;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_language') as Language;
    if (saved === 'en' || saved === 'tr') {
      return saved;
    }
    // Default to Turkish or browser preference
    const browserLang = navigator.language?.toLowerCase();
    if (browserLang.startsWith('tr')) {
      return 'tr';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const data = language === 'tr' ? portfolioDataTr : portfolioDataEn;
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        data,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
