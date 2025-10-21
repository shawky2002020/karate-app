import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  login(username: string, password: string): Observable<User> {
    // Placeholder: replace with real API call via ApiService
    const user: User = { id: '1', username, roles: ['coach'] } as User;
    this.currentUserSubject.next(user);
    return of(user);
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    // Placeholder token retrieval
    return null;
  }
}
