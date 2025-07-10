import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { Cart, CartItem, CreateCartRequest } from '../../models/cart.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carts',
  imports: [CommonModule],
  templateUrl: './carts.html',
  styleUrl: './carts.css'
})
export class Carts {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    if (!userId) return;

    this.cartService.getCartByUserId(userId).subscribe({
      next: (cart: Cart) => {
        this.cartItems = cart.items || [];
      },
      error: err => {
        console.error('Cart couldnt retrieved:', err);
        this.cartItems = [];
      }
    });
  }
}