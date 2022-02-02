import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject, switchMap, tap } from 'rxjs';
import { Config } from 'src/app/models/config';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../../styling/store.scss'],
})
export class ShoppingCartComponent implements OnInit {

  initialShoppingCart$ = this.configService.getShoppingCartProducts();
  shoppingCartSubject$ = new Subject();
  updatedShoppingCartSubject$ = this.shoppingCartSubject$
  .asObservable()
  .pipe(switchMap(() => this.configService.getShoppingCartProducts()));
  updatedShoppingCart$: Observable<any> = merge(this.initialShoppingCart$, this.updatedShoppingCartSubject$);

  // private readonly initialDummyValue$: any = this.configService.getConfig();
  // deleteSubject$ = new Subject();

  // deleteUpdate$ = this.deleteSubject$
  //   .asObservable()
  //   .pipe(switchMap(() => this.configService.dummy()));

  // delete$: Observable<any> = merge(this.initialDummyValue$, this.deleteUpdate$);

  constructor(private configService: ConfigService, private configUrl: Config) {}

  ngOnInit(): void {
  }

  deleteItemFromShoppingCart(id: any) {
    this.configService.deleteItemFromShoppingCart(id)
      .pipe(tap(() => this.shoppingCartSubject$.next(true)))
      .subscribe((data) => console.log(data));
  }

  updateShoppingCartItemAmount(id: any, amount: any) {
    console.log("id:", id, "amount:", amount)
    let amountNumber = parseInt(amount);
    this.configService.updateShoppingCartItemAmount(id, amountNumber)
      .pipe(tap(()=> this.shoppingCartSubject$.next(true)))
      .subscribe((data) => console.log(data));
  }

  resetBasketItem() {
    this.configService.resetBasketItem();
  }

  // deleteDummy(id: any) {
  //   console.log('delte');
  //   this.configService
  //     .deleteDummy(id)
  //     .pipe(tap(() => this.deleteSubject$.next(true)))
  //     .subscribe(() => console.log('delete oK'));
  // }
}
