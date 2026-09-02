import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.routes').then(m => m.CLIENTE_ROUTES)
  },
  {
    path: 'interno',
    loadChildren: () => import('./interno/interno.routes').then(m => m.INTERNO_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
