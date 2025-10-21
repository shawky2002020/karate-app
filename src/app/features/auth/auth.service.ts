import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class AuthFeatureService {
  constructor(private api: ApiService) {}

  login(payload: any) { return this.api.post('auth/login', payload); }
  register(payload: any) { return this.api.post('auth/register', payload); }
}
