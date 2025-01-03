import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category';
import { BusinessService } from '../../Services/business.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-add-business-categories',
  templateUrl: './add-business-categories.component.html',
  styleUrls: ['./add-business-categories.component.css'],
})
export class AddBusinessCategoriesComponent {
  constructor(
    private service: BusinessService,
    private location: Location,
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) {}

  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  category: Category = new Category();

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.category);
      this.service.createCategory(this.category).subscribe(
        (response) => {
          console.log('Category created successfully!!', response);

          // Show success toast
          this.toastr.success('Category created successfully!', 'Success');

          this.router.navigate(['/adm-categorylist']);
        },
        (error) => {
          console.log('Error: ', error);

          // Show error toast
          this.toastr.error(
            'An error occurred while creating the category.',
            'Error'
          );
        }
      );
    } else {
      console.log('Form invalid');

      // Show warning toast for invalid form
      this.toastr.warning('Please fill out the form correctly.', 'Warning');
    }
  }

  onCancel() {
    this.location.back(); // Navigates back to the previous page
  }
}
