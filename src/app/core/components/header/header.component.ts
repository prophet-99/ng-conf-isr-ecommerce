import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CartManager } from '@core/symbols/classes';

const NG_IMPORTS = [RouterLink, RouterLinkActive];

@Component({
  selector: 'app-header',
  imports: [...NG_IMPORTS],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  // DI
  platformId = inject(PLATFORM_ID);
  // LOCALE
  cartCount = signal(0);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const cartManager = CartManager.getInstance();
      this.cartCount.set(cartManager.getCartCount());
    }
  }
}
