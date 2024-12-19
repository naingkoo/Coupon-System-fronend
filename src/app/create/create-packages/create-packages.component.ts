import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../../Services/package.service';
@Component({
  selector: 'app-create-package',
  templateUrl: './create-packages.component.html',
  styleUrls: ['./create-packages.component.css'],
})
export class CreatePackagesComponent {
  isSidebarCollapsed = false;
  title: any;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  packages = {
    name: '',
    unit_price: 0,
    quantity: 0,
    create_date: new Date(),
    business_id: '',
    description: '',
    image: null,
  };

  selectedFile: File | null = null;
  businessId: number | null = null;

  constructor(
    private router: Router,
    private packageService: PackageService,
    private route: ActivatedRoute
  ) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.businessId = +id;
        this.packages.business_id = this.businessId.toString(); // Convert number to string
      }
    });
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append(
        'packageDTO',
        new Blob([JSON.stringify(this.packages)], { type: 'application/json' })
      );
      formData.append('image', this.selectedFile);

      this.packageService.create(formData).subscribe(
        (response) => {
          console.log('Package created successfully', response);
          this.router.navigate(['/adm-package']);
        },
        (error) => {
          console.error('Error creating package', error);
        }
      );
    }
  }
}
