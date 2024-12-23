import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

import { BusinessService } from '../../Services/business.service';
import { Category } from '../../models/category';
import { Business } from '../../models/business';
import { Service } from '../../models/service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css'],
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

  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private service: BusinessService,
    private router: Router,
    private location: Location,
    private toastr: ToastrService // Inject ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchServices();
  }

  fetchCategories(): void {
    this.service.getCategory().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
        this.toastr.error('Error fetching categories', 'Error'); // Show error toast
      }
    );
  }

  fetchServices(): void {
    this.service.getService().subscribe(
      (data: Service[]) => {
        this.services = data;
      },
      (error) => {
        console.error('Error fetching services:', error);
        this.toastr.error('Error fetching services', 'Error'); // Show error toast
      }
    );
  }

  onCategoryChange(event: any): void {
    const categoryId = Number(event.target.value);
    if (event.target.checked) {
      this.selectedCategory.push(categoryId);
    } else {
      const index = this.selectedCategory.indexOf(categoryId);
      if (index !== -1) {
        this.selectedCategory.splice(index, 1);
      }
    }
  }

  onServiceChange(event: any): void {
    if (event.target.checked) {
      this.selectedService.push(Number(event.target.value));
    } else {
      const index = this.selectedService.indexOf(Number(event.target.value));
      if (index !== -1) {
        this.selectedService.splice(index, 1);
      }
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
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
            console.log('Successfully created business:', response);
            this.toastr.success('Business created successfully!', 'Success'); // Success toast
            this.router.navigate(['/adm-business']);
          },
          (error) => {
            console.log('Error creating business:', error);
            this.toastr.error('Error creating business', 'Error'); // Error toast
          }
        );
      }
    } else {
      console.log('Form is invalid');
      this.toastr.warning('Please fill out the form correctly.', 'Warning'); // Warning toast for invalid form
    }
  }

  onCancel() {
    this.location.back();
  }
}
