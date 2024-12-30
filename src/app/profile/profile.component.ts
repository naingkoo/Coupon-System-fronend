import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Services/profile.service'; // Adjust the import according to your project structure

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any; // This will hold the profile data
  selectedFile: File | null = null;  // This will hold the selected file for upload

  constructor(private profileService: ProfileService) {}

  // On component initialization, load the user's profile
  ngOnInit(): void {
    this.loadProfile();  // Load the profile data when the component is initialized
  }

  // Load profile data by calling the profileService
  loadProfile(): void {
    const userId = 1;  // Use the actual logged-in user ID
    this.profileService.getProfile(userId).subscribe((data) => {
      this.profile = data;
      if (this.profile.photo) {
        // If the photo exists, set the photo URL
        this.profile.photoUrl = 'http://localhost:8080' + this.profile.photo;  // Assuming the backend returns the relative path
      }
    });
  }

  // Capture the selected file for upload
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];  // Get the selected file from the file input
  }

  // Upload the photo to the server
  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      
      // Append the user data (excluding photo) as JSON
      formData.append('user', JSON.stringify(this.profile));

      // Append the selected photo file
      formData.append('photo', this.selectedFile);

      // Now, use the modified method in the service to pass the formData
      this.profileService.addUser(formData).subscribe(
        (response) => {
          console.log('Profile photo uploaded successfully:', response);
          this.profile.photoUrl = 'http://localhost:8080' + response.photo;  // Update the profile with the new photo URL
        },
        (error) => {
          console.error('Error uploading profile photo:', error);
        }
      );
    }
  }

  // Update profile details (for example, name or other fields)
  onUpdateProfile(): void {
    if (this.profile) {
      this.profileService.updateProfile(this.profile.id, this.profile).subscribe(
        (response) => {
          console.log('Profile updated successfully', response);
        },
        (error) => {
          console.error('Error updating profile', error);
        }
      );
    }
  }
}
