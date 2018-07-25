import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Trip } from './../trip';

@Component({
  selector: 'app-ride-share-form',
  templateUrl: './ride-share-form.component.html',
  styleUrls: ['./ride-share-form.component.css']
})
export class RideShareFormComponent implements OnInit {
  model = new Trip();
  submitted = false;
  @Output() inputreceived = new EventEmitter<any>();

  onSubmit() {
    this.inputreceived.emit(this.model);
    this.submitted = true;
    return false;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.model);
  }

}
