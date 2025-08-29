import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  imports: [],
  templateUrl: './product-filters.component.html',
  styles: ``,
})
export class ProductFiltersComponent {
  priceDisplay = signal('$0 — $100');
}
