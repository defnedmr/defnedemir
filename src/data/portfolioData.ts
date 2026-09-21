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
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "Defne Demir",
    title: "Computer Engineering Student",
    bio: "Computer engineering student passionate about building clean software, low-level systems, and modern web applications. Currently focused on systems programming, machine learning, and full-stack development.",
    location: "Antalya, Turkey",
    email: "dfn.dmr.2005@gmail.com",
    github: "github.com/defnedmr",
    githubUrl: "https://github.com/defnedmr",
    linkedin: "linkedin.com/in/defnedemir07",
    linkedinUrl: "https://linkedin.com/in/defnedemir",
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
      fullDesc: "Designed and implemented from scratch to showcase engineering coursework and personal software projects. Features clean dual themes (dark pink/black and light purple/white) with local storage persistence, responsive layouts, and soft Three.js WebGL wireframe geometric animations that gracefully fill empty space.",
      tags: ["React", "Tailwind", "TypeScript", "Three.js", "Vite"],
      githubUrl: "https://github.com/defnedemir/portfolio",
      liveUrl: "https://defnedemir.dev",
      linkText: "View project →",
      highlights: [
        "Dynamic dual-theme system (Pink & Black / Dark Purple & White) with smooth CSS transitions",
        "Interactive 3D WebGL background rendering soft geometric wireframe crystals",
        "Fully responsive multi-page architecture with seamless Framer Motion transitions",
        "Accessible, high-performance score with zero layout shift"
      ],
      photos: [
        { url: "", caption: "Overview of the Projects view and light mode theme" },
        { url: "", caption: "Dark mode contact section with responsive 2x2 grid" },
        { url: "", caption: "Mobile responsive navigation drawer and typography" }
      ]
    },
    {
      id: "task-tracker",
      title: "Task Tracker App",
      shortDesc: "A full-stack task management application with authentication, real-time updates, categories, and a minimal productive dashboard.",
      fullDesc: "A minimalist productivity dashboard built to manage daily developer workflows. Includes JWT-based authentication, real-time status updates, priority sorting, tags, and persistent data storage in MongoDB with automated indexing.",
      tags: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
      githubUrl: "https://github.com/defnedemir/task-tracker",
      liveUrl: "https://github.com/defnedemir/task-tracker",
      linkText: "View project →",
      highlights: [
        "Secure user authentication with JWT, bcrypt password hashing, and cookie management",
        "RESTful API architecture built on Express with error handling middleware",
        "Interactive drag-and-drop task reordering with optimistic UI updates",
        "Category tagging, deadline notifications, and progress visualization charts"
      ],
      photos: [
        { url: "", caption: "Main dashboard displaying active tasks and priority tags" },
        { url: "", caption: "Task creation modal with date picker and subtasks" },
        { url: "", caption: "Analytics overview showing completion rates" }
      ]
    },
    {
      id: "ml-classification",
      title: "ML Classification Demo",
      shortDesc: "An interactive demo showcasing classification models with visual explanations, real-time evaluation metrics, and dataset exploratory tools.",
      fullDesc: "Built an interactive web demo that allows students and researchers to visualize how various classification algorithms (Random Forest, SVM, MLP Neural Networks) partition feature spaces on multi-dimensional datasets.",
      tags: ["Python", "TensorFlow", "Streamlit", "NumPy", "Scikit-Learn"],
      githubUrl: "https://github.com/defnedemir/ml-classification",
      liveUrl: "https://github.com/defnedemir/ml-classification",
      linkText: "View project →",
      highlights: [
        "Interactive decision boundary plots rendered in real-time as hyperparameters change",
        "Comprehensive model evaluation with Confusion Matrix, ROC-AUC curve, and F1-score",
        "Custom synthetic dataset generator allowing noise and distribution tweaks",
        "Exportable model weights and classification reports in JSON/CSV formats"
      ],
      photos: [
        { url: "", caption: "Interactive decision boundary visualization across 2D features" },
        { url: "", caption: "Model performance metrics and confusion matrix" },
        { url: "", caption: "Dataset parameter adjustment sidebar" }
      ]
    },
    {
      id: "riscv-sim",
      title: "RISC-V Instruction Simulator",
      shortDesc: "A cycle-accurate 32-bit RISC-V simulator executing assembly binaries, memory-mapped I/O, and register file inspection.",
      fullDesc: "Developed a software simulation environment in C++ for the RISC-V RV32I base integer instruction set. Emulates program counter fetching, instruction decoding, ALU execution, and memory read/writes with detailed register state dumps.",
      tags: ["C++", "RISC-V", "Assembly", "Architecture", "CMake"],
      githubUrl: "https://github.com/defnedemir/riscv-simulator",
      liveUrl: "https://github.com/defnedemir/riscv-simulator",
      linkText: "View project →",
      highlights: [
        "Complete implementation of the RV32I user-level instruction specification",
        "Cycle-by-cycle execution mode with step-in, step-over, and breakpoint debugging",
        "Disassembler engine mapping machine hex opcodes back into human-readable assembly",
        "Memory-mapped UART peripheral emulation for simulated terminal output"
      ],
      photos: [
        { url: "", caption: "Register file state inspector and current PC disassembled instruction" },
        { url: "", caption: "Memory dump viewer showing stack and heap allocations" }
      ]
    },
    {
      id: "iot-monitor",
      title: "Embedded Sensor Dashboard",
      shortDesc: "IoT environmental monitor reading temperature, humidity, and air quality metrics over MQTT with a responsive live dashboard.",
      fullDesc: "An end-to-end IoT telemetry system connecting an ESP32 microcontroller with environmental sensors over Wi-Fi/MQTT to a live WebSocket server and React dashboard. Provides real-time time-series telemetry charts.",
      tags: ["ESP32", "C++", "MQTT", "React", "WebSockets"],
      githubUrl: "https://github.com/defnedemir/iot-dashboard",
      liveUrl: "https://github.com/defnedemir/iot-dashboard",
      linkText: "View project →",
      highlights: [
        "Non-blocking sensor acquisition on ESP32 using FreeRTOS tasks and hardware timers",
        "Lightweight MQTT packet publishing with automatic reconnect and QoS 1 delivery",
        "Smooth live chart rendering at 60 FPS using HTML5 Canvas / Chart.js",
        "Threshold alert trigger sending push notifications when air quality drops"
      ],
      photos: [
        { url: "", caption: "Live sensor telemetry graphs with real-time updates" },
        { url: "", caption: "ESP32 hardware breadboard prototype with OLED display" }
      ]
    },
    {
      id: "mini-os",
      title: "Toy Kernel & Multitasker",
      shortDesc: "An educational x86 kernel with keyboard driver, round-robin multitasking, and basic memory management.",
      fullDesc: "Built a toy 32-bit protected mode operating system kernel from bare metal. Features GRUB multiboot loading, interrupt service routines (ISRs), PIT timer-based preemptive scheduling, and a VGA text console driver.",
      tags: ["C", "x86 ASM", "QEMU", "OS Dev", "Makefile"],
      githubUrl: "https://github.com/defnedemir/toy-kernel",
      liveUrl: "https://github.com/defnedemir/toy-kernel",
      linkText: "View project →",
      highlights: [
        "Global Descriptor Table (GDT) and Interrupt Descriptor Table (IDT) configuration in x86 Assembly",
        "Preemptive round-robin thread scheduler driven by the 8253 PIT clock",
        "Simple memory allocation with bitmap physical page frame manager",
        "Interactive CLI shell supporting custom commands (echo, meminfo, clear, help)"
      ],
      photos: [
        { url: "", caption: "QEMU virtual machine booting the kernel into 32-bit protected mode" },
        { url: "", caption: "Kernel shell executing built-in commands and displaying memory usage" }
      ]
    }
  ] as Project[],

  experiences: [
    {
      id: "exp-1",
      role: "Software Engineering Intern",
      organization: "Tech Solutions",
      period: "Jun 2025 – Sep 2025",
      location: "Istanbul, Turkey",
      description: [
        "Built responsive web components using React and TypeScript for internal client dashboards.",
        "Created RESTful API endpoints with Node.js and improved database query efficiency.",
        "Collaborated with senior engineers in Agile sprints and peer code reviews."
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Git"]
    },
    {
      id: "exp-2",
      role: "Undergraduate Teaching Assistant",
      organization: "University Computer Engineering Dept.",
      period: "Oct 2024 – Present",
      location: "Istanbul, Turkey",
      description: [
        "Assisted in weekly lab sessions for Introduction to Programming and Data Structures courses.",
        "Held office hours helping over 60 students debug C and Python assignments.",
        "Prepared automated test cases for student homework submissions."
      ],
      tags: ["C", "Python", "Data Structures", "Algorithms"]
    },
    {
      id: "exp-3",
      role: "Project Team Member",
      organization: "Akdeniz University Computer Society",
      period: "January 2024 – June 2025",
      location: "Antalya, Turkey",
      description: [
        "Organized coding workshops on web development and algorithm problem solving.",
        "Led a team of 5 students developing the official club event registration portal.",
        "Mentored incoming freshmen on Git, GitHub, and university engineering pathways."
      ],
      tags: ["Leadership", "Web Dev", "Event Organization", "Mentoring"]
    }
  ] as ExperienceItem[],

  education: {
    institution: "Istanbul Technical University (ITU)",
    degree: "B.S. in Computer Engineering",
    period: "2022 – 2026 (Expected)",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Architecture", "Database Systems", "Software Engineering", "Computer Networks"]
  }
};
