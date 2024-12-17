import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private jwtHelper = new JwtHelperService();

  getToken(): string | null {
    return localStorage.getItem('token');
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
    localStorage.removeItem('auth_token');
  }
}
