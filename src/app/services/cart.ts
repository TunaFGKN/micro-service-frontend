import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateCartRequest } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = "https://localhost:7175";
  readonly #http = inject(HttpClient)
  
  addToCart(payload: CreateCartRequest) {
    return this.#http.post(`${this.baseUrl}/carts`, payload);
  }
}