import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contact } from '../models/contact';
import { ContactService } from '../Services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './cus-contact.component.html',
  styleUrls: ['./cus-contact.component.css']
})
export class ContactComponent {

  contactData: contact = new contact();
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private toastr: ToastrService, private contactService: ContactService) {}

  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      this.contactService.submitContact(this.contactData).subscribe(
        (response) => {
          this.toastr.success('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        },
        (error) => {
          this.toastr.error('Sorry, there was an error submitting your message. Please try again later.');
        }
      );
    } else {
      this.toastr.warning('Please fill in all required fields.');
    }
  }
}