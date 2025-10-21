import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string) {
    return this.http.get<T>(`${environment.apiBaseUrl}/${path}`);
  }

  post<T>(path: string, body: any) {
    return this.http.post<T>(`${environment.apiBaseUrl}/${path}`, body);
  }

  put<T>(path: string, body: any) {
    return this.http.put<T>(`${environment.apiBaseUrl}/${path}`, body);
  }

  delete<T>(path: string) {
    return this.http.delete<T>(`${environment.apiBaseUrl}/${path}`);
  }
}
