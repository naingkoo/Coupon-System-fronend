import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../entities/Coupon';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private httpClient:HttpClient) { }

  public getAllCouponsWhereTypeIsELECTRICITY():Observable<Coupon[]>{
    const type:String = "ELECTRICITY";
    return this.httpClient.get<Coupon[]>("http://localhost:8080/main/getAllCouponsWhereTypeIs/"+type,{withCredentials:true})
  }

  public getAllCouponsWhereTypeIsRESTURANS():Observable<Coupon[]>{
    const type:String = "RESTURANS";
    return this.httpClient.get<Coupon[]>("http://localhost:8080/main/getAllCouponsWhereTypeIs/"+type,{withCredentials:true})
  }

  public getAllCouponsWhereTypeIsHEALTH():Observable<Coupon[]>{
    const type:String = "HEALTH";
    return this.httpClient.get<Coupon[]>("http://localhost:8080/main/getAllCouponsWhereTypeIs/"+type,{withCredentials:true})
  }

  public getAllCouponsWhereTypeIsELECTRICITYInCategorie():Observable<Coupon[]>{
    const type:String = "ELECTRICITY categorie";
    return this.httpClient.get<Coupon[]>("http://localhost:8080/main/getAllCouponsWhereTypeIs/"+type,{withCredentials:true})
  }

  public getAllCouponsWhereTypeIsRESTURANSInCategorie():Observable<Coupon[]>{
    const type:String = "RESTURANS categorie";
    return this.httpClient.get<Coupon[]>("http://localhost:8080/main/getAllCouponsWhereTypeIs/"+type,{withCredentials:true})
  }

  public getAllCouponsWhereTypeIsHEALTHInCategorie():Observable<Coupon[]>{
    const type:String = "HEALTH categorie";
    return this.httpClient.get<Coupon[]>("http://localhost:8080/main/getAllCouponsWhereTypeIs/"+type,{withCredentials:true})
  }


}
