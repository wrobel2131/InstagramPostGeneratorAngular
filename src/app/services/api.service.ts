import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS_MOCK, UserCredentials } from '../models/mocked-data';
import { throwError } from 'rxjs';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private userDataService: UserDataService,
    private router: Router
  ) {}

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

    // user
    //   ? this.userDataService.setIsAuthenticated(true)
    //   : this.userDataService.setIsAuthenticated(false);
  }
}
