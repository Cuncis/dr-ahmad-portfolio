export const NAME = 'Dr. Ahmad Mateen Ishanzai'

export const sayLines = [
  'Architecting next-generation AI platforms that bridge complex research and real-world impact.',
  'Designing immersive VR maintenance simulations grounded in complex theoretical research.',
  'Optimizing industrial automation and connected vehicle infrastructure with scalable, intelligent solutions.',
]

export const hudWords = ['sync', 'node', 'ai.core', 'render', 'pipeline', 'vr.sim', 'agent', 'latency', 'stream', 'model', 'telemetry', 'shader', 'vector', 'can.bus']

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'memberships', label: 'Memberships' },
]

export interface Panel { title: string; text: string; label: string; tags: string[] }
export const panels: Panel[] = [
  {
    title: 'Selected Projects',
    text: 'A look into my work across distributed AI, robotics integration, neural network visualization, and automotive design.',
    label: 'Project areas',
    tags: ['Distributed AI', 'Robotics integration', 'Neural network visualization', 'Automotive design'],
  },
  {
    title: 'Publications & Research',
    text: 'An overview of my academic contributions, articles, and patents shaping the future of technology.',
    label: 'Research outputs',
    tags: ['Academic contributions', 'Articles', 'Patents'],
  },
  {
    title: 'Collaboration & Innovation',
    text: 'Insights into how I work alongside multidisciplinary teams to build smarter, more efficient systems.',
    label: 'Ways of working',
    tags: ['Multidisciplinary teams', 'Smarter systems', 'Greater efficiency'],
  },
]

export interface Cred { title: string; text: string; issuer?: string }
export const creds: Cred[] = [
  { title: 'Python & SQL Development', text: 'Validated expertise in core programming languages, database management, and data-driven software development.' },
  { title: 'Networking Fundamentals', text: 'Advanced technical knowledge of modern networking protocols, architecture, and infrastructure security.' },
  { title: 'C++ Programming', text: 'Proficiency in high-performance system-level programming and object-oriented software engineering.' },
  { title: 'AI Security & Automation', text: 'Specialized training focused on safeguarding artificial intelligence pipelines, threat mitigation, and automated workflow security.' },
  { title: 'Microsoft PowerPoint Office 2016 & Basic Computer Skills', issuer: 'NorthStar Digital Literacy', text: 'Certified foundational digital literacy and professional presentation standards.' },
  { title: 'Post Graduate Diploma in Computer Application', issuer: 'Udemy', text: 'Comprehensive academic training covering advanced computing applications and software engineering principles.' },
]

export interface Service { tab: string; items: [string, string] }
export const services: Service[] = [
  { tab: 'AI & Machine Learning Engineering', items: [
    'Architecting custom artificial intelligence models, data pipelines, and distributed AI systems for complex automation.',
    'Developing interactive neural network visualization platforms and secure AI integration frameworks.' ] },
  { tab: 'Advanced Software Development & Architecture', items: [
    'Designing and building custom programming tools, specialized languages (such as CherryScript and KursarScript), and scalable software solutions.',
    'Full-cycle application development spanning desktop, mobile, and cloud environments.' ] },
  { tab: 'VR/AR & Immersive Simulation Design', items: [
    'Engineering immersive virtual reality and augmented reality training environments, including haptic-feedback maintenance simulators.',
    'Creating advanced 3D animated game concepts, interactive UI/UX features, and real-time digital twins.' ] },
  { tab: 'Automotive Engineering & Industrial Automation', items: [
    'Consulting and developing connected vehicle infrastructure (V2X), advanced automotive aerodynamics, and autonomous driving communication protocols.',
    'Researching and integrating robotic assembly line automation and cobots for high-precision manufacturing.' ] },
  { tab: 'Technical Research, Authoring & Strategy', items: [
    'Publishing technical monographs, research papers, and eBooks focused on quantum-augmented applications and artificial intelligence programming.',
    'Providing technical advisory and leadership for multidisciplinary engineering and software teams.' ] },
]

export interface SubJob { title: string; org: string; metas?: string[]; text: string }
export interface Job { title: string; org?: string; text?: string; subs?: SubJob[] }
export const jobs: Job[] = [
  { title: 'Founder & Creative Director', org: 'Cherry Computer Ltd & ShadowFall Studios',
    text: 'Directing the creative and technical vision of software and game development projects, overseeing mobile app releases (such as Apex Precision: Pro Racing), and managing original IP creation.' },
  { title: 'Honorary Faculty Member & Doctoral Researcher', org: 'UniDAIM (The University of Digital & AI Management)',
    text: 'Serving in an academic faculty capacity while pursuing a Doctor of Business Administration (DBA) in Applied AI Management, bridging advanced management theories with practical AI applications.' },
  { title: 'Lead AI & Software Researcher / Technologist',
    text: 'Spearheading research and development initiatives focused on artificial intelligence pipelines, quantum-augmented applications, and custom programming architectures.' },
  { title: 'Author & Technical Writer',
    text: 'Publishing specialized monographs, eBooks, and technical research papers on AI programming, software systems, and emerging technologies.' },
  { title: 'Technical Internships & Apprenticeships', subs: [
    { title: 'Technical Internships (C, Java 21, Python, & AI / Machine Learning / Generative AI)', org: 'EasyShiksha / YBI Foundation / Kodacy', metas: ['2024 – 2025'],
      text: 'Completed target enterprise micro-projects focusing on advanced systems structures in Java 21 and object-oriented C paradigms. Implemented deep learning and generative model fine-tuning exercises during AI/ML intensive rotations.' },
    { title: 'Software Developer Apprentice', org: 'Bengalis of New York', metas: ['Oct 2025 – Jan 2026', 'Remote, United States'],
      text: 'Collaborated with development teams on meaningful projects, expanding technical capabilities and contributing to innovative software solutions.' },
    { title: 'Programming with Generative AI Apprentice', org: 'DougleBot',
      text: 'Engaging in specialized technical apprenticeship focusing on generative artificial intelligence programming, intelligent digital system development, and high-throughput data architectures.' },
  ] },
]

export interface SkillGroup { title: string; label: string; items: string[]; size?: 'wide' | 'full' }
export const skills: SkillGroup[] = [
  { title: 'Frontend', label: 'Frontend skills', items: ['TailwindCSS', 'HTML', 'CSS', 'Bootstrap', 'React.js'] },
  { title: 'Backend', label: 'Backend skills', items: ['Node.js', 'Python', 'Ruby on Rails'] },
  { title: 'Databases', label: 'Databases skills', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { title: 'Tools', label: 'Tools skills', size: 'wide', items: ['Git', 'Figma', 'Unreal Engine', 'Sora', 'Kling', 'VS Code', 'Unity', 'Blender'] },
  { title: 'Creative', label: 'Creative skills', size: 'wide', items: ['Music Production', 'Game Development', 'Game Coding', '3D Animation', 'Generative AI tools'] },
  { title: 'Languages', label: 'Languages spoken', size: 'full', items: ['Persian-Dari', 'English', 'Urdu', 'French', 'Spanish'] },
]

export interface Social { name: string; href: string; path: string }
export const socials: Social[] = [
  { name: 'X (Twitter)', href: 'https://x.com/DrAhmadIshanzai',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
  { name: 'Facebook', href: 'https://www.facebook.com/infinitenetworker/',
    path: 'M14 8.5V6.9c0-.8.2-1.2 1.3-1.2H17V2.1C16.6 2.1 15.6 2 14.5 2 12 2 10.3 3.5 10.3 6.2v2.3H7.5v3.7h2.8V22H14v-9.8h2.8l.5-3.7H14Z' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-ahmad-ishanzai/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'GitHub', href: 'https://github.com/Infinite-Networker/',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/32757544/dr-ahmad-mateen-ishanzai',
    path: 'M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z' },
]

export interface ListItem { label: string; text: string }
export type Block =
  | { t: 'p' | 'h' | 'q'; text: string }
  | { t: 'ul'; items: (string | ListItem)[] }

export interface Project {
  title: string; sub?: string; date: string; org?: string; status?: string
  summary: string; more: Block[]; contributors?: string; skills: string[]
}
export const projects: Project[] = [
  {
    "title": "Curse Unbound",
    "date": "Aug 2026 – Present",
    "org": "Cherry Computer",
    "status": "In active development · Launching soon on Xbox, Google Play & the Apple App Store",
    "summary": "Curse Unbound is an upcoming cross-platform 3D anime-style fantasy role-playing game developed for Android and iOS. The project focuses on delivering high-fidelity visuals, immersive fantasy world-building, and responsive real-time mechanics optimized for mobile performance.",
    "more": [
      {
        "t": "h",
        "text": "Key Contributions & Core Focus"
      },
      {
        "t": "ul",
        "items": [
          {
            "label": "Visual & Technical Pipeline",
            "text": "Collaborated on crafting stylized 3D anime aesthetic pipelines, asset integration, and visual effects tailored for high-framerate mobile rendering."
          },
          {
            "label": "Core RPG Systems & Architecture",
            "text": "Assisted in structuring gameplay loops, character progression frameworks, and interactive fantasy mechanics."
          },
          {
            "label": "Cross-Platform Optimization",
            "text": "Ensured seamless asset scaling, UI/UX consistency, and engine-level performance across diverse mobile hardware profiles."
          }
        ]
      }
    ],
    "skills": []
  },
  {
    "title": "Project Chimera: Echoes of Tomorrow",
    "date": "Aug 2026 – Present",
    "org": "Cherry Computer",
    "summary": "Spearheaded the comprehensive development of Project Chimera: Echoes of Tomorrow, an immersive 3D role-playing shooting game that merges high-stakes tactical combat with deep, atmospheric sci-fi world-building.",
    "more": [
      {
        "t": "p",
        "text": "Collaborating closely across Cherry Computer LTD and ShadowFall Studios, directed the end-to-end creative and technical vision—from the conceptualization of specialized tactical squad uniforms and gritty urban battleground environments to the integration of advanced in-game UI HUD elements. Overseeing asset pipelines, visual style consistency, and mechanical design to ensure a seamless and engaging player experience."
      }
    ],
    "skills": [
      "Game Coding",
      "Game Development"
    ]
  },
  {
    "title": "Meridian",
    "sub": "Project Meridian: Unbinding the Network",
    "date": "Jun 2026 – Present",
    "org": "Cherry Computer",
    "summary": "Modern digital infrastructure is facing an architectural crisis. While computing power and data generation have scaled exponentially, the underlying network paradigms remain fundamentally rigid. Traditional routing frameworks rely on static, linear pathways—creating inevitable bottlenecks, latency issues, and systemic congestion when handling high-velocity, distributed workloads. We built the infrastructure for digital empires, but data shouldn't have to wait in line.",
    "more": [
      {
        "t": "p",
        "text": "Meridian is a next-generation networking architecture designed to shatter these conventional structural limitations. Engineered to support the demands of highly automated environments, virtual realities, and complex data pipelines, Meridian introduces a fluid, dynamic communication paradigm. Instead of forcing data through rigid pipelines, it establishes an adaptive framework that dynamically optimizes global connectivity in real time."
      },
      {
        "t": "h",
        "text": "Core Objectives & Innovations"
      },
      {
        "t": "ul",
        "items": [
          {
            "label": "Dynamic Structural Architecture",
            "text": "Replaces legacy, hardware-bound networking constraints with an agile software-defined paradigm capable of instantaneous self-optimization."
          },
          {
            "label": "Seamless Global Synchronization",
            "text": "Achieves rapid, frictionless data convergence (Sync Complete) across distributed nodes, eliminating standard transactional latency."
          },
          {
            "label": "Unrestricted Throughput",
            "text": "Removes traditional bottleneck points, allowing continuous, high-volume data streams to move unimpeded across complex global topologies."
          }
        ]
      },
      {
        "t": "p",
        "text": "Meridian isn't just a minor optimization patch for existing networks; it is a complete reimagining of how data moves across space and systems. By unbinding the network from its traditional structural constraints, this framework sets a new standard for high-performance communication software, laying the groundwork for truly seamless, unified digital ecosystems."
      },
      {
        "t": "q",
        "text": "The architecture of connectivity is evolving. It's time to unbind the network."
      }
    ],
    "skills": [
      "Software Development",
      "Software Engineering"
    ]
  },
  {
    "title": "Shadow Run: Crimson Awakening",
    "sub": "3D Game Design",
    "date": "Oct 2025 – Present",
    "org": "CutBound",
    "summary": "Shadow Run: Crimson Awakening is a 3D Japanese anime–style game project developed as part of my apprenticeship journey as a game developer. The experience follows a white-haired, red-eyed teenage vampire on a nighttime mission, presented through a third-person in-game recording perspective to create a strong sense of immersion and realism.",
    "more": [
      {
        "t": "p",
        "text": "The project focuses on fast-paced movement, cinematic camera tracking, and atmospheric world design to deliver the feeling of live gameplay rather than a pre-rendered sequence. Careful attention was given to lighting, motion, and environmental detail to convey tension, urgency, and narrative depth within a dark, futuristic setting."
      },
      {
        "t": "p",
        "text": "Through this project, I explored AI-assisted animation workflows, gameplay visualization, and visual storytelling, blending modern technology with anime-inspired aesthetics. Shadow Run: Crimson Awakening reflects my approach to game development—combining technical execution, creative direction, and immersive design to craft engaging, story-driven interactive experiences."
      }
    ],
    "contributors": "Sandeep",
    "skills": [
      "Game Development",
      "Game Coding"
    ]
  },
  {
    "title": "Cherry-Social",
    "date": "May 2025 – Present",
    "summary": "Cherry-Social is a sleek, developer-focused social platform designed to foster collaboration, showcase open-source projects, and spark innovation among tech enthusiasts.",
    "more": [
      {
        "t": "p",
        "text": "Built with a modern dark-themed UI and minimalistic visual identity, Cherry-Social allows users to post code snippets, engage in technical discussions, and highlight contributions to software development in a clean, distraction-free environment."
      },
      {
        "t": "h",
        "text": "Key Features"
      },
      {
        "t": "ul",
        "items": [
          "Post and share code with syntax highlighting",
          "Intuitive, stylish interface for seamless interaction",
          "Quantum-tech-inspired visual design for tech-forward appeal",
          "Personalized developer profiles to showcase skills and projects"
        ]
      },
      {
        "t": "p",
        "text": "This project reflects my passion for combining beautiful design with powerful functionality to create tools that empower the developer community."
      }
    ],
    "skills": []
  },
  {
    "title": "CherryScript Programming Language",
    "date": "Jan 2022 – Nov 2025",
    "org": "Cherry Computer",
    "summary": "CherryScript Programming Language is specially designed to permit you for the system that is automated to collect image data, written data & social media content from open source database MySQL using SQL programming language.",
    "more": [
      {
        "t": "p",
        "text": "Then the total amount of data will get manipulated through H2O AutoML usage & through networking systems (such as “Mac OS X”, PC, & Linux) this data will be used to collect such data to process the manipulation to a development environment."
      },
      {
        "t": "p",
        "text": "The CherryScript Programming Language can be used to process data through C Networking Language and will allow the manipulated data to be used in the creation of computer programs. PHP, Java & Python will get used for the creation of AI programs built to function in a developmental environment."
      }
    ],
    "contributors": "Ibrahim, Alihan Emre and 2 others",
    "skills": []
  },
  {
    "title": "KursarScript Programming Language",
    "date": "May 2023 – Nov 2025",
    "org": "Cherry Computer",
    "summary": "KursarScript Programming Language (KSPL) is a virtual reality & digital user-friendly programming language designed for virtual environments. such as the usage of digital-virtual currencies & for example to tap digital-virtual denominators (such as coins & banknotes) into a digital-virtual card (known as a “Virtu-Card”). Then those denominators will be saved within the Virtu-Card, enabling business owners that have websites to create a service system called “Virtual-Terminals”. These Virtual-Terminals can then be used to provide services, then buy & sell from other users. These virtual-reality terminals are designed to enable the connection of websites through connection systems called “Virtual Portals”.",
    "more": [
      {
        "t": "p",
        "text": "KursarScript is specifically designed to enable the creation of virtual economies and transactions within virtual reality environments. KursarScript is an object-oriented language that supports both image and text data. KursarScript is heavily influenced by AI concepts and designed specifically for use in virtual reality environments."
      },
      {
        "t": "p",
        "text": "KursarScript provides support for basic data types such as integers, floating-point numbers, and strings, and also provides support for more complex data types like arrays, lists, and dictionaries. It sounds like KursarScript is designed to be a versatile language that can handle a variety of different data structures."
      },
      {
        "t": "p",
        "text": "KursarScript is designed to allow online Avatars in virtual reality environments to create instances of classes defined in the language. However, it does not support inheritance and polymorphism, which are commonly used concepts in object-oriented programming."
      }
    ],
    "contributors": "Ibrahim and Md. Shahin",
    "skills": [
      "Programming",
      "Coding"
    ]
  }
]

export interface Article { source: string; date: string; title: string; url: string; body: Block[] }
export const articles: Article[] = [
  {
    "source": "Stack Overflow",
    "date": "Jun 12, 2026",
    "title": "Designing CherryScript: Optimizing Data-Driven Workflows via Custom Python-Based Interpreters",
    "url": "https://stackoverflow.blog/2026/06/12/designing-cherryscript-optimizing-data-driven-workflows-via-custom-python-based-interpreters/",
    "body": [
      {
        "t": "p",
        "text": "When designing CherryScript—a custom programming language architected to streamline and abstract high-volume, data-driven workflows—one of the primary challenges was avoiding the traditional execution bottlenecks inherent in Python-hosted interpreters."
      },
      {
        "t": "p",
        "text": "In this article, I break down the architectural strategies implemented to ensure deterministic speed and minimal memory overhead during continuous data processing:"
      },
      {
        "t": "ul",
        "items": [
          {
            "label": "Dynamic Streaming Lexing",
            "text": "Moving away from whole-file in-memory tokenization toward a lazy-evaluation streaming lexer utilizing Python generators (yield)."
          },
          {
            "label": "Hybrid Bytecode Compilation",
            "text": "Overcoming standard AST tree-walking latency by compiling syntax structures into flattened, linear bytecode opcodes executed in a compact virtual machine loop."
          },
          {
            "label": "Deterministic State Management",
            "text": "Implementing immutability by default across data blocks and leveraging scoped symbol tables to maintain constant-time, O(1) identifier lookups."
          }
        ]
      },
      {
        "t": "p",
        "text": "Whether you are building custom domain-specific languages (DSLs), designing execution pipelines, or optimizing language interpreters, these architectural patterns turn high-level data abstractions into lean, production-grade systems."
      }
    ]
  },
  {
    "source": "Stack Overflow",
    "date": "Aug 20, 2026",
    "title": "Quantum-Augmented Applications: Integrating Quantum Subroutines into Classical Software Stacks",
    "url": "https://stackoverflow.blog/2026/08/20/quantum-augmented-applications-integrating-quantum-subroutines-into-classical-software-stacks/",
    "body": [
      {
        "t": "p",
        "text": "The near-term future of high-performance computing lies in hybrid quantum-classical architectures. Just as modern software offloads parallel matrix calculations to GPUs, Quantum-Augmented Applications leverage Quantum Processing Units (QPUs) as targeted coprocessors to resolve exponential-time, NP-hard bottlenecks within existing production pipelines."
      },
      {
        "t": "p",
        "text": "In this deep dive, I explore the blueprint for embedding quantum circuits directly into classical software stacks:"
      },
      {
        "t": "ul",
        "items": [
          {
            "label": "Heterogeneous Architecture",
            "text": "Orchestrating classical host logic with NISQ-era quantum execution primitives without full hardware replacements."
          },
          {
            "label": "Variational Hybrid Loops",
            "text": "A practical breakdown using Python and Qiskit, demonstrating how classical optimizers drive parametrized quantum ansatz circuits in a tight feedback loop."
          },
          {
            "label": "Overcoming Bottlenecks",
            "text": "Practical strategies for managing transpilation latency, finite coherence times (T₁/T₂), and error mitigation (ZNE)."
          }
        ]
      },
      {
        "t": "p",
        "text": "Whether you are a systems architect, research engineer, or developer preparing for heterogeneous computing, this article provides a production-oriented framework for quantum integration."
      }
    ]
  },
  {
    "source": "Stack Overflow",
    "date": "Oct 7, 2026",
    "title": "Implementing a Modular Master-Agent Telemetry and Diagnostic Framework in Python (Prime-Sentinel-Command: PSC)",
    "url": "https://stackoverflow.blog/2026/10/07/implementing-a-modular-master-agent-telemetry-and-diagnostic-framework-in-python-prime-sentinel-command-psc/",
    "body": [
      {
        "t": "p",
        "text": "In this piece, I dive into the architecture and implementation of a robust diagnostic and telemetry framework designed for scalable, distributed systems using Python. Building reliable master-agent communication pipelines is critical for real-time monitoring, and I walk through the core patterns behind the Prime-Sentinel-Command (PSC) structure."
      }
    ]
  }
]
