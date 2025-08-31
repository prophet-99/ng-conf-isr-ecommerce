import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

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
import { ProductDetailState } from './product-detail.state';
import { ProductDetailRouteData } from './product-detail.types';

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
  providers: [ProductDetailState],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  // DI
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productDetailState = inject(ProductDetailState);

  constructor() {
    const routeDataSubject = this.activatedRoute
      .data as BehaviorSubject<ProductDetailRouteData>;
    const { productDetail } = routeDataSubject.getValue();

    this.productDetailState.setProductDetail(productDetail);
  }
}
