export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CreateCartRequest {
  userId: string;
  items: CartItem[];
}

export interface Item{      
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  createdDate: string;
  updatedDate: string;
}

export interface Cart{
  id: string;
  userId: string;
  createdDate: string;
  updatedDate: string;
  items: Item[];
}