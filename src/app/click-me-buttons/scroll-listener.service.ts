import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollListenerService {
  private categoriesSubject = new BehaviorSubject<Array<string>>([]);
  buttonList$ = this.categoriesSubject.asObservable();
  categories: Array<string> = [];
  buttonListArray: Array<any> = [];

  constructor() {
    this.buttonListArray.length = 5;
    this.getNextItems();
    this.categoriesSubject.next(this.buttonListArray);
  }

  loadMore(): void {
    this.getNextItems();
    this.categoriesSubject.next(this.buttonListArray);
  }

  getNextItems(): void {
    this.buttonListArray.length = this.buttonListArray.length + 5;
  }
}
