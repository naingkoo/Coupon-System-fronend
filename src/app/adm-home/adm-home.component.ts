import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

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

  // Metrics
  totalLoginUsers = 1200;
  totalBusinesses = 45;

  // Profile Data
  adminProfile = {
    name: 'Admin Name',
    email: 'admin@example.com',
    role: 'System Administrator',
    imageUrl: 'https://via.placeholder.com/150',
  };

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

  filteredPieChartData = [...this.pieChartData];
  availableRegions = ['North', 'East'];
  selectedRegion = this.availableRegions[0];

  filterPieChartData() {
    this.filteredPieChartData = this.pieChartData.filter(
      (data) => data.region === this.selectedRegion
    );
  }

  // Chart Options
  view: [number, number] = [450, 300];
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
  };

  view2: [number, number] = [450, 300];
  gradient2 = false;
  showLegend2 = true;
  colorScheme2: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
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
}
