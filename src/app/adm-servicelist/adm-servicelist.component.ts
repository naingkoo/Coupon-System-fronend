import { Component, HostListener } from '@angular/core';
import { Service } from '../models/service';
import { BusinessService } from '../Services/business.service';

@Component({
  selector: 'app-adm-servicelist',
  templateUrl: './adm-servicelist.component.html',
  styleUrl: './adm-servicelist.component.css',
})
export class AdmServicelistComponent {
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

  showService: Service[] = [];

  constructor(private service: BusinessService) {}

  fetchServices() {
    this.service.getService().subscribe(
      (data) => {
        this.showService = data; // Assign the fetched categories to the showCategory variable
      },
      (error) => {
        console.log('Error fetching services: ', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchServices();
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
