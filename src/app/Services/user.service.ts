import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private getAllUrl = 'http://localhost:8080/user/public/list'; // Replace with your API URL

  public constructor(private httpClient: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/addUser', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.getAllUrl);
  }
}
