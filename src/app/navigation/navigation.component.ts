import { Component, HostListener } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  mobileMenuOpen = false;

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
  profileImage: string = 'https://via.placeholder.com/80';
  userName: string = 'Ko Tin Nyunt';
  userEmail: string = 'kotinnyunt69@example.com';

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  edit(): void {
    alert('go to edit page...');
    // Add navigation logic here if required
    this.togglePopup();
  }

  logout(): void {
    alert('Logging out...');
    // Add logout logic here
    this.togglePopup();
  }
}
