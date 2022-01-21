import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

import { Product } from '../products/product';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.scss']
})
export class SpecificProductComponent implements OnInit {

  id: string = '';
  product$: Observable<Product> | undefined;
  
  shoppingCartProducts: any[] = JSON.parse(localStorage.getItem('dataSource') || '[]');

  constructor(private route: ActivatedRoute, private configService: ConfigService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.product$ = this.configService.getSpecificConfig(this.id);
  }

  addProductToShoppingCart(product: any) {

    this.shoppingCartProducts.push(product);
    localStorage.setItem('dataSource', JSON.stringify(this.shoppingCartProducts));
    console.log(this.shoppingCartProducts)
  }

}

