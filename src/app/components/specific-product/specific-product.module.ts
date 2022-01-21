import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

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
    SpecificProductRoutingModule
  ],
  declarations: [SpecificProductComponent]
})
export class SpecificProductModule { }