import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() isListView: boolean = false;
  @Input() item: Item = {
    "imageSource": "https://rukminim1.flixcart.com/image/800/960/kk76wsw0/watch/c/a/r/dz4519-diesel-original-imafzhhzbmbxktmf.jpeg?q=50",
    "title": "DIESEL - DZ4519 Griffed Analog Watch - For Men",
    "description": "The leather rugged band, when paired with the chrono masculine dial, gives you a timepiece that can be worn to both work and after work. This Diesel Griffed watch features a red and blue iridescent dial with white stick indexes and three sub dials, chronograph movement and black leather strap.",
    "price": 1700
  }
  constructor() { }

  ngOnInit(): void {

  }
}
