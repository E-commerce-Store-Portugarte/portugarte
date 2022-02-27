import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/products/products.model';
import { ConfigService } from 'src/app/modules/services/config.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.scss'],
})
export class SpecificProductComponent implements OnInit {
  id: string = '';
  product$: Observable<Product> | undefined;
  urlServer = environment.apiUrl;
  isLogged: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.product$ = this.configService.getSpecificConfig(this.id);
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  addProductToShoppingCart(product: any, amount: number) {
    this.configService.addProductToShoppingCart(product, amount).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  navigateToShoppingCart() {
    this.router.navigate(['shopping-cart']);
  }
}
