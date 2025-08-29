import { Component } from '@angular/core';

import { MainLayoutComponent } from '@core/layouts';
import {
  BreadcrumbComponent,
  FooterComponent,
  HeaderComponent,
  PromotionalBarComponent,
} from '@core/components';
import {
  ProductSummaryComponent,
  ProductTabsComponent,
} from '@pages/product-detail/components';

const IMPORTS = [
  MainLayoutComponent,
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
  ProductTabsComponent,
  ProductSummaryComponent,
];
@Component({
  selector: 'app-product-detail',
  imports: [...IMPORTS],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {}
