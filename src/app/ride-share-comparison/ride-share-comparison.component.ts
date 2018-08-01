import { LatLng } from './../lat-lng';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReverseGeocodeService } from '../reverse-geocode.service';
import { RideShareFormComponent } from '../ride-share-form/ride-share-form.component';

@Component({
  selector: 'app-ride-share-comparison',
  templateUrl: './ride-share-comparison.component.html',
  styleUrls: ['./ride-share-comparison.component.css']
})
export class RideShareComparisonComponent implements OnInit {
  // Indicates that both Uber and Lyft prices are ready.
  pricesReady: boolean;
  userAddress: string;
  @ViewChild(RideShareFormComponent) rideShareForm: RideShareFormComponent;

  constructor(private rg: ReverseGeocodeService) { }

  ngOnInit() {
    this.getCurrentPosition();
    console.log(this.rideShareForm);
  }


  positionError(error) {
    console.log(error);
  }

  getCurrentPosition() {
    if (localStorage.getItem('start')) { return true; }
    if ('geolocation' in navigator) {
      console.log('Navigator!');
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.rg.reverseGeocode({lat: position.coords.latitude, lng: position.coords.longitude}).subscribe((response: any) => {
          console.log(response);
          this.userAddress = response.results[0].formatted_address;
          this.rideShareForm.model.start_address = this.userAddress;
          console.log(this.userAddress);
        });
      });
    } else {
      console.log('Geolocation not available');
    }
  }

}
