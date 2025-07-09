import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-products',
  imports: [],
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
