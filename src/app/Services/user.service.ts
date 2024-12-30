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

  getUser(id:any):Observable<any> {
      return this.httpClient.get<any>(this.baseUrl+"/getUser/"+ id);
    }

 
  registerUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl+"/addUser", user);
  }

}
