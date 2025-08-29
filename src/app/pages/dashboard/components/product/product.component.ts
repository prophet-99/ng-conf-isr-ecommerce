import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { type Product } from '@core/models';
import {
  CategoryDisplayPipe,
  FormatPricePipe,
  RatingStarsPipe,
} from '@pages/dashboard/pipes';

const NG_IMPORTS = [RouterLink];
const IMPORTS = [CategoryDisplayPipe, RatingStarsPipe, FormatPricePipe];

@Component({
  selector: 'app-product',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  product = input.required<Product>();
}
