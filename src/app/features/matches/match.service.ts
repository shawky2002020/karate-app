import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class MatchService {
  constructor(private api: ApiService) {}

  list() { return this.api.get('matches'); }
  get(id: string) { return this.api.get(`matches/${id}`); }
  create(payload: any) { return this.api.post('matches', payload); }
}
