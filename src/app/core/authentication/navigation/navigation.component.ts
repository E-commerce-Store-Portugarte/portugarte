import { Component } from '@angular/core';
import { merge, Observable, Subject, switchMap, tap } from 'rxjs';
import { ConfigService } from 'src/app/modules/services/config.service';

import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [],
})
export class NavigationComponent {
  private readonly initalArrayOfProducts$: any = this.configService.getConfig();
  urlServer = environment.apiUrl;

  productsSubject$ = new Subject();
  productsUpdate$ = this.productsSubject$
    .asObservable()
    .pipe(switchMap(() => this.configService.getConfig()));

  updatedArrayOfProducts$: Observable<any> = merge(
    this.initalArrayOfProducts$,
    this.productsUpdate$
  );

  constructor(private configService: ConfigService) {}

  deleteProduct(id: any) {
    this.configService
      .setIdToDeleteAndDeleteProduct(id)
      .pipe(tap(() => this.productsSubject$.next(true)))
      .subscribe(() => console.log('delete oK'));
  }
}
