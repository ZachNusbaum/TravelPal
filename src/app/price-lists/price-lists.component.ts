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
    this.geocoder.geocodeTrip(trip, true).subscribe(response1 => {
      console.log('Starting point: ', response1);
      this.coords1 = response1;
      this.geocoder.geocodeTrip(trip, false).subscribe(response2 => {
        this.coords2 = response2;
        this.geocoded = true;
        console.log('Destination:', response2);
        this.loading = false;
      });
    });

  }

}
