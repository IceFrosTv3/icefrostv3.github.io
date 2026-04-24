import { CvData } from '../models/cv.interface';

export const cvRu: CvData = {
  lang: 'ru',
  name: 'Andrei Sergheev',
  title: 'Frontend разработчик',
  contact: {
    phones: ['+373-775-522-44', '+48 736 100 736'],
    email: 'chaos95kill@gmail.com',
    location: 'Варшава, Польша',
    relocation: 'Открыт к удалённой работе или релокации',
    github: 'IceFrosTv3',
    telegram: 'IceFrosTv3',
    linkedin: 'IceFrosTv3',
  },
  profile:
    'Frontend-разработчик с фокусом на Angular 18 и TypeScript. Собираю production-ready SPA с JWT-авторизацией, ' +
    'чистой архитектурой и адаптивным UI. Предыдущий опыт в блокчейн-инфраструктуре определяет моё отношение к ' +
    'надёжности и системному мышлению.\n\n' +
    'Открыт к позициям Junior Frontend (удалённо или Варшава). Готов выйти сразу.',
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
      company: 'Блокчейн-инфраструктура и технический контент',
      role: 'Независимо',
      period: '2021 — 2024',
      bullets: [
        'Администрирование Linux-серверов с валидаторными нодами: диагностика, анализ логов, автоматизация развёртывания.',
        'Ведение технического Telegram-канала: системная публикация контента, работа с комьюнити, дисциплина регулярного выпуска материалов.',
        'Развитие системного мышления через параллельное управление рабочими процессами по 20+ протоколам — навык, который применяю в архитектуре фронтенд-приложений.',
      ],
    },
  ],
  education: [
    { institution: 'ITLogia', specialty: 'Frontend-разработка', period: '2025 — 2026' },
    { institution: 'ПГУ им. Т. Г. Шевченко', specialty: 'Безопасность информационных систем', period: '2014 — 2018' },
  ],
  projects: [
    {
      name: 'Tik-Talk',
      description: 'SPA-соцсеть на Angular 18. JWT-авторизация с автоматической ротацией токенов через HTTP-интерсептор, route guards, управление состоянием через Signals, drag & drop загрузка аватара, кастомные директивы и pipe\'ы. Регистрация через Telegram-бот.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Freelance Studio',
      description: 'Vanilla JS SPA для управления фрилансерами и заказами. JWT-авторизация с автообновлением токенов при 401, полный CRUD с загрузкой аватаров, дашборд со статистикой, FullCalendar, DataTables, Select2, XSS-защита, собственный SPA-роутер.',
      tech: ['JavaScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    },
    {
      name: 'Lumincash',
      description: 'TypeScript SPA без фреймворка — собственный hash-роутер и компонентная система с нуля. JWT-авторизация с автообновлением, CRUD для доходов/расходов и категорий, дашборд Chart.js с фильтрами по периодам, пагинация, модалки, toast-уведомления, тёмная тема с localStorage, адаптивный layout.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    },
    {
      name: 'Quiz App',
      description: 'TypeScript SPA с кастомной конфигурацией Webpack 5. Hash-роутер без фреймворка, JWT с автоматической ротацией токенов, 7 маршрутов: регистрация, вход, выбор теста, прохождение с таймером, результаты, история прохождений.',
      tech: ['TypeScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/quiz',
    },
    {
      name: 'Stream Vibe',
      description: '6-страничная статическая платформа для стриминга. React — только JSX-шаблонизатор на этапе сборки, в браузер отдаётся чистый HTML. Proxy-based BaseComponent, ARIA-доступные табы и combobox, fluid-типографика через clamp(), Swiper.js, iMask, кастомный видеоплеер.',
      tech: ['Minista', 'JSX', 'JavaScript', 'SCSS', 'BEM'],
      github: 'https://github.com/IceFrosTv3/stream-vibe',
      demo: 'https://icefrostv3.github.io/stream-vibe/',
    },
    {
      name: 'Future Tech',
      description: 'Многостраничный адаптивный сайт для платформы технологических новостей. Около 40 BEM-компонентов: кастомный select, табы, видеоплеер, маска ввода.',
      tech: ['HTML5', 'SCSS', 'BEM', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/future-tech',
      demo: 'https://icefrostv3.github.io/future-tech/',
    },
    {
      name: 'Positivus',
      description: 'Адаптивная коммерческая посадочная страница с современным UI, чистой структурой кода и pixel-perfect дизайном.',
      tech: ['HTML5', 'SCSS', 'BEM'],
      github: 'https://github.com/IceFrosTv3/positivus',
      demo: 'https://icefrostv3.github.io/positivus/',
    },
    {
      name: 'Kropp Fitness',
      description: 'Адаптивная фитнес-страница с интерактивными картами и слайдерами.',
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/kropp-fitness',
      demo: 'https://icefrostv3.github.io/kropp-fitness/',
    },
  ],
  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Польский', level: 'B1 (разговорный, активно изучаю)' },
    { name: 'Английский', level: 'A2 (базовый, активно улучшаю)' },
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
