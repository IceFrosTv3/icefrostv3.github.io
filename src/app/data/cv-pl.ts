import { CvData } from '../models/cv.interface';

export const cvPl: CvData = {
  lang: 'pl',
  name: 'Andrei Sergheev',
  title: 'Frontend Developer',
  contact: {
    phones: ['+373 775 522 44', '+48 736 100 736'],
    email: 'chaos95kill@gmail.com',
    location: 'Warszawa, Polska',
    relocation: 'Otwarty na pracę zdalną lub w biurze w Polsce',
    github: 'IceFrosTv3',
    telegram: 'IceFrosTv3',
    linkedin: 'IceFrosTv3',
  },
  profile:
    'Frontend Developer ze specjalizacją w Angular 18 i TypeScript. Buduję production-ready SPA z uwierzytelnianiem JWT, ' +
    'czystą architekturą i responsywnym UI. Wcześniejsze doświadczenie z infrastrukturą blockchain kształtuje moje podejście ' +
    'do niezawodności i myślenia systemowego.\n\n' +
    'Otwarty na stanowiska Junior Frontend (Warszawa lub zdalnie). Dostępny od zaraz.',
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
      company: 'Infrastruktura Blockchain i treści techniczne',
      role: 'Niezależnie',
      period: '2021 — 2024',
      bullets: [
        'Administrowanie serwerami Linux z węzłami walidatorów blockchain: diagnostyka, analiza logów, automatyzacja wdrożeń.',
        'Prowadzenie technicznego kanału Telegram: systematyczna publikacja treści, praca ze społecznością, konsekwentna dyscyplina wydawnicza.',
        'Rozwinięcie myślenia systemowego przez zarządzanie równoległymi procesami w 20+ protokołach — umiejętność, którą stosuję w architekturze aplikacji frontendowych.',
      ],
    },
  ],
  education: [
    { institution: 'ITLogia', specialty: 'Frontend Development', period: '2025 — 2026' },
    { institution: 'PGU im. T.G. Szewczenki', specialty: 'Bezpieczeństwo systemów informacyjnych', period: '2014 — 2018' },
  ],
  projects: [
    {
      name: 'Tik-Talk',
      description: 'SPA sieci społecznościowej w Angular 18. Uwierzytelnianie JWT z automatyczną rotacją tokenów przez interceptor HTTP, route guards, stan reaktywny przez Signals, drag & drop awatara, własne dyrektywy i pipe\'y. Rejestracja przez bota Telegram.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Freelance Studio',
      description: 'Vanilla JS SPA do zarządzania freelancerami i zleceniami. JWT z auto-odświeżaniem przy 401, pełny CRUD z uploadem avatarów, dashboard ze statystykami, FullCalendar, DataTables, Select2, ochrona XSS, własny router SPA.',
      tech: ['JavaScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    },
    {
      name: 'Lumincash',
      description: 'TypeScript SPA bez frameworka — własny hash router i system komponentów od podstaw. JWT z auto-odświeżaniem, pełny CRUD przychodów/wydatków i kategorii, dashboard Chart.js z filtrami okresów, paginacja, modale, powiadomienia toast, ciemny motyw z localStorage, responsywny layout.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    },
    {
      name: 'Quiz App',
      description: 'TypeScript SPA z własną konfiguracją Webpack 5. Hash router bez frameworka, JWT z automatyczną rotacją tokenów, 7 tras: rejestracja, logowanie, wybór testu, test z timerem, wyniki, historia.',
      tech: ['TypeScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/quiz',
    },
    {
      name: 'Stream Vibe',
      description: '6-stronicowa statyczna platforma streamingowa. React jako silnik szablonów JSX tylko na etapie budowania — przeglądarka otrzymuje czysty HTML. Proxy-based BaseComponent, ARIA-dostępne zakładki i combobox, fluid typography przez clamp(), Swiper.js, iMask, własny odtwarzacz wideo.',
      tech: ['Minista', 'JSX', 'JavaScript', 'SCSS', 'BEM'],
      github: 'https://github.com/IceFrosTv3/stream-vibe',
      demo: 'https://icefrostv3.github.io/stream-vibe/',
    },
    {
      name: 'Future Tech',
      description: 'Wielostronicowa responsywna witryna dla platformy technologicznych newsów. Około 40 komponentów BEM: select, zakładki, odtwarzacz wideo, maska wejścia.',
      tech: ['HTML5', 'SCSS', 'BEM', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/future-tech',
      demo: 'https://icefrostv3.github.io/future-tech/',
    },
    {
      name: 'Positivus',
      description: 'Responsywna komercyjna strona docelowa z nowoczesnym UI, czystą strukturą kodu i pixel-perfect designem.',
      tech: ['HTML5', 'SCSS', 'BEM'],
      github: 'https://github.com/IceFrosTv3/positivus',
      demo: 'https://icefrostv3.github.io/positivus/',
    },
    {
      name: 'Kropp Fitness',
      description: 'Responsywna strona fitness z interaktywnymi mapami i sliderami.',
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/kropp-fitness',
      demo: 'https://icefrostv3.github.io/kropp-fitness/',
    },
  ],
  languages: [
    { name: 'Rosyjski', level: 'Ojczysty' },
    { name: 'Polski', level: 'B1 (konwersacyjny, aktywnie się uczę)' },
    { name: 'Angielski', level: 'A2 (podstawowy, aktywnie poprawiam)' },
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
