import { Component, OnInit } from '@angular/core';

interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cus-cart',
  templateUrl: './cus-cart.component.html',
  styleUrl: './cus-cart.component.css',
})
export class CusCartComponent {
  cartItems: CartItem[] = [];

  ngOnInit(): void {
    // Load cart items (replace this with data from a service or local storage)
    this.cartItems = [
      {
        name: 'Coupon 1',
        description: 'Description for Product 1',
        price: 29.99,
        quantity: 1,
        image: 'https://via.placeholder.com/100',
      },
      {
        name: 'Coupon 2',
        description: 'Description for Product 2',
        price: 49.99,
        quantity: 2,
        image: 'https://via.placeholder.com/100',
      },
    ];
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  checkout(): void {
    alert('Proceeding to checkout!');
    // Add your checkout logic here
  }
}
