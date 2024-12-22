import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router);          // Inject Router


  const requiredRole = route.data['role'];
  debugger;
  if (authService.isAuthenticated()) {
    const userRole = authService.getRoles();
    console.log(userRole);
    // Check if user role matches the required role
    if (!requiredRole || userRole === requiredRole) {
      return true; // Allow access
    } else {
      // If role does not match, redirect to unauthorized page
      router.navigate(['/401']);
      return false;
    }
  } else {
    authService.logout();
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
