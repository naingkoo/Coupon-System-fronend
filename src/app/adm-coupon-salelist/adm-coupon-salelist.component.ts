import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-coupon-salelist',
  templateUrl: './adm-coupon-salelist.component.html',
  styleUrl: './adm-coupon-salelist.component.css',
})
export class AdmCouponSalelistComponent {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
