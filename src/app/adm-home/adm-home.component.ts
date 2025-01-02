import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.component.html',
  styleUrl: './adm-home.component.css',
})
export class AdmHomeComponent {
  isSidebarCollapsed = false;
  title: any;

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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Initialize user ID and load user details
    this.userId = this.authService.getLoggedUserID();
    this.loadUserDetails();
  }

  // Loads user details
  loadUserDetails(): void {
    if (this.userId > 0) {
      this.userService.getUserDetailsById(this.userId).subscribe({
        next: (data) => {
          this.userDetails = data;
          this.userName = data.name;
          this.userEmail = data.email;
          this.profileImage =
            data.profileImage || 'assets/image/users/user.png';
        },
        error: (err) => {
          console.error('Error fetching user details:', err);
        },
      });
    } else {
      console.error('Invalid user ID. Cannot load user details.');
    }
  }

  // Metrics
  totalLoginUsers = 1200;
  totalBusinesses = 45;
  totalPackages = 250;
  totalCouponSales = 3000;

  // Profile Data

  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Bar Chart Configuration
  couponSaleData = [
    { name: 'Monday', value: 300 },
    { name: 'Tuesday', value: 500 },
    { name: 'Wednesday', value: 400 },
    { name: 'Thursday', value: 600 },
    { name: 'Friday', value: 800 },
    { name: 'Saturday', value: 750 },
  ];

  // Initialize filteredBarChartData
  filteredBarChartData = [...this.couponSaleData];
  selectedWeekday = this.weekdays[0];

  filterBarChartData() {
    this.filteredBarChartData = this.couponSaleData.filter(
      (data) => data.name === this.selectedWeekday
    );
  }

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
