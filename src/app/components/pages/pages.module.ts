import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ProductsComponent } from '../products/products.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { PaypalComponent } from './components/paypal/paypal/paypal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    
  ],
  declarations: [
    ProductsComponent,
    LandingPageComponent,
    PaypalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
