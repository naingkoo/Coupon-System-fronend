import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PurchaseAndUserDTO {
  id: number;
  total_amount: number;
  total_quantity: number;
  payment_type: string;
  transaction_id: string;
  purchase_date: Date;
  user_id: number;
  user_name: string;
  user_photo: string;
}

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private apiUrl = 'http://localhost:8080/purchases/public/listALL'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllPurchases(): Observable<PurchaseAndUserDTO[]> {
    return this.http.get<PurchaseAndUserDTO[]>(this.apiUrl);
  }
}
