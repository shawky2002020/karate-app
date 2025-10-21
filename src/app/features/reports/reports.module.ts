import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';

@NgModule({ declarations: [ReportListComponent, ReportDetailComponent], imports: [CommonModule, ReportsRoutingModule] })
export class ReportsModule {}
