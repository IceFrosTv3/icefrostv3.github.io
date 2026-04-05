import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Andrei Sergheev | Frontend Developer',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'cv/en',
    title: 'CV (EN) — Andrei Sergheev',
    loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
    data: {lang: 'en'}
  },
  {
    path: 'cv/ru',
    title: 'Резюме (RU) — Андрей Сергеев',
    loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
    data: {lang: 'ru'}
  },
  {
    path: 'cv/pl',
    title: 'CV (PL) — Andrei Sergheev',
    loadComponent: () => import('./pages/cv/cv.component').then(m => m.CvComponent),
    data: {lang: 'pl'}
  },
  {
    path: '**',
    redirectTo: '',
  }
];
