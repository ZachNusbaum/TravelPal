import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './../app-routing.module';
import { GooglePlacesService } from './../google-places.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { PlacesPageComponent } from './places-page/places-page.component';
import { ListComponent } from './list/list.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUS_9LDubZs79TSZQ0jsyghykkpscT5pk'
    })
  ],
  declarations: [SearchFormComponent, PlacesPageComponent, ListComponent, PlaceDetailComponent],
  providers: [GooglePlacesService]
})
export class PlacesModule { }
