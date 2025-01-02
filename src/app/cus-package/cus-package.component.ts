import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Packages } from '../models/package-model';
import { PackageService } from '../Services/package.service';
import { CartService } from '../Services/cart.service';
import { Cart } from '../models/cart';
import { PaymentDataShareService } from '../Services/payment-data-share.service';

@Component({
  selector: 'app-cus-package',
  templateUrl: './cus-package.component.html',
  styleUrls: ['./cus-package.component.css'],
})
export class CusPackageComponent implements OnInit {
  packages: Packages[] = [];
  filteredPackages: Packages[] = [];
  searchText: string = '';
  minPrice: number = 0;
  maxPrice: number = 10000;

  submittedPackage: Packages[] = [];

  selectedPackage: any = null;
  isPopupVisible: boolean = false;

  selectedCartPackage: any = null;
  isCartPopupVisible: boolean = false;

  user_id: number = 1; // Replace with the logged-in user's ID

  constructor(
    private paymentDataShare: PaymentDataShareService,
    private service: PackageService,
    private cartService: CartService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
   this.fetchPackages();
  }
  fetchPackages(): void {
    this.service.getALL().subscribe(
      (data) => {
        this.packages = data;
        this.submittedPackage = data;
      },
      (error) => {
        console.error('Error fetching packages', error);
      }
    );
  }
  

  filterPackages(): void {
    if (this.searchText) {
      this.service.getPackagesByBusinessName(this.searchText).subscribe(
        (packages) => {
          this.submittedPackage = packages;
        },
        (error) => {
          console.error('Error fetching packages:', error);
        }
      );
    } else {
      this.submittedPackage = []; // No search text, clear the packages
    }
    // Add your filtering logic here if needed
  }
  
  

  openBuyNowPopup(packages: any): void {
    this.selectedPackage = { ...packages, selectedQuantity: 1 };
    this.isPopupVisible = true;
  }

  closeBuyNowPopup(): void {
    this.isPopupVisible = false;
  }

  confirmPurchase(): void {
    alert(
      `You purchased ${this.selectedPackage.selectedQuantity} of ${this.selectedPackage.name}.`
    );
    this.closeBuyNowPopup();
  }

  openAddToCartPopup(packages: any): void {
    this.selectedCartPackage = { ...packages, selectedQuantity: 1 };
    this.isCartPopupVisible = true;
  }

  closeAddToCartPopup(): void {
    this.isCartPopupVisible = false;
  }

  increaseQuantity(packageObj: any): void {
    if (packageObj.selectedQuantity < packageObj.quantity) {
      packageObj.selectedQuantity++;
    }
  }

  decreaseQuantity(packageObj: any): void {
    if (packageObj.selectedQuantity > 1) {
      packageObj.selectedQuantity--;
    }
  }

  buynow(packageData: any) {
    this.paymentDataShare.setPackageData(packageData);
    this.router.navigate(['/payment']); // Navigate to the payment page
  }

  //-----------------Add to Cart-----------------

  confirmAddToCart(): void {
    if (!this.selectedCartPackage) {
      this.toast.error('No package selected.', 'Error');
      return;
    }

    const user_id = this.user_id || 1;
    const unit_quantity = this.selectedCartPackage?.selectedQuantity || 1;
    const unit_price =
      (this.selectedCartPackage?.unit_price || 0) * unit_quantity;

    const cart = new Cart(
      0,
      user_id,
      this.selectedCartPackage?.id,
      unit_quantity,
      unit_price
    );

    this.cartService.addToCart(cart).subscribe(
      (response) => {
        this.toast.success('Item added to cart successfully!', 'Success');
        this.closeAddToCartPopup();
      },
      (error) => {
        this.toast.error(
          'Failed to add item to cart. Please try again.',
          'Error'
        );
      }
    );
  }
}
