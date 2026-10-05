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
  { id: 'credentials', label: 'Credentials' },
  { id: 'connect', label: 'Connect' },
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
