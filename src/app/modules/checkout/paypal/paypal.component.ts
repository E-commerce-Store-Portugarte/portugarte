import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigService } from 'src/app/modules/services/config.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: [],
})
export class PaypalComponent implements OnInit {
  cartData: any = [];
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
  });

  constructor(
    private spinner: NgxSpinnerService,
    private configService: ConfigService,
    private http: HttpClient
  ) {}

  rootUrl = this.configService.urlBasic;

  ngOnInit(): void {
    this.http.get(this.configService.urlPost).subscribe({
      next: (v) => {
        (this.cartData = v),
          this.cartData.map((item: any) => {
            this.endPrice += item.price;
          });
      },
      error: (errorMessage) => console.log(errorMessage),
      complete: () => console.info('complete'),
    });
  }

  handlePayPalButton = () => {
    if (this.checkoutForm.valid) {
      this.spinner.show();
      const data = {
        name:
          this.checkoutForm.value.firstName +
          ' ' +
          this.checkoutForm.value.lastName,
        phone: this.checkoutForm.value.phone,
        email: this.checkoutForm.value.email,
        city: this.checkoutForm.value.city,
        address: this.checkoutForm.value.addressLine,
        postcode: this.checkoutForm.value.postalCode,
      };

      this.http.post(this.configService.urlPaypalOrder, data).subscribe({
        next: (r) => {
          const res: any = r;
          window.location.href = res.redirect_url;
        },
        error: (v) => console.log(v),
        complete: () => console.log('complete'),
      });
    }
  };
}
