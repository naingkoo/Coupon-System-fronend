import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CheckConService {

  constructor(public httpClinet:HttpClient) { }

private baseUrl=environment.apiUrl

  public checkCon():Observable<String>{
    return this.httpClinet.get<String>(`${this.baseUrl}`,{withCredentials:true});
  }
}
