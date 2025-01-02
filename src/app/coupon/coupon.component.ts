import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/Coupon';
import { couponService } from '../Services/couponService';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent implements OnInit {
 coupons: Coupon[] = [];


  constructor(private service: couponService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = 2;
    this.service.getByuserId(userId).subscribe(
      (data) => {
        console.log('Coupons:', data);
        this.coupons = data;
      },
      (error) => {
        console.error('Error fetching coupons:', error);
      }
    );
  }
  
}

