export interface CartItem {
  productId: string;
  qty: number;
  variant?: CartItemVariant;
}

export interface CartItemVariant {
  size: string;
}
