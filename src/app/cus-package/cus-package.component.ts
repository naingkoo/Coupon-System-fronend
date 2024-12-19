import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../models/package-model';
import { Business } from '../models/business';
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

  increaseQuantity(packages: any): void {
    // Initialize the selectedQuantity if not already set
    if (!packages.selectedQuantity) {
      packages.selectedQuantity = 1;
    }
    // Prevent incrementing beyond the available quantity
    if (packages.selectedQuantity < packages.quantity) {
      packages.selectedQuantity++;
    }
  }

  decreaseQuantity(packages: any): void {
    // Ensure quantity cannot go below 1
    if (packages.selectedQuantity && packages.selectedQuantity > 1) {
      packages.selectedQuantity--;
    }
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
}
