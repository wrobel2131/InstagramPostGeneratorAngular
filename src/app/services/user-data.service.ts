import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/mocked-data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private readonly authenticatedUserSubject = new BehaviorSubject<User | null>(
    null
  );
  public readonly authenticatedUser$: Observable<User | null> =
    this.authenticatedUserSubject.asObservable();

  private readonly isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public readonly isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  setAuthenticatedUser(authenticatedUser: User): void {
    this.authenticatedUserSubject.next(authenticatedUser);
  }
}
