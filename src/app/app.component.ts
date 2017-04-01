import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';
import {MovieDetail} from './movie-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie Database!';
  movies$: Observable<Movie[]>;
  movieDetail$: Observable<MovieDetail>;
  movieId: number;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movies$ = this.movieService.getMovie();
    // this.movieDetail$ = this.movieService.getMovieDetail(1);
  }
  setMovieId(id: any) {
    this.movieDetail$ = this.movieService.getMovieDetail(id);
  }
  }
