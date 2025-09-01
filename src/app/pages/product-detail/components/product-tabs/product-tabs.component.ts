import { Component, signal } from '@angular/core';

import { ProductTabDescriptionComponent } from '../product-tab-description/product-tab-description.component';
import { ProductTabAdditionalComponent } from '../product-tab-additional/product-tab-additional.component';
import { ProductTabReviewsComponent } from '../product-tab-reviews/product-tab-reviews.component';

type TabType = 'description' | 'additional' | 'reviews';

const IMPORTS = [
  ProductTabDescriptionComponent,
  ProductTabAdditionalComponent,
  ProductTabReviewsComponent,
];

@Component({
  selector: 'app-product-tabs',
  imports: [...IMPORTS],
  templateUrl: './product-tabs.component.html',
  styles: ``,
})
export class ProductTabsComponent {
  activeTab = signal<TabType>('description');

  setTab(tab: TabType) {
    this.activeTab.set(tab);
  }
}
