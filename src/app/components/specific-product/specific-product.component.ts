import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Config } from 'src/app/models/config';
import { Product } from 'src/app/models/products.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.scss']
})
export class SpecificProductComponent implements OnInit {

  id: string = '';
  product$: Observable<Product> | undefined;
  urlServer: string = this.configUrl.URL_SERVER;
  
  constructor(private route: ActivatedRoute, private configService: ConfigService, private configUrl: Config) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.product$ = this.configService.getSpecificConfig(this.id);
  }

  addProductToShoppingCart(product: any, amount: number) {
    this.configService.addProductToShoppingCart(product, amount);
  }

}

