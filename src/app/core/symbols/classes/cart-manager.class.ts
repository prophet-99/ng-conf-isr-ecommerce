import { type CartItem, type CartItemVariant } from '@core/models';

export class CartManager {
  private static instance: CartManager;
  private cart: CartItem[] = [];
  private readonly STORAGE_KEY = 'BEAUTY_SHOP_CART';

  private constructor() {
    this.loadCart();
  }

  static getInstance(): CartManager {
    if (!CartManager.instance) {
      CartManager.instance = new CartManager();
    }
    return CartManager.instance;
  }

  private loadCart(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.cart = JSON.parse(stored);
      }
    } catch (error) {
      console.error('[v0] Error loading cart:', error);
      this.cart = [];
    }
  }

  private saveCart(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart));
    } catch (error) {
      console.error('[v0] Error saving cart:', error);
    }
  }

  addToCart(productId: string, variant?: CartItemVariant): void {
    const existingIndex = this.cart.findIndex(
      (item) =>
        item.productId === productId &&
        JSON.stringify(item.variant) === JSON.stringify(variant)
    );

    if (existingIndex >= 0) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push({
        productId,
        qty: 1,
        variant,
      });
    }

    this.saveCart();
  }

  removeFromCart(productId: string, variant?: CartItemVariant): void {
    this.cart = this.cart.filter(
      (item) =>
        !(
          item.productId === productId &&
          JSON.stringify(item.variant) === JSON.stringify(variant)
        )
    );
    this.saveCart();
  }

  updateQty(productId: string, qty: number, variant: CartItemVariant): void {
    const index = this.cart.findIndex(
      (item) =>
        item.productId === productId &&
        JSON.stringify(item.variant) === JSON.stringify(variant)
    );

    if (index >= 0) {
      if (qty <= 0) {
        this.removeFromCart(productId, variant);
      } else {
        this.cart[index].qty = qty;
        this.saveCart();
      }
    }
  }

  getCartCount(): number {
    return this.cart.reduce((total, item) => total + item.qty, 0);
  }

  getCart(): CartItem[] {
    return [...this.cart];
  }
}
