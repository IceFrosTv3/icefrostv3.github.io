import {ProjectData} from '../models/project.interface';

export const PROJECTS: ProjectData[] = [
  {
    name: 'Tik-Talk',
    description: 'Angular 18 SPA with JWT auth (HTTP interceptor + auto-refresh), route guards, reactive state via Signals, and drag & drop avatar upload.',
    tech: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'SCSS'],
    github: 'https://github.com/IceFrosTv3/tik-talk',
    demo: 'https://icefrostv3.github.io/tik-talk/',
  },
  {
    name: 'Quiz App',
    description: 'Angular 18 SPA with JWT auth (HTTP interceptor + auto-refresh), timed multiple-choice tests with navigation, detailed results breakdown, Angular Material UI, strict TypeScript.',
    tech: ['Angular 18', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS'],
    github: 'https://github.com/IceFrosTv3/quiz',
    requiresBackend: true,
  },
  {
    name: 'Stream Vibe',
    description: 'Static streaming platform built with Minista (SSG). JSX templates at build-time, vanilla JS in browser, custom Proxy-based state, ARIA-accessible UI components.',
    tech: ['Minista', 'JSX', 'JavaScript', 'SCSS', 'BEM'],
    github: 'https://github.com/IceFrosTv3/stream-vibe',
    demo: 'https://icefrostv3.github.io/stream-vibe/',
  },
  {
    name: 'Freelance Studio',
    description: 'Vanilla JS SPA for managing freelancers and orders. JWT auth, full CRUD, FullCalendar, DataTables, Select2, custom router. No framework.',
    tech: ['JavaScript', 'Webpack 5', 'SCSS', 'JWT'],
    github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    requiresBackend: true,
  },
  {
    name: 'Future Tech',
    description: 'Multi-page responsive website for a tech news and media platform with custom components and adaptive sizing.',
    tech: ['HTML5', 'SCSS', 'BEM', 'JavaScript'],
    github: 'https://github.com/IceFrosTv3/future-tech',
    demo: 'https://icefrostv3.github.io/future-tech/',
  },
  {
    name: 'Lumincash',
    description: 'TypeScript SPA with custom hash router (no framework), JWT auth, Chart.js visualizations, period filters, dark theme, OOP architecture.',
    tech: ['TypeScript', 'Vite', 'Chart.js', 'JWT'],
    github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    requiresBackend: true,
  },
  {
    name: 'Positivus',
    description: 'Responsive commercial landing page with modern UI and pixel-perfect design.',
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
];
