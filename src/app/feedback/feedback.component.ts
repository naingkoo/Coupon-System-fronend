import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../models/feedback';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedback: Feedback = new Feedback();

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private feedbackService: FeedbackService) {}

  // This method will be called when the form is submitted
  onSubmit(): void {
    this.feedbackService.submitFeedback(this.feedback).subscribe(
      (response) => {
        // Handle successful response
        this.successMessage = 'Feedback submitted successfully!';
        this.errorMessage = null; // Clear any previous error message
        console.log('Feedback submitted:', response);
      },
      (error) => {
        // Handle error
        this.errorMessage = 'There was an error submitting your feedback. Please try again.';
        this.successMessage = null; // Clear any previous success message
        console.error('Error submitting feedback:', error);
      }
    );
  }
}
