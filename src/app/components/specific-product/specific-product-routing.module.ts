import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecificProductComponent } from './specific-product.component';


const routes: Routes = [
  {path: '', component: SpecificProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecificProductRoutingModule { }