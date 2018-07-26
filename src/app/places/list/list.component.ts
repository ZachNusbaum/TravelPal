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

  constructor() { }

  ngOnInit() {
  }

  receiveData(event) {
    this.loaded = false;
    this.places = event;
    this.loaded = true;
  }

}
