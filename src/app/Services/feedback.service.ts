import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8080/api/feedback';  // Adjust the backend URL as needed
  private abiUrl = 'http://localhost:8080/api/feedback/list';

  constructor(private http: HttpClient) { }

  /**
   * Method to send feedback to the backend API
   * @param feedbackDTO The feedback data to be submitted
   * @returns Observable of the server's response
   */
  submitFeedback(feedbackDTO: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl, feedbackDTO);
  }

   // Fetch all feedback
   getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.abiUrl);
  }
}
