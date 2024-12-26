import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  selectedFile: File | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    const userId = 1;  // Use the actual logged-in user ID
    this.profileService.getProfile(userId).subscribe((data) => {
      this.profile = data;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      const userId = 1;  // Use the actual logged-in user ID
      this.profileService.uploadProfilePhoto(this.selectedFile, userId).subscribe((response) => {
        console.log('Upload successful:', response);
        this.loadProfile();  // Reload the profile after upload
      });
    }
  }
}
