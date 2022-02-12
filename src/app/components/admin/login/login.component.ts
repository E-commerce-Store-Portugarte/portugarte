import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }
  
  login() {
    this.configService.login(this.loginForm.getRawValue());
  }

}
