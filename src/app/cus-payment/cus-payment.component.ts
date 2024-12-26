import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../Services/payment.service';
import { Payment } from '../models/payment';
import { response } from 'express';
@Component({
  selector: 'app-cus-payment',
  templateUrl: './cus-payment.component.html',
  styleUrl: './cus-payment.component.css',
})
export class CusPaymentComponent {

  packageData: any;
  qrCode: string = 'assets/image/payment/KBZ_pay.png'; // Default QR Code for KBZ Pay
  paymentData: Payment = new Payment();


  constructor(private service: PaymentService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.packageData = navigation?.extras.state?.['package'];
  }

  ngOnInit(): void {
    if(this.packageData) {
      const totalPrice = (this.packageData.unit_price || 0) * (this.packageData.selectedQuantity || 1);
      this.paymentData.total_amount = totalPrice;
       
    }
  }


  changeQR(paymentType: string): void {
    if (paymentType === 'kbz-pay') {
      this.qrCode = 'assets/image/payment/KBZ_pay.png';
    } 
    else if (paymentType === 'wave-pay') {
      this.qrCode = 'assets/image/payment/Wave_pay.png';
    }
     else if (paymentType === 'aya-pay') {
      this.qrCode = 'assets/image/payment/AYA_pay.png';
    }
     else if (paymentType === 'cb-pay') {
      this.qrCode = 'assets/image/payment/CB_pay.png';
    }
    }
  
  changePaymentType(paymentType: string) {

    this.paymentData.paymentType = paymentType;
    this.changeQR(paymentType);

  }

  submitPayment() {
    this.service.savePayment(this.paymentData)
    .subscribe(
      response => {
        console.log('Payment saved successfully:', response);
        this.router.navigate(['package']);
      },
      error => {
        console.error('Error saving payment:', error);
      }
    );
  }
 
}