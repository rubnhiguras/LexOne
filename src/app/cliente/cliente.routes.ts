import { Routes } from '@angular/router';

export const CLIENTE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./cliente-tabs.page').then(m => m.ClienteTabsPage),
    children: [
      {
        path: 'master',
        loadComponent: () => import('./master/master.page').then(m => m.MasterPage)
      },
      {
        path: 'chat-query',
        loadComponent: () => import('./chat-query/chat-query.page').then(m => m.ChatQueryPage)
      },
      {
        path: 'faq',
        loadComponent: () => import('./faq/faq.page').then(m => m.FaqPage)
      },
      { path: '', redirectTo: 'master', pathMatch: 'full' }
    ]
  }
];
