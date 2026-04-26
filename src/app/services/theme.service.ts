import {inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  theme = signal<Theme>(this.getStoredTheme());

  private getStoredTheme(): Theme {
    if (!this.isBrowser) return 'light';
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  }

  toggleTheme(): void {
    const next = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    if (this.isBrowser) {
      localStorage.setItem('theme', next);
      document.documentElement.setAttribute('data-theme', next);
    }
  }

  initTheme(): void {
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-theme', this.theme());
    }
  }
}
