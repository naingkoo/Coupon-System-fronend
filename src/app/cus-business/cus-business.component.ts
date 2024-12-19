import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business } from '../models/business'; // Ensure correct import path
import { Packages } from '../models/package-model'; // Correct import path
import { BusinessService } from '../Services/business.service';
import { PackageService } from '../Services/package.service';

@Component({
  selector: 'app-cus-business',
  templateUrl: './cus-business.component.html',
  styleUrls: ['./cus-business.component.css'],
})
export class CusBusinessComponent implements OnInit {
  businessName: string = '';
  businessBanner: string = '';
  businessCountry: string = '';
  businessCity: string = '';
  businessStreet: string = '';
  businessAddress: string = '';
  businessCategories?: string[];
  businessServices?: string[];

  packages: Packages[] = []; // This will hold the list of packages

  tabs = [
    { label: 'Packages' },
    { label: 'Services' },
    { label: 'Location' },
    { label: 'Review' },
  ];
  selectedTab: number = 0;
  stars: number[] = [];
  businessId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    // Capture 'id' from the URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.businessId = +id; // Convert 'id' to a number
        this.loadBusinessDetails(this.businessId);
        this.loadPackagesByBusinessId(this.businessId); // Load packages for this business
      }
    });
  }

  loadBusinessDetails(id: number): void {
    this.businessService.getBusinessById(id).subscribe((business) => {
      if (business) {
        this.businessName = business.name;
        this.businessBanner = business.image;
        this.businessCountry = business.country;
        this.businessCity = business.city;
        this.businessStreet = business.street;
        this.businessAddress = business.address;

        this.businessCategories = business.categoryName; // Assuming 'categoryId' is an array of category IDs or names
        console.log('Business Categories:', this.businessCategories);

        // Assigning business services
        this.businessServices = business.serviceName; // Assuming 'serviceId' is an array of service IDs or names
        console.log('Business Services:', this.businessServices);
      } else {
        console.error('Business not found!');
      }
    });
  }

  loadPackagesByBusinessId(businessId: number): void {
    // Fetch packages based on the businessId
    this.packageService.findBybusinessId(businessId).subscribe(
      (packages) => {
        this.packages = packages; // Assign the result to the 'packages' array
        console.log('Loaded packages:', this.packages); // Optionally log the result
      },
      (error) => {
        console.error('Error loading packages:', error); // Handle error
      }
    );
  }

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
