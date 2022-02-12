import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  login() {
    this.configService.loginUser(this.loginForm.getRawValue());
  }

}
