import { CvData } from '../models/cv.interface';

export const cvEn: CvData = {
  lang: 'en',
  name: 'Andrei Sergheev',
  title: 'Frontend Developer',
  contact: {
    phones: ['+373-775-522-44', '+48 736 100 736'],
    email: 'chaos95kill@gmail.com',
    location: 'Warsaw, Poland',
    relocation: 'Open to relocation',
    github: 'IceFrosTv3',
    telegram: 'IceFrosTv3',
    linkedin: 'IceFrosTv3',
    instagram: 'IceFrosTv3',
  },
  profile:
    'Frontend Developer with a technical background and over a year of intensive training. ' +
    'Focused on writing clean, readable code and understanding solution architecture. Experienced with real ' +
    'technical systems (servers, blockchain nodes), which strengthened systems thinking and sense of responsibility. ' +
    'Open to relocation.',
  hardSkills: [
    'HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript',
    'Angular 18', 'RxJS', 'Webpack 5', 'Vite', 'Gulp', 'Angular CLI', 'npm',
    'BEM', 'Bootstrap 5', 'Tailwind', 'Git', 'GitHub Actions',
    'REST API', 'JWT', 'Chart.js', 'Responsive Design',
  ],
  softSkills: [
    'Problem-solving', 'Systems thinking', 'Self-learning',
    'Team collaboration', 'Attention to detail',
  ],
  experience: [
    {
      company: 'DOUBLE TOP',
      role: 'Technical Support Engineer (Blockchain Infrastructure)',
      period: '2021 — 2022',
      bullets: [
        'Deployed and monitored blockchain nodes on Linux servers (Ubuntu).',
        'Diagnosed system errors, analyzed logs, and automated basic processes.',
        'Collaborated with the technical community to resolve infrastructure challenges.',
      ],
    },
  ],
  education: [
    { institution: 'ITLogia', specialty: 'Frontend Development', period: '2025 — 2026' },
    { institution: 'PGU im. T.G. Shevchenko', specialty: 'Information Systems Security', period: '2014 — 2018' },
  ],
  projects: [
    {
      name: 'Tik-Talk',
      description: 'Social network app built with Angular 18, RxJS, and Signals. Features user profiles, messaging, and real-time updates.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Quiz App',
      description: 'Interactive quiz with question logic and result calculation. Focused on state management and clean code architecture.',
      tech: ['TypeScript', 'Webpack 5'],
      github: 'https://github.com/IceFrosTv3/quiz',
    },
    {
      name: 'Personal Finance Tracker',
      description: 'Financial tracking application with charts and data visualization.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'Bootstrap 5'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    },
    {
      name: 'Freelance Studio',
      description: 'Complex business management app with calendar, data tables, and form handling.',
      tech: ['JavaScript', 'Bootstrap 5', 'jQuery', 'REST API'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    },
    {
      name: 'Positivus',
      description: 'Responsive commercial landing page with modern UI, clean code structure, and pixel-perfect design.',
      tech: ['HTML5', 'SCSS', 'BEM'],
      github: 'https://github.com/IceFrosTv3/positivus',
      demo: 'https://icefrostv3.github.io/positivus/',
    },
    {
      name: 'Kropp Fitness',
      description: 'Responsive fitness landing page with interactive maps and sliders.',
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/kropp-fitness',
      demo: 'https://icefrostv3.github.io/kropp-fitness/',
    },
  ],
  languages: [
    { name: 'Russian', level: 'Native' },
    { name: 'Polish', level: 'B2' },
    { name: 'English', level: 'A2 (active learning)' },
  ],
  references: [
    {
      name: 'Alexander Chernyavskiy',
      role: 'DOUBLE TOP / Retro Lead',
      contacts: [
        { type: 'Telegram', value: 'feeeniqs' },
        { type: 'Instagram', value: 'feeeniqs' },
      ],
    },
    {
      name: 'Pavel Kutergin',
      role: 'ITLogia / Mentor',
      contacts: [
        { type: 'Telegram', value: 'p_kutergin' },
        { type: 'Instagram', value: 'pavel-kutergin' },
      ],
    },
  ],
};
