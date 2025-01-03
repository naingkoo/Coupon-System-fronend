import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import {
  PurchaseAndUserDTO,
  PurchaseService,
} from '../Services/purchase.service';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.component.html',
  styleUrl: './adm-home.component.css',
})
export class AdmHomeComponent {
  isSidebarCollapsed = false;
  title: any;

  purchases: PurchaseAndUserDTO[] = [];
  isLoading = true;
  errorMessage = '';

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  userId: number = 0;
  userName: string = '';
  userEmail: string = '';
  profileImage: string | null = null;
  userDetails: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    // Initialize user ID and load user details
    this.userId = this.authService.getLoggedUserID();
    this.loadUserDetails();
    this.fetchPurchases();
  }

  // Loads user details
  loadUserDetails(): void {
    if (this.userId > 0) {
      this.userService.getUserDetailsById(this.userId).subscribe({
        next: (data) => {
          this.userDetails = data;
          this.userName = data.name;
          this.userEmail = data.email;

          // Check if the photo is present and not null
          if (data.photo) {
            this.profileImage = 'http://localhost:8080' + data.photo;
          } else {
            this.profileImage =
              'http://localhost:8080/users_images/default.png'; // Fallback image
          }

          console.log('Profile image:', this.profileImage);
        },
        error: (err) => {
          console.error('Error fetching user details:', err);
        },
      });
    } else {
      console.error('Invalid user ID. Cannot load user details.');
    }
  }

  fetchPurchases(): void {
    this.purchaseService.getAllPurchases().subscribe(
      (data) => {
        this.purchases = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load purchases.';
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  // Metrics
  totalLoginUsers = 1200;
  totalBusinesses = 45;
  totalPackages = 250;
  totalCouponSales = 3000;

  // Profile Data

  // Bar Chart Data
  couponSaleData = [
    { name: 'January', value: 300, year: 2023 },
    { name: 'February', value: 500, year: 2023 },
    { name: 'March', value: 400, year: 2022 },
    { name: 'April', value: 600, year: 2022 },
    { name: 'May', value: 800, year: 2022 },
    { name: 'June', value: 750, year: 2022 },
  ];

  // Initialize filteredBarChartData
  filteredBarChartData = [...this.couponSaleData];
  availableYears = [2022, 2023];
  selectedYear = this.availableYears[0];

  // Pie Chart Data
  pieChartData = [
    { name: 'Coupons Sold', value: 60, region: 'North' },
    { name: 'Coupons Remaining', value: 40, region: 'East' },
  ];

  // Initialize filteredPieChartData
  filteredPieChartData = [...this.pieChartData];
  availableRegions = ['North', 'East'];
  selectedRegion = this.availableRegions[0];

  // Chart Options
  view: [number, number] = [450, 300];
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  // Updated Color Scheme for Bar Chart
  colorScheme: Color = {
    domain: ['#4A90E2', '#fab400', '#7ED321', '#4CAF50'], // Cool Blues and Greens
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  view2: [number, number] = [450, 300];
  gradient2 = false;
  showLegend2 = true;

  // Updated Color Scheme for Pie Chart
  colorScheme2: Color = {
    domain: ['#64B5F6', '#1976D2', '#B0BEC5', '#78909C'], // Cool Grays and Blues
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  onSelect(event: any): void {
    console.log('Bar Chart Event:', event);
  }

  onChartSelect(event: any): void {
    console.log('Pie Chart Event:', event);
  }

  logout(): void {
    this.authService.logout();
  }
}
