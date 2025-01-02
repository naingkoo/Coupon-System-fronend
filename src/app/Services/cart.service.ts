import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/cart/add';
  private basedUrl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) {}

  addToCart(cart: Cart): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, cart, { headers });
  }

  getCartByUserId(userId: number): Observable<Cart[]> {
    const url = `${this.basedUrl}/public/list/${userId}`;
    return this.http.get<Cart[]>(url);
  }

  deleteCartItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.basedUrl}/delete/${itemId}`);
  }

  increaseQuantity(cartId: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.basedUrl}/increase/${cartId}`, null); // Send PUT request to increase quantity
  }

  // Method to decrease the quantity of a cart item
  decreaseQuantity(cartId: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.basedUrl}/decrease/${cartId}`, null); // Send PUT request to decrease quantity
  }
}
