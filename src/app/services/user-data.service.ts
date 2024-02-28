import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserLoginCredentials } from '../models/user.model';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { AuthenticationResponse } from '../models/authentication-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  authService = inject(AuthService);
  apiService = inject(ApiService);
  router = inject(Router);

  isAuthenticated = signal<boolean>(false);

  setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated.set(isAuthenticated);
  }

  

  login(userLoginCredentials: UserLoginCredentials): void {
    this.authService.login(userLoginCredentials).subscribe((response) => {
      this.authService.setLocalStorage(response);
      this.setIsAuthenticated(true);
      this.router.navigate(['/dashboard'])
    })
  }

  logout(): void {
    this.setIsAuthenticated(false);
  }


  

  


}
