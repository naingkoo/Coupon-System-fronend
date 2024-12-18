import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { History, DEFAULT_HISTORY } from '../models/history';

@Component({
  selector: 'app-cus-history',
  templateUrl: './cus-history.component.html',
  styleUrl: './cus-history.component.css',
})
export class CusHistoryComponent {
  payments: History[] = []; // Holds the payment history data
  loading: boolean = false; // Indicates if data is being loaded
  error: string | null = null; // Holds error message, if any

  constructor() {}

  ngOnInit(): void {
    this.loadHistory();
  }

  /**
   * Loads payment history data.
   * Currently uses default data, but this can be extended to fetch from an API.
   */
  loadHistory(): void {
    this.loading = true;
    this.error = null;

    try {
      // Simulating data load with default data
      setTimeout(() => {
        this.payments = DEFAULT_HISTORY;
        this.loading = false;
      }, 1000); // Simulates loading delay
    } catch (err) {
      this.error = 'Failed to load payment history.';
      this.loading = false;
    }
  }
}
