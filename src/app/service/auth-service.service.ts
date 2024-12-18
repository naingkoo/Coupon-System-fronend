import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/coupon/'; // Replace with your backend API URL
  private tokenKey = 'auth-token'; // Key to store token in localStorage
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    // Load user data from token on service initialization
    const token = this.getToken();
    if (token) {
      const user = this.parseToken(token);
      this.currentUserSubject.next(user);
    }
  }

  /**
   * Login Method
   * Sends email and password to backend and stores the token on success.
   */
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        if (response && response.token) {
          this.saveToken(response.token);
          this.currentUserSubject.next(this.parseToken(response.token)); // Update current user
        }
        return response;
      }),
      catchError((error) => {
        console.error('Login Failed:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Logout Method
   * Clears the token and user session.
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUserSubject.next(null);
  }

  /**
   * Get Current User
   * Returns the currently logged-in user.
   */
  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  /**
   * Get Token
   * Retrieves the token from localStorage.
   */
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Save Token
   * Stores the token in localStorage.
   */
  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Parse Token
   * Decodes the JWT token to extract user details.
   */
  private parseToken(token: string): any {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (error) {
      console.error('Invalid token format', error);
      return null;
    }
  }

  /**
   * Check if User is Logged In
   * Returns true if a valid token exists.
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const payload = this.parseToken(token);
    return payload && payload.exp * 1000 > Date.now(); // Check token expiration
  }
}
