export interface ProductResponse {
  products: Product[];
  total: number;
}

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

export interface ProductDetailResponse {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  oldPrice?: number;
  description: string;
  images: string[];
  sizes?: string[];
  sku: string;
  tags: string[];
  inStock?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  onSale?: boolean;
  detail: ProductDetailContent;
}

export interface ProductDetailContent {
  description: ProductDescriptionDetail;
  additionalInfo: ProductAdditionalInfo;
  reviews: ProductReviewsSummary;
}

export interface ProductDescriptionDetail {
  product: string;
  benefits: string[];
  howToUse: string;
}

export interface ProductAdditionalInfo {
  brand: string;
  productType: string;
  skinType: string;
  keyIngredients: string;
  volumeOptions: string;
  crueltyFree: boolean;
  parabenFree: boolean;
}

export interface ProductReviewsSummary {
  rating: number;
  totalReviews: number;
  stars: ProductReviewStars;
  comments: ProductReviewComment[];
}

export interface ProductReviewStars {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
}

export interface ProductReviewComment {
  author: string;
  isVerified: boolean;
  date: string;
  rating: number;
  title: string;
  description: string;
  images: string[];
}
