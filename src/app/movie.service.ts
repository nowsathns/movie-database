import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AllMovies} from './movieData';

@Injectable()
export class MovieService {
movie;
  constructor() { }
  getMovie() {
    return Observable.of(AllMovies);
  }

}
