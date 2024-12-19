import { Component } from '@angular/core';
import { Service } from '../../models/service';
import { NgForm } from '@angular/forms';
import { BusinessService } from '../../Services/business.service';

@Component({
  selector: 'app-add-business-services',
  templateUrl: './add-business-services.component.html',
  styleUrl: './add-business-services.component.css',
})
export class AddBusinessServicesComponent {
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
          console.log('successfully', response);
        },
        (error) => {
          console.log('errors: ', error);
        }
      );
    } else {
      console.log('form invalide');
    }
  }
}
