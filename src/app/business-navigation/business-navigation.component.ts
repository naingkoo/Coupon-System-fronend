import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-business-navigation',
  templateUrl: './business-navigation.component.html',
  styleUrl: './business-navigation.component.css',
})
export class BusinessNavigationComponent {
  mobileMenuOpen = false;

  constructor(private router: Router, private authService: AuthService) {}

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
    this.authService.logout();
  }
}
