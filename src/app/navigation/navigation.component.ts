import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'], // Fixed `styleUrl` to `styleUrls`
})
export class NavigationComponent implements OnInit {
  mobileMenuOpen = false;
  showPopup = false;

  userId: number = 0;
  userName: string = '';
  userEmail: string = '';
  profileImage: string | null = null;
  userDetails: any = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Initialize user ID and load user details
    this.userId = this.authService.getLoggedUserID();
    this.loadUserDetails();
  }

  // Toggles the mobile menu
  onMenuToggleChange(): void {
    console.log('Menu toggled:', this.mobileMenuOpen);
  }

  // Closes the mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const sidebar = document.querySelector('.mobile-sidebar');
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

  // Toggles the profile popup
  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  // Edits the user's profile
  edit(): void {
    alert('Navigating to edit profile page...');
    this.togglePopup();
    // Navigate to the edit profile route
    this.router.navigate(['/edit']);
  }

  // Loads user details
  loadUserDetails(): void {
    if (this.userId > 0) {
      this.userService.getUserDetailsById(this.userId).subscribe({
        next: (data) => {
          this.userDetails = data;
          this.userName = data.name;
          this.userEmail = data.email;
          this.profileImage =
            data.profileImage || 'assets/image/users/user.png';
        },
        error: (err) => {
          console.error('Error fetching user details:', err);
        },
      });
    } else {
      console.error('Invalid user ID. Cannot load user details.');
    }
  }

  // Logs the user out
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
