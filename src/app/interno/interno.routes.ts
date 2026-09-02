import { Routes } from '@angular/router';

export const INTERNO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./interno-tabs.page').then(m => m.InternoTabsPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      {
        path: 'queries',
        loadComponent: () => import('./queries/queries.page').then(m => m.QueriesPage)
      },
      {
        path: 'queries/:id',
        loadComponent: () => import('./query-detail/query-detail.page').then(m => m.QueryDetailPage)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
