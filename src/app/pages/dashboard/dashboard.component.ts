import { Component, signal } from '@angular/core';

import { MainLayoutComponent } from '@core/layouts';
import {
  PromotionalBarComponent,
  HeaderComponent,
  BreadcrumbComponent,
  FooterComponent,
} from '@core/components';
import { type Product } from '@core/models';
import {
  FilterButtonComponent,
  ProductComponent,
  ProductFiltersComponent,
  SortControlsComponent,
} from '@pages/dashboard/components';

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
];

@Component({
  selector: 'app-dashboard',
  imports: [...IMPORTS],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  products = signal<Product[]>([]);
}
