import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSubject$ = new BehaviorSubject<any>(localStorage.getItem('token'));
  currentUser$ = this.currentUserSubject$.asObservable();

  constructor() {}

  public get currentUserValue(): any {
    return this.currentUserSubject$.value;
  }

  public set setCurrentUser(data: any) {
    this.currentUserSubject$.next(data);
  }
}
