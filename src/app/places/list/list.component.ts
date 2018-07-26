import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-places-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() submitted;
  places;
  loaded = false;

  constructor() { }

  ngOnInit() {
  }

  receiveData(event) {
    this.places = event;
    this.loaded = true;
  }

}
