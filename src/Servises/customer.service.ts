import { Injectable } from '@angular/core';
import { Customer } from '../entities/Customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../entities/Coupon';
import { Coupontype } from '../entities/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  

  constructor(public httpClinet:HttpClient) { }

  public viewAllCustomerCoupons():Observable<Coupon[]>{
    return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Customer/getAllPurchasedCoupons",{withCredentials:true});
  }

  public viewAllCompanyCouponsByType(couponType:Coupontype):Observable<Coupon[]>{
    return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Customer/getAllPurchaseCouponsByType/"+couponType,{withCredentials:true});
  }
  public viewAllCompanyCouponsByPrice(price:number):Observable<Coupon[]>{
    return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Customer/getAllPurchesCouponsByPrice/"+price,{withCredentials:true});
  }

  public purchaseCoupon(couponId:number):Observable<any>{
    return this.httpClinet.post<any>("http://localhost:8080/rest/Customer/purchaseCoupon/"+couponId,{withCredentials:true});
  }

}
