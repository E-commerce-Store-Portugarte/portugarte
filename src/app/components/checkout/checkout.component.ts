import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../styling/store.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    zipcode: new FormControl(),
    telephone: new FormControl()
  });

  constructor(private http: ConfigService) { }

  ngOnInit(): void {
  }

  checkoutOrder(): void {
    this.http.checkoutOrder(this.checkoutForm.getRawValue());
    // console.log(this.checkoutForm.get('name'), this.checkoutForm.get('address'), this.checkoutForm.get('zipcode'), this.checkoutForm.get('telephone'))
  }

}
