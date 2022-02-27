import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/modules/services/config.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  productForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password1: new FormControl(),
    password2: new FormControl(),
  });

  constructor(private http: ConfigService) {}

  ngOnInit(): void {}

  submit() {
    this.http.submitRegistration(this.productForm.getRawValue()).subscribe({
      next: () => {
        Swal.fire(
          'Registo okapa! Vai agora ao teu e-mail para confirmar a situação!'
        );
      },
      error: () => {
        Swal.fire('Erro no registo! Sorry! Tenta outra vez!');
      },
      complete: () => console.info('complete'),
    });
  }
}
