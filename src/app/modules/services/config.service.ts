import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../products/products.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  urlBasic = environment.apiUrl;
  urlProducts = environment.apiUrl + '/api/v1/products/';
  urlProductsHttpParams = environment.apiUrl + '/api/v1/products';
  urlPost = environment.apiUrl + '/api/v1/basket-items/';
  urlLogin = environment.apiUrl + '/rest-auth/login/';
  urlCheckout = environment.apiUrl + '/api/v1/orders/';
  urlRegistration = environment.apiUrl + '/rest-auth/registration/';
  urlImage = environment.apiUrl + '/admin/api/v1/products/';
  urlLoginAdmin = environment.apiUrl + '/admin/api/v1/login/';
  urlPaypalOrder = environment.apiUrl + '/api/v1/paypal/orders/';
  urlsendMessage = environment.apiUrl + '/api/v1/support-tickets/';
  configUpdateProduct = '';
  configDeleteProduct = '';

  token: any = '';

  _isUserLogged$ = new BehaviorSubject<any>('false');
  _isUserLoggedObservable$: Observable<boolean> =
    this._isUserLogged$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  set setIsUserLogged(boolean: any) {
    this._isUserLogged$.next(boolean);
  }

  get isUserLogged(): any {
    return this._isUserLoggedObservable$;
  }

  getConfig(): Observable<any> {
    return this.http.get(this.urlProducts);
  }

  getConfigWithAbbreviatedDescription(): Observable<any> {
    const setParams = {
      params: new HttpParams().set('abbreviation_length', 179),
    };

    return this.http.get(this.urlProductsHttpParams, setParams);
  }

  getSpecificConfig(id: string): Observable<Product> {
    return this.http.get<Product>(this.urlProducts + id);
  }

  addProductToShoppingCart(product: any, amount: number) {
    const products = {
      product_id: product,
      amount: 1,
    };
    return this.http.post(this.urlPost, products);
  }

  getShoppingCartProducts(): Observable<any> {
    return this.http.get(this.urlPost);
  }

  deleteItemFromShoppingCart(id: any) {
    return this.http.delete(this.urlPost + id + '/');
  }

  updateShoppingCartItemAmount(id: any, amount: any) {
    const amountObject = {
      amount: amount,
    };
    return this.http.put(this.urlPost + id + '/', amountObject);
  }

  login(form: FormGroup) {
    return this.http.post(this.urlLogin, form, { withCredentials: true });
  }

  loginUser(form: FormGroup) {
    this.http
      .post(this.urlLogin, form, { withCredentials: true })
      .subscribe((res: any) => {
        localStorage.setItem('token', res.key);
        this.router.navigate(['navigation']);
      }),
      (err: any) => {
        console.log(err);
      };
  }

  submitProduct(form: any) {
    this.http.post(this.urlProducts, form, this.token);
    this.router.navigate(['navigation']);
  }

  checkoutOrder(form: any) {
    console.log(this.token);
    this.http.post(this.urlCheckout, form).subscribe({
      next: (v) => console.log(v),
      error: (v) => console.log(v),
      complete: () => console.info('complete'),
    });
  }

  submitRegistration(form: any) {
    return this.http.post(this.urlRegistration, form);
  }

  uploadImage(form: FormData) {
    this.http.post(this.urlImage, form).subscribe({
      next: (v) => console.log(v),
      error: (v) => console.log(v),
      complete: () => console.info('complete'),
    });
  }

  getDataFromSpecificProduct(id: any): Observable<any> {
    return this.http.get(this.urlImage + id);
  }

  setIdForUrl(id: any) {
    this.configUpdateProduct =
      this.urlProducts + '/admin/api/v1/products/' + id + '/change/';
  }

  setIdToDeleteAndDeleteProduct(id: any) {
    this.configDeleteProduct =
      this.urlProducts + '/admin/api/v1/products/' + id + '/delete/';
    return this.http.delete(this.configDeleteProduct);
  }

  updateProducts(form: FormData) {
    this.http.put(this.configUpdateProduct, form).subscribe({
      next: (v) => console.log(v),
      error: (v) => console.log(v),
      complete: () => console.info('complete'),
    });
  }

  sendMessage(message: FormData): Observable<any> {
    return this.http.post(this.urlsendMessage, message);
  }
}
