import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RideShareComparisonComponent } from './ride-share-comparison/ride-share-comparison.component';
import { RideShareFormComponent } from './ride-share-form/ride-share-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomepageComponent,
    RideShareComparisonComponent,
    RideShareFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
