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
