import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { PaypalComponent } from './checkout/paypal/paypal.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/list/products.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule],
  exports: [],
  declarations: [ProductsComponent, LandingPageComponent, PaypalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
