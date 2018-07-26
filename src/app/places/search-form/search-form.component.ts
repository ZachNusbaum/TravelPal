import { PlacesQuery } from './places-query';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  model = new PlacesQuery('');

  constructor() { }

  ngOnInit() {
  }

}
