import { DestroyRef, Injectable, effect, inject, signal } from '@angular/core';
import { UpdateUser, User, UserLoginCredentials } from '../models/user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { InstagramPost } from '../models/instagram-post.model';
import { ApiService } from './api.service';
import { catchError, filter, first, of, switchMap } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private apiService: ApiService = inject(ApiService);

  //Needs to be changed to false as defualt
  isAuthenticated = signal<boolean>(true);

  isAuthenticatedEffect = effect(() => {
    console.log('Auth: ' + this.isAuthenticated());
    if (!this.isAuthenticated()) {
      console.log('clear storage');
      this.authService.clearLocalStorage();
    }
  });

  isLoginEditEnabled = signal<boolean>(false);

  userId = signal<number | undefined>(undefined);

  user = toSignal(
    toObservable(this.userId).pipe(
      filter((id): id is number => id !== undefined),
      switchMap((id) => this.apiService.getUser(id))
    )
  );

  // posts = signal<InstagramPost[]>([]);

  // selectedPostId = signal<number>(0);

  // selectedPost = signal<InstagramPost | undefined>(undefined);

  setUserId(userId: number) {
    console.log('Set user id to: ' + userId);
    this.userId.set(userId);
  }

  setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated.set(isAuthenticated);
  }

  login(userLoginCredentials: UserLoginCredentials): void {
    this.authService.login(userLoginCredentials).subscribe((response) => {
      this.authService.setLocalStorage(response);
      this.setIsAuthenticated(true);
      this.router.navigate(['/dashboard']);
      this.setUserId(response.userId);
    });
  }

  updateUser(updatedUser: User) {
    console.log('update data service');
    this.apiService
      .updateUser(updatedUser)
      .pipe(
        switchMap(() => {
          return this.apiService.getUser(this.userId()!);
        })
      )
      .subscribe();
  }

  logout(): void {
    console.log('logout in dataService');
    this.setIsAuthenticated(false);
    this.router.navigate(['']);
  }
}
