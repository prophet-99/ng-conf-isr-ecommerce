import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';

import { CartManager } from '@core/symbols/classes';

@Component({
  selector: 'app-header',
  imports: [],
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
