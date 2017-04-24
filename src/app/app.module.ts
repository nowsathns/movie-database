import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {TABS_ROUTES} from './main-routes';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieDetailSectionComponent} from "app/movie-detail/movie-detail-section/movie-detail-section.component";
import {MovieSectionComponent} from './movie-section/movie-section.component';
import {MovieService} from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieCardComponent,
    MovieDetailComponent,
    MovieSectionComponent,
    MovieDetailSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(TABS_ROUTES),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
