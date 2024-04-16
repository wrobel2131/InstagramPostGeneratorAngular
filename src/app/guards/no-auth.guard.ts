import { CanActivateFn, Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

/* Guard uses isAuthenticated endpoint to get boolean value, if user is authenticated or not
  If endpoint return true, user is redirected to dashboard page, otherwise it allows to access public routes
  because user is not authenticated anymore
*/

export const NoAuthGuard: CanActivateFn = (route, state) => {
  const userDataService: UserDataService = inject(UserDataService);
  const router: Router = inject(Router);

  return userDataService.checkAuthentication().pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
    }),
    catchError((err) => {
      console.error('Error in no-auth guard', err);
      return of(true);
    })
  );
};
