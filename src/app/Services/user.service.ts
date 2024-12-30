import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

    private baseUrl=environment.apiUrl;
  
    
  public constructor(private httpClient : HttpClient) { }

  getUser(id:any):Observable<any> {
      return this.httpClient.get<any>(this.baseUrl+"/getUser/"+ id);
    }

 
  registerUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/addUser', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+"public/list");
  }

  getUserDetailsById(userId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl+"/getById"}/${userId}`);
  }
}
