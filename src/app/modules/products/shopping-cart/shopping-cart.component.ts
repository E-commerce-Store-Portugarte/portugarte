import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject, switchMap, tap } from 'rxjs';
import { ConfigService } from 'src/app/modules/services/config.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [],
})
export class ShoppingCartComponent implements OnInit {
  initialShoppingCart$ = this.configService.getShoppingCartProducts();
  shoppingCartSubject$ = new Subject();
  updatedShoppingCartSubject$ = this.shoppingCartSubject$
    .asObservable()
    .pipe(switchMap(() => this.configService.getShoppingCartProducts()));
  updatedShoppingCart$: Observable<any> = merge(
    this.initialShoppingCart$,
    this.updatedShoppingCartSubject$
  );

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  deleteItemFromShoppingCart(id: any) {
    this.configService
      .deleteItemFromShoppingCart(id)
      .pipe(tap(() => this.shoppingCartSubject$.next(true)))
      .subscribe((data) => console.log(data));
  }

  updateShoppingCartItemAmount(id: any, amount: any) {
    console.log('id:', id, 'amount:', amount);
    let amountNumber = parseInt(amount);
    this.configService
      .updateShoppingCartItemAmount(id, amountNumber)
      .pipe(tap(() => this.shoppingCartSubject$.next(true)))
      .subscribe((data) => console.log(data));
  }

  resetBasketItem() {
    this.configService.resetBasketItem();
  }
}
