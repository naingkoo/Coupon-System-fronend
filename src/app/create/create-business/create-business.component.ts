import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
import { Business } from '../../models/business';
import { Service } from '../../models/service';
import { BusinessService } from '../../Services/business.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrl: './create-business.component.css',
})
export class CreateBusinessComponent implements OnInit {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  business: Business = new Business();
  categories: Category[] = [];
  selectedCategory: number[] = [];
  services: Service[] = [];
  selectedService: number[] = [];

  //userId: number | null = null; // Assuming you have a method to get the current user's ID
  selectedFile: File | null = null;

  constructor(private service: BusinessService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCategories(); // Fetch categories when component initializes
    this.fetchServices(); // Fetch services when component initializes
  }

  // Fetch categories from the backend
  fetchCategories(): void {
    this.service.getCategory().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Fetch services from the backend
  fetchServices(): void {
    this.service.getService().subscribe(
      (data: Service[]) => {
        this.services = data;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  onCategoryChange(event: any): void {
    const categoryId = Number(event.target.value); // Only push the ID, not the whole object

    if (event.target.checked) {
      // Check if the checkbox is checked
      this.selectedCategory.push(categoryId); // Add value to selectedCategories if checked
    } else {
      const index = this.selectedCategory.indexOf(categoryId);

      if (index !== -1) {
        this.selectedCategory.splice(index, 1);
      }
    }
    console.log('Selected Categories: ', this.selectedCategory);
  }

  onServiceChange(event: any): void {
    if (event.target.checked) {
      // Check if the checkbox is checked
      this.selectedService.push(Number(event.target.value)); // Add value to selectedServices if checked
    } else {
      const index = this.selectedService.indexOf(Number(event.target.value));

      if (index !== -1) {
        this.selectedService.splice(index, 1);
      }
    }
    console.log('Selected Services: ', this.selectedService);
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log(this.business);
      this.business.categoryId = this.selectedCategory;
      this.business.serviceId = this.selectedService;

      if (this.selectedFile) {
        const formData = new FormData();
        formData.append(
          'dto',
          new Blob([JSON.stringify(this.business)], {
            type: 'application/json',
          })
        );
        formData.append('image', this.selectedFile);

        this.service.createBusiness(formData).subscribe(
          (response) => {
            console.log('Successfully created business: ', response);
            this.router.navigate(['/adm-business']);
          },
          (error) => {
            console.log('Error creating business:', error);
            alert( error);
          }
        );
      } else {
        console.log('form invalide');
      }
    }
  }
}
