import {CvData} from '../models/cv.interface';

export const cvRu: CvData = {
  lang: 'ru',
  name: 'Andrei Sergheev',
  title: 'Frontend разработчик',
  contact: {
    phones: ['+373-775-522-44', '+48 736 100 736'],
    email: 'chaos95kill@gmail.com',
    location: 'Варшава, Польша',
    relocation: 'Готов к переезду',
    github: 'IceFrosTv3',
    telegram: 'IceFrosTv3',
    linkedin: 'IceFrosTv3',
    instagram: 'IceFrosTv3',
  },
  profile:
    'Frontend-разработчик с техническим бэкграундом и более чем годом интенсивного обучения. Фокус на чистый, ' +
    'читаемый код и понимание архитектуры решений. Имею опыт работы с реальными техническими системами ' +
    '(серверы, блокчейн-ноды), что укрепило системное мышление и ответственность. Готов к переезду.',
  hardSkills: [
    'HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript',
    'Angular 18', 'RxJS', 'Webpack 5', 'Vite', 'Gulp', 'Angular CLI', 'npm',
    'BEM', 'Bootstrap 5', 'Tailwind', 'Git', 'GitHub Actions',
    'REST API', 'JWT', 'Chart.js', 'Responsive Design',
  ],
  softSkills: [
    'Решение проблем', 'Системное мышление', 'Самообучение',
    'Командная работа', 'Внимание к деталям',
  ],
  experience: [
    {
      company: 'DOUBLE TOP',
      role: 'Инженер технической поддержки (Блокчейн-инфраструктура)',
      period: '2021 — 2022',
      bullets: [
        'Развертывание и мониторинг блокчейн-нод на Linux-серверах (Ubuntu).',
        'Диагностика системных ошибок, работа с логами и автоматизация базовых процессов.',
        'Взаимодействие с техническим сообществом для решения инфраструктурных задач.',
      ],
    },
  ],
  education: [
    {institution: 'ITLogia', specialty: 'Frontend-разработка', period: '2025 — 2026'},
    {institution: 'ПГУ им. Т. Г. Шевченко', specialty: 'Безопасность информационных систем', period: '2014 — 2018'},
  ],
  projects: [
    {
      name: 'Tik-Talk',
      description: 'Приложение социальной сети на Angular 18, RxJS и Signals. Профили пользователей, обмен сообщениями и обновления в реальном времени.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Quiz App',
      description: 'Интерактивная викторина с логикой вопросов и подсчётом результатов. Акцент на управление состоянием и чистую архитектуру кода.',
      tech: ['TypeScript', 'Webpack 5'],
      github: 'https://github.com/IceFrosTv3/quiz',
    },
    {
      name: 'Personal Finance Tracker',
      description: 'Приложение для отслеживания финансов с графиками и визуализацией данных.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'Bootstrap 5'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
    },
    {
      name: 'Freelance Studio',
      description: 'Комплексное приложение для управления бизнесом с календарём, таблицами данных и обработкой форм.',
      tech: ['JavaScript', 'Bootstrap 5', 'jQuery', 'REST API'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
    },
    {
      name: 'Stream Vibe',
      description: 'Адаптивный UI стриминговой платформы с компонентной архитектурой, fluid-типографикой через clamp() и JS-модулями: табы, слайдеры, видеоплеер, маска ввода.',
      tech: ['JavaScript', 'SCSS', 'BEM', 'Vite'],
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
    {name: 'Русский', level: 'Родной'},
    {name: 'Польский', level: 'B1'},
    {name: 'Английский', level: 'A2 (активное изучение)'},
  ],
  references: [
    {
      name: 'Alexander Chernyavskiy',
      role: 'DOUBLE TOP / Retro Lead',
      contacts: [
        {type: 'Telegram', value: 'feeeniqs'},
        {type: 'Instagram', value: 'feeeniqs'},
      ],
    },
    {
      name: 'Pavel Kutergin',
      role: 'ITLogia / Mentor',
      contacts: [
        {type: 'Telegram', value: 'p_kutergin'},
        {type: 'Instagram', value: 'pavel-kutergin'},
      ],
    },
  ],
};
