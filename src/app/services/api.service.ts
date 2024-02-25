import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { USERS_MOCK, UserCredentials } from '../models/mocked-data';
import { throwError } from 'rxjs';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  userDataService = inject(UserDataService);
  router = inject(Router);

  login(userCredentials: UserCredentials): void {
    const user = USERS_MOCK.find(
      (user) => user.login === userCredentials.login
    );

    console.log('login api service, user: ', user);
    if (user) {
      this.userDataService.setIsAuthenticated(true);
      this.router.navigate(['/dashboard']);
    } else {
      this.userDataService.setIsAuthenticated(false);
    }
  }
}
