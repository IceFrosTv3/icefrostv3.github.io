import {Component, AfterViewInit, ElementRef, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SkillBadgeComponent} from '../../components/skill-badge/skill-badge.component';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';
import {ProjectData} from '../../models/project.interface';
import {PROJECTS} from '../../data/projects';
import {HARD_SKILLS} from '../../data/skills';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SkillBadgeComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly el = inject(ElementRef)
  private readonly meta = inject(Meta)

  readonly projects: ProjectData[] = PROJECTS;
  readonly skillCategories = Object.entries(HARD_SKILLS);

  ngOnInit() {
    this.meta.updateTag({
      name: 'description',
      content: 'Portfolio of Andrei Sergheev, Junior Frontend Developer. Angular, TypeScript, SCSS.'
    });
    this.meta.updateTag({property: 'og:url', content: 'https://icefrostv3.github.io/'});
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {threshold: 0.1}
    );

    this.el.nativeElement
      .querySelectorAll('.animate-on-scroll')
      .forEach((el: Element) => observer.observe(el));
  }
}
