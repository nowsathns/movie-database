import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie Database!';
  movie$: Observable<Movie[]>;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movie$ = this.movieService.getMovie();
  }
  }
