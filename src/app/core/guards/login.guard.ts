import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';
import { ClientType } from '../../models/ClientType';
import { Observable, of } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router);

  const role = authService.getRoles();


  // Redirect based on role
  switch (role) {
    case ClientType.ADMIN:
      // Redirect admin to the admin dashboard
      router.navigate(['/adm-dashboard']);
      return of(false); // Prevent navigation to the original route

    case ClientType.CUSTOMER:
      // Redirect customer to the customer dashboard
      router.navigate(['/home']);
      return of(false); // Prevent navigation to the original route

  }

  // Default return value to allow access
  return of(true);
};
