import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserPhoto } from '../models/user-photo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private getAllUrl = 'http://localhost:8080/user/public/list';
  private getById = 'http://localhost:8080/user/public/getById';
  private photoupload = 'http://localhost:8080/user/uploadPhoto';

  public constructor(private httpClient: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/addUser', user);
  }

  uploadPhoto(userId: number, image: File): Observable<UserPhoto> {
    const formData = new FormData();
    formData.append('userId', userId.toString());
    formData.append('image', image);

    return this.httpClient.post<UserPhoto>(this.photoupload, formData);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.getAllUrl);
  }

  getUserDetailsById(userId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.getById}/${userId}`);
  }
}
