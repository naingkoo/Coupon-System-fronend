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
  bannerImages = [
    'yangon-hotel.jpg',
    'thumb-1920-462280.jpg',
    'hospital.jpg',
    'life-resort-hotel-resort-hotel-wallpaper-preview.jpg',
    'entrancebanasura_1428041013m.jpg',
    'hti.jpg',
    '11625_health_center_exterior19-2.rev.1702911213.jpg',
    'Exterior 2_1440.jpg',
    'maxresdefault.jpg',
    'bars-clubs-vie-nocturne-megeve.jpg',
  ]; // Sample banner images
  currentSlide = 0;
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

  previousSlide(): void {
    this.currentSlide =
      this.currentSlide === 0
        ? this.bannerImages.length - 1
        : this.currentSlide - 1;
  }

  nextSlide(): void {
    this.currentSlide =
      this.currentSlide === this.bannerImages.length - 1
        ? 0
        : this.currentSlide + 1;
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
