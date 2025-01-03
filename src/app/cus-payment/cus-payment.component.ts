import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../Services/payment.service';
import { PurchaseRequest } from '../models/purchase-request';
import { PurchaseDTO } from '../models/purchase-dto';
import { PackageDTO } from '../models/package-dto';

@Component({
  selector: 'app-cus-payment',
  templateUrl: './cus-payment.component.html',
  styleUrls: ['./cus-payment.component.css'],
})
export class CusPaymentComponent implements OnInit {
  userId: number = 0;
  packageDetails: any;
  totalAmount: number = 0;
  qrCode: string = 'assets/image/payment/KBZ_pay.png';
  transactionId: string = '';
  paymentType: string = 'kbz-pay';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getLoggedUserID();

    this.route.queryParams.subscribe((params) => {
      if (params['package']) {
        this.packageDetails = JSON.parse(decodeURIComponent(params['package']));
        this.totalAmount =
          (this.packageDetails?.unit_price || 0) *
          (this.packageDetails?.selectedQuantity || 1);
      }
    });
  }

  changeQR(paymentType: string): void {
    this.paymentType = paymentType;
    switch (paymentType) {
      case 'kbz-pay':
        this.qrCode = 'assets/image/payment/KBZ_pay.png';
        break;
      case 'wave-pay':
        this.qrCode = 'assets/image/payment/Wave_pay.png';
        break;
      case 'aya-pay':
        this.qrCode = 'assets/image/payment/AYA_pay.png';
        break;
      case 'cb-pay':
        this.qrCode = 'assets/image/payment/CB_pay.png';
        break;
      default:
        this.qrCode = 'assets/image/payment/default.png';
    }
  }

  submitPayment(): void {
    // Validate Transaction ID
    if (!this.transactionId) {
      this.toastr.error('Transaction ID is required.', 'Error');
      return;
    }

    // Validate Package Details
    if (!this.packageDetails || !this.packageDetails.id) {
      this.toastr.error('Package details are missing.', 'Error');
      return;
    }

    // Construct PurchaseDTO
    const purchaseDTO: PurchaseDTO = {
      total_amount: this.totalAmount,
      total_quantity: this.packageDetails.selectedQuantity || 1,
      payment_type: this.paymentType,
      transaction_id: this.transactionId,
      user_id: this.userId,
    };

    // Wrap the selected package into an array
    const selectedPackages: PackageDTO[] = [
      {
        id: this.packageDetails.id,
        name: this.packageDetails.name,
        unit_price: this.packageDetails.unit_price,
        quantity: this.packageDetails.quantity || 0,
        expired_date: this.packageDetails.expired_date,
        selected_quantity: this.packageDetails.selectedQuantity,
      },
    ];
    // Construct PurchaseRequest
    const purchaseRequest: PurchaseRequest = {
      purchaseDTO,
      selectedPackages, // Pass the array here
    };

    // Call the service method to save the purchase
    this.paymentService.savePurchase(purchaseRequest).subscribe(
      (response: string) => {
        this.toastr.success(
          'Payment was successful! Please wait for your coupon.',
          'Success'
        );
        this.router.navigate(['/wait']);
      },
      (error) => {
        const errorMessage =
          error.error?.message || 'Error saving payment. Please try again.';
        this.toastr.error(errorMessage, 'Error');
      }
    );
  }
}
