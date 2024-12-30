import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { UserService } from '../Services/user.service';
import { User } from '../models/user';
import { id } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})

export class NavigationComponent implements OnInit{
  mobileMenuOpen = false;

  constructor(private router:Router,private authService:AuthService,private userService:UserService){}
  
  user:User=new User();
ngOnInit(): void {
  this.userService.getUser(4).subscribe(c =>{
    this.user.id=c.id;
    this.user.email=c.email;
    this.user.name=c.name;
    this.user.photo="http://localhost:8080/"+c.photo;
    console.log(c.photo);
  });
  
}
  // Triggered when the checkbox state changes
  onMenuToggleChange() {
    // You can perform additional actions if needed when toggled
    console.log('Menu toggled:', this.mobileMenuOpen);
  }

  // Close the mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const sidebar = document.querySelector('.mobile-sidebar');
    const profile = document.querySelector('.profile-container');
    const toggleCheckbox = document.querySelector('.mobile-menu-toggle input');

    if (
      this.mobileMenuOpen &&
      sidebar &&
      toggleCheckbox &&
      !sidebar.contains(event.target as Node) &&
      !(event.target as Node).isSameNode(toggleCheckbox)
    ) {
      this.mobileMenuOpen = false;
    }
  }

  showPopup = false;

  // Dummy data for demonstration
  

  togglePopup(): void {
    
    this.showPopup = !this.showPopup;
  }

  edit(): void {
    alert('go to edit page...');
    // Add navigation logic here if required
    this.togglePopup();
  }

  logout(): void {
    this.authService.logout();
  }
}
