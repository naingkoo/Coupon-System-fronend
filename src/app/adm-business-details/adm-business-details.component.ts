import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../Services/business.service';
import { PackageService } from '../Services/package.service';
import { ReviewService } from '../Services/review.service';
import { ActivatedRoute } from '@angular/router';
import { Packages } from '../models/package-model';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-adm-business-details',
  templateUrl: './adm-business-details.component.html',
  styleUrl: './adm-business-details.component.css',
})
export class AdmBusinessDetailsComponent implements OnInit{
  isSidebarCollapsed = false;
  title: any;
  loading: boolean = false;
  error: string = '';

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  selectedTab: string = 'packages'; // Default tab

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private packageService: PackageService,
    private reviewService: ReviewService
  ) {}

  businessName: string = '';
  businessBanner: string = '';
  businessCountry: string = '';
  businessCity: string = '';
  businessStreet: string = '';
  businessAddress: string = '';
  businessCategories?: string[];
  businessServices?: string[];

  businessId: number = 0;

  packages: Packages[] = []; // This will hold the list of packages

  reviews: Review[] = [];
  review: Review = new Review();

  ngOnInit(): void {
    // Capture 'id' from the URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.businessId = +id; // Convert 'id' to a number
        this.loadBusinessDetails(this.businessId);
        this.loadPackagesByBusinessId(this.businessId);
        this.businessId = +this.route.snapshot.paramMap.get('businessId')!;
        this.fetchReviews();
        this.loadReviews();
      }
    });
  }

  loadBusinessDetails(id: number): void {
    this.businessService.getBusinessById(id).subscribe((business) => {
      if (business) {
        this.businessId = business.id;
        this.businessName = business.name;
        this.businessBanner = business.image;
        this.businessCountry = business.country;
        this.businessCity = business.city;
        this.businessStreet = business.street;
        this.businessAddress = business.address;

        this.businessCategories = business.categoryName;
        this.businessServices = business.serviceName;

        // Bind the businessId to the review object
        this.review.businessId = business.id; // Set businessId for the review
      } else {
        console.error('Business not found!');
      }
    });
  }

  loadPackagesByBusinessId(businessId: number): void {
    this.packageService.findBybusinessId(businessId).subscribe(
      (packages) => {
        this.packages = packages; // Assign the result to the 'packages' array
        console.log('Loaded packages:', this.packages);
      },
      (error) => {
        console.error('Error loading packages:', error);
      }
    );
  }

  loadReviews(): void {
    this.loading = true;
    this.error = '';
    this.reviewService.getReviewsByBusinessId(this.businessId).subscribe(
      (data) => {
        this.reviews = data;
        console.log('data:', this.businessId);
        this.loading = false;
      },
      (err) => {
        this.error = 'Failed to load reviews';
        this.loading = false;
      }
    );
  }
 
  fetchReviews(): void {
    this.reviewService.getAllReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.log('Error fetching reviews: ', error);
      }
    );
  }
}
