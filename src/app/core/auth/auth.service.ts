import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PLATFORM_ID,inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private jwtHelper = new JwtHelperService();

  constructor(private router:Router){}
   platformId = inject(PLATFORM_ID);
  getToken(): string | null {
    // Use inject(PLATFORM_ID) and check if in browse
    
    if (isPlatformBrowser(this.platformId)) {
      // Safely access localStorage only in the browser
      return localStorage.getItem('token');
    }
    return null;
  }
  
  isAuthenticated(): boolean {
    debugger;
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false; // Check token validity
  }


  getRoles(): string[] {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token); // Decode the token
      return decodedToken.roles || []; // Extract roles from the decoded token (or return an empty array if no roles)
    }
    return []; // If no token is available, return an empty array
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Safely access localStorage only in the browser
       localStorage.getItem('token');
    }
    
    this.router.navigate(["login"])

  }
}
