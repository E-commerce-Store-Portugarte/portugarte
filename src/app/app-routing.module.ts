import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/authentication/login/login.component';
import { NavigationComponent } from './core/authentication/navigation/navigation.component';
import { RegisterComponent } from './core/authentication/register/register.component';
import { PaypalComponent } from './modules/checkout/paypal/paypal.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { AddProductsComponent } from './modules/products/add/add-products.component';
import { EditProductComponent } from './modules/products/edit/edit-product.component';
import { ProductsComponent } from './modules/products/list/products.component';
import { SpecificProductModule } from './modules/products/profile/specific-product.module';
import { ShoppingCartComponent } from './modules/products/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'paypal', component: PaypalComponent },
  { path: 'mercadinho', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./modules/products/profile/specific-product.module').then(
        (m) => m.SpecificProductModule
      ),
  },
];

SpecificProductModule;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
