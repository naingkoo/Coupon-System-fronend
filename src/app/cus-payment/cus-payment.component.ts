import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDataShareService } from '../Services/payment-data-share.service';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-cus-payment',
  templateUrl: './cus-payment.component.html',
  styleUrls: ['./cus-payment.component.css'],
})
export class CusPaymentComponent {
  userId: number = 0;
  packageData: any; // Change this to the appropriate type if available
  paymentData = {
    transactionId: '',
    userId: '',
    totalAmount: 0,
    paymentType: 'kbz-pay',
  };

  qrCode: string = 'assets/image/payment/KBZ_pay.png'; // Default QR Code for KBZ Pay
  cartData: any[] = [];

  constructor(
    private paymentDataShare: PaymentDataShareService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getLoggedUserID();
    this.packageData = this.paymentDataShare.getPackageData();
    this.cartData = this.paymentDataShare.getCartData();

    this.calculateTotalAmount();

    // Optionally, handle cases where no data is present
    if (!this.packageData && this.cartData.length === 0) {
      console.error('No data to display.');
    }
  }

  changeQR(paymentType: string): void {
    if (paymentType === 'kbz-pay') {
      this.qrCode = 'assets/image/payment/KBZ_pay.png';
    } else if (paymentType === 'wave-pay') {
      this.qrCode = 'assets/image/payment/Wave_pay.png';
    } else if (paymentType === 'aya-pay') {
      this.qrCode = 'assets/image/payment/AYA_pay.png';
    } else if (paymentType === 'cb-pay') {
      this.qrCode = 'assets/image/payment/CB_pay.png';
    }
  }

  calculateTotalAmount(): void {
    let total = 0;

    // If package data exists, add its total price
    if (this.packageData) {
      total += this.packageData.unit_price * this.packageData.selectedQuantity;
    }

    // If cart data exists, calculate and add the total price of cart items
    if (this.cartData.length > 0) {
      for (const item of this.cartData) {
        total += item.packageDetails.unit_price * item.unit_quantity;
      }
    }

    // Update the total amount in payment data
    this.paymentData.totalAmount = total;
  }

  submitPayment(): void {
    console.log('Payment Data Submitted:', this.paymentData);
    // Here you would call a service to process the payment
  }

  refreshAndNavigate(): void {
    // Refresh the current page and then navigate to /home
    window.location.href = '/home';
  }
}
