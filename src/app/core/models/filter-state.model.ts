export interface FilterState {
  categories: string[];
  skinTypes: string[];
  priceMin: number;
  priceMax: number;
  ratings: number[];
  promotions: string[];
  availability: string[];
  sortBy: string;
  page: number;
}
