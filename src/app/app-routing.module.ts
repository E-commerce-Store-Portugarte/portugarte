import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavigationComponent } from './components/admin/navigation/navigation.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LandingPageComponent } from './components/pages/components/landing-page/landing-page/landing-page.component';
import { PaypalComponent } from './components/pages/components/paypal/paypal/paypal.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SpecificProductModule } from './components/specific-product/specific-product.module';

const routes: Routes = [
  { path: '', component: LandingPageComponent  },
  { path: 'navigation', component: NavigationComponent }, 
  { path: 'checkout', component: CheckoutComponent }, 
  { path: 'basket-item', component: ShoppingCartComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'paypal', component: PaypalComponent },
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
