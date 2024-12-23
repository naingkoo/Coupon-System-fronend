import { Component } from '@angular/core';
import { Business } from '../../models/business';
import { BusinessService } from '../../Services/business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrl: './edit-business.component.css',
})
export class EditBusinessComponent {
  business: Business = new Business();
  businessId!: number;
  categories: any[] = [];
  services: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: BusinessService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.businessId = Number(this.route.snapshot.paramMap.get('id'));

    this.getBusinessById(this.businessId);
    this.getCategories();
    this.getServices();
  }

  getBusinessById(id: number): void {
    this.service.getBusinessById(id).subscribe(
      (data) => {
        if (data) {
          this.business = data;
        } else {
          console.log('Business not found');
        }
      },
      (error) => {
        console.error('Error fetching business data', error);
      }
    );
  }

  getCategories(): void {
    this.service.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  getServices(): void {
    this.service.getService().subscribe((data) => {
      this.services = data;
    });
  }

  isCategorySelected(categoryId: number): boolean {
    return (
      Array.isArray(this.business.categoryId) &&
      this.business.categoryId.includes(categoryId)
    );
  }

  isServiceSelected(serviceId: number): boolean {
    return (
      Array.isArray(this.business.serviceId) &&
      this.business.categoryId.includes(serviceId)
    );
  }

  OnSubmit(): void {
    this.business.categoryId = this.categories
      .filter((category) => category.selected)
      .map((category) => category.id);

    this.business.serviceId = this.services
      .filter((service) => service.selected)
      .map((service) => service.id);

    this.service.updateBusinessById(this.businessId, this.business).subscribe(
      (response) => {
        console.log('Business updated successfully:', response);
        this.router.navigate(['/adm-business']);
      },
      (error) => {
        console.error('Error updating business:', error);
      }
    );
  }
}
