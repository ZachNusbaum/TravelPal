import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RideShareComparisonComponent } from './ride-share-comparison/ride-share-comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomepageComponent,
    RideShareComparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
