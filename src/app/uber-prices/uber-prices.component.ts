import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uber-prices',
  templateUrl: './uber-prices.component.html',
  styleUrls: ['./uber-prices.component.css']
})
export class UberPricesComponent implements OnInit {
  @Input() prices;

  constructor() { }

  ngOnInit() {
  }



}
