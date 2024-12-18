import { Component } from '@angular/core';
import { Business } from '../models/business';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-adm-business',
  templateUrl: './adm-business.component.html',
  styleUrl: './adm-business.component.css',
})
export class AdmBusinessComponent {
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
  }
}
