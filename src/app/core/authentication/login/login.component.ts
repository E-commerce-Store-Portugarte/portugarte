import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/modules/services/config.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private configService: ConfigService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    this.configService
      .login(this.loginForm.getRawValue())
      .subscribe((res: any) => {
        localStorage.setItem('token', res.key);
        this.auth.setCurrentUser = localStorage.getItem('token');
        this.router.navigate(['mercadinho']);
      }),
      (err: any) => {
        console.log(err);
      };
  }

  logout() {
    localStorage.removeItem('token');
    alert('User is logged out');
  }
}
