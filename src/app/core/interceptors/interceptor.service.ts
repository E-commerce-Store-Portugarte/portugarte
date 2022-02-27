import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../authentication/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  token: any = null;

  constructor(private userAuthenticationService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.userAuthenticationService.currentUser$.subscribe({
      next: (data: any) => {
        this.token = data;
        console.log('VALOR DO TOKEN', this.token);
      },
    });

    console.log(
      'será q entrou?',
      this.userAuthenticationService.currentUserValue
    );

    if (this.userAuthenticationService.currentUserValue) {
      console.log('será q entrou no segundo?');
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Token ${this.userAuthenticationService.currentUserValue}`,
        }),
      });
    }
    return next.handle(request);
  }
}
