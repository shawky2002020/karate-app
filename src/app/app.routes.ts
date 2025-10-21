import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
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
];


