import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { CheckoutComponent } from '../checkout/checkout.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { SpecificProductRoutingModule } from './specific-product-routing.module';
import { SpecificProductComponent } from './specific-product.component';

const routes: Routes = [
  {
    path: '',
    component: SpecificProductComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SpecificProductRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SpecificProductComponent, ShoppingCartComponent, CheckoutComponent]
})
export class SpecificProductModule { }