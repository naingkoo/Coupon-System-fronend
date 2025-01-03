import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PaymentDataShareService } from '../Services/payment-data-share.service';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-cus-cart',
  templateUrl: './cus-cart.component.html',
  styleUrl: './cus-cart.component.css',
})
export class CusCartComponent {
  userId: number = 0; // Example user ID

  constructor(
    private paymentDataShare: PaymentDataShareService,
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  getItemCountText(): string {
    const count = this.cartItems.length;
    return count === 1 ? `${count} item` : `${count} items`;
  }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.userId = this.authService.getLoggedUserID();
    this.cartService.getCartByUserId(this.userId).subscribe(
      (data: Cart[]) => {
        this.cartItems = data; // Update the cart items
      },
      (error) => {
        console.error('Error fetching cart items:', error); // Log the error
      }
    );
  }

  removeItem(itemId: number): void {
    this.cartService.deleteCartItem(itemId).subscribe(
      (response) => {
        // Handle successful deletion
        this.cartItems = this.cartItems.filter(
          (cartItem) => cartItem.id !== itemId
        );
        this.toastr.success('Item removed from cart successfully!', 'Success'); // Show success toast
      },
      (error) => {
        // Handle error
        console.error('Error removing item from cart', error);
        this.toastr.error('Error removing item from cart', 'Error'); // Show error toast
      }
    );
  }

  increaseQuantity(item: Cart): void {
    this.cartService.increaseQuantity(item.id).subscribe(
      (response) => {
        item.unit_quantity++; // Increase the quantity locally after successful response
        this.loadCartItems(); // Refresh the cart data
      },
      (error) => {
        console.error('Error increasing quantity', error);
      }
    );
  }

  decreaseQuantity(item: Cart): void {
    if (item.unit_quantity > 1) {
      this.cartService.decreaseQuantity(item.id).subscribe(
        (response) => {
          item.unit_quantity--; // Decrease the quantity locally after successful response
          this.loadCartItems(); // Refresh the cart data
        },
        (error) => {
          console.error('Error decreasing quantity', error);
        }
      );
    } else {
      // Optionally handle the case where quantity cannot be decreased further
      console.warn('Quantity cannot be less than 1');
    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.unit_price, 0);
  }

  cartItems: Cart[] = [];

  checkout() {
    const cartItems = encodeURIComponent(JSON.stringify(this.cartItems));
    this.router.navigate(['/cart-payment'], {
      queryParams: { items: cartItems },
    });
  }
}
