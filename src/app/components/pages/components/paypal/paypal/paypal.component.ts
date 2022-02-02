import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  authorization = "Token 4ee8a9647d51d4dfe4641ff4180a7a5c7f9ccfdc"
  cartData: any = []
  cartCount: any = 0;
  endPrice: any = 0;

  checkoutForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl('+351'),
    email: new FormControl(''),
    city: new FormControl('Açores'),
    addressLine: new FormControl(''),
    postalCode: new FormControl(''),
  })

  constructor(private spinner: NgxSpinnerService, private configService: ConfigService) { }

  rootUrl = this.configService.configUrlBasic;

  ngOnInit(): void {
    axios.get(this.configService.configUrlPost, { headers: { Authorization: this.authorization } }).then(r => {
      this.cartData = r.data
      this.cartData.map((item: any) => { this.endPrice += item.price * item.amount; this.cartCount += item.amount } )
    });
  }

  handlePayPalButton = () => {
    if (this.checkoutForm.valid) {
      this.spinner.show()
      const data = {
        name: this.checkoutForm.value.firstName + ' ' + this.checkoutForm.value.lastName,
        phone: this.checkoutForm.value.phone,
        email: this.checkoutForm.value.email,
        city: this.checkoutForm.value.city,
        address: this.checkoutForm.value.addressLine,
        postcode: this.checkoutForm.value.postalCode,
      }
      const headers =  { Authorization: this.authorization }
      axios.post(this.configService.configUrlPaypalOrder, data, { headers: headers } ).then(r => {
        window.location.href = r.data.redirect_url
      })
    }
  }

}
