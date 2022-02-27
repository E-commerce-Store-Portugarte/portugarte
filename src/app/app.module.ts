import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { RegisterComponent } from './core/authentication/register/register.component';
import { FooterComponentComponent } from './core/footer/footer-component.component';
import { HeaderComponent } from './core/header/navbar.component';
import { InterceptorModule } from './core/interceptors/interceptor.module';
import { ContactComponent } from './modules/contact/contact.component';
import { PagesModule } from './modules/pages.module';
import { AddProductsComponent } from './modules/products/add/add-products.component';
import { EditProductComponent } from './modules/products/edit/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddProductsComponent,
    EditProductComponent,
    FooterComponentComponent,
    HeaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InterceptorModule,
    BrowserAnimationsModule,
  ],
  exports: [PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
