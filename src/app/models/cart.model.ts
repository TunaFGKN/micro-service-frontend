export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CreateCartRequest {
  userId: string;
  items: CartItem[];
}