import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-share-comparison',
  templateUrl: './ride-share-comparison.component.html',
  styleUrls: ['./ride-share-comparison.component.css']
})
export class RideShareComparisonComponent implements OnInit {
  // Indicates that both Uber and Lyft prices are ready.
  pricesReady: boolean;

  constructor() { }

  ngOnInit() {
  }

}
