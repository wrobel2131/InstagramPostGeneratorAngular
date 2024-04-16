import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { catchError, map, of } from 'rxjs';

/* Guard uses isAuthenticated endpoint to get boolean value, if user is allowed to the route
  If endpoint return true, user has access to route, if not, user is logged out and redirected to login page
*/

export const AuthGuard: CanActivateFn = (route, state) => {
  const userDataService: UserDataService = inject(UserDataService);

  return userDataService.checkAuthentication().pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        console.log(isAuthenticated);
        return true;
      } else {
        userDataService.logout('/signin');
        return false;
      }
    }),
    catchError((err) => {
      console.error('Error checking authentication', err);
      userDataService.logout();
      return of(false);
    })
  );
};
