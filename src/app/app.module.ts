import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavigationComponent } from './components/admin/navigation/navigation.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { Config } from './models/config';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    AddProductsComponent,
    EditProductComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
