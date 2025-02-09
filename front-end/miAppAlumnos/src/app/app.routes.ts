import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'crear-alumno',
    loadComponent: () => import('./pages/crear-alumno/crear-alumno.page').then(m => m.CrearAlumnoPage)
  },
  {
    path: 'crear-alumno',
    loadComponent: () => import('./pages/crear-alumno/crear-alumno.page').then(m => m.CrearAlumnoPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }

];
