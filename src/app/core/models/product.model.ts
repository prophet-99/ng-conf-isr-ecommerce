export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  category: string;
  sizes?: string[];
  badge?: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  onSale?: boolean;
}
