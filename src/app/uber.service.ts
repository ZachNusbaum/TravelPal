import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UberService {

  constructor(private http: HttpClient) {}

  getPrices() {
    return true;
  }
}
