import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cus-payment',
  templateUrl: './cus-payment.component.html',
  styleUrl: './cus-payment.component.css',
})
export class CusPaymentComponent {
  packageData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.packageData = navigation?.extras.state?.['package'];

    // Calculate and assign the total amount
    if (this.packageData) {
      this.paymentData.totalAmount =
        (this.packageData.unit_price || 0) *
        (this.packageData.selectedQuantity || 1);
    }
  }

  paymentData = {
    transactionId: '',
    userId: '',
    totalAmount: 0,
    paymentType: 'kbz-pay',
  };

  qrCode: string = 'assets/image/payment/KBZ_pay.png'; // Default QR Code for KBZ Pay

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

  submitPayment(): void {
    console.log('Payment Data Submitted:', this.paymentData);
    // Here you would call a service to process the payment
  }
}
