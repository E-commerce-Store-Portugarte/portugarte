import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/modules/services/config.service';
import Swal from 'sweetalert2';

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

  isLogged: boolean = false;

  constructor(
    private configService: ConfigService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  login() {
    this.configService
      .login(this.loginForm.getRawValue())
      .subscribe((res: any) => {
        Swal.fire(
          'Login efectuado com sucesso! Vais passar agora para o mercadinho!'
        );
        localStorage.setItem('token', res.key);
        this.auth.setCurrentUser = localStorage.getItem('token');
        this.router.navigate(['mercadinho']);
        this.isLogged = true;
      }),
      (err: any) => {
        console.log(err);
      };
  }

  logout() {
    Swal.fire('Logout efectuado com sucesso!');
    localStorage.removeItem('token');
    this.isLogged = false;
  }
}
