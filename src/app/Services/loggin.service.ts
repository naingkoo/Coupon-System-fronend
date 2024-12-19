import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggedUser } from '../model/logged-user';
import { environment } from '../../environments/environment';
import { ClientType } from '../model/ClientType';



@Injectable({
  providedIn: 'root'
})
export class LogginService {
  private baseUrl=environment.apiUrl;

  private  loggdUser:LoggedUser = new LoggedUser(0,ClientType.CUSTOMER,"","");
  
public constructor(private httpClient : HttpClient) { }

public login(loggedUser:LoggedUser):Observable<any>{

  return this.httpClient.post<LoggedUser>( `${this.baseUrl}/loginUser`,loggedUser,{withCredentials:true});
}

public logOut():Observable<any>{

  return this.httpClient.post<any>("http://localhost:8080/login/logOut",{withCredentials:true});
}


  public ifLoggdIn(l:LoggedUser){
    
    this.loggdUser = l;
  }

  public ifLoggdOut(l:LoggedUser){
    this.loggdUser = l;
  }

  public getLoggduser(){
    return this.loggdUser;
  }


  public get loggeduser() : LoggedUser{
    return this.loggdUser;
  }

  public set setLoggedUser(loggedUser:LoggedUser){
    this.loggdUser = loggedUser;
  }
}
