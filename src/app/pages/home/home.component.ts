import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectData } from '../../models/project.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SkillBadgeComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  hardSkills: Record<string, string[]> = {
    'Core': ['HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript'],
    'Frameworks': ['Angular 18', 'RxJS', 'Angular Signals'],
    'Build Tools': ['Webpack 5', 'Vite'],
    'Styling': ['BEM', 'Tailwind'],
    'Tools': ['Git', 'GitHub Actions'],
    'Other': ['REST API', 'JWT', 'Chart.js', 'Responsive Design'],
  };

  projects: ProjectData[] = [
    {
      name: 'Tik-Talk',
      description: 'Angular 18 SPA with JWT auth (HTTP interceptor + auto-refresh), route guards, reactive state via Signals, and drag & drop avatar upload.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'Signals', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Freelance Studio',
      description: 'Vanilla JS SPA for managing freelancers and orders. JWT auth, full CRUD, FullCalendar, DataTables, Select2, custom router. No framework.',
      tech: ['JavaScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
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
      name: 'Lumincash',
      description: 'TypeScript SPA with custom hash router (no framework), JWT auth, Chart.js visualizations, period filters, dark theme, OOP architecture.',
      tech: ['TypeScript', 'Vite', 'Chart.js', 'JWT'],
      github: 'https://github.com/IceFrosTv3/Personal-Finance-Tracker',
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
      name: 'Quiz App',
      description: 'TypeScript SPA with custom Webpack 5 config and framework-less hash router. JWT auth with auto-refresh, 7 routes, timed tests, test history.',
      tech: ['TypeScript', 'Webpack 5', 'SCSS', 'JWT'],
      github: 'https://github.com/IceFrosTv3/quiz',
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

  skillCategories = Object.entries(this.hardSkills);

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.el.nativeElement
      .querySelectorAll('.animate-on-scroll')
      .forEach((el: Element) => observer.observe(el));
  }
}
