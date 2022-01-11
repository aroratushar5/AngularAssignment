import { Component, OnInit } from '@angular/core';
import { Item } from './model';
import * as data from './items.json';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  public isGridView: boolean = true;
  public isListView: boolean = false;
  public items: Array<Item> = [];
  public sortDirection: string = 'lowToHigh';
  constructor() { }

  ngOnInit(): void {
    this.items = (data as any).default;
    this.onFilterChange(null)
  }

  listView() {
    this.isListView = true;
    this.isGridView = false;
  }
  gridView() {
    this.isGridView = true;
    this.isListView = false;
  }
  onFilterChange(filter: any | null) {
    if (filter) this.sortDirection = filter.value;
    if (this.sortDirection === 'highToLow') {
      this.items.sort((a, b) => {
        return b.price - a.price;
      })
    }
    else {
      this.items.sort((a, b) => {
        return a.price - b.price;
      })
    }
  }
}
