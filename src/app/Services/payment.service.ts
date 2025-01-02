import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  PURL = 'http://localhost:8080/Payment';


  constructor(private http: HttpClient) {}


   savePayment(payment: Payment): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this.PURL + '/save', payment, { headers });
    }

    showAllPayment(): Observable<Payment[]> {
      return this.http.get<Payment[]>(this.PURL + "/list");
    }
 
}
