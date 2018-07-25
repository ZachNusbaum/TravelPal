import { GeocodingService } from './../geocoding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-lists',
  templateUrl: './price-lists.component.html',
  styleUrls: ['./price-lists.component.css']
})
export class PriceListsComponent implements OnInit {
  loading;
  geocoded = false;
  coords1;
  coords2;

  constructor(private geocoder: GeocodingService) { }

  ngOnInit() {
  }

  geocode(trip) {
    this.loading = true;
    console.log('Geocoding...', trip);
    this.geocoder.geocodeTrip(trip).subscribe(response => {
      console.log('coords', response);
      this.coords1 = response[0];
      this.coords2 = response[1];
      this.loading = false;
      this.geocoded = true;
    });

  }

}
