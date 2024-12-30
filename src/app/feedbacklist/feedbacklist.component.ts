import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../Services/feedback.service';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrl: './feedbacklist.component.css'
})
export class FeedbacklistComponent implements OnInit{

  feedbackList: Feedback[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedback();
  }

  // Load feedback from the backend
  loadFeedback(): void {
    this.feedbackService.getAllFeedback().subscribe(
      (data) => {
        this.feedbackList = data;  // Store the fetched data
        this.loading = false;       // Set loading to false
      },
      (error) => {
        this.errorMessage = 'There was an error fetching the feedback.';
        this.loading = false;       // Set loading to false even if there's an error
        console.error('Error fetching feedback', error);
      }
    );
  }

}
