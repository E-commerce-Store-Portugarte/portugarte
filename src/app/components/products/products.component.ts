import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/models/config';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../styling/store.scss']
})
export class ProductsComponent implements OnInit {

  arrayOfProducts$: any = this.configService.getConfig();
  
  urlServer: string = this.configUrl.URL_SERVER;


  constructor(private configService: ConfigService, private router: Router, private configUrl: Config) { }

  ngOnInit(): void {
   }

  productProfile(i: string) {
    this.router.navigate(['products', i]);
  }



}