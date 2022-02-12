import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  productForm = new FormGroup({
    username: new FormControl(),
    password1: new FormControl(),
    password2: new FormControl()
  })

  constructor(private http: ConfigService) { }

  ngOnInit(): void {
  }

  submit() {
    this.http.submitRegistration(this.productForm.getRawValue());
  }

}
