import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Packages } from '../models/package-model';
import { PackageService } from '../Services/package.service';

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

  constructor(private service: PackageService, private router: Router) {}

  ngOnInit(): void {
    this.service.getALL().subscribe(
      (data) => {
        this.submittedPackage = data;
      },
      (error) => {
        console.log('error' + error);
      }
    );
  }

  filterPackages(): void {
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

  confirmAddToCart(): void {
    alert(
      `Added ${this.selectedCartPackage.selectedQuantity} of ${this.selectedCartPackage.name} to the cart.`
    );
    this.closeAddToCartPopup();
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

  navigateToPayment(packageData: any) {
    this.router.navigate(['/payment'], { state: { package: packageData } });
  }
}
