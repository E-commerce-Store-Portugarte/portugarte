import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
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

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private userAuthenticationService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.product$ = this.configService.getSpecificConfig(this.id);
  }

  addProductToShoppingCart(product: any, amount: number) {
    if (!localStorage.getItem('token')) {
      console.log(this.userAuthenticationService.currentUserValue);
      alert('you are not logged in');
    } else {
      console.log('wwww');
      this.configService.addProductToShoppingCart(product, amount).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
    }
  }

  navigateToShoppingCart() {
    if (!localStorage.getItem('token')) {
      console.log('TOKEN==>', this.userAuthenticationService.currentUserValue);
      alert('you are not logged in');
    } else {
      this.router.navigate(['shopping-cart']);
    }
  }
}
