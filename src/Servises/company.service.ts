import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../entities/company';
import { Observable } from 'rxjs';
import { Coupon } from '../entities/Coupon';
import { Coupontype } from '../entities/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private coupon:Coupon;

  constructor(public httpClinet:HttpClient) { }

  public createCoupon(coupon:Coupon):Observable<Coupon>{
    return this.httpClinet.post<Coupon>("http://localhost:8080/rest/Company/createCoupon",coupon,{withCredentials:true});
  }

public deleteCoupon(couponId:number):Observable<Company>{
  return this.httpClinet.delete<any>("http://localhost:8080/rest/Company/removeCoupon/"+couponId,{withCredentials:true});
}

public updateCoupon(coupon:Coupon):Observable<Coupon>{
  return this.httpClinet.put<Coupon>("http://localhost:8080/rest/Company/updateCoupon",coupon,{withCredentials:true});
}

public viewAllCompanyCoupons():Observable<Coupon[]>{
  return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Company/getAllCoupons/",{withCredentials:true});
}

public viewAllCompanyCouponsBytype(couponType:Coupontype):Observable<Coupon[]>{
  return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Company/getCouponsByType/"+couponType,{withCredentials:true});
}

public viewAllCompanyCouponsByPrice(price:number):Observable<Coupon[]>{
  return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Company/getCouponsByPrice/"+price,{withCredentials:true});
}
public viewAllCompanyCouponsByDate(date:Date):Observable<Coupon[]>{
  return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Company/getCouponsByDate/"+date,{withCredentials:true});
}
}
