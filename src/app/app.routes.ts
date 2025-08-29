import { inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResolveFn, Routes } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { IsrService } from '@rx-angular/isr/browser';
import { tap } from 'rxjs/operators';

const pokemonResolver: ResolveFn<any> = (route, state) => {
  const httpClient = inject(HttpClient);
  const platformId = inject(PLATFORM_ID);
  const isrService = inject(IsrService);

  return httpClient.get<any>('http://localhost:3001/api/delayed/3').pipe(
    tap((data) => {
      if (
        isPlatformServer(platformId) &&
        data?.message?.results?.length === 0
      ) {
        //* -> You can use this feature to handle errors, or you can use it only to skip caching of pages.
        //* -> Use TransferState to transfer the error to the client side or use an utility function
        isrService.addError({
          message: 'No pokemons found',
          cause: 404,
        } as Error);

        console.log('[LOG] app.routes.ts', isrService.getState().errors);
      }
      if (isPlatformBrowser(platformId)) {
        const isrState = document.getElementById('isr-state');
        if (isrState?.textContent) {
          console.log(
            '[LOG] app.routes.ts',
            JSON.parse(isrState.textContent),
            isrService
          );
        }
      }
    })
  );
};

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
    data: {
      revalidate: 30,
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: {
      //* -> By setting the revalidate: 0, you can disable the scheduled (automatic) revalidation. The cache will never revalidate, unless you manually invalidate it using on-demand revalidation.
      revalidate: 0,
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
