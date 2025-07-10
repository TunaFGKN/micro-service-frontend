import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart, CartItem, CreateCartRequest } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = "https://localhost:7175";
  readonly #http = inject(HttpClient)
  
  addToCart(payload: CreateCartRequest) {
    return this.#http.post(`${this.baseUrl}/carts`, payload);
  }

  updateCart(cartId: string,payload: CartItem[]){
    return this.#http.put(`${this.baseUrl}/carts/${cartId}`, payload);
  }

  getCarts(){
    return this.#http.get(`${this.baseUrl}/carts`);
  }

  getCartByUserId(userId: string) {
  return this.#http.get<Cart>(`${this.baseUrl}/carts/user/${userId}`);
}
}