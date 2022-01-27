import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavigationComponent } from './components/admin/navigation/navigation.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SpecificProductModule } from './components/specific-product/specific-product.module';

const routes: Routes = [
  { path: '', component: ProductsComponent  },
  { path: 'navigation', component: NavigationComponent }, 
  { path: 'checkout', component: CheckoutComponent }, 
  { path: 'basket-item', component: ShoppingCartComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
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
