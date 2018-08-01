import { ReverseGeocodeService } from './../../reverse-geocode.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.css']
})
export class PlacesPageComponent implements OnInit {
  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent;
  userAddress: string;

  constructor(private rg: ReverseGeocodeService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (localStorage.getItem('start')) { return true; }
    if ('geolocation' in navigator) {
      console.log('Navigator!');
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.rg.reverseGeocode({lat: position.coords.latitude, lng: position.coords.longitude}).subscribe((response: any) => {
          console.log(response);
          this.userAddress = response.results[0].formatted_address;
          this.searchForm.model.address = this.userAddress;
          console.log(this.userAddress);
        });
      });
    } else {
      console.log('Geolocation not available');
    }
  }

}
