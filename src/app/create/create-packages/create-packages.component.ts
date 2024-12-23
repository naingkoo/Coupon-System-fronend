import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../../Services/package.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-create-package',
  templateUrl: './create-packages.component.html',
  styleUrls: ['./create-packages.component.css'],
})
export class CreatePackagesComponent implements OnInit {
  isSidebarCollapsed = false;
  title: any;

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
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private packageService: PackageService,
    private route: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService // Inject ToastrService
  ) {}

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Generate image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
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
          this.toastr.success('Package created successfully!', 'Success'); // Show success toast
          this.router.navigate(['/adm-package']);
        },
        (error) => {
          console.error('Error creating package', error);
          this.toastr.error('Error creating package', 'Error'); // Show error toast
        }
      );
    } else {
      this.toastr.warning('Please select an image', 'Warning'); // Show warning toast if no image is selected
    }
  }

  onCancel(): void {
    this.location.back(); // Go back to the previous page, i.e., business list
  }
}
