import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { PurchaseRequest } from '../models/purchase-request';
import { PaymentService } from '../Services/payment.service';
import { Packages } from '../models/package-model';
import { PurchaseDTO } from '../models/purchase-dto';
import { PackageDTO } from '../models/package-dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cus-cart-payment',
  templateUrl: './cus-cart-payment.component.html',
  styleUrl: './cus-cart-payment.component.css',
})
export class CusCartPaymentComponent {
  userId: number = 0;
  cartItems: any[] = [];
  totalAmount: number = 0; // Total amount of all selected packages

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private paymentService: PaymentService,
    private toastr: ToastrService
  ) {}

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

  ngOnInit() {
    this.userId = this.authService.getLoggedUserID();

    // Subscribe to query parameters to get the cart items
    this.route.queryParams.subscribe((params) => {
      if (params['items']) {
        this.cartItems = JSON.parse(decodeURIComponent(params['items']));
        this.calculateTotalAmount(); // Calculate the total amount
      }
    });
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.packageDetails.unit_price * item.unit_quantity,
      0
    );
  }

  submitPayment(): void {
    const totalQuantity = this.cartItems.reduce(
      (sum, item) => sum + item.unit_quantity,
      0
    );

    const paymentType = this.getSelectedPaymentType();
    const transactionId = (
      document.getElementById('transaction-id') as HTMLInputElement
    ).value;

    const purchaseDTO: PurchaseDTO = {
      total_amount: this.totalAmount,
      total_quantity: totalQuantity,
      payment_type: paymentType,
      transaction_id: transactionId,
      user_id: this.authService.getLoggedUserID(),
    };

    const selectedPackages: PackageDTO[] = this.cartItems.map((item) => ({
      id: item.packageDetails.id,
      name: item.packageDetails.name,
      unit_price: item.packageDetails.unit_price,
      quantity: item.packageDetails.quantity,
      expired_date: item.packageDetails.expired_date,
      selected_quantity: item.unit_quantity,
    }));

    const purchaseRequest: PurchaseRequest = {
      purchaseDTO,
      selectedPackages,
    };

    this.paymentService.savePurchase(purchaseRequest).subscribe(
      (response: string) => {
        console.log('Response from server:', response);
        this.toastr.success(
          'Payment was successful! Please wait for coupon',
          'Success'
        );
        this.router.navigate(['/wait']);
      },
      (error) => {
        console.error('Error saving purchase:', error);
        this.toastr.error('Error saving payment. Please try again.', 'Error'); // Error message
      }
    );
  }

  private getSelectedPaymentType(): string {
    const paymentOptions = document.getElementsByName(
      'payment-type'
    ) as NodeListOf<HTMLInputElement>;

    return (
      Array.from(paymentOptions).find((option) => option.checked)?.value || ''
    );
  }
}
