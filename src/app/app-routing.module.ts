import { PlacesPageComponent } from './places/places-page/places-page.component';
import { RideShareComparisonComponent } from './ride-share-comparison/ride-share-comparison.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: 'ride_share', component: RideShareComparisonComponent },
  {path: 'places', component: PlacesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
