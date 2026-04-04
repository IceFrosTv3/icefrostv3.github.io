import {Component} from '@angular/core';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  constructor(protected themeService: ThemeService) {
  }
}
