import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { type FilterState } from '@core/models';

const INITIAL_STATE: FilterState = {
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

@Injectable({
  providedIn: 'root',
})
export class FiltersStore {
  private _filtersDataSubject = new BehaviorSubject<FilterState>(INITIAL_STATE);
  filtersData$ = this._filtersDataSubject.asObservable();

  public updateFiltersData(newFilters: Partial<FilterState>) {
    this._filtersDataSubject.next({
      ...this._filtersDataSubject.value,
      ...newFilters,
    });
  }
}
