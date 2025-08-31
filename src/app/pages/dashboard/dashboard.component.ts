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
      name: 'Suero SilkSkin',
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
      name: 'Aceite Facial Argan Glow',
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
      name: 'Base Suave',
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
      name: 'Hidratante OceanMist',
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
      name: 'Suero Iluminador Vitamina C',
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
      name: 'Colección de Labiales Mate',
      price: 18.0,
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80', // Matte Lipstick Collection
      rating: 4.3,
      category: 'makeup',
      inStock: true,
    },
  ]);
}
