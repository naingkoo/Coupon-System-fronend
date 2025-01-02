import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/Coupon';
import { couponService } from '../Services/couponService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adm-coupon',
  templateUrl: './adm-coupon.component.html',
  styleUrls: ['./adm-coupon.component.css']
})
export class AdmCouponComponent implements OnInit {
  coupons: Coupon[] = [];

  constructor(private service: couponService, private router: Router, private route: ActivatedRoute) {
    console.log('AdmCouponComponent instantiated');
  }

  ngOnInit(): void {
    console.log('AdmCouponComponent ngOnInit');
    this.service.getAll().subscribe(
      (data) => {
        console.log('Data received:', data);
        this.coupons = data;
      },
      (error) => {
        console.log('Coupon list not found', error);
      }
    );
  }
  

  
}
