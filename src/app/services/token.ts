import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}