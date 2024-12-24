import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoggedUser } from '../../models/logged-user';
import { ClientType } from '../../models/ClientType';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private jwtHelper = new JwtHelperService();
  private baseUrl = environment.apiUrl;

  private loggdUser: LoggedUser = new LoggedUser(
    0,
    ClientType.CUSTOMER,
    '',
    ''
  );

  constructor(private router: Router, private httpClient: HttpClient) {}
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
    const token = this.getToken();
    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        this.logout();
      } else {
        return true;
      }
    }
    return false; // Check token validity
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
      localStorage.removeItem('token');
    }

    this.router.navigate(['login']);
  }

  public login(loggedUser: LoggedUser): Observable<any> {
    return this.httpClient.post<LoggedUser>(
      `${this.baseUrl}/loginUser`,
      loggedUser,
      { withCredentials: true }
    );
  }

  // public logOut():Observable<any>{

  //   return this.httpClient.post<any>("http://localhost:8080/login/logOut",{withCredentials:true});
  // }

  public ifLoggdIn(l: LoggedUser) {
    const token = this.getToken();
    this.loggdUser = l;
  }

  public ifLoggdOut(l: LoggedUser) {
    this.loggdUser = l;
  }

  public getLoggduser() {
    return this.loggdUser;
  }

  public get loggeduser(): LoggedUser {
    return this.loggdUser;
  }

  public set setLoggedUser(loggedUser: LoggedUser) {
    this.loggdUser = loggedUser;
  }
}
