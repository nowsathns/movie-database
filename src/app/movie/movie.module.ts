import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {movieRouting} from './movie.routing';
import {MovieCardComponent} from '../movie-card/movie-card.component';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import {MovieSectionComponent} from '../movie-section/movie-section.component';
import {MovieDetailSectionComponent} from '../movie-detail/movie-detail-section/movie-detail-section.component';
import {MovieService} from '../movie.service';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    movieRouting,
    MaterialModule,
    FlexLayoutModule,


  ],
  declarations: [
    MovieCardComponent,
    MovieDetailComponent,
    MovieSectionComponent,
    MovieDetailSectionComponent],
  providers: [MovieService],
})
export class MovieModule { }
