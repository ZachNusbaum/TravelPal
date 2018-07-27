import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-places-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() submitted;
  @Input() finished;
  places;
  loaded = false;
  coords;
  bounds;
  constructor() { }

  ngOnInit() {
  }

  receiveData(event) {
    this.loaded = false;
    this.places = event[0];
    this.loaded = true;
    this.coords = event[1].results[0];
    this.bounds = {north: this.coords.geometry.bounds.northeast.lat, east: this.coords.geometry.bounds.northeast.lng, south: this.coords.geometry.bounds.southwest.lat, west: this.coords.geometry.bounds.southwest.lng};
    console.log('COORDS ', this.coords);
  }

}
