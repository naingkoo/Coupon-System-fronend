import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../models/package-model';
import { PackageService } from '../Services/package.service';

@Component({
  selector: 'app-adm-package',
  templateUrl: './adm-package.component.html',
  styleUrl: './adm-package.component.css',
})
export class AdmPackageComponent {
  isSidebarCollapsed = false;
  title: any;

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

  // Fetch all packages from the service
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

  // Handle package deletion
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.service.softDeletePackage(id).subscribe(
        (response: string) => {
          console.log('Package deleted successfully:', response); // Log the response

          this.packages = this.packages.filter((pkg) => pkg.id !== id);
        },
        (error) => {
          console.error('Error while deleting:', error);
        }
      );
    }
  }
}
