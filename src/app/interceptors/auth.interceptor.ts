import { HttpInterceptorFn } from '@angular/common/http';

/* If token is available in localStorage, interceptos adds header with token to the request */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('accessToken');
  if (!authToken) {
    return next(req);
  }
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`),
  });
  return next(authReq);
};
