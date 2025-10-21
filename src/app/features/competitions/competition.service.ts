import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class CompetitionService {
  constructor(private api: ApiService) {}

  list() { return this.api.get('competitions'); }
  get(id: string) { return this.api.get(`competitions/${id}`); }
}
