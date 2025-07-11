import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-account',
  imports: [ButtonModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }
}
