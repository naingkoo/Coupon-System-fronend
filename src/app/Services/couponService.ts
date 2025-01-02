import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root',
})
export class couponService {
 

  constructor(private http: HttpClient) {}
  getAll():Observable<Coupon[]>{
    return this.http.get<Coupon[]>('http://localhost:8080/coupon/admin/find');
  }

  getByuserId(userId:number):Observable<Coupon[]>{
    return this.http.get<Coupon[]>('http://localhost:8080/coupon/public/findbyUserId/'+userId);
  }
}