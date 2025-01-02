import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-adm-user-list',
  templateUrl: './adm-user-list.component.html',
  styleUrl: './adm-user-list.component.css',
})
export class AdmUserListComponent {
  isSidebarCollapsed = false;
  title: any;

  users: User[] = [];

  constructor(private router: Router, private userServices: UserService) {}

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  fetchUsers(): void {
    this.userServices.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log('Error fetching users: ', error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  onAddUser(): void {
    this.router.navigate(['/adm-register']); // Navigate to the RegisterComponent
  }
}
