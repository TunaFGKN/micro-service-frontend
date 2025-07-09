import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, TableModule ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: any[] = [];
  newProduct = { name: '', price: 0 };

  constructor(private api: ApiService){}

  ngOnInit(): void {
      this.loadProducts();
  }

  loadProducts(){
    this.api.get<any[]>("products").subscribe((res) => (this.products = res));
  }


} 