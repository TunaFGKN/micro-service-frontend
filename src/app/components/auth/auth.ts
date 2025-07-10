import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  userName = '';
  password = '';
  registerMode = signal(false);

  constructor(private auth: AuthService) {}

  toggleMode() {
    this.registerMode.update(v => !v);
  }

  submit() {
    if (this.registerMode()) {
      this.auth.register(this.userName, this.password).subscribe({
        next: () => alert('Registered Successfully!'),
        error: err => alert('Error: ' + err.error?.message || err.statusText)
      });
    } else {
      this.auth.login(this.userName, this.password).subscribe({
        next: () => alert('Login Successful!'),
        error: err => alert('Error: ' + err.error?.message || err.statusText)
      });
    }
  }
}