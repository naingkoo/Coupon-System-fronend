import { Component } from '@angular/core';
import { Service } from '../../models/service';
import { BusinessService } from '../../Services/business.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-add-business-services',
  templateUrl: './add-business-services.component.html',
  styleUrls: ['./add-business-services.component.css'],
})
export class AddBusinessServicesComponent {
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

  services: Service = new Service();

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.services);
      this.service.createService(this.services).subscribe(
        (response) => {
          console.log('Service created successfully!', response);

          // Show success toast
          this.toastr.success('Service created successfully!', 'Success');

          // Navigate to the service list page
          this.router.navigate(['/adm-servicelist']);
        },
        (error) => {
          console.log('Error: ', error);

          // Show error toast
          this.toastr.error(
            'An error occurred while creating the service.',
            'Error'
          );
        }
      );
    } else {
      console.log('Form is invalid');

      // Show warning toast
      this.toastr.warning('Please fill out the form correctly.', 'Warning');
    }
  }

  onCancel() {
    this.location.back(); // Navigate back to the previous page
  }
}
