import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { type ProductDetailResponse } from '@core/models';

import { ProductDetailState } from '@pages/product-detail/product-detail.state';
import { ProductSummaryGalleryComponent } from '../product-summary-gallery/product-summary-gallery.component';
import { ProductSummaryControlsComponent } from '../product-summary-controls/product-summary-controls.component';
import { ProductSummaryShareComponent } from '../product-summary-share/product-summary-share.component';

const NG_IMPORTS = [CurrencyPipe];
const IMPORTS = [
  ProductSummaryGalleryComponent,
  ProductSummaryControlsComponent,
  ProductSummaryShareComponent,
];

@Component({
  selector: 'app-product-summary',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './product-summary.component.html',
  styles: ``,
})
export class ProductSummaryComponent {
  // DI
  private readonly productDetailState = inject(ProductDetailState);
  // LOCAL
  productDetail = toSignal(this.productDetailState.productDetail$, {
    initialValue: {} as ProductDetailResponse,
  });
}
