import { Component } from '@angular/core';
import { merge, Observable, Subject, switchMap, tap } from 'rxjs';
import { Config } from 'src/app/models/config';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../../../styling/store.scss']
})
export class NavigationComponent {

private readonly initalArrayOfProducts$: any = this.configService.getConfig();

productsSubject$ = new Subject();
productsUpdate$ = this.productsSubject$.
  asObservable()
  .pipe(switchMap(() => this.configService.getConfig()));

updatedArrayOfProducts$: Observable<any> = merge(this.initalArrayOfProducts$, this.productsUpdate$);

urlServer: string = this.configUrl.URL_SERVER;

constructor(private configService: ConfigService, private configUrl: Config) { }

deleteProduct(id: any) {
  this.configService.setIdToDeleteAndDeleteProduct(id)
  .pipe(tap(() => this.productsSubject$.next(true)))
  .subscribe(() => console.log('delete oK'));
  ;
}


}
