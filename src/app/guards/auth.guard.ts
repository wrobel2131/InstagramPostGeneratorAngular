import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { map, take } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const userDataService: UserDataService = inject(UserDataService);
  const router: Router = inject(Router);
  return userDataService.isAuthenticated$.pipe(
    take(1),
    map((isAuthenticated) => {
      console.log(isAuthenticated);
      return isAuthenticated ? true : router.createUrlTree(['/signin']);
    })
  );
};
