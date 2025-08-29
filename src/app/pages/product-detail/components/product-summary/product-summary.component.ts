import { Component } from '@angular/core';

import { ProductSummaryGalleryComponent } from '../product-summary-gallery/product-summary-gallery.component';
import { ProductSummaryControlsComponent } from '../product-summary-controls/product-summary-controls.component';
import { ProductSummaryShareComponent } from '../product-summary-share/product-summary-share.component';

const IMPORTS = [
  ProductSummaryGalleryComponent,
  ProductSummaryControlsComponent,
  ProductSummaryShareComponent,
];

@Component({
  selector: 'app-product-summary',
  imports: [...IMPORTS],
  templateUrl: './product-summary.component.html',
  styles: ``,
})
export class ProductSummaryComponent {}
