import { CvData } from '../models/cv.interface';

export const cvPl: CvData = {
  lang: 'pl',
  name: 'Andrei Sergheev',
  title: 'Frontend Developer',
  contact: {
    phones: ['+373-775-522-44', '+48 736 100 736'],
    email: 'chaos95kill@gmail.com',
    location: 'Warszawa, Polska',
    relocation: 'Gotowy do relokacji',
    github: 'IceFrosTv3',
    telegram: 'IceFrosTv3',
    linkedin: 'IceFrosTv3',
    instagram: 'IceFrosTv3',
  },
  profile:
    'Frontend Developer z technicznym doświadczeniem i ponad rokiem intensywnej nauki. Skupiony na pisaniu czystego, ' +
    'czytelnego kodu i zrozumieniu architektury rozwiązań. Doświadczenie z rzeczywistymi systemami technicznymi ' +
    '(serwery, węzły blockchain), co wzmocniło myślenie systemowe i poczucie odpowiedzialności. Gotowy do relokacji.',
  hardSkills: [
    'HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript',
    'Angular 18', 'RxJS', 'Webpack 5', 'Vite', 'Gulp', 'Angular CLI', 'npm',
    'BEM', 'Bootstrap 5', 'Tailwind', 'Git', 'GitHub Actions',
    'REST API', 'JWT', 'Chart.js', 'Responsive Design',
  ],
  softSkills: [
    'Rozwiązywanie problemów', 'Myślenie systemowe', 'Samokształcenie',
    'Praca zespołowa', 'Dbałość o szczegóły',
  ],
  experience: [
    {
      company: 'DOUBLE TOP',
      role: 'Inżynier wsparcia technicznego (Infrastruktura Blockchain)',
      period: '2021 — 2022',
      bullets: [
        'Wdrażanie i monitorowanie węzłów blockchain na serwerach Linux (Ubuntu).',
        'Diagnostyka błędów systemowych, analiza logów i automatyzacja podstawowych procesów.',
        'Współpraca ze społecznością techniczną w celu rozwiązywania problemów infrastrukturalnych.',
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
      description: 'Aplikacja sieci społecznościowej zbudowana na Angular 18, RxJS i Signals. Profile użytkowników, wiadomości i aktualizacje w czasie rzeczywistym.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Quiz App',
      description: 'Interaktywny quiz z logiką pytań i obliczaniem wyników. Nacisk na zarządzanie stanem i czystą architekturę kodu.',
      tech: ['TypeScript', 'Webpack 5'],
      github: 'https://github.com/IceFrosTv3/quiz',
    },
    {
      name: 'Personal Finance Tracker',
      description: 'Aplikacja do śledzenia finansów z wykresami i wizualizacją danych.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'Bootstrap 5'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    },
    {
      name: 'Freelance Studio',
      description: 'Kompleksowa aplikacja do zarządzania biznesem z kalendarzem, tabelami danych i obsługą formularzy.',
      tech: ['JavaScript', 'Bootstrap 5', 'jQuery', 'REST API'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    },
    {
      name: 'Stream Vibe',
      description: 'Responsywny UI platformy streamingowej z architekturą komponentową, fluid typography via clamp() i modułami JS: zakładki, slidery, odtwarzacz wideo, maska wejścia.',
      tech: ['JavaScript', 'SCSS', 'BEM', 'Vite'],
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
    { name: 'Polski', level: 'B1' },
    { name: 'Angielski', level: 'A2 (aktywna nauka)' },
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
