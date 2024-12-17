import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router);          // Inject Router

  // Retrieve required role from route data
  const requiredRole = route.data['role'];
  debugger;
  // Check if user is authenticated
  if (authService.isAuthenticated()) {
    const userRole = authService.getRoles();
     // Retrieve user role from token or storage
    console.log(userRole);
    // Check if user role matches the required role
    if (!requiredRole || userRole === requiredRole) {
      return true; // Allow access
    } else {
      // If role does not match, redirect to unauthorized page
      router.navigate(['/unauthorized']);
      return false;
    }
  } else {
    // If not authenticated, redirect to login
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
