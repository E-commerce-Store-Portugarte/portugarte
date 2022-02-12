import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../../../core/authentication/navigation/navigation.component';
import { SpecificProductComponent } from './specific-product.component';

const routes: Routes = [
  { path: '', component: SpecificProductComponent },
  { path: 'navigation', component: NavigationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificProductRoutingModule {}
