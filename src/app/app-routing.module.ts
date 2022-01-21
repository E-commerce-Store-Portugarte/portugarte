import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { SpecificProductModule } from './components/specific-product/specific-product.module';

const routes: Routes = [
  { path: '', component: ProductsComponent  },
  { path: 'products/:id', 
  loadChildren: () => import('./components/specific-product/specific-product.module').then(m => m.SpecificProductModule)
 },
];

SpecificProductModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
