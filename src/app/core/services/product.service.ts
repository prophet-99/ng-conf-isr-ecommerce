import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { type ProductDetailResponse, type ProductResponse } from '@core/models';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // DI
  private readonly http = inject(HttpClient);
  // LOCAL
  private readonly baseAPI = `${environment.serverURL}/api/products`;

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseAPI);
  }

  getProductBySlug(slug: string): Observable<ProductDetailResponse> {
    return this.http.get<ProductDetailResponse>(`${this.baseAPI}/${slug}`);
  }
}
