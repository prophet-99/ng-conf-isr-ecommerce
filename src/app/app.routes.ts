import { Routes } from '@angular/router';

import { productDetailResolver } from '@core/resolvers';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    data: {
      revalidate: 30,
    },
  },
  {
    path: 'product/:slug',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
    resolve: { productDetail: productDetailResolver },
    data: {
      revalidate: 30,
      //* -> By setting the revalidate: 0, you can disable the scheduled (automatic) revalidation. The cache will never revalidate, unless you manually invalidate it using on-demand revalidation.
      // revalidate: 0,
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
