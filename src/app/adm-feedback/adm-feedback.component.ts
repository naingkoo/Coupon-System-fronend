import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-feedback',
  templateUrl: './adm-feedback.component.html',
  styleUrl: './adm-feedback.component.css',
})
export class AdmFeedbackComponent {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
