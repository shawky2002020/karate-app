import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesRoutingModule } from './matches-routing.module';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { MatchFormComponent } from './components/match-form/match-form.component';

@NgModule({ declarations: [MatchListComponent, MatchDetailComponent, MatchFormComponent], imports: [CommonModule, MatchesRoutingModule] })
export class MatchesModule {}
