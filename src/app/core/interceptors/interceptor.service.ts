import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../authentication/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private userAuthenticationService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.userAuthenticationService.currentUserValue) {
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
