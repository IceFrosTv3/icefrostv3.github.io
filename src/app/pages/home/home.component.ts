import { Component } from '@angular/core';
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
export class HomeComponent {
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
}
