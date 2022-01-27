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
  shoppingCart$: any = '';

  private readonly initialDummyValue$: any = this.configService.getConfig();
  deleteSubject$ = new Subject();

  deleteUpdate$ = this.deleteSubject$
    .asObservable()
    .pipe(switchMap(() => this.configService.dummy()));

  delete$: Observable<any> = merge(this.initialDummyValue$, this.deleteUpdate$);

  constructor(private configService: ConfigService, private configUrl: Config) {}

  ngOnInit(): void {
    this.getShoppingCartOnInit();
  }

  getShoppingCartOnInit() {
    this.configService.getShoppingCartProducts().subscribe({
      next: (v) => (this.shoppingCart$ = v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  deleteItemFromShoppingCart(id: any) {
    this.configService.deleteItemFromShoppingCart(id);
  }

  updateShoppingCartItemAmount(id: any, amount: any) {
    let amountNumber = parseInt(amount);
    this.configService.updateShoppingCartItemAmount(id, amountNumber);
    this.getShoppingCartOnInit();
  }

  resetBasketItem() {
    this.configService.resetBasketItem();
  }

  deleteDummy(id: any) {
    console.log('delte');
    this.configService
      .deleteDummy(id)
      .pipe(tap(() => this.deleteSubject$.next(true)))
      .subscribe(() => console.log('delete oK'));
  }
}
