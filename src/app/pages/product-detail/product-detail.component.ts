import { Component } from '@angular/core';

import {
  BreadcrumbComponent,
  FooterComponent,
  HeaderComponent,
  PromotionalBarComponent,
} from '@core/components';

const IMPORTS = [
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
];
@Component({
  selector: 'app-product-detail',
  imports: [...IMPORTS],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {}
