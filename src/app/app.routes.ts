import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs-routing.module').then(m => m.TabsPageRoutingModule)
  },
  // Feature modules (lazy-loaded)
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('./features/matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: 'competitions',
    loadChildren: () => import('./features/competitions/competitions.module').then(m => m.CompetitionsModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
];


