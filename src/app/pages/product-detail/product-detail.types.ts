import { type ProductDetailResponse } from '@core/models';

export type ProductDetailRouteData = {
  productDetail: ProductDetailResponse;
  revalidate: number;
};
