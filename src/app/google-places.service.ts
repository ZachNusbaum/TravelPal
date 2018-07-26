import { LatLng } from './lat-lng';
import { GeocodingService } from './geocoding.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  base_uri = 'https://zachdn.us/civicz/api/places.php';

  constructor(private http: HttpClient, private geocoder: GeocodingService) { }

  public placesNear(coords: LatLng) {
    return this.http.get(`${this.base_uri}?location=${coords.lat},${coords.lng}&type=store`);
  }
}
