import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../models/package-model';
import { PackageService } from '../Services/package.service';

@Component({
  selector: 'app-adm-package',
  templateUrl: './adm-package.component.html',
  styleUrls: ['./adm-package.component.css'], // Corrected typo here
})
export class AdmPackageComponent implements OnInit {
  isSidebarCollapsed = false;
  title: any;
  isDeleting: boolean = false; 
  message: string = '';  
  messageType: string = '';  

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  packages: Packages[] = [];

  constructor(
    private service: PackageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchPackages();
  }


  fetchPackages(): void {
    this.service.getALL().subscribe(
      (data) => {
        this.packages = data;
      },
      (error) => {
        console.error('Error fetching packages:', error);
      }
    );
  }


  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.isDeleting = true; 
      this.service.softDeletePackage(id).subscribe(
        (response: string) => {
          console.log('Package deleted successfully:', response);
          this.packages = this.packages.filter(pkg => pkg.id !== id);
          this.isDeleting = false;
          this.message = 'Package deleted successfully';
          this.messageType = 'success';
        },
        (error) => {
          console.error('Error while deleting:', error);
          this.isDeleting = false;
          this.message = 'Error deleting package';
          this.messageType = 'error';
        }
      );
    }
  }
}
