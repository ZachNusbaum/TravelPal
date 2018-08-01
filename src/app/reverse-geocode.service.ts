import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodeService {
  base_uri = 'https://maps.googleapis.com/maps/api';
  api_key = 'AIzaSyBlnRV_RD8WL_Pf0_hkMgPDsoqPfEDpWEk';

  constructor(private http: HttpClient) { }

  public reverseGeocode(location: any) {
    return this.http.get(`${this.base_uri}/geocode/json?latlng=${location.lat},${location.lng}&key=${this.api_key}`);
  }
}
