import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-profile',
  templateUrl: './adm-profile.component.html',
  styleUrl: './adm-profile.component.css',
})
export class AdmProfileComponent {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
