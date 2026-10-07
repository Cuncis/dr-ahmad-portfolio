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
