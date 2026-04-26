import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterOutlet, Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs';
import {ThemeService} from './services/theme.service';
import {HeaderComponent} from './components/header/header.component';
import {CvHeaderComponent} from './components/cv-header/cv-header.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CvHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isCvRoute = signal(false);
  private readonly themeService = inject(ThemeService)
  private readonly router = inject(Router)

  ngOnInit(): void {
    this.themeService.initTheme();
    this.isCvRoute.set(this.router.url.startsWith('/cv/'));
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e) => {
      this.isCvRoute.set(e.urlAfterRedirects.startsWith('/cv/'));
    });
  }
}
