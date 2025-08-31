import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { type ProductDetailResponse } from '@core/models';

@Injectable()
export class ProductDetailState {
  private productDetailSubject = new BehaviorSubject<ProductDetailResponse>(
    {} as ProductDetailResponse
  );
  productDetail$ = this.productDetailSubject.asObservable();

  setProductDetail(productDetail: ProductDetailResponse) {
    this.productDetailSubject.next(productDetail);
  }

  getStaticProductDetail(): ProductDetailResponse {
    return this.productDetailSubject.getValue();
  }
}
