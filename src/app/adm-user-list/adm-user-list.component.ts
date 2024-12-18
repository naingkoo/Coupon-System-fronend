import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-user-list',
  templateUrl: './adm-user-list.component.html',
  styleUrl: './adm-user-list.component.css',
})
export class AdmUserListComponent {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
