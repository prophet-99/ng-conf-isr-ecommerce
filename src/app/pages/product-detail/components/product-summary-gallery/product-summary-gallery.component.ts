import {
  Component,
  inject,
  signal,
  computed,
  HostListener,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { type ProductDetailResponse } from '@core/models';
import { ProductDetailState } from '@pages/product-detail/product-detail.state';
import { GetResourcePipe } from '@shared/pipes';

const IMPORTS = [GetResourcePipe];

@Component({
  selector: 'app-product-summary-gallery',
  imports: [...IMPORTS],
  templateUrl: './product-summary-gallery.component.html',
  styles: ``,
})
export class ProductSummaryGalleryComponent {
  // DI
  private readonly productDetailState = inject(ProductDetailState);
  // LOCAL
  productDetail = toSignal(this.productDetailState.productDetail$, {
    initialValue: {} as ProductDetailResponse,
  });
  mainImage = computed(() => {
    const imgs = this.images();
    const idx = this.currentIndex();
    if (!imgs.length) return '';
    return imgs[Math.min(Math.max(idx, 0), imgs.length - 1)];
  });
  images = computed(() => this.productDetail().images ?? []);
  currentIndex = signal(0);

  setIndex(i: number) {
    const total = this.images().length;
    if (!total) return;
    if (i < 0) i = 0;
    if (i > total - 1) i = total - 1;
    this.currentIndex.set(i);
  }

  next() {
    this.setIndex(this.currentIndex() + 1);
  }

  prev() {
    this.setIndex(this.currentIndex() - 1);
  }

  @HostListener('keydown', ['$event'])
  handleKey(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      this.next();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      this.prev();
      e.preventDefault();
    }
  }
}
