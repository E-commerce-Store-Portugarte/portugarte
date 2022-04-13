import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/modules/services/config.service';

import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [],
})
export class ProductsComponent implements OnInit {
  arrayOfProducts$: any =
    this.configService.getConfigWithAbbreviatedDescription();
  urlServer = environment.apiUrl;

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  productProfile(i: string) {
    this.router.navigate(['products', i]);
  }
}
