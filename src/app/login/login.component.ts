import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  onSubmit() {
    const { username, password } = this.loginData;
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      window.location.href = '/customer-list';

    }
  }
     }

