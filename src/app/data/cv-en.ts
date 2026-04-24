import { CvData } from '../models/cv.interface';

export const cvEn: CvData = {
  lang: 'en',
  name: 'Andrei Sergheev',
  title: 'Frontend Developer',
  contact: {
    phones: ['+373 775 522 44', '+48 736 100 736'],
    email: 'chaos95kill@gmail.com',
    location: 'Warsaw, Poland',
    relocation: 'Open to remote or relocation',
    github: 'IceFrosTv3',
    telegram: 'IceFrosTv3',
    linkedin: 'IceFrosTv3',
  },
  profile:
    'Frontend Developer specializing in Angular 18 and TypeScript. I build production-ready SPAs ' +
    'with JWT authentication, clean architecture, and responsive UIs. My previous work in blockchain ' +
    'infrastructure shapes how I approach reliability and systems thinking.\n\n' +
    'Open to Junior Frontend positions (remote or Warsaw). Available immediately.',
  hardSkills: [
    { category: 'Core', skills: ['HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript'] },
    { category: 'Frameworks', skills: ['Angular 18', 'RxJS', 'Angular Signals'] },
    { category: 'Build Tools', skills: ['Webpack 5', 'Vite', 'Gulp', 'Angular CLI', 'npm'] },
    { category: 'Styling', skills: ['BEM', 'Bootstrap 5', 'Tailwind'] },
    { category: 'Tools', skills: ['Git', 'GitHub Actions (CI/CD)'] },
    { category: 'Other', skills: ['REST API', 'JWT', 'Chart.js', 'Responsive Design'] },
  ],
  experience: [
    {
      company: 'Blockchain Infrastructure & Technical Content',
      role: 'Independent',
      period: '2021 — 2024',
      bullets: [
        'Administered Linux servers running blockchain validator nodes: diagnostics, log analysis, deployment automation.',
        'Ran a technical Telegram channel: systematic content publishing, community work, consistent release discipline.',
        'Developed systems thinking through managing parallel workflows across 20+ protocols — a skill I now apply to frontend architecture.',
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
      description: 'Angular 18 SPA social network with JWT auth (HTTP interceptor + auto-refresh), route guards, reactive state via Signals, drag & drop avatar upload, custom directives and pipes. Registration via Telegram bot.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Freelance Studio',
      description: 'Vanilla JS SPA for managing freelancers and orders. JWT auth with auto-refresh on 401, full CRUD with avatar upload, dashboard with statistics, FullCalendar integration, DataTables, Select2, XSS protection, custom SPA router.',
      tech: ['JavaScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    },
    {
      name: 'Lumincash',
      description: 'TypeScript SPA built without a framework — custom hash router and component system from scratch. JWT auth with auto-refresh, full CRUD for income/expenses and categories, Chart.js dashboard with period filters, pagination, modals, toast notifications, dark theme with localStorage persistence, responsive layout.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    },
    {
      name: 'Quiz App',
      description: 'TypeScript SPA with custom Webpack 5 configuration. Framework-less hash router, JWT auth with auto-refresh, 7 routes: register, login, quiz selection, timed test, results, test history.',
      tech: ['TypeScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/quiz',
    },
    {
      name: 'Stream Vibe',
      description: '6-page static streaming platform. React used as JSX templating engine at build time only — plain HTML shipped to the browser. Custom Proxy-based state (BaseComponent), ARIA-accessible tabs and combobox, fluid typography via clamp(), Swiper.js, iMask, custom video player.',
      tech: ['Minista', 'JSX', 'JavaScript', 'SCSS', 'BEM'],
      github: 'https://github.com/IceFrosTv3/stream-vibe',
      demo: 'https://icefrostv3.github.io/stream-vibe/',
    },
    {
      name: 'Future Tech',
      description: 'Multi-page responsive website for a technology news and media platform. Features ~40 BEM components, custom select, tabs, video player, and input mask.',
      tech: ['HTML5', 'SCSS', 'BEM', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/future-tech',
      demo: 'https://icefrostv3.github.io/future-tech/',
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
    { name: 'Polish', level: 'B1 (conversational, actively improving)' },
    { name: 'English', level: 'A2 (basic, actively improving)' },
  ],
  references: [
    {
      name: 'Alexander Chernyavskiy',
      role: 'DOUBLE TOP / Retro Lead',
      contacts: [
        { type: 'Telegram', value: 'feeeniqs' },
      ],
    },
    {
      name: 'Pavel Kutergin',
      role: 'ITLogia / Mentor',
      contacts: [
        { type: 'Telegram', value: 'p_kutergin' },
      ],
    },
  ],
};
