import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "https://localhost:7175/auth";
  readonly #http = inject(HttpClient);
  
  login(userName: string, password: string) {
    return this.#http.post<{ token: string }>(`${this.baseUrl}/login`, { userName, password })
      .pipe(tap(res => localStorage.setItem('access_token', res.token)));
  }

  register(userName: string, password: string) {
    return this.#http.post(`${this.baseUrl}/register`, { userName, password });
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
