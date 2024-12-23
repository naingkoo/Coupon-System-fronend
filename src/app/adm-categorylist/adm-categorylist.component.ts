import { Component, HostListener } from '@angular/core';
import { Category } from '../models/category';
import { Service } from '../models/service';
import { BusinessService } from '../Services/business.service';

@Component({
  selector: 'app-adm-categorylist',
  templateUrl: './adm-categorylist.component.html',
  styleUrl: './adm-categorylist.component.css',
})
export class AdmCategorylistComponent {
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

  showCategory: Category[] = [];

  constructor(private service: BusinessService) {}

  fetchCategories() {
    this.service.getCategory().subscribe(
      (data) => {
        this.showCategory = data; // Assign the fetched categories to the showCategory variable
      },
      (error) => {
        console.log('Error fetching categories: ', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
