import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business } from '../models/business'; // Ensure correct import path
import { Packages } from '../models/package-model'; // Correct import path
import { BusinessService } from '../Services/business.service';
import { PackageService } from '../Services/package.service';
import { ReviewService } from '../Services/review.service';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-cus-business',
  templateUrl: './cus-business.component.html',
  styleUrls: ['./cus-business.component.css'],
})
export class CusBusinessComponent implements OnInit {
  tabs = [
    { label: 'Packages' },
    { label: 'Services' },
    { label: 'Location' },
    { label: 'Review' },
  ];
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }

  reviewsVisible: boolean = false; // Add this property to toggle reviews visibility

  toggleReviews(): void {
    this.reviewsVisible = !this.reviewsVisible; // Toggle visibility
  }

  businessName: string = '';
  businessBanner: string = '';
  businessPhone: string = '';
  businessEmail: string = '';
  businessLatitude: string = '';
  businessLongitude: string = '';
  businessAddress: string = '';
  businessCategories?: string[];
  businessServices?: string[];

  packages: Packages[] = []; // This will hold the list of packages

  reviews: Review[] = [];
  review: Review = new Review();

  errorMessage: string = '';
  successMessage: string = '';

  stars: number[] = [];
  businessId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private packageService: PackageService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    // Capture 'id' from the URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.businessId = +id; // Convert 'id' to a number
        this.loadBusinessDetails(this.businessId);
        this.loadPackagesByBusinessId(this.businessId);
        this.fetchReviews();
      }
    });
  }

  loadBusinessDetails(id: number): void {
    this.businessService.getBusinessById(id).subscribe((business) => {
      if (business) {
        this.businessId = business.id;
        this.businessName = business.name;
        this.businessBanner = business.image;
        this.businessPhone = business.phone;
        this.businessEmail = business.email;
        this.businessLatitude = business.latitude;
        this.businessLongitude = business.longitude;
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

  submitReview(): void {
    this.reviewService.addReview(this.review).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.successMessage = response.message; // Display success message
      },
      error: (error) => {
        console.error('Error saving review:', error);
        this.errorMessage = 'Failed to save review. Please try again.';
      },
    });
  }
}
