import { Component, HostListener } from '@angular/core';
import { Business } from '../models/business';
import { BusinessService } from '../Services/business.service';

@Component({
  selector: 'app-adm-business',
  templateUrl: './adm-business.component.html',
  styleUrl: './adm-business.component.css',
})
export class AdmBusinessComponent {
  isDropdownVisible: boolean = false;

  Dropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Close the dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(target)) {
      this.isDropdownVisible = false;
    }
  }

  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  showBusiness: Business[] = [];

  constructor(private service: BusinessService) {}

  fetchBusiness() {
    this.service.getBusiness().subscribe(
      (data) => {
        this.showBusiness = data; // Assign the fetched categories to the showCategory variable
      },
      (error) => {
        console.log('Error fetching business: ', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchBusiness();
    console.log(this.showBusiness);
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  dotsMenuOpenId: number | null = null;

  toggleDotsMenu(businessId: number): void {
    this.dotsMenuOpenId =
      this.dotsMenuOpenId === businessId ? null : businessId;
  }

  onDeleteBusiness(id: number): void {
    this.service.deleteBusiness(id).subscribe(
      () => {
        this.showBusiness.filter((business) => business.id !== id);
      },
      (error) => {
        console.error('Error deleting business:', error);
      }
    );
  }
}
