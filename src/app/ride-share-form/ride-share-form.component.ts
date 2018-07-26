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
    window.localStorage.setItem('start', this.model.start_address);
    window.localStorage.setItem('end', this.model.end_address);
    this.inputreceived.emit(this.model);
    this.submitted = true;
    return false;
  }

  clearAddresses() {
    window.localStorage.removeItem('start');
    window.localStorage.removeItem('end');
    document.forms[0].reset();
    return false;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.model);
    this.model.start_address = window.localStorage.getItem('start');
    this.model.end_address = window.localStorage.getItem('end');
    if (!!this.model.start_address && !!this.model.end_address) {
      this.onSubmit();
    }
  }

}
