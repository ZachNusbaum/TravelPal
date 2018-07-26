import { PlacesModule } from './places/places.module';
import { GeocodingService } from './geocoding.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RideShareComparisonComponent } from './ride-share-comparison/ride-share-comparison.component';
import { RideShareFormComponent } from './ride-share-form/ride-share-form.component';
import { PriceListsComponent } from './price-lists/price-lists.component';
import { UberService } from './uber.service';
import { UberPricesComponent } from './uber-prices/uber-prices.component';
import { SecondsPipe } from './seconds.pipe';
import { LyftPricesComponent } from './lyft-prices/lyft-prices.component';
import { SnakePipe } from './snake.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomepageComponent,
    RideShareComparisonComponent,
    RideShareFormComponent,
    PriceListsComponent,
    UberPricesComponent,
    SecondsPipe,
    LyftPricesComponent,
    SnakePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PlacesModule
  ],
  providers: [GeocodingService, UberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
