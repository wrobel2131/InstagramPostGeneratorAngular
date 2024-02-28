import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, throwError } from 'rxjs';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';
import { UserCredentials } from '../models/mocked-data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  userDataService = inject(UserDataService);
  router = inject(Router);

  login(credentials: UserCredentials) {
    console.log('login endpoint');
    return this.http.post<any>('api/login', credentials).pipe(
      map((user) => {
        console.log('map');
        console.log(user);
        if (user) {
          console.log('authenticated');
          this.userDataService.setIsAuthenticated(true);
          this.router.navigate(['/dashboard']);
        }
        return user;
      })
    );
  }
}
