import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../components/products/product';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'https://fakestoreapi.com/products/';
  


  constructor(private http: HttpClient) { }

  // Index main page products methods

  getConfig() {
    return this.http.get<Product[]>(this.configUrl);
  }

  // Profile product methods

  getSpecificConfig(id: string) {
    return this.http.get<Product>(this.configUrl + id);
  }

  // Shopping Cart methods

  addProductToShoppingCart(product: any) {

  }

  getShoppingCartProducts() {

  }

}
