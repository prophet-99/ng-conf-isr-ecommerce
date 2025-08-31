import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { ResolveFn } from '@angular/router';

import { IsrService } from '@rx-angular/isr/browser';
import { catchError, of } from 'rxjs';

import { ProductService } from '@core/services';
import { type ProductDetailResponse } from '@core/models';
import { HttpErrorResponse } from '@angular/common/http';

export const productDetailResolver: ResolveFn<ProductDetailResponse> = (
  route,
  state
) => {
  const productService = inject(ProductService);
  const platformId = inject(PLATFORM_ID);
  const isrService = inject(IsrService);

  return productService
    .getProductBySlug(route.paramMap.get('slug') as string)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (isPlatformServer(platformId)) {
          //* -> You can use this feature to handle errors, or you can use it only to skip caching of pages.
          //* -> Use TransferState to transfer the error to the client side or use an utility function
          isrService.addError({
            message: 'No se encontró el producto con el slug proporcionado.',
            cause: err.status,
          } as Error);
          console.log(
            '[LOG] product-detail.resolve.ts:',
            isrService.getState().errors
          );

          return of({} as ProductDetailResponse);
        }

        const isrState = document.getElementById('isr-state');
        if (isrState?.textContent) {
          console.log(
            '[LOG] product-detail.resolve.ts:',
            JSON.parse(isrState.textContent),
            isrService
          );
        }
        return of({} as ProductDetailResponse);
      })
    );
};
