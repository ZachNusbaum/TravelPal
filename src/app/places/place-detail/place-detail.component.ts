import { GooglePlacesService } from './../../google-places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private places: GooglePlacesService) { }

  place_id: string;
  data = null;

  ngOnInit() {
    this.data = null;
    this.route.params.subscribe(params => {
      this.place_id = params.id;
      this.places.getPlace(params.id).subscribe((response: any) => {
        console.log('Place data:', response);
        this.data = response.result;
      });
    });
  }

}
