import { Component } from '@angular/core';

@Component({
  selector: 'app-cus-contact',
  templateUrl: './cus-contact.component.html',
  styleUrl: './cus-contact.component.css',
})
export class CusContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Contact Form Submitted:', this.contactData);
      alert('Thank you for contacting us. We will get back to you soon!');
      // Reset form
      this.contactData = {
        name: '',
        email: '',
        message: '',
      };
      form.resetForm();
    }
  }
}
