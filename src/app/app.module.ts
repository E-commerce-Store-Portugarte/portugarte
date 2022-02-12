import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavigationComponent } from './components/admin/navigation/navigation.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { FooterComponentComponent } from './components/pages/components/footer/footer-component/footer-component.component';
import { NavbarComponent } from './components/pages/components/navbar/navbar/navbar.component';
import { PagesModule } from './components/pages/pages.module';
import { Config } from './models/config';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    AddProductsComponent,
    EditProductComponent,
    NavbarComponent,
    FooterComponentComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PagesModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
