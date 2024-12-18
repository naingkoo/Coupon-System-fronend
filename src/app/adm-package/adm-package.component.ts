import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../service/package.service';
import { Packages } from '../models/package-model';

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

  submittedPackage: Packages[] = [];

  constructor(
    private service: PackageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getALL().subscribe(
      (data) => {
        this.submittedPackage = data;
      },
      (error) => {
        console.log('error' + error);
      }
    );
  }
}
