import { Injectable, inject } from '@angular/core';
import { UserLoginCredentials } from '../models/user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private apiService: ApiService = inject(ApiService);

  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public readonly isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  public setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  public checkAuthentication(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap((isValid) => this.setIsAuthenticated(isValid)),
      catchError(() => {
        this.setIsAuthenticated(false);
        return of(false);
      })
    );
  }

  login(userLoginCredentials: UserLoginCredentials): void {
    this.authService.login(userLoginCredentials).subscribe((response) => {
      this.authService.setLocalStorage(response);
      this.router.navigate(['/dashboard']);
    });
  }

  logout(redirectUri = ''): void {
    this.setIsAuthenticated(false);
    this.authService.clearLocalStorage();
    this.router.navigate([redirectUri]);
  }
}
