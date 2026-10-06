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
