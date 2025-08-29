import { Component, input } from '@angular/core';

import { Review } from '@core/models';

@Component({
  selector: 'app-product-tab-reviews',
  imports: [],
  templateUrl: './product-tab-reviews.component.html',
  styles: ``,
})
export class ProductTabReviewsComponent {
  reviews = input.required<Review[]>();

  trackByIndex = (i: number) => i + Number(Math.random());
  trackByValue = (v: any) => v + Number(Math.random());
}
