import { Component } from '@angular/core';
import { Business } from '../models/business';
import { BusinessService } from '../Services/business.service';

@Component({
  selector: 'app-cus-home',
  templateUrl: './cus-home.component.html',
  styleUrls: ['./cus-home.component.css'],
})
export class CusHomeComponent {
  searchQuery: string = '';

  categories: string[] = ['All', 'Hotel', 'Bar', 'Health', 'Restaurant', 'Gym']; // Include 'All' in categories
  selectedCategory: string = 'All'; // Default to 'All'

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

  // Handle the change in category selection
  onCategoryChange(category: string): void {
    // this.selectedCategory = category;
    // this.filterCards();
  }

  // filterCards(): void {
  //   if (this.selectedCategory === 'All') {
  //     // Show all cards if 'All' is selected
  //     this.filteredCards = this.cards.filter((card) =>
  //       card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   } else {
  //     this.filteredCards = this.cards.filter((card) => {
  //       const matchesSearch = card.name
  //         .toLowerCase()
  //         .includes(this.searchQuery.toLowerCase());

  //       const matchesCategory =
  //         // card.categoryNames &&
  //         // card.categoryNames.includes(this.selectedCategory);

  //       return matchesSearch && matchesCategory;
  //     });
  //   }
  // }
}
