import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'cv/en',
    loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
    data: { lang: 'en' }
  },
  {
    path: 'cv/ru',
    loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
    data: { lang: 'ru' }
  },
  {
    path: 'cv/pl',
    loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
    data: { lang: 'pl' }
  },
  {
    path: '**',
    redirectTo: '',
  }
];
