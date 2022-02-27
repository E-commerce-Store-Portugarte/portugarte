import { Component } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { ConfigService } from 'src/app/modules/services/config.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [],
})
export class ShoppingCartComponent {
  shoppingCartSubject$ = new BehaviorSubject<any>(
    this.configService.getShoppingCartProducts()
  );
  shoppingCart$ = this.shoppingCartSubject$
    .asObservable()
    .pipe(switchMap(() => this.configService.getShoppingCartProducts()));

  constructor(private configService: ConfigService) {}

  updateShoppingCartItemAmount(id: any, amount: any) {
    console.log('id:', id, 'amount:', amount);
    let amountNumber = parseInt(amount);
    this.configService
      .updateShoppingCartItemAmount(id, amountNumber)
      .pipe(tap(() => this.shoppingCartSubject$.next(true)))
      .subscribe({
        next: (v) => console.log(v),
        error: (v) => console.log(v),
        complete: () => console.info('complete'),
      });
  }

  deleteItemFromShoppingCart(id: any) {
    this.configService
      .deleteItemFromShoppingCart(id)
      .pipe(tap(() => this.shoppingCartSubject$.next(true)))
      .subscribe({
        next: (v) => console.log('OBJECTO DO BACKEND', v),
        error: (v) => console.log(v),
        complete: () => console.info('complete'),
      });
  }
}
