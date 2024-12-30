import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private apiUrl = 'http://localhost:8080/user';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  addUser(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUser`, formData);
  }

  // Get profile by user ID
  getProfile(userId: number): Observable<any> {
    const headers = new HttpHeaders();  // Add authorization header if needed
    return this.http.get(`${this.apiUrl}/user/${userId}`, { headers });
  }

  // Upload profile photo
  uploadProfilePhoto(file: File, userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('profilePhoto', file, file.name);

    return this.http.post(`${this.apiUrl}/upload/${userId}`, formData);
  }

   // Update profile details (name, photo, etc.)
   updateProfile(userId: number, profileData: any): Observable<any> {
    const headers = new HttpHeaders();  // Add authorization header if needed
    return this.http.put(`${this.apiUrl}/updateProfile/${userId}`, profileData, { headers });
  }
}
