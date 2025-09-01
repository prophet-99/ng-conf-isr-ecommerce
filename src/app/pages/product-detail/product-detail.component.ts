import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { LoaderEvent } from '@core/events';
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
export class ProductDetailComponent implements OnInit {
  // DI
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productDetailState = inject(ProductDetailState);
  private readonly loaderEvent = inject(LoaderEvent);

  constructor() {
    const routeDataSubject = this.activatedRoute
      .data as BehaviorSubject<ProductDetailRouteData>;
    const { productDetail } = routeDataSubject.getValue();

    this.productDetailState.setProductDetail(productDetail);
  }

  ngOnInit(): void {
    this.loaderEvent.hide();
  }
}
