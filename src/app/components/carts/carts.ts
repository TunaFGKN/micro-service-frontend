import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CartService } from '../../services/cart';
import { CartItem, CreateCartRequest } from '../../models/cart.model';

@Component({
  selector: 'app-carts',
  imports: [],
  templateUrl: './carts.html',
  styleUrl: './carts.css'
})
export class Carts {
  constructor(private cartService: CartService){}
  cartItems: CartItem[] = [];

  // ngOnInit() {
  //   const userId = localStorage.getItem('user_id');
  //   this.cartService.getCart(userId).subscribe(items => this.cartItems = items);
  // }

  // increment(item) {
  //   item.quantity++;
  // }

  // decrement(item) {
  //   if (item.quantity > 1) item.quantity--;
  // }

  // removeItem(item) {
  //   this.cartItems = this.cartItems.filter(i => i.productId !== item.productId);
  // }

  // updateCart() {
  //   const userId = localStorage.getItem('user_id');
  //   const payload = {
  //     userId: userId,
  //     items: this.cartItems.map(i => ({ productId: i.productId, quantity: i.quantity }))
  //   };

  //   this.cartService.updateCart( ,payload).subscribe(() => alert(""));
  // }

  // clearCart() {
  //   const userId = localStorage.getItem('user_id');
  //   this.cartService.clearCart(userId).subscribe(() => {
  //     this.cartItems = [];
  //     alert("");
  //   });
  // }

}