import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionListComponent } from './components/competition-list/competition-list.component';
import { CompetitionDetailComponent } from './components/competition-detail/competition-detail.component';

@NgModule({ declarations: [CompetitionListComponent, CompetitionDetailComponent], imports: [CommonModule, CompetitionsRoutingModule] })
export class CompetitionsModule {}
