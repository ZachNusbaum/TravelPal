import { LyftService } from './../lyft.service';
import { LatLng } from './../lat-lng';
import { GeocodingService } from './../geocoding.service';
import { Component, OnInit } from '@angular/core';
import { UberService } from '../uber.service';

@Component({
  selector: 'app-price-lists',
  templateUrl: './price-lists.component.html',
  styleUrls: ['./price-lists.component.css']
})
export class PriceListsComponent implements OnInit {
  loading; // Is the app waiting for the geocode response?
  geocoded = false; // Has the form been geocoded?
  coords1: LatLng; // Coordinates for the start address
  coords2: LatLng; // Coordinates for the destination address
  uberLoading = true; // Waiting for the Uber API to respond
  uberPrices; // List of service prices from the Uber API

  lyftLoading = true;
  lyftPrices;

  constructor(private geocoder: GeocodingService, private uber: UberService, private lyft: LyftService) { }

  ngOnInit() {
  }

  // This function gets called in response to the 'inputreceived' event emitted by the form.
  geocode(trip) {
    this.loading = true; // Geocoding is in progress
    this.uberLoading = true; // Waiting for the Uber API
    this.lyftLoading = true; // Waiting for the Lyft API
    this.geocoded = false; // The addresses are not yet geocoded
    console.log('Geocoding...', trip);

    // Send the start and destination addresses to the Google API, and subscribe to responses.
    this.geocoder.geocodeTrip(trip).subscribe((responses: any) => {
      // There are two responses, one for each request in the forkJoin.
      this.coords1 = responses[0].results[0].geometry.location;
      this.coords2 = responses[1].results[0].geometry.location;

      this.loading = false; // At this point, the addresses are geocoded.
      this.geocoded = true;
      console.log('Geocoded: ', [this.coords1, this.coords2]);
      // Send the geocoded addresses to the Uber API and subscribe to the response.
      this.uber.getPrices(this.coords1, this.coords2).subscribe((uberResponse: any) => {
        this.uberLoading = false; // Received the response from Uber API
        // Sort the response by lowest price estimate
        let sorted = uberResponse.prices.sort((x, y) => { return x.low_estimate - y.low_estimate });
        this.uberPrices = sorted; // Set the list of Uber prices equal to the sorted response
        console.log('Uber success!', uberResponse);
      }, error => { // Handle error response from Uber API
        alert('Uber API Error');
        console.log(error);
      });

      this.lyft.getEstimates(this.coords1, this.coords2).subscribe((lyftResponse: any) => {
        this.lyftLoading = false;
        let sorted = lyftResponse.cost_estimates.sort((x, y) => { x.estimated_cost_cents_min - y.estimated_cost_cents_min });
        this.lyftPrices = sorted;
        console.log('Lyft success!', this.lyftPrices);
      }, error => {
        alert('Lyft error!');
        console.log(error);
      });
    }, error => { // Handle error response from Google API.
      alert('Error geocoding!');
      console.log(error);
    });

  }

}
