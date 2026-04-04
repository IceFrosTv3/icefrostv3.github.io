import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss',
})
export class SkillBadgeComponent {
  @Input({ required: true }) label!: string;
}
