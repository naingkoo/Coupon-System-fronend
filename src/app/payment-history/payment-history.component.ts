import { Component } from '@angular/core';
import { Payment } from '../models/payment';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css'
})
export class PaymentHistoryComponent {

  showPayment: Payment[] = [];

  constructor(private service: PaymentService) { }

  ngOnInit(): void {
    this.fetchPayments();
  }

  fetchPayments(): void {
    this.service.showAllPayment()
    .subscribe(
      (data) => {
        this.showPayment = data;
      },
      (error) => {
        console.log('Error fetching payments: ', error);
      }
    );
  }
}
