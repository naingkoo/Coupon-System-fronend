import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../models/package-model';
import { PackageService } from '../Services/package.service';

@Component({
  selector: 'app-cus-package',
  templateUrl: './cus-package.component.html',
  styleUrls: ['./cus-package.component.css'], // Corrected typo
})
export class CusPackageComponent implements OnInit {
  packages: Packages[] = [];
  filteredPackages: Packages[] = [];
  searchText: string = '';
  minPrice: number = 0;
  maxPrice: number = 10000;

  submittedPackage: Packages[] = [];

  selectedPackage: any = null; // To store the selected package for the popup
  isPopupVisible: boolean = false; // To track popup visibility

  constructor(
    private service: PackageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
    // this.filteredPackages = this.packages.filter((pkg) => {
    //   const matchesBusiness = pkg.business_id?.
    //     .toLowerCase()
    //     .includes(this.searchText.toLowerCase());
    //   const matchesPrice =
    //     pkg.unit_price >= this.minPrice && pkg.unit_price <= this.maxPrice;
    //   return matchesBusiness && matchesPrice;
    // });
  }

  openBuyNowPopup(packages: any): void {
    console.log('Opening popup with package:', packages);
    this.selectedPackage = { ...packages, selectedQuantity: 1 };
    this.isPopupVisible = true;
  }

  closeBuyNowPopup(): void {
    this.isPopupVisible = false;
  }

  increaseQuantity(packages: any): void {
    if (packages.selectedQuantity < packages.quantity) {
      packages.selectedQuantity++;
    }
  }

  decreaseQuantity(packages: any): void {
    if (packages.selectedQuantity > 1) {
      packages.selectedQuantity--;
    }
  }

  confirmPurchase(): void {
    console.log('Purchase confirmed for:', this.selectedPackage);
    alert(
      `You purchased ${this.selectedPackage.selectedQuantity} of ${this.selectedPackage.name}.`
    );
    this.closeBuyNowPopup();
  }
}
