import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private baseUrl=environment.apiUrl;
  
    
  public constructor(private httpClient : HttpClient) { }

 
  registerUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, user);
  }

}
