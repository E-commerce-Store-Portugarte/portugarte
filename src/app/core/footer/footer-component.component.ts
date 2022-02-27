import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: [],
})
export class FooterComponentComponent {
  emailForm = new FormGroup({
    email: new FormControl(),
  });

  constructor(private footerService: FooterService, private router: Router) {}

  mailingList() {
    this.footerService.mailingList(this.emailForm.getRawValue()).subscribe({
      next: () => Swal.fire('Gratidão por juntares-te à nossa mailing list!'),
      error: () => Swal.fire('Erro :( Tenta outra vez please!'),
      complete: () => console.info('complete'),
    });
  }
}
