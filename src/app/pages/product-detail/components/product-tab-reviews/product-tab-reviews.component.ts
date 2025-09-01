import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { type ProductDetailResponse } from '@core/models';
import { ProductDetailState } from '@pages/product-detail/product-detail.state';
import { GetResourcePipe } from '@shared/pipes';

const NG_IMPORTS = [DecimalPipe];
const IMPORTS = [GetResourcePipe];

@Component({
  selector: 'app-product-tab-reviews',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './product-tab-reviews.component.html',
  styles: ``,
})
export class ProductTabReviewsComponent {
  // DI
  private readonly productDetailState = inject(ProductDetailState);
  // LOCAL
  productDetail = toSignal(this.productDetailState.productDetail$, {
    initialValue: {} as ProductDetailResponse,
  });
  trackByIndex = (i: number) => i + Number(Math.random());
  trackByValue = (v: any) => v + Number(Math.random());
}
