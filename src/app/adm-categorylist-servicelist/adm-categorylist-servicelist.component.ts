import { Component } from '@angular/core';
import { Category } from '../models/category';
import { BusinessService } from '../Services/business.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-adm-categorylist-servicelist',
  templateUrl: './adm-categorylist-servicelist.component.html',
  styleUrl: './adm-categorylist-servicelist.component.css',
})
export class AdmCategorylistServicelistComponent {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  showCategory: Category[] = [];

  showService: Service[] = [];

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
    this.fetchCategories();
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
