import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl(),
    message: new FormControl(),
  });

  constructor(private configService: ConfigService) {}

  sendMessage() {
    console.log('ENVIOU A MSG', this.contactForm.getRawValue());
    this.configService.sendMessage(this.contactForm.getRawValue()).subscribe({
      next: () =>
        Swal.fire(
          'A tua mensagem foi enviada correctamente! Contactar-te-emos em breve!'
        ),
    });
  }
}
