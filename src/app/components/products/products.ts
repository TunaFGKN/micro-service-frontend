import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, TableModule ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: any[] = [];
  newProduct = { name: '', price: 0 };

  constructor(private api: ApiService, private cartService: CartService){}

  ngOnInit(): void {
      this.loadProducts();
  }

  loadProducts(){
    this.api.get<any[]>("products").subscribe((res) => (this.products = res));
  }

  addToCart(productId: string) {
  const userId = localStorage.getItem('user_id')!;
  const payload = {
    userId: userId,
    items: [
      { productId: productId, quantity: 1 }
    ]
  };

  this.cartService.addToCart(payload).subscribe({
    next: () => alert('Sepete eklendi'),
    error: (err) => console.error('Hata:', err)
  });
  }
} 