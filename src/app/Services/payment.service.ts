import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { PurchaseRequest } from '../models/purchase-request';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  PURL = 'http://localhost:8080/Payment';
  apiUrl = 'http://localhost:8080/purchases';

  constructor(private http: HttpClient) {}

  savePayment(payment: Payment): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.PURL + '/save', payment, { headers });
  }

  showAllPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.PURL + '/list');
  }

  savePurchase(purchaseRequest: PurchaseRequest): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/save`, purchaseRequest, {
      headers,
      responseType: 'text', // Explicitly set response type to text
    });
  }

  // saveBuyNow(purchaseRequest: PurchaseRequest): Observable<string> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post(`${this.apiUrl}/saveBuyNow`, purchaseRequest, {
  //     headers,
  //     responseType: 'text', // Explicitly set response type to text
  //   });
  // }
}
