import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../styling/store.scss']
})
export class ProductsComponent implements OnInit {

  arrayOfProducts$: Observable<Product[]> = this.configService.getConfig();

  constructor(private configService: ConfigService, private router: Router) { }

  ngOnInit(): void {
  }

  productProfile(i: string) {
    this.router.navigate(['products', i]);
  }

}