import { GooglePlacesService } from './../google-places.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { PlacesPageComponent } from './places-page/places-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SearchFormComponent, PlacesPageComponent],
  providers: [GooglePlacesService]
})
export class PlacesModule { }
