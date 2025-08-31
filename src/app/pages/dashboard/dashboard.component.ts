import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MainLayoutComponent } from '@core/layouts';
import {
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
} from '@core/components';
import { ProductService } from '@core/services';
import { LoaderComponent } from '@shared/components';
import {
  FilterButtonComponent,
  ProductComponent,
  ProductFiltersComponent,
  SortControlsComponent,
} from '@pages/dashboard/components';
import { map } from 'rxjs';

const IMPORTS = [
  MainLayoutComponent,
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
  ProductFiltersComponent,
  SortControlsComponent,
  ProductComponent,
  FilterButtonComponent,
  LoaderComponent,
];

@Component({
  selector: 'app-dashboard',
  imports: [...IMPORTS],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  // DI
  private readonly productService = inject(ProductService);

  // LOCAL
  products = toSignal(
    this.productService.getProducts().pipe(map(({ products }) => products)),
    { initialValue: [] }
  );
}
