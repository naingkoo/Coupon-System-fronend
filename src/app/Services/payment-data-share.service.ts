import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentDataShareService {
  private packageData: any = null; // For individual package
  private cartData: any[] = []; // For cart data

  setPackageData(data: any) {
    this.packageData = data;
  }

  getPackageData() {
    return this.packageData;
  }

  setCartData(data: any[]) {
    this.cartData = data;
  }

  getCartData() {
    return this.cartData;
  }

  clearData() {
    this.packageData = null;
    this.cartData = [];
  }
}
