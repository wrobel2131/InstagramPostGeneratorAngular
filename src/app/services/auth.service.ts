import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  UserLoginCredentials,
  UserRegisterCredentials,
} from '../models/user.model';
import { AuthenticationResponse } from '../models/authentication-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  private URL = 'http://localhost:9000/api/v1/auth';

  login(credentials: UserLoginCredentials): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      this.URL + '/login',
      credentials
    );
  }

  register(credentials: UserRegisterCredentials): Observable<void> {
    return this.http.post<void>(this.URL + '/register', credentials);
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(this.URL + '/isAuthenticated');
  }

  setLocalStorage({ accessToken, username }: AuthenticationResponse): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    // localStorage.setItem('refreshToken', refreshToken);
    // localStorage.setItem('userId', String(userId));
  }

  clearLocalStorage(): void {
    localStorage.removeItem('accessToken');
    // localStorage.removeItem('refreshToken');
    // localStorage.removeItem('userId');
    localStorage.removeItem('username');
  }
}
