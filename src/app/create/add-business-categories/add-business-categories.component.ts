import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category';
import { BusinessService } from '../../Services/business.service';

@Component({
  selector: 'app-add-business-categories',
  templateUrl: './add-business-categories.component.html',
  styleUrl: './add-business-categories.component.css',
})
export class AddBusinessCategoriesComponent {
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

  ngOnInit(): void {
    this.fetchCategories();
  }

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
          console.log('Category create successfully!!', response);
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
