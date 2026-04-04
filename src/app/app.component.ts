import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from './services/theme.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
