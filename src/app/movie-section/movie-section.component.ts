import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../movie';
import {MovieDetail} from '../movie-detail';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {

  movies$: Observable<Movie[]>;
  movieDetail$: Observable<MovieDetail>;
  movieId: number;
  constructor(public movieService: MovieService,
              public router:Router,
              public route:ActivatedRoute) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovie();
  }
  setMovieId(id: any) {
    this.movieDetail$ = this.movieService.getMovieDetail(id);
  }
  // Relative programatic Navigation
  goBack(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
