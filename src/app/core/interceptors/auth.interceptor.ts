import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    if (authService.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, // Attach the token as a Bearer token
        },
      });
    }
  }
  // Retrieve the token from localStorage

  // If the token exists, clone the request and add the Authorization header

  // Continue with the request and handle errors
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      console.log(error);
      // Handle error message from the backend (if available)
      if (error.error instanceof Object) {
        errorMessage = error.error.message || 'An unknown error occurred.';
      } else {
        errorMessage = error.message || 'An unknown error occurred.';
      }

      switch (error.status) {
        case 401:
          toastr.error(
            'Unauthorized access. Please login again.',
            'Authentication Error'
          );

          break;
        case 403:
      
          toastr.error(
            'Access denied. You do not have permission.',
            'Authorization Error'
          );

          break;
        case 498:
          toastr.error(
            'Invalid or expired token. Please log in again.',
            'Token Error'
          );
          router.navigate(['login']);
          break;
      }

      // Return the error as a thrown observable
      return throwError(() => new Error(errorMessage));
    })
  );
};
