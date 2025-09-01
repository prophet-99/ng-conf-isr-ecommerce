import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { type ProductDetailResponse } from '@core/models';
import { ProductDetailState } from '@pages/product-detail/product-detail.state';

@Component({
  selector: 'app-product-tab-additional',
  imports: [],
  templateUrl: './product-tab-additional.component.html',
  styles: ``,
})
export class ProductTabAdditionalComponent {
  // DI
  private readonly productDetailState = inject(ProductDetailState);
  // LOCAL
  productDetail = toSignal(this.productDetailState.productDetail$, {
    initialValue: {} as ProductDetailResponse,
  });
}
