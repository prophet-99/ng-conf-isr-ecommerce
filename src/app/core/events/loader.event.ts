import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderEvent {
  private readonly loaderSubject = new BehaviorSubject(false);
  isLoading$ = this.loaderSubject.asObservable();

  show() {
    this.loaderSubject.next(true);
  }

  hide() {
    this.loaderSubject.next(false);
  }
}
