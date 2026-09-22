export interface ProjectPhoto {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  linkText?: string;
  highlights: string[];
  photos: ProjectPhoto[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  url?: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  name: string;
  list: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  period: string;
  coursework: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  itchio?: string;
  status: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
  education: EducationInfo;
}

export const portfolioDataEn: PortfolioData = {
  personal: {
    name: "Defne Demir",
    title: "Computer Engineering Student",
    bio: "Computer engineering student passionate about building clean software, intelligent systems, and modern web applications. Currently focused on systems programming, machine learning, and full-stack development.",
    location: "Antalya, Turkey",
    email: "dfn.dmr.2005@gmail.com",
    github: "github.com/defnedmr",
    githubUrl: "https://github.com/defnedmr",
    linkedin: "linkedin.com/in/defnedemir07",
    linkedinUrl: "https://linkedin.com/in/defnedemir07",
    itchio: "https://defnkrm.itch.io/",
    status: "Open to junior roles"
  },

  skills: [
    { name: "Languages", list: ["C/C++", "Python", "TypeScript", "JavaScript", "SQL", "Java"] },
    { name: "Technologies & Frameworks", list: ["React", "Node.js", "Express", "Tailwind CSS", "TensorFlow", "Git", "Linux", "Docker"] },
    { name: "Hardware & Systems", list: ["Computer Architecture", "Digital Logic", "Microcontrollers", "Operating Systems"] }
  ],

  projects: [
    {
      id: "portfolio-site",
      title: "Portfolio Website",
      shortDesc: "A personal portfolio built with modern frontend tools and smooth interactions. Focused on performance, light/dark themes, and clean design.",
      fullDesc: "Designed and implemented from scratch to showcase engineering coursework, technical skills, and personal software projects. Features clean dual themes (dark pink/black and light purple/white) with local storage persistence, fully responsive layouts, and soft Three.js WebGL wireframe geometric animations that gracefully fill empty space.",
      tags: ["React", "Tailwind", "TypeScript", "Vite", "Cloudflare"],
      githubUrl: "https://github.com/defndemr/defnedemir",
      liveUrl: "https://defnedemir.dfn-dmr-2005.workers.dev",
      linkText: "View project →",
      highlights: [
        "Dynamic dual-theme system (Pink & Black / Dark Purple & White) with smooth CSS transitions",
        "Interactive 3D WebGL background rendering soft geometric wireframe crystals",
        "High performance and accessibility scores with responsive typography",
        "Deployed globally with automated CI/CD using Cloudflare Pages"
      ],
      photos: [
        { url: "", caption: "Overview of the Projects view and light mode theme" },
        { url: "", caption: "Dark mode contact section with responsive 2x2 grid" },
        { url: "", caption: "Mobile responsive navigation drawer and typography" }
      ]
    },
    {
      id: "ai-chatbot",
      title: "Knock: A Personalized Interrogation Simulator",
      shortDesc: "A full-stack in-browser game that features AI Chatbot",
      fullDesc: "An immersive, browser-based interrogation simulation game where players cross-examine an AI-driven suspect to uncover clues, detect inconsistencies, and solve mystery cases. Leverages conversational AI to generate dynamic, context-aware responses with realistic psychological tension in real time.",
      tags: ["JavaScript", "React", "Tailwind", "AI / LLM", "Game Dev"],
      githubUrl: "https://github.com/defnedmr",
      liveUrl: "https://defnkrm.itch.io/knock-door",
      linkText: "Play on itch.io →",
      highlights: [
        "Real-time conversational AI interrogation engine generating context-aware suspect responses",
        "Dynamic case state tracking player clues, suspicion levels, and narrative branching",
        "Responsive in-browser gaming interface built with modern React and Tailwind CSS",
        "Published and directly playable in-browser on itch.io"
      ],
      photos: [
        { url: "", caption: "Suspect interrogation interface with live AI dialogue response" },
        { url: "", caption: "Evidence notebook and contradiction analysis panel" },
        { url: "", caption: "Main menu, tutorial, and difficulty selection" }
      ]
    },
    {
      id: "clovernote",
      title: "CloverNote: Share Your Notes",
      shortDesc: "A full-stack and mobile first note sharing platform for students.",
      fullDesc: "A comprehensive, mobile-first academic resource and note-sharing platform tailored for university students. Engineered with a scalable .NET backend and an Angular frontend, allowing students to effortlessly upload, organize, search, and collaborate on lecture notes, summaries, and course materials.",
      tags: [".NET", "Angular", "TypeScript", "Git", "Azure"],
      githubUrl: "https://github.com/defnedmr",
      liveUrl: "",
      linkText: "View project →",
      highlights: [
        "Scalable RESTful API architecture engineered with .NET and deployed on Azure",
        "Mobile-first responsive frontend built with Angular and TypeScript for seamless access",
        "Structured course tagging, full-text note search, and community rating system",
        "Secure document upload pipeline with optimized cloud file storage"
      ],
      photos: [
        { url: "", caption: "Mobile-first feed of trending course notes and study materials" },
        { url: "", caption: "Interactive note viewer with categorization and ratings" },
        { url: "", caption: "Upload flow and course selection dashboard" }
      ]
    },
    {
      id: "ays-frontend",
      title: "Contributor for AYS",
      shortDesc: "An open source disaster management system that's being developed by volunteers.",
      fullDesc: "Active open-source frontend contributor to Afet Yönetim Sistemi (AYS) — a civic software initiative developed by volunteer engineers to streamline disaster relief coordination, institutional logistics, and volunteer management during humanitarian crises.",
      tags: ["TypeScript", "React", "Jira", "Confluence", "Open Source"],
      githubUrl: "https://github.com/afet-yonetim-sistemi/ays-fe-institution",
      liveUrl: "https://afetyonetimsistemi.org/",
      linkText: "View project →",
      highlights: [
        "Contributed to institutional frontend dashboards by resolving bugs and building key UI features",
        "Collaborated in an agile cross-functional volunteer team using Jira and Confluence",
        "Employed TypeScript and modern UI practices ensuring reliable performance during emergency traffic"
      ],
      photos: [
        { url: "", caption: "Institutional disaster response dashboard and status tracking" },
        { url: "", caption: "Relief coordination workflows and institutional data table" }
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Software Engineering Intern",
      organization: "SANTSG",
      url: "https://www.santsg.com/",
      period: "Jun 2026 – August 2026",
      location: "Antalya, Turkey",
      description: [
        "Contributed to building Itera (https://itera-web-49635627550.europe-west1.run.app), an AI-first travel companion.",
        "Engineered backend service workflows and integrated external third-party travel APIs with internal endpoints.",
        "Collaborated with senior engineers in Agile sprints and participated in peer code reviews."
      ],
      tags: [".NET", "TypeScript", "C#", "PostgreSQL", "Git"]
    },
    {
      id: "exp-2",
      role: "Software Engineering Intern",
      organization: "Revlo AI",
      url: "https://www.revloai.com/",
      period: "June 2025 – September 2025",
      location: "Antalya, Turkey",
      description: [
        "Assisted in building automated web-scraping pipelines and interactive frontend interfaces.",
        "Contributed to data intelligence features utilizing machine learning models to extract insights from unstructured data.",
        "Practiced Scrum workflows and collaborative version control within a dynamic team setting."
      ],
      tags: ["JavaScript", "TypeScript", "Machine Learning", "Algorithms", "Python"]
    },
    {
      id: "exp-3",
      role: "Project Team Member",
      organization: "Akdeniz University Computer Society",
      period: "January 2024 – June 2025",
      location: "Antalya, Turkey",
      description: [
        "Organized hands-on coding workshops covering modern web development and algorithmic problem solving.",
        "Coordinated hackathons, game jams, and tech events in partnership with industry leaders such as Akbank.",
        "Mentored incoming engineering freshmen on Git, GitHub workflows, and computer engineering academic tracks."
      ],
      tags: ["Leadership", "Engineering", "Event Organization", "Teamwork"]
    }
  ],

  education: {
    institution: "Akdeniz University",
    degree: "B.S. in Computer Engineering",
    period: "2023 – 2027 (Expected)",
    coursework: ["3.6 GPA","Data Structures & Algorithms", "Operating Systems", "Computer Architecture", "Database Systems", "Software Engineering", "Computer Networks & Security", "Large Language Models"]
  }
};

export const portfolioDataTr: PortfolioData = {
  personal: {
    name: "Defne Demir",
    title: "Bilgisayar Mühendisliği Öğrencisi",
    bio: "Temiz yazılımlar, akıllı sistemler ve modern web uygulamaları geliştirmeye tutkulu bilgisayar mühendisliği öğrencisi. Sistem programlama, makine öğrenimi ve full-stack geliştirme alanlarına odaklanmaktadır.",
    location: "Antalya, Türkiye",
    email: "dfn.dmr.2005@gmail.com",
    github: "github.com/defnedmr",
    githubUrl: "https://github.com/defnedmr",
    linkedin: "linkedin.com/in/defnedemir07",
    linkedinUrl: "https://linkedin.com/in/defnedemir07",
    itchio: "https://defnkrm.itch.io/",
    status: "Junior pozisyonlara açık"
  },

  skills: [
    { name: "Programlama Dilleri", list: ["C/C++", "Python", "TypeScript", "JavaScript", "SQL", "Java"] },
    { name: "Teknolojiler & Kütüphaneler", list: ["React", "Node.js", "Express", "Tailwind CSS", "TensorFlow", "Git", "Linux", "Docker"] },
    { name: "Donanım & Sistemler", list: ["Bilgisayar Mimarisi", "Sayısal Mantık", "Mikrodenetleyiciler", "İşletim Sistemleri"] }
  ],

  projects: [
    {
      id: "portfolio-site",
      title: "Portfolyo Web Sitesi",
      shortDesc: "Modern frontend araçları ve akıcı etkileşimlerle geliştirilmiş kişisel portfolyo. Performans, açık/koyu tema ve yalın tasarıma odaklı.",
      fullDesc: "Mühendislik çalışmalarımı, teknik becerilerimi ve kişisel yazılım projelerimi sergilemek amacıyla sıfırdan tasarlandı ve geliştirildi. Yerel depolama (localStorage) ile kalıcı çift tema (koyu pembe/siyah ve açık mor/beyaz), tam duyarlı düzenler ve arka plandaki boşlukları zarifçe dolduran Three.js WebGL tel kafes geometrik animasyonları içerir.",
      tags: ["React", "Tailwind", "TypeScript", "Vite", "Cloudflare"],
      githubUrl: "https://github.com/defndemr/defnedemir",
      liveUrl: "https://defnedemir.dfn-dmr-2005.workers.dev",
      linkText: "Projeyi incele →",
      highlights: [
        "Akıcı CSS geçişlerine sahip dinamik çift tema sistemi (Pembe & Siyah / Koyu Mor & Beyaz)",
        "Zarif tel kafes kristalleri sunan etkileşimli 3D WebGL arka plan animasyonu",
        "Duyarlı tipografi ve sıfır yerleşim kayması ile yüksek performans ve erişilebilirlik",
        "Cloudflare Pages üzerinde otomatik CI/CD dağıtımıyla global olarak yayında"
      ],
      photos: [
        { url: "", caption: "Projeler görünümü ve açık tema tasarımı" },
        { url: "", caption: "2x2 duyarlı ızgarada koyu tema iletişim alanı" },
        { url: "", caption: "Mobil uyumlu menü çekmecesi ve tipografi" }
      ]
    },
    {
      id: "ai-chatbot",
      title: "Knock: Kişiselleştirilmiş Sorgu Simülatörü",
      shortDesc: "Yapay zekâ sohbet botu (AI Chatbot) destekli, tarayıcı tabanlı full-stack simülasyon oyunu.",
      fullDesc: "Oyuncuların ipuçlarını ortaya çıkarmak, çelişkileri yakalamak ve gizemli vakaları aydınlatmak için yapay zekâ destekli bir şüpheliyi çapraz sorguya aldığı, tarayıcı tabanlı etkileşimli bir sorgu simülasyon oyunu. Gerçek zamanlı olarak bağlama duyarlı yanıtlar ve gerçekçi psikolojik gerilim üretmek için üretken yapay zekâdan yararlanır.",
      tags: ["JavaScript", "React", "Tailwind", "AI / LLM", "Game Dev"],
      githubUrl: "https://github.com/defnedmr",
      liveUrl: "https://defnkrm.itch.io/knock-door",
      linkText: "itch.io'da oyna →",
      highlights: [
        "Bağlama duyarlı şüpheli yanıtları üreten gerçek zamanlı yapay zekâ diyalog motoru",
        "İpuçlarını, şüphe seviyesini ve dallanan senaryoları takip eden dinamik vaka durumu",
        "Modern React ve Tailwind CSS ile geliştirilmiş sezgisel tarayıcı içi oyun arayüzü",
        "itch.io üzerinde doğrudan tarayıcıdan oynanabilir ve yayında"
      ],
      photos: [
        { url: "", caption: "Canlı yapay zekâ diyalog yanıtlı şüpheli sorgu ekranı" },
        { url: "", caption: "Kanıt defteri ve çelişki inceleme paneli" },
        { url: "", caption: "Ana menü, eğitim ve zorluk seviyesi seçimi" }
      ]
    },
    {
      id: "clovernote",
      title: "CloverNote: Notlarını Paylaş",
      shortDesc: "Öğrenciler için geliştirilmiş, mobil öncelikli (mobile-first) full-stack ders notu paylaşım platformu.",
      fullDesc: "Üniversite öğrencileri için tasarlanmış, iş birliğine dayalı ve mobil öncelikli akademik kaynak paylaşım platformu. Ölçeklenebilir .NET arka ucu ve Angular ön yüzü ile inşa edilmiş olup öğrencilerin ders notlarını ve çalışma kılavuzlarını kolayca yüklemesine, kategorize etmesine, aramasına ve değerlendirmesine imkân tanır.",
      tags: [".NET", "Angular", "TypeScript", "Git", "Azure"],
      githubUrl: "https://github.com/defnedmr",
      liveUrl: "",
      linkText: "Projeyi incele →",
      highlights: [
        ".NET ile geliştirilmiş ve Azure üzerinde barındırılan ölçeklenebilir RESTful API mimarisi",
        "Angular ve TypeScript ile hazırlanmış mobil öncelikli, akıcı tek sayfa uygulaması (SPA)",
        "Kategorize edilmiş ders dizini, tam metin not arama ve topluluk puanlama mekanizması",
        "Optimize edilmiş bulut dosya depolamasıyla güvenli doküman yükleme süreci"
      ],
      photos: [
        { url: "", caption: "Mobil öncelikli ders akışı ve popüler çalışma notları" },
        { url: "", caption: "Okuyucu kontrolleri ve puanlama içeren etkileşimli not görüntüleyici" },
        { url: "", caption: "Ders etiketleme ve meta veri girişiyle not yükleme akışı" }
      ]
    },
    {
      id: "ays-frontend",
      title: "AYS Açık Kaynak Katkısı",
      shortDesc: "Gönüllüler tarafından geliştirilen açık kaynak afet yönetim sistemi.",
      fullDesc: "Gönüllü yazılımcılar tarafından geliştirilen Afet Yönetim Sistemi'ne (AYS) aktif açık kaynak ön yüz katkısı. İnsani kriz anlarında afet yardımı koordinasyonu, kurumsal lojistik ve gönüllü yönetim süreçlerini hızlandırmayı ve kolaylaştırmayı hedefler.",
      tags: ["TypeScript", "React", "Jira", "Confluence", "Open Source"],
      githubUrl: "https://github.com/afet-yonetim-sistemi/ays-fe-institution",
      liveUrl: "https://afetyonetimsistemi.org/",
      linkText: "Projeyi incele →",
      highlights: [
        "Kurumsal ön yüz panellerinde hata çözümleri ve yeni kullanıcı özellikleri geliştirildi",
        "Jira ve Confluence araçlarıyla sprint takibi yapan çevik gönüllü ekiple iş birliği sağlandı",
        "Kriz anlarındaki yoğun trafikte güvenilirlik sağlayan TypeScript ve modern UI standartları uygulandı"
      ],
      photos: [
        { url: "", caption: "Kurumsal afet yönetim ve durum takip paneli" },
        { url: "", caption: "Yardım koordinasyon modülü ve lojistik veri tablosu" }
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Yazılım Mühendisliği Stajyeri",
      organization: "SANTSG",
      url: "https://www.santsg.com/",
      period: "Haziran 2026 – Ağustos 2026",
      location: "Antalya, Türkiye",
      description: [
        "Yapay zekâ öncelikli seyahat asistanı Itera'nın (https://itera-web-49635627550.europe-west1.run.app) geliştirilmesine katkı sağlandı.",
        "Arka uç (backend) servis iş akışları tasarlandı ve harici seyahat API'leri dâhilî uç noktalarla entegre edildi.",
        "Çevik (Agile) sprintlerde kıdemli mühendislerle iş birliği yapıldı ve kod inceleme (code review) süreçlerine dâhil olundu."
      ],
      tags: [".NET", "TypeScript", "C#", "PostgreSQL", "Git"]
    },
    {
      id: "exp-2",
      role: "Yazılım Mühendisliği Stajyeri",
      organization: "Revlo AI",
      url: "https://www.revloai.com/",
      period: "Haziran 2025 – Eylül 2025",
      location: "Antalya, Türkiye",
      description: [
        "Otomatik web kazıma (web-scraping) veri hatlarının ve etkileşimli ön yüz arayüzlerinin geliştirilmesine destek verildi.",
        "Yapılandırılmamış verilerden öngörü elde etmek amacıyla makine öğrenimi modelleriyle veri işleme özelliklerine katkı sağlandı.",
        "Dinamik ekip yapısında Scrum metodolojisi ve aktif sürüm kontrol süreçleri yürütüldü."
      ],
      tags: ["JavaScript", "TypeScript", "Machine Learning", "Algorithms", "Python"]
    },
    {
      id: "exp-3",
      role: "Proje Ekibi Üyesi",
      organization: "Akdeniz Üniversitesi Bilgisayar Topluluğu",
      period: "Ocak 2024 – Haziran 2025",
      location: "Antalya, Türkiye",
      description: [
        "Modern web geliştirme ve algoritmik problem çözme konularında uygulamalı kodlama atölyeleri düzenlendi.",
        "Akbank gibi sektör liderleriyle iş birliği içinde oyun geliştirme maratonları (game jam) ve teknoloji etkinlikleri organize edildi.",
        "Yeni başlayan mühendislik öğrencilerine Git, GitHub iş akışları ve bilgisayar mühendisliği kariyer yolları hakkında mentorluk yapıldı."
      ],
      tags: ["Liderlik", "Mühendislik", "Etkinlik Organizasyonu", "Takım Çalışması"]
    }
  ],

  education: {
    institution: "Akdeniz Üniversitesi",
    degree: "Bilgisayar Mühendisliği Lisans",
    period: "2023 – 2027 (Beklenen)",
    coursework: ["3.6 AGNO","Veri Yapıları & Algoritmalar", "İşletim Sistemleri", "Bilgisayar Mimarisi", "Veri Tabanı Sistemleri", "Yazılım Mühendisliği", "Ağlar & Bilgi Güvenliği", "Büyük Dil Modelleri (LLMs)"]
  }
};

// Default backward compatibility export
export const portfolioData = portfolioDataEn;
