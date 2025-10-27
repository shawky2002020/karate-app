import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component:HomePage
      },
      {
        path: 'matches',
        loadChildren: () => import('../features/matches/matches.module').then(m => m.MatchesModule),
      },
      {
        path: 'competitions',
        loadChildren: () => import('../features/competitions/competitions.module').then(m => m.CompetitionsModule),
      },
   
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
