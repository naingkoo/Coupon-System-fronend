import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/reviews/save';
  private baseUrl = 'http://localhost:8080/reviews/public/list'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to submit a new review
  addReview(review: Review): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, review, { headers });
  }

  // Method to fetch all reviews from the backend
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl);
  }
}
