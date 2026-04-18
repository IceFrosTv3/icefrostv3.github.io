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
    'Build Tools': ['Webpack 5', 'Vite', 'Gulp', 'Angular CLI', 'npm'],
    'Styling': ['BEM', 'Bootstrap 5', 'Tailwind', 'CSS Modules', 'Styled Components'],
    'Tools': ['Git', 'GitHub Actions (CI/CD)'],
    'Other': ['REST API', 'JWT', 'Chart.js', 'Responsive Design'],
  };

  softSkills: string[] = [
    'Problem-solving', 'Systems thinking', 'Self-learning',
    'Team collaboration', 'Attention to detail',
  ];

  projects: ProjectData[] = [
    {
      name: 'Tik-Talk',
      description: 'Social network app built with Angular 18, RxJS, and Signals.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'SCSS'],
      github: 'https://github.com/IceFrosTv3/tik-talk',
      demo: 'https://icefrostv3.github.io/tik-talk/',
    },
    {
      name: 'Stream Vibe',
      description: 'Responsive streaming platform UI with component architecture, fluid typography, and interactive JS modules: tabs, sliders, video players.',
      tech: ['JavaScript', 'SCSS', 'BEM', 'Vite'],
      github: 'https://github.com/IceFrosTv3/stream-vibe',
      demo: 'https://icefrostv3.github.io/stream-vibe/',
    },
    {
      name: 'Future Tech',
      description: 'Multi-page responsive website for a tech news and media platform with custom components and adaptive sizing.',
      tech: ['HTML5', 'SCSS', 'BEM', 'JavaScript'],
      github: 'https://github.com/IceFrosTv3/future-tech',
      demo: 'https://icefrostv3.github.io/future-tech/',
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
    {
      name: 'Quiz App',
      description: 'Interactive quiz with question logic and result calculation.',
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
      tech: ['JavaScript', 'Bootstrap 5', 'REST API'],
      github: 'https://github.com/IceFrosTv3/Freelance-Studio',
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
