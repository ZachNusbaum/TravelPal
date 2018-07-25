import { Trip } from './trip';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  base_uri = 'https://zachdn.us/civicz/api/geocoding.php';

  constructor(private http: HttpClient) { }

  geocodeTrip(trip: Trip, start?: boolean) {
    const request1 = this.http.get(`${this.base_uri}?address=${trip.start_address}`);
    const request2 = this.http.get(`${this.base_uri}?address=${trip.end_address}`);

    return forkJoin([request1, request2]);
  }
}
