import { Component, OnInit } from '@angular/core';

import { Product } from '../products/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart$: Product[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
