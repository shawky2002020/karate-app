import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class ReportService {
  constructor(private api: ApiService) {}

  list() { return this.api.get('reports'); }
  exportPdf(id: string) { return this.api.get(`reports/${id}/pdf`); }
}
