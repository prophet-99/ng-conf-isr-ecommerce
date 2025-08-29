import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { type Review } from '@core/models';
import { ProductTabDescriptionComponent } from '../product-tab-description/product-tab-description.component';
import { ProductTabAdditionalComponent } from '../product-tab-additional/product-tab-additional.component';
import { ProductTabReviewsComponent } from '../product-tab-reviews/product-tab-reviews.component';

type TabType = 'description' | 'additional' | 'reviews';

const NG_IMPORTS = [CommonModule];
const IMPORTS = [
  ProductTabDescriptionComponent,
  ProductTabAdditionalComponent,
  ProductTabReviewsComponent,
];

@Component({
  selector: 'app-product-tabs',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './product-tabs.component.html',
  styles: ``,
})
export class ProductTabsComponent {
  productReviews: Review[] = [
    {
      id: '1',
      author: 'Sarah Mindaop',
      rating: 5,
      title: 'Amazing results!',
      text: "I've been using this serum for 3 months and the results are incredible. My skin looks so much brighter and smoother. Definitely worth the investment!",
      date: '2 days ago',
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=60&h=60&q=80',
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=60&h=60&q=80',
      ],
    },
    {
      id: '2',
      author: 'Emma Lindaop',
      rating: 5,
      title: 'Love this product',
      text: "This serum has become a staple in my skincare routine. It absorbs quickly and doesn't leave any sticky residue. My fine lines have visibly reduced.",
      date: '1 week ago',
      verified: true,
    },
    {
      id: '3',
      author: 'Jessica Rindaop',
      rating: 4,
      title: 'Good quality',
      text: "Nice texture and packaging. I've noticed some improvement in my skin texture after using it for a month. Will continue using it.",
      date: '2 weeks ago',
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=60&h=60&q=80',
      ],
    },
    {
      id: '4',
      author: 'Maria Kindaop',
      rating: 5,
      title: 'Highly recommend',
      text: 'This is my third bottle! The serum is lightweight yet very effective. My skin feels hydrated all day long.',
      date: '3 weeks ago',
      verified: true,
    },
    {
      id: '5',
      author: 'Anna Pindaop',
      rating: 4,
      title: 'Great for sensitive skin',
      text: "I have very sensitive skin and this serum doesn't cause any irritation. It's gentle yet effective.",
      date: '1 month ago',
      verified: true,
    },
  ];
  activeTab = signal<TabType>('description');

  setTab(tab: TabType) {
    this.activeTab.set(tab);
  }
}
