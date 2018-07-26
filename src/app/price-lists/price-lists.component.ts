import { GeocodingService } from './../geocoding.service';
import { Component, OnInit } from '@angular/core';
import { UberService } from '../uber.service';

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
  uberLoading = true;
  uberPrices;

  lyftLoading = true;
  lyftPrices;

  constructor(private geocoder: GeocodingService, private uber: UberService) { }

  ngOnInit() {
  }

  geocode(trip) {
    this.loading = true;
    this.uberLoading = true;
    this.lyftLoading = true;
    console.log('Geocoding...', trip);
    this.geocoder.geocodeTrip(trip).subscribe((response: any) => {
      console.log('coords', response);
      this.coords1 = response[0].results[0].geometry.location;
      this.coords2 = response[1].results[0].geometry.location;
      this.loading = false;
      this.geocoded = true;
      this.uber.getPrices(this.coords1, this.coords2).subscribe((uberResponse: any) => {
        this.uberLoading = false;
        let sorted = uberResponse.prices.sort((x, y) => { return x.low_estimate - y.low_estimate });
        this.uberPrices = sorted;
        console.log('Uber success!', uberResponse);
      }, error => {
        alert('Uber API Error');
        console.log(error);
      });
    }, error => {
      alert('Error geocoding!');
      console.log(error);
    });

  }

}
