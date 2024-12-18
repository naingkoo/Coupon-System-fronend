import { Component } from '@angular/core';
import { Business } from '../models/business'; // Adjust the path as needed
import { Service } from '../models/service';
import { Category } from '../models/category';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-cus-explore',
  templateUrl: './cus-explore.component.html',
  styleUrls: ['./cus-explore.component.css'],
})
export class CusExploreComponent {
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedService: string = '';
  categories: string[] = ['Hotel', 'Bar', 'Health', 'Restaurant', 'Gym']; // This could come from Category.createCategories()
  services: string[] = [
    'Aircon',
    'Pool',
    'Parking',
    '24hr electric',
    'Breakfast',
    'Security',
  ]; // This could come from Service.createServices()

  showBusiness: Business[] = [];
  showService: Service[] = [];
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
    this.fetchCategories();
    this.fetchServices();
  }

  // Filter method based on the selected category and service
  filterCards() {
    // this.filteredCards = this.cards.filter((card) => {
    //   const matchesSearch = card.name
    //     .toLowerCase()
    //     .includes(this.searchQuery.toLowerCase());
    //   const matchesCategory =
    //     !this.selectedCategory ||
    //     card.categoryNames.includes(this.selectedCategory);
    //   const matchesService =
    //     !this.selectedService ||
    //     card.serviceNames.includes(this.selectedService);
    //   return matchesSearch && matchesCategory && matchesService;
    // });
  }

  onCardAction(card: Business) {
    alert(`Viewing details for ${card.name}`);
  }
}
