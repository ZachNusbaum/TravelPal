import { GooglePlacesService } from './../../google-places.service';
import { GeocodingService } from './../../geocoding.service';
import { PlacesQuery } from './places-query';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-places-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  model = new PlacesQuery('');
  results = null;
  @Output() populated = new EventEmitter();

  constructor(private geocoder: GeocodingService, private places: GooglePlacesService) { }

  ngOnInit() {
  }

  onSubmit() {
    let coords;
    this.geocoder.geocodeAddress(this.model.address).subscribe((response: any) => {
      coords = response.results[0].geometry.location;
      console.log(coords);
      this.places.placesNear(coords).subscribe((placesResponse: any) => {
        console.log(placesResponse);
        this.results = placesResponse.results;
        this.populated.emit(this.results);
      });
    });
  }

}
