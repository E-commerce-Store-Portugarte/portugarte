import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Config } from '../models/config';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = this.config.URL_SERVER + '/api/v1/products/';
  configUrlBasic = this.config.URL_SERVER;
  configUrlPost = this.config.URL_SERVER + '/api/v1/basket-items/';
  configUrlLogin = this.config.URL_SERVER + '/rest-auth/login/';
  configUrlCheckout = this.config.URL_SERVER + '/api/v1/orders/';
  configUrlRegistration = this.config.URL_SERVER + '/rest-auth/registration/';
  configUrlImage = this.config.URL_SERVER + '/admin/api/v1/products/';
  configUrlLoginAdmin = this.config.URL_SERVER + '/admin/api/v1/login/';
  configUrlPaypalOrder = this.config.URL_SERVER + '/api/v1/paypal/orders/';
  configUpdateProduct = '';
  configDeleteProduct = '';

  token: any = '';

  constructor(
    private http: HttpClient,
    private config: Config,
    private router: Router
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      Authorization: 'Token 4ee8a9647d51d4dfe4641ff4180a7a5c7f9ccfdc',
    }),
  };

  // Index main page products methods

  getConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  // Profile product methods

  getSpecificConfig(id: string): Observable<Product> {
    return this.http.get<Product>(this.configUrl + id);
  }

  // Shopping Cart methods

  addProductToShoppingCart(product: any, amount: number) {
    this.http
      .post(
        this.configUrlPost,
        {
          product_id: product,
          amount: 1,
        },
        this.httpOptions
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
  }

  getShoppingCartProducts(): Observable<any> {
    return this.http.get(this.configUrlPost, this.httpOptions);
  }

  deleteItemFromShoppingCart(id: any) {
    return this.http.delete(this.configUrlPost + id + '/', this.httpOptions);
  }

  updateShoppingCartItemAmount(id: any, amount: any) {
    return this.http
      .put(
        this.configUrlPost + id + '/',
        {
          amount: amount,
        },
        this.httpOptions
      )
  }

  login(form: FormGroup) {
    this.http
      .post(this.configUrlLogin, form, { withCredentials: true })
      .subscribe((res: any) => {
        localStorage.setItem('token', res.key);
        this.router.navigate(['navigation']);
      }),
      (err: any) => {
        console.log(err);
      };
  }

  loginUser(form: FormGroup) {
    this.http
      .post(this.configUrlLogin, form, { withCredentials: true })
      .subscribe((res: any) => {
        localStorage.setItem('token', res.key);
        this.router.navigate(['navigation']);
      }),
      (err: any) => {
        console.log(err);
      };
  }

  submitProduct(form: any) {
    this.http.post(this.config.URL_SERVER, form, this.token);
    this.router.navigate(['navigation']);
  }

  checkoutOrder(form: any) {
    console.log(this.token);
    this.http.post(this.configUrlCheckout, form, this.httpOptions).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  submitRegistration(form: any) {
    this.http.post(this.configUrlRegistration, form).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  resetBasketItem() {
    this.http.delete(this.configUrlPost);
  }

  uploadImage(form: FormData) {
    this.http.post(this.configUrlImage, form, this.httpOptions).subscribe({
      next: (v) => console.log(v),
      error: (v) => console.log(v),
      complete: () => console.info('complete'),
    });
  }

  getDataFromSpecificProduct(id: any): Observable<any> {
    return this.http.get(this.configUrlImage + id, this.httpOptions);
  }

  setIdForUrl(id: any) {
    this.configUpdateProduct =
      this.config.URL_SERVER + '/admin/api/v1/products/' + id + '/change/';
  }

  setIdToDeleteAndDeleteProduct(id: any) {
    this.configDeleteProduct =
      this.config.URL_SERVER + '/admin/api/v1/products/' + id + '/delete/';
      return this.http.delete(this.configDeleteProduct, this.httpOptions);
  }

  updateProducts(form: FormData) {
    this.http.put(this.configUpdateProduct, form, this.httpOptions).subscribe({
      next: (v) => console.log(v),
      error: (v) => console.log(v),
      complete: () => console.info('complete'),
    });
  }

  dummy() {
    return this.http.get('http://localhost:3000/posts/');
  }

  deleteDummy(id: any) {
    console.log('ciao');
    return this.http.delete('http://localhost:3000/posts/' + id);
  }
}
