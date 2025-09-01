import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderEvent } from '@core/events';
import { type Product } from '@core/models';
import { GetResourcePipe } from '@shared/pipes';
import {
  CategoryDisplayPipe,
  FormatPricePipe,
  RatingStarsPipe,
} from '@pages/dashboard/pipes';

const IMPORTS = [
  CategoryDisplayPipe,
  RatingStarsPipe,
  FormatPricePipe,
  GetResourcePipe,
];

@Component({
  selector: 'app-product',
  imports: [...IMPORTS],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  //DI
  private readonly router = inject(Router);
  private readonly loaderEvent = inject(LoaderEvent);
  // LOCAL
  product = input.required<Product>();

  redirectToDetail(productId: string, event: MouseEvent) {
    event.preventDefault();

    this.loaderEvent.show();
    this.router.navigateByUrl(`/product/${productId}`);
  }
}
