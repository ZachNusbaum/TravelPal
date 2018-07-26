import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lyft-prices',
  templateUrl: './lyft-prices.component.html',
  styleUrls: ['./lyft-prices.component.css']
})
export class LyftPricesComponent implements OnInit {
  @Input() prices;
  constructor() { }

  ngOnInit() {
  }

}
