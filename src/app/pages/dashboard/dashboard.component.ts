import { Component, signal } from '@angular/core';

import { MainLayoutComponent } from '@core/layouts';
import {
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
} from '@core/components';
import { type Product } from '@core/models';
import {
  FilterButtonComponent,
  ProductComponent,
  ProductFiltersComponent,
  SortControlsComponent,
} from '@pages/dashboard/components';

const IMPORTS = [
  MainLayoutComponent,
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
  ProductFiltersComponent,
  SortControlsComponent,
  ProductComponent,
  FilterButtonComponent,
];

@Component({
  selector: 'app-dashboard',
  imports: [...IMPORTS],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  products = signal<Product[]>([
    {
      id: 'silkskin-serum',
      name: 'SilkSkin Serum',
      price: 48.0,
      oldPrice: 60.0,
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', // SilkSkin Serum
      rating: 4.8,
      category: 'skin-care',
      sizes: ['30ml', '60ml', '80ml', '100ml'],
      badge: '20% OFF',
      inStock: true,
      isBestSeller: true,
      onSale: true,
    },
    {
      id: 'argan-glow',
      name: 'Argan Glow Face Oil',
      price: 35.0,
      oldPrice: 42.0,
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Argan Glow Face Oil
      rating: 4.6,
      category: 'skin-care',
      sizes: ['30ml', '50ml'],
      badge: '15% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'smooth-foundation',
      name: 'Smooth Foundation',
      price: 28.0,
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', // Smooth Foundation
      rating: 4.4,
      category: 'makeup',
      inStock: true,
      isNew: true,
    },
    {
      id: 'oceanmist-moisturizer',
      name: 'OceanMist Moisturizer',
      price: 32.0,
      oldPrice: 38.0,
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // OceanMist Moisturizer
      rating: 4.7,
      category: 'skin-care',
      sizes: ['50ml', '100ml'],
      badge: '15% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'vitamin-c-serum',
      name: 'Vitamin C Brightening Serum',
      price: 42.0,
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', // Vitamin C Brightening Serum
      rating: 4.9,
      category: 'skin-care',
      sizes: ['30ml', '60ml'],
      inStock: true,
      isBestSeller: true,
    },
    {
      id: 'matte-lipstick',
      name: 'Matte Lipstick Collection',
      price: 18.0,
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80', // Matte Lipstick Collection
      rating: 4.3,
      category: 'makeup',
      inStock: true,
    },
    {
      id: 'hydrating-shampoo',
      name: 'Hydrating Repair Shampoo',
      price: 24.0,
      oldPrice: 30.0,
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', // Hydrating Repair Shampoo
      rating: 4.5,
      category: 'hair-care',
      sizes: ['250ml', '500ml'],
      badge: '20% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'rose-perfume',
      name: 'Rose Garden Perfume',
      price: 65.0,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', // Rose Garden Perfume
      rating: 4.6,
      category: 'fragrances',
      sizes: ['30ml', '50ml', '100ml'],
      inStock: true,
      isNew: true,
    },
    {
      id: 'nail-polish-set',
      name: 'Nail Polish Set - Spring Colors',
      price: 22.0,
      oldPrice: 28.0,
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', // Nail Polish Set - Spring Colors
      rating: 4.2,
      category: 'nail-care',
      badge: '20% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'body-butter',
      name: 'Shea Body Butter',
      price: 19.0,
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80', // Shea Body Butter
      rating: 4.7,
      category: 'body-care',
      sizes: ['200ml', '400ml'],
      inStock: true,
      isBestSeller: true,
    },
    {
      id: 'eye-cream',
      name: 'Anti-Aging Eye Cream',
      price: 38.0,
      oldPrice: 45.0,
      image:
        'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', // Anti-Aging Eye Cream
      rating: 4.4,
      category: 'skin-care',
      sizes: ['15ml', '30ml'],
      badge: '15% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'mascara-volume',
      name: 'Volume Boost Mascara',
      price: 16.0,
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', // Volume Boost Mascara
      rating: 4.1,
      category: 'makeup',
      inStock: false,
    },
    {
      id: 'hair-mask',
      name: 'Deep Repair Hair Mask',
      price: 26.0,
      oldPrice: 32.0,
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', // Deep Repair Hair Mask
      rating: 4.6,
      category: 'hair-care',
      sizes: ['200ml', '500ml'],
      badge: '20% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'vanilla-perfume',
      name: 'Vanilla Dreams Perfume',
      price: 58.0,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', // Vanilla Dreams Perfume
      rating: 4.3,
      category: 'fragrances',
      sizes: ['30ml', '50ml'],
      inStock: true,
    },
    {
      id: 'cuticle-oil',
      name: 'Nourishing Cuticle Oil',
      price: 12.0,
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Nourishing Cuticle Oil
      rating: 4.5,
      category: 'nail-care',
      inStock: true,
      isNew: true,
    },
    {
      id: 'body-scrub',
      name: 'Exfoliating Body Scrub',
      price: 21.0,
      oldPrice: 26.0,
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // Exfoliating Body Scrub
      rating: 4.4,
      category: 'body-care',
      sizes: ['250ml', '500ml'],
      badge: '20% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'retinol-cream',
      name: 'Retinol Night Cream',
      price: 52.0,
      image:
        'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', // Retinol Night Cream
      rating: 4.8,
      category: 'skin-care',
      sizes: ['30ml', '50ml'],
      inStock: true,
      isBestSeller: true,
    },
    {
      id: 'blush-palette',
      name: 'Blush Palette - Sunset Hues',
      price: 24.0,
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', // Blush Palette - Sunset Hues
      rating: 4.2,
      category: 'makeup',
      inStock: true,
      isNew: true,
    },
    {
      id: 'dry-shampoo',
      name: 'Volumizing Dry Shampoo',
      price: 18.0,
      oldPrice: 22.0,
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', // Volumizing Dry Shampoo
      rating: 4.3,
      category: 'hair-care',
      badge: '15% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'citrus-perfume',
      name: 'Citrus Burst Perfume',
      price: 48.0,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', // Citrus Burst Perfume
      rating: 4.1,
      category: 'fragrances',
      sizes: ['30ml', '50ml'],
      inStock: true,
    },
    {
      id: 'nail-strengthener',
      name: 'Nail Strengthener Treatment',
      price: 15.0,
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', // Nail Strengthener Treatment
      rating: 4.4,
      category: 'nail-care',
      inStock: true,
    },
    {
      id: 'hand-cream',
      name: 'Intensive Hand Cream',
      price: 14.0,
      oldPrice: 18.0,
      image:
        'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', // Intensive Hand Cream
      rating: 4.6,
      category: 'body-care',
      sizes: ['50ml', '100ml'],
      badge: '20% OFF',
      inStock: true,
      onSale: true,
    },
    {
      id: 'cleanser-foam',
      name: 'Gentle Foaming Cleanser',
      price: 22.0,
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // Gentle Foaming Cleanser
      rating: 4.5,
      category: 'skin-care',
      sizes: ['150ml', '300ml'],
      inStock: true,
      isBestSeller: true,
    },
    {
      id: 'eyeshadow-palette',
      name: 'Eyeshadow Palette - Neutral Tones',
      price: 32.0,
      oldPrice: 40.0,
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', // Eyeshadow Palette - Neutral Tones
      rating: 4.7,
      category: 'makeup',
      badge: '20% OFF',
      inStock: true,
      onSale: true,
    },
  ]);
}
