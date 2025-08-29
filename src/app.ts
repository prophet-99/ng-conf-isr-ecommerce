// Sample Products Data
export const PRODUCTS: Product[] = [
  {
    id: 'silkskin-serum',
    name: 'SilkSkin Serum',
    price: 48.0,
    oldPrice: 60.0,
    image: '/luxury-skincare-serum-bottle.png',
    rating: 4.8,
    category: 'skin-care',
    sizes: ['30ml', '60ml', '80ml', '100ml'],
    badge: '20% OFF',
    inStock: true,
    isBestSeller: true,
    onSale: true,
  },
  {
    id: 'argan-glow',
    name: 'Argan Glow Face Oil',
    price: 35.0,
    oldPrice: 42.0,
    image: '/argan-oil-skincare-bottle.png',
    rating: 4.6,
    category: 'skin-care',
    sizes: ['30ml', '50ml'],
    badge: '15% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'smooth-foundation',
    name: 'Smooth Foundation',
    price: 28.0,
    image: '/makeup-foundation-bottle.png',
    rating: 4.4,
    category: 'makeup',
    inStock: true,
    isNew: true,
  },
  {
    id: 'oceanmist-moisturizer',
    name: 'OceanMist Moisturizer',
    price: 32.0,
    oldPrice: 38.0,
    image: '/ocean-moisturizer-jar.png',
    rating: 4.7,
    category: 'skin-care',
    sizes: ['50ml', '100ml'],
    badge: '15% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C Brightening Serum',
    price: 42.0,
    image: '/vitamin-c-serum.png',
    rating: 4.9,
    category: 'skin-care',
    sizes: ['30ml', '60ml'],
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'matte-lipstick',
    name: 'Matte Lipstick Collection',
    price: 18.0,
    image: '/matte-lipstick-collection.png',
    rating: 4.3,
    category: 'makeup',
    inStock: true,
  },
  {
    id: 'hydrating-shampoo',
    name: 'Hydrating Repair Shampoo',
    price: 24.0,
    oldPrice: 30.0,
    image: '/hydrating-shampoo.png',
    rating: 4.5,
    category: 'hair-care',
    sizes: ['250ml', '500ml'],
    badge: '20% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'rose-perfume',
    name: 'Rose Garden Perfume',
    price: 65.0,
    image: '/rose-perfume-bottle.png',
    rating: 4.6,
    category: 'fragrances',
    sizes: ['30ml', '50ml', '100ml'],
    inStock: true,
    isNew: true,
  },
  {
    id: 'nail-polish-set',
    name: 'Nail Polish Set - Spring Colors',
    price: 22.0,
    oldPrice: 28.0,
    image: '/nail-polish-set-spring-colors.png',
    rating: 4.2,
    category: 'nail-care',
    badge: '20% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'body-butter',
    name: 'Shea Body Butter',
    price: 19.0,
    image: '/shea-body-butter-jar.png',
    rating: 4.7,
    category: 'body-care',
    sizes: ['200ml', '400ml'],
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'eye-cream',
    name: 'Anti-Aging Eye Cream',
    price: 38.0,
    oldPrice: 45.0,
    image: '/anti-aging-eye-cream-jar.png',
    rating: 4.4,
    category: 'skin-care',
    sizes: ['15ml', '30ml'],
    badge: '15% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'mascara-volume',
    name: 'Volume Boost Mascara',
    price: 16.0,
    image: '/volume-mascara-tube.png',
    rating: 4.1,
    category: 'makeup',
    inStock: false,
  },
  {
    id: 'hair-mask',
    name: 'Deep Repair Hair Mask',
    price: 26.0,
    oldPrice: 32.0,
    image: '/hair-repair-mask-jar.png',
    rating: 4.6,
    category: 'hair-care',
    sizes: ['200ml', '500ml'],
    badge: '20% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'vanilla-perfume',
    name: 'Vanilla Dreams Perfume',
    price: 58.0,
    image: '/vanilla-perfume-bottle.png',
    rating: 4.3,
    category: 'fragrances',
    sizes: ['30ml', '50ml'],
    inStock: true,
  },
  {
    id: 'cuticle-oil',
    name: 'Nourishing Cuticle Oil',
    price: 12.0,
    image: '/cuticle-oil-bottle.png',
    rating: 4.5,
    category: 'nail-care',
    inStock: true,
    isNew: true,
  },
  {
    id: 'body-scrub',
    name: 'Exfoliating Body Scrub',
    price: 21.0,
    oldPrice: 26.0,
    image: '/body-scrub-jar.png',
    rating: 4.4,
    category: 'body-care',
    sizes: ['250ml', '500ml'],
    badge: '20% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'retinol-cream',
    name: 'Retinol Night Cream',
    price: 52.0,
    image: '/retinol-night-cream-jar.png',
    rating: 4.8,
    category: 'skin-care',
    sizes: ['30ml', '50ml'],
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'blush-palette',
    name: 'Blush Palette - Sunset Hues',
    price: 24.0,
    image: '/blush-palette-sunset-colors.png',
    rating: 4.2,
    category: 'makeup',
    inStock: true,
    isNew: true,
  },
  {
    id: 'dry-shampoo',
    name: 'Volumizing Dry Shampoo',
    price: 18.0,
    oldPrice: 22.0,
    image: '/dry-shampoo-spray-bottle.png',
    rating: 4.3,
    category: 'hair-care',
    badge: '15% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'citrus-perfume',
    name: 'Citrus Burst Perfume',
    price: 48.0,
    image: '/citrus-perfume-bottle.png',
    rating: 4.1,
    category: 'fragrances',
    sizes: ['30ml', '50ml'],
    inStock: true,
  },
  {
    id: 'nail-strengthener',
    name: 'Nail Strengthener Treatment',
    price: 15.0,
    image: '/nail-strengthener-bottle.png',
    rating: 4.4,
    category: 'nail-care',
    inStock: true,
  },
  {
    id: 'hand-cream',
    name: 'Intensive Hand Cream',
    price: 14.0,
    oldPrice: 18.0,
    image: '/hand-cream-tube.png',
    rating: 4.6,
    category: 'body-care',
    sizes: ['50ml', '100ml'],
    badge: '20% OFF',
    inStock: true,
    onSale: true,
  },
  {
    id: 'cleanser-foam',
    name: 'Gentle Foaming Cleanser',
    price: 22.0,
    image: '/foaming-cleanser-bottle.png',
    rating: 4.5,
    category: 'skin-care',
    sizes: ['150ml', '300ml'],
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 'eyeshadow-palette',
    name: 'Eyeshadow Palette - Neutral Tones',
    price: 32.0,
    oldPrice: 40.0,
    image: '/eyeshadow-palette-neutral-tones.png',
    rating: 4.7,
    category: 'makeup',
    badge: '20% OFF',
    inStock: true,
    onSale: true,
  },
];

// Sample Reviews Data
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    title: 'Amazing results!',
    text: "I've been using this serum for 3 months and the results are incredible. My skin looks so much brighter and smoother. Definitely worth the investment!",
    date: '2 days ago',
    verified: true,
    images: [
      '/placeholder.svg?height=60&width=60',
      '/placeholder.svg?height=60&width=60',
    ],
  },
  {
    id: '2',
    author: 'Emma L.',
    rating: 5,
    title: 'Love this product',
    text: "This serum has become a staple in my skincare routine. It absorbs quickly and doesn't leave any sticky residue. My fine lines have visibly reduced.",
    date: '1 week ago',
    verified: true,
  },
  {
    id: '3',
    author: 'Jessica R.',
    rating: 4,
    title: 'Good quality',
    text: "Nice texture and packaging. I've noticed some improvement in my skin texture after using it for a month. Will continue using it.",
    date: '2 weeks ago',
    verified: true,
    images: ['/placeholder.svg?height=60&width=60'],
  },
  {
    id: '4',
    author: 'Maria K.',
    rating: 5,
    title: 'Highly recommend',
    text: 'This is my third bottle! The serum is lightweight yet very effective. My skin feels hydrated all day long.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: '5',
    author: 'Anna P.',
    rating: 4,
    title: 'Great for sensitive skin',
    text: "I have very sensitive skin and this serum doesn't cause any irritation. It's gentle yet effective.",
    date: '1 month ago',
    verified: true,
  },
];

// Cart Management

// Utility Functions
export function generateStars(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHtml = '';

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += '<span class="star star--filled">★</span>';
    } else if (i === fullStars && hasHalfStar) {
      starsHtml += '<span class="star star--filled">★</span>';
    } else {
      starsHtml += '<span class="star">★</span>';
    }
  }

  return starsHtml;
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

// Initialize cart manager and update badge on page load
// Export cart manager instance

//* Shop..ts
import {
  PRODUCTS,
  type Product,
  formatPrice,
  generateStars,
  debounce,
} from './app.tsx';

// Filter State Management


class ShopManager {
  private filters: FilterState = {
    categories: [],
    skinTypes: [],
    priceMin: 0,
    priceMax: 100,
    ratings: [],
    promotions: [],
    availability: [],
    sortBy: 'default',
    page: 1,
  };

  private readonly ITEMS_PER_PAGE = 12;
  private filteredProducts: Product[] = [];

  constructor() {
    this.initializeEventListeners();
    this.loadStateFromURL();
    this.applyFilters();
  }

  private initializeEventListeners(): void {
    // Filter checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        this.updateFiltersFromForm();
        this.applyFilters();
        this.updateURL();
      });
    });

    // Sort dropdown
    const sortSelect = document.getElementById('sort-by') as HTMLSelectElement;
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        this.filters.sortBy = sortSelect.value;
        this.applyFilters();
        this.updateURL();
      });
    }

    // Clear filters button
    const clearButton = document.getElementById('clear-filters');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        this.clearAllFilters();
      });
    }

    // Mobile filters button
    const mobileFiltersBtn = document.getElementById('mobile-filters-btn');
    const filtersAside = document.getElementById('filters-sidebar');

    if (mobileFiltersBtn && filtersAside) {
      mobileFiltersBtn.addEventListener('click', () => {
        filtersAside.classList.toggle('filters--open');
      });

      // Close filters when clicking outside
      document.addEventListener('click', (e) => {
        if (
          !filtersAside.contains(e.target as Node) &&
          !mobileFiltersBtn.contains(e.target as Node)
        ) {
          filtersAside.classList.remove('filters--open');
        }
      });
    }

    // Pagination buttons
    const paginationContainer = document.getElementById('pagination');
    if (paginationContainer) {
      paginationContainer.addEventListener('click', (e) => {
        const btn = e.target as HTMLElement;
        if (btn.classList.contains('pagination__btn') && btn.dataset.page) {
          const page = Number.parseInt(btn.dataset.page);
          this.filters.page = page;
          this.applyFilters();
          this.updateURL();

          // Scroll to top of products
          const productsSection = document.getElementById('products-grid');
          if (productsSection) {
            productsSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    }
  }

  private updateFiltersFromForm(): void {
    // Categories
    this.filters.categories = Array.from(
      document.querySelectorAll('input[name="category"]:checked')
    ).map((input) => (input as HTMLInputElement).value);

    // Skin types
    this.filters.skinTypes = Array.from(
      document.querySelectorAll('input[name="skin-type"]:checked')
    ).map((input) => (input as HTMLInputElement).value);

    // Ratings
    this.filters.ratings = Array.from(
      document.querySelectorAll('input[name="rating"]:checked')
    ).map((input) => Number.parseInt((input as HTMLInputElement).value));

    // Promotions
    this.filters.promotions = Array.from(
      document.querySelectorAll('input[name="promotion"]:checked')
    ).map((input) => (input as HTMLInputElement).value);

    // Availability
    this.filters.availability = Array.from(
      document.querySelectorAll('input[name="availability"]:checked')
    ).map((input) => (input as HTMLInputElement).value);

    console.log('[v0] Filters updated:', this.filters);
  }

  private applyFilters(): void {
    let filtered = [...PRODUCTS];

    // Apply category filter
    if (this.filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        this.filters.categories.includes(product.category)
      );
    }

    // Apply price filter
    filtered = filtered.filter(
      (product) =>
        product.price >= this.filters.priceMin &&
        product.price <= this.filters.priceMax
    );

    // Apply rating filter
    if (this.filters.ratings.length > 0) {
      filtered = filtered.filter((product) => {
        return this.filters.ratings.some((rating) => product.rating >= rating);
      });
    }

    // Apply promotions filter
    if (this.filters.promotions.length > 0) {
      filtered = filtered.filter((product) => {
        return this.filters.promotions.some((promo) => {
          switch (promo) {
            case 'new':
              return product.isNew;
            case 'bestseller':
              return product.isBestSeller;
            case 'sale':
              return product.onSale;
            default:
              return false;
          }
        });
      });
    }

    // Apply availability filter
    if (this.filters.availability.length > 0) {
      filtered = filtered.filter((product) => {
        return this.filters.availability.some((avail) => {
          switch (avail) {
            case 'in-stock':
              return product.inStock;
            case 'out-of-stock':
              return !product.inStock;
            default:
              return false;
          }
        });
      });
    }

    // Apply sorting
    this.sortProducts(filtered);

    this.filteredProducts = filtered;
    this.renderProducts();
    this.renderActiveFilters();
    this.renderPagination();
    this.updateActiveFiltersCount();
  }

  private sortProducts(products: Product[]): void {
    switch (this.filters.sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        products.sort((a, b) => {
          const aScore = (a.isBestSeller ? 2 : 0) + (a.isNew ? 1 : 0);
          const bScore = (b.isBestSeller ? 2 : 0) + (b.isNew ? 1 : 0);
          return bScore - aScore;
        });
        break;
      default:
        // Default sorting - bestsellers first, then new, then by rating
        products.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.rating - a.rating;
        });
    }
  }

  private renderProducts(): void {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const startIndex = (this.filters.page - 1) * this.ITEMS_PER_PAGE;
    const endIndex = startIndex + this.ITEMS_PER_PAGE;
    const pageProducts = this.filteredProducts.slice(startIndex, endIndex);

    grid.innerHTML = pageProducts
      .map((product) => this.createProductCard(product))
      .join('');

    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
      const start = Math.min(startIndex + 1, this.filteredProducts.length);
      const end = Math.min(endIndex, this.filteredProducts.length);
      resultsCount.textContent = `Showing ${start}-${end} of ${this.filteredProducts.length} results`;
    }

    // Add event listeners to product cards
    this.addProductCardListeners();
  }

  private createProductCard(product: Product): string {
    const badgeHtml = product.badge
      ? `<div class="product-card__badge">${product.badge}</div>`
      : '';

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card__image-container">
          <img src="${product.image}" alt="${
      product.name
    }" class="product-card__image">
          ${badgeHtml}
          <div class="product-card__actions">
            <button class="product-card__action wishlist-btn" aria-label="Add to wishlist">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.171a4 4 0 1 1 5.656 5.656L10 17.657l-6.828-6.829a4 4 0 0 1 0-5.656z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button class="product-card__action quick-view-btn" aria-label="Quick view">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M1 10s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="product-card__content">
          <div class="product-card__category">${this.getCategoryDisplayName(
            product.category
          )}</div>
          <h3 class="product-card__title">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-card__rating">
            <div class="stars">
              ${generateStars(product.rating)}
            </div>
            <span class="product-card__rating-score">${product.rating}</span>
          </div>
          <div class="product-card__pricing">
            <span class="product-card__price">${formatPrice(
              product.price
            )}</span>
            ${
              product.oldPrice
                ? `<span class="product-card__price-old">${formatPrice(
                    product.oldPrice
                  )}</span>`
                : ''
            }
          </div>
        </div>
      </article>
    `;
  }

  private getCategoryDisplayName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'skin-care': 'Skin Care',
      makeup: 'Makeup',
      'hair-care': 'Hair Care',
      fragrances: 'Fragrances',
      'nail-care': 'Nail Care',
      'body-care': 'Body Care',
    };
    return categoryMap[category] || category;
  }

  private addProductCardListeners(): void {
    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('active');
        // Here you would typically save to wishlist
        console.log('[v0] Wishlist toggled');
      });
    });

    // Quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.product-card') as HTMLElement;
        const productId = card?.dataset.productId;
        if (productId) {
          window.location.href = `product.html?id=${productId}`;
        }
      });
    });
  }

  private renderActiveFilters(): void {
    const container = document.getElementById('active-filters');
    if (!container) return;

    const chips: string[] = [];

    // Category chips
    this.filters.categories.forEach((category) => {
      chips.push(
        this.createFilterChip(
          'category',
          category,
          this.getCategoryDisplayName(category)
        )
      );
    });

    // Skin type chips
    this.filters.skinTypes.forEach((skinType) => {
      chips.push(
        this.createFilterChip(
          'skin-type',
          skinType,
          skinType.charAt(0).toUpperCase() + skinType.slice(1)
        )
      );
    });

    // Price chip
    if (this.filters.priceMin > 0 || this.filters.priceMax < 100) {
      chips.push(
        this.createFilterChip(
          'price',
          'range',
          `Price: $${this.filters.priceMin}–$${this.filters.priceMax}`
        )
      );
    }

    // Rating chips
    this.filters.ratings.forEach((rating) => {
      chips.push(
        this.createFilterChip('rating', rating.toString(), `${rating}+ Stars`)
      );
    });

    // Promotion chips
    this.filters.promotions.forEach((promo) => {
      const promoNames: { [key: string]: string } = {
        new: 'New Arrivals',
        bestseller: 'Best Sellers',
        sale: 'On Sale',
      };
      chips.push(this.createFilterChip('promotion', promo, promoNames[promo]));
    });

    // Availability chips
    this.filters.availability.forEach((avail) => {
      const availNames: { [key: string]: string } = {
        'in-stock': 'In Stock',
        'out-of-stock': 'Out of Stock',
      };
      chips.push(
        this.createFilterChip('availability', avail, availNames[avail])
      );
    });

    container.innerHTML = chips.join('');

    // Add remove listeners
    container.querySelectorAll('.filter-chip__remove').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chip = btn.closest('.filter-chip') as HTMLElement;
        const filterType = chip.dataset.filterType;
        const filterValue = chip.dataset.filterValue;

        if (filterType && filterValue) {
          this.removeFilter(filterType, filterValue);
        }
      });
    });
  }

  private createFilterChip(type: string, value: string, label: string): string {
    return `
      <div class="filter-chip" data-filter-type="${type}" data-filter-value="${value}">
        <span>${label}</span>
        <button class="filter-chip__remove" aria-label="Remove ${label} filter">×</button>
      </div>
    `;
  }

  private removeFilter(type: string, value: string): void {
    switch (type) {
      case 'category':
        this.filters.categories = this.filters.categories.filter(
          (c) => c !== value
        );
        break;
      case 'skin-type':
        this.filters.skinTypes = this.filters.skinTypes.filter(
          (s) => s !== value
        );
        break;
      case 'price':
        this.filters.priceMin = 0;
        this.filters.priceMax = 100;
        // Update sliders
        const minSlider = document.getElementById(
          'price-min'
        ) as HTMLInputElement;
        const maxSlider = document.getElementById(
          'price-max'
        ) as HTMLInputElement;
        if (minSlider) minSlider.value = '0';
        if (maxSlider) maxSlider.value = '100';
        break;
      case 'rating':
        this.filters.ratings = this.filters.ratings.filter(
          (r) => r.toString() !== value
        );
        break;
      case 'promotion':
        this.filters.promotions = this.filters.promotions.filter(
          (p) => p !== value
        );
        break;
      case 'availability':
        this.filters.availability = this.filters.availability.filter(
          (a) => a !== value
        );
        break;
    }

    this.updateFormFromFilters();
    this.applyFilters();
    this.updateURL();
  }

  private updateFormFromFilters(): void {
    // Update category checkboxes
    document.querySelectorAll('input[name="category"]').forEach((input) => {
      const checkbox = input as HTMLInputElement;
      checkbox.checked = this.filters.categories.includes(checkbox.value);
    });

    // Update skin type checkboxes
    document.querySelectorAll('input[name="skin-type"]').forEach((input) => {
      const checkbox = input as HTMLInputElement;
      checkbox.checked = this.filters.skinTypes.includes(checkbox.value);
    });

    // Update rating checkboxes
    document.querySelectorAll('input[name="rating"]').forEach((input) => {
      const checkbox = input as HTMLInputElement;
      checkbox.checked = this.filters.ratings.includes(
        Number.parseInt(checkbox.value)
      );
    });

    // Update promotion checkboxes
    document.querySelectorAll('input[name="promotion"]').forEach((input) => {
      const checkbox = input as HTMLInputElement;
      checkbox.checked = this.filters.promotions.includes(checkbox.value);
    });

    // Update availability checkboxes
    document.querySelectorAll('input[name="availability"]').forEach((input) => {
      const checkbox = input as HTMLInputElement;
      checkbox.checked = this.filters.availability.includes(checkbox.value);
    });

    const minSlider = document.getElementById('price-min') as HTMLInputElement;
    const maxSlider = document.getElementById('price-max') as HTMLInputElement;
    const display = document.getElementById('price-display');

    if (minSlider) minSlider.value = this.filters.priceMin.toString();
    if (maxSlider) maxSlider.value = this.filters.priceMax.toString();
    if (display)
      display.textContent = `$${this.filters.priceMin} — $${this.filters.priceMax}`;

    // Update sort dropdown
    const sortSelect = document.getElementById('sort-by') as HTMLSelectElement;
    if (sortSelect) sortSelect.value = this.filters.sortBy;
  }

  private renderPagination(): void {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(
      this.filteredProducts.length / this.ITEMS_PER_PAGE
    );

    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    const currentPage = this.filters.page;
    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
      paginationHTML += `
        <button class="pagination__btn pagination__btn--prev" data-page="${
          currentPage - 1
        }" aria-label="Previous page">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      `;
    }

    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      paginationHTML += `<button class="pagination__btn" data-page="1">1</button>`;
      if (startPage > 2) {
        paginationHTML += `<span class="pagination__ellipsis">...</span>`;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage ? ' pagination__btn--active' : '';
      paginationHTML += `<button class="pagination__btn${isActive}" data-page="${i}">${i}</button>`;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationHTML += `<span class="pagination__ellipsis">...</span>`;
      }
      paginationHTML += `<button class="pagination__btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
      paginationHTML += `
        <button class="pagination__btn pagination__btn--next" data-page="${
          currentPage + 1
        }" aria-label="Next page">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      `;
    }

    paginationContainer.innerHTML = `<nav class="pagination" role="navigation" aria-label="Pagination">${paginationHTML}</nav>`;
  }

  private updateActiveFiltersCount(): void {
    const activeCount = this.getActiveFiltersCount();
    const countElements = document.querySelectorAll('.filters-count');

    countElements.forEach((element) => {
      if (activeCount > 0) {
        element.textContent = activeCount.toString();
        element.classList.add('filters-count--active');
      } else {
        element.textContent = '';
        element.classList.remove('filters-count--active');
      }
    });

    // Update mobile filters button
    const mobileBtn = document.getElementById('mobile-filters-btn');
    if (mobileBtn) {
      const countSpan = mobileBtn.querySelector('.filters-count');
      if (countSpan) {
        if (activeCount > 0) {
          countSpan.textContent = activeCount.toString();
          countSpan.classList.add('filters-count--active');
        } else {
          countSpan.textContent = '';
          countSpan.classList.remove('filters-count--active');
        }
      }
    }
  }

  private getActiveFiltersCount(): number {
    let count = 0;

    count += this.filters.categories.length;
    count += this.filters.skinTypes.length;
    count += this.filters.ratings.length;
    count += this.filters.promotions.length;
    count += this.filters.availability.length;

    // Count price filter if not default
    if (this.filters.priceMin > 0 || this.filters.priceMax < 100) {
      count += 1;
    }

    return count;
  }

  private clearAllFilters(): void {
    this.filters = {
      categories: [],
      skinTypes: [],
      priceMin: 0,
      priceMax: 100,
      ratings: [],
      promotions: [],
      availability: [],
      sortBy: 'default',
      page: 1,
    };

    this.updateFormFromFilters();
    this.applyFilters();
    this.updateURL();
  }

  private updateURL(): void {
    const params = new URLSearchParams();

    if (this.filters.categories.length > 0) {
      params.set('categories', this.filters.categories.join(','));
    }
    if (this.filters.skinTypes.length > 0) {
      params.set('skinTypes', this.filters.skinTypes.join(','));
    }
    if (this.filters.priceMin > 0) {
      params.set('priceMin', this.filters.priceMin.toString());
    }
    if (this.filters.priceMax < 100) {
      params.set('priceMax', this.filters.priceMax.toString());
    }
    if (this.filters.ratings.length > 0) {
      params.set('ratings', this.filters.ratings.join(','));
    }
    if (this.filters.promotions.length > 0) {
      params.set('promotions', this.filters.promotions.join(','));
    }
    if (this.filters.availability.length > 0) {
      params.set('availability', this.filters.availability.join(','));
    }
    if (this.filters.sortBy !== 'default') {
      params.set('sortBy', this.filters.sortBy);
    }
    if (this.filters.page > 1) {
      params.set('page', this.filters.page.toString());
    }

    const newURL = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, '', newURL);
  }

  private loadStateFromURL(): void {
    const params = new URLSearchParams(window.location.search);

    if (params.has('categories')) {
      this.filters.categories = params.get('categories')!.split(',');
    }
    if (params.has('skinTypes')) {
      this.filters.skinTypes = params.get('skinTypes')!.split(',');
    }
    if (params.has('priceMin')) {
      this.filters.priceMin = Number.parseInt(params.get('priceMin')!);
    }
    if (params.has('priceMax')) {
      this.filters.priceMax = Number.parseInt(params.get('priceMax')!);
    }
    if (params.has('ratings')) {
      this.filters.ratings = params
        .get('ratings')!
        .split(',')
        .map((r) => Number.parseInt(r));
    }
    if (params.has('promotions')) {
      this.filters.promotions = params.get('promotions')!.split(',');
    }
    if (params.has('availability')) {
      this.filters.availability = params.get('availability')!.split(',');
    }
    if (params.has('sortBy')) {
      this.filters.sortBy = params.get('sortBy')!;
    }
    if (params.has('page')) {
      this.filters.page = Number.parseInt(params.get('page')!) || 1;
    }

    this.updateFormFromFilters();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ShopManager();
});

export { ShopManager };
