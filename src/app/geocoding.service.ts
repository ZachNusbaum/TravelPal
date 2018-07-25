import { Trip } from './trip';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  base_uri = 'https://zachdn.us/civicz/api/geocoding.php';

  constructor(private http: HttpClient) { }

  geocodeTrip(trip: Trip, start: boolean = true) {
    if (start) {
      return this.http.get(`${this.base_uri}?address=${trip.start_address}`);
    } else {
      return this.http.get(`${this.base_uri}?address=${trip.end_address}`);
    }
  }
}
