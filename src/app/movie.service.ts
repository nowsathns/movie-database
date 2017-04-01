import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AllMovies, AllMovieDetail } from './movieData';

@Injectable()
export class MovieService {

  constructor() { }
  getMovie() {
    return Observable.of(AllMovies);
  }
  getMovieDetail(id: number) {
    const movieDetail = AllMovieDetail.filter((movie) => movie.id === id)[0];
    return Observable.of(movieDetail);
  }

}
