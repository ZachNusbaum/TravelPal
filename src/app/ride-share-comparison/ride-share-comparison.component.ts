import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-share-comparison',
  templateUrl: './ride-share-comparison.component.html',
  styleUrls: ['./ride-share-comparison.component.css']
})
export class RideShareComparisonComponent implements OnInit {
  pricesReady: boolean;

  constructor() { }

  ngOnInit() {
  }

}
